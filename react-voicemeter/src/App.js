import React, { useEffect, useState } from "react";
import "./styles.css";

import VoiceMeter from "./VoiceMeter";
import SoundMeter from "./utils/soundMeter";

const smooth = (volumn) => (slow) => 0.55 * slow + (1 - 0.55) * volumn;
function App() {
  const [level, setLevel] = useState(0);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        setStream(stream);
      });
  }, []);

  useEffect(() => {
    if (stream) {
      const audioContext = new AudioContext();
      const soundMeter = new SoundMeter(audioContext);

      soundMeter.connectToSource(stream, (e) => {
        if (e) {
          alert(e);
          return;
        }

        const meterRefresh = setInterval(() => {
          setLevel(
            smooth(soundMeter.instant.toFixed(2))(soundMeter.slow.toFixed(2)) *
              10
          );
        }, 200);

        return () => {
          clearInterval(meterRefresh);
        };
      });
    }
  }, [stream]);

  return (
    <div className="App">
      <VoiceMeter size="lg" level={level} />
    </div>
  );
}

export default App;
