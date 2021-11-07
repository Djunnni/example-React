import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const minmax = (min, value, max) => Math.max(min, Math.min(value, max));
const cutoff = (ts) => (value) => (value > ts ? value : 0);

const thresholds = cutoff(0.45);

function VoiceMeter({ size, level, hide }) {
  const height = minmax(0.3, thresholds(level) * 3 - 0.6, 1.7);
  const height2 = minmax(0.3, thresholds(level) * 2 - 0.3, 1);
  return (
    <div className={`VoiceMeter ${hide && "hide"}`}>
      <div
        className="VoiceMeter__Dot VoiceMeter__Dot__1"
        style={{ height: `${height2}rem` }}
      ></div>
      <div
        className="VoiceMeter__Dot VoiceMeter__Dot__2"
        style={{ height: `${height}rem` }}
      ></div>
      <div
        className="VoiceMeter__Dot VoiceMeter__Dot__3"
        style={{ height: `${height2}rem` }}
      ></div>
    </div>
  );
}

VoiceMeter.defaultProps = {
  size: "md",
  level: 0,
  hide: false
};

VoiceMeter.propTypes = {
  size: PropTypes.string,
  level: PropTypes.number,
  hide: PropTypes.bool
};

export default VoiceMeter;
