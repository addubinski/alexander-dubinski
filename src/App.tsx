import * as React from 'react';
import { ReactElement } from 'react';
import { Canvas } from '@react-three/fiber';
import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  'body, html, #root': { margin: 0, height: '100%' },
  canvas: {
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundColor: '#111111',
  },
});

function App(): ReactElement {
  globalStyles();
  return (
    <Canvas camera={{ position: [0, 0, 20] }}>
      <ambientLight />
    </Canvas>
  );
}

export default App;
