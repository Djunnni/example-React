#### 작업해보면서 깨달은 점.

* FormattedMessage를 쓸 경우에는 기본적으로 span이 들어가기 때문에 HOC처럼 감싸는 편이 좋을 것 같다. 

    안그러면 dom에서 p태그 안에 span, button안에 span 등 dom만 쌓이는 걸 볼 수 있다.

* useIntl hook이 생겼다는 점. 

    이전에는 function형 컴포넌트에서도 injectIntl을 wrapping한 뒤에 props로 intl을 전달했었다. (단점) <br>
    아마 이전 class형 컴포넌트들은 useIntl을 감싸서 사용하면 좋을 것 같다.

* navigator에 language, lanugages를 알게됨.

    [window.]navigator.lanugage : browser에 설정된 현 언어 1순위<br>
    [window.]navigator.lanugage : browser에 설정되어 있는 언어 전체 [0번은 위와 동일]

* FormattedDate 등은 너무 좋은 도구들이다

    언어들에 따라서 Date, Number등 처리하는 방법들이 너무 다양하다. 이 부분을 intl이 잡아줘서 너무 좋은 것 같다.

* v2 => v5 

    intlProvider가 하위 intlProvider에게 설정을 넘겨주지 않는다는 점<br>
    addLocaleData가 사라진 점<br>
    intlShape가 없어진 점<br>
    withRef에서 forwardRef로 마이그레이션(TODO: 회사에서 해보기)<br>
    webpack 설정 해보기(TODO: 회사에서 해보기)<br>
    > 참고주소: https://formatjs.io/docs/react-intl/upgrade-guide-3x#webpack