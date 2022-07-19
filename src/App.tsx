import * as React from 'react';
import { ReactElement, useRef, UIEvent } from 'react';
import { Canvas } from '@react-three/fiber';
import { globalCss, styled } from './stitches.config';
import Stars from './components/Stars';
import Landing from './sections/landing/Landing';
import { SECTION_COUNT } from './constants';
import Profile from './sections/profile/Profile';

const globalStyles = globalCss({
  'body, html, #root': {
    margin: 0,
    height: '100%',
    fontFamily: '$roboto',
  },
  canvas: {
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundColor: '$background',
  },
});

const ScrollMonitor = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  overflowY: 'auto',
  top: 0,
  left: 0,
});

const ContentContainer = styled('div', {
  height: `${100 * SECTION_COUNT}vh`,
});

function App(): ReactElement {
  globalStyles();
  const scrollRef = useRef<HTMLDivElement>(null!);
  const scroll = useRef<number>(0);
  return (
    <>
      <Canvas
        onCreated={(state) => {
          if (state.events.connect) state.events.connect(scrollRef.current);
        }}
        camera={{ position: [0, 0, 20] }}
      >
        <ambientLight />
        <Stars scroll={scroll} />
      </Canvas>
      <ScrollMonitor
        ref={scrollRef}
        onScroll={(e: UIEvent<HTMLDivElement>) => {
          scroll.current =
            e.currentTarget.scrollTop /
            (e.currentTarget.scrollHeight - e.currentTarget.clientHeight);
        }}
      >
        <ContentContainer>
            <Landing />
            <Profile />
        </ContentContainer>
      </ScrollMonitor>
    </>
  );
}

export default App;
