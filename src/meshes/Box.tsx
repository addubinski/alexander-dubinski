import { ReactElement, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';

interface BoxProps {
  width: number;
  height: number;
  depth: number;
  widthSegments?: number;
  heightSegments?: number;
  depthSegments?: number;
}

type BoxArgs = [number, number, number, number, number, number];

function Box({
  width,
  height,
  depth,
  widthSegments,
  heightSegments,
  depthSegments,
  ...props
}: MeshProps & BoxProps): ReactElement {
  const args: BoxArgs = [
    width,
    height,
    depth,
    widthSegments || 1,
    heightSegments || 1,
    depthSegments || 1,
  ];
  return (
    <mesh {...(props as MeshProps)}>
      <boxGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Box;
