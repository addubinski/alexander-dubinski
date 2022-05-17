import { ReactElement } from 'react';
import { MeshProps } from '@react-three/fiber';

interface CircleProps {
  radius: number;
  segments: number;
}

function Circle({
  radius,
  segments,
  ...props
}: MeshProps & CircleProps): ReactElement {
  return (
    <mesh {...(props as MeshProps)}>
      <circleGeometry args={[radius, segments]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Circle;
