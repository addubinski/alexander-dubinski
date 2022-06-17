import { MutableRefObject, ReactElement, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Star from '../meshes/Star';
import { Group } from 'three';

const RADIUS_DIVISORS = [450, 500, 700, 800];

interface StarsProps {
  scroll: MutableRefObject<number>;
}

function Stars({ scroll }: StarsProps): ReactElement {
  const group = useRef<Group>(null!);
  const { size, viewport } = useThree();
  useFrame(() => {
    if (group) {
      group.current.position.y = (viewport.height * scroll.current) / 10;
    }
  });
  const starCount = Math.floor((size.height + size.width) / 10);
  const referenceDim = Math.min(viewport.height, viewport.width);

  const stars: ReactElement[] = new Array(starCount).fill(0).map((_, i) => {
    const x = Math.random() * viewport.width - viewport.width / 2;
    const y = Math.random() * viewport.height - viewport.height / 2;
    const radius =
      referenceDim /
      RADIUS_DIVISORS[Math.floor(Math.random() * RADIUS_DIVISORS.length)];
    const anim = Math.random() <= 0.1;
    return (
      <Star
        key={i}
        anim={anim}
        position={[x, y, 0]}
        radius={radius}
        segments={15}
      />
    );
  });
  return <group ref={group}>{stars}</group>;
}

export default Stars;
