import { ForwardedRef, forwardRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { Mesh } from 'three';

export interface CircleProps extends MeshProps {
  radius: number;
  segments: number;
}

const Circle = forwardRef(
  ({ radius, segments, ...props }: CircleProps, ref: ForwardedRef<Mesh>) => {
    return (
      <mesh {...(props as MeshProps)} ref={ref}>
        <circleGeometry args={[radius, segments]} />
        <meshStandardMaterial />
      </mesh>
    );
  }
);

export default Circle;
