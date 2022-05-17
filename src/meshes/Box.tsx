import { ReactElement, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { Mesh } from 'three';

function Box(props: MeshProps): ReactElement {
  const box = useRef<Mesh>(null);
  return (
    <mesh {...props} ref={box}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default Box;
