# UI Simple Design System

이 보일러플레이트 코드는 다음과 같은 이유로 제작되었습니다.

프로젝트가 모노레포가 아닌 여러개의 프로젝트가 모놀리식 구조로 각각 개발되고 있을 때 UI를 서로 공유할 수 없습니다.  
그러한 이유로 이에 대한 한 가지 해결법이 npm 패키지이다. 그러나 이를 세팅할 때는 꽤나 해야될 것이 많다. 그렇기에 이를 제작하게 되었습니다.

## default package

react와 typescript 기반에 ui 패키지이며, storybook을 통한 ui 관리를 설정하였습니다.  
스타일링으로는 css in js 방식을 추천하며 styled-components, emotion을 권장합니다.

뿐만 아니라 stories 파일들이 배포되면 사이즈가 커지기에 이를 제외시켜놓았고, 그외에도 사용자에게 필요가 없는 것은 npmignore를 통해 커스텀 가능합니다.

## 구조

기본 세팅으로 src/stories에 모두 정의되어있습니다. 이는 storybook의 기본 값으로 사용자의 맞게 각자 커스텀 하시면 됩니다.  
index.ts는 로직을 작성하지 않고 export하는 곳 입니다.

```typescript
export { Button } from "./stories/Button";
export { Header } from "./stories/Header";
export { Page } from "./stories/Page";
```

## 명령어

ui를 보고 싶다면

```bash
npm run storybook
```

ui page를 빌드 시킨다면

```bash
npm run build-storybook
```

npm에 배포하기 위해선

```bash
npm run build-publish
```

## package.json

이를 사용하기 위해
먼저 package json을 수정해야합니다.

패키지의 이름, 버전, author
