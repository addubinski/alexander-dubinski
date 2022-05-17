import { ReactElement } from 'react';
import { styled } from '@stitches/react';
import { Canvas } from '@react-three/fiber';
import Box from '../../meshes/Box';

const IntroContainer = styled('div', {});

function Intro(): ReactElement {
  return (
    <IntroContainer>
      <Canvas>
        <ambientLight />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
    </IntroContainer>
  );
}

export default Intro;
