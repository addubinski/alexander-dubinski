import { MutableRefObject, ReactElement, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Star from '../meshes/Star';
import { Group } from 'three';
import { STAR_ANIMATION_PROBABILITY, STAR_SCROLL_FACTOR } from '../constants';

const RADIUS_DIVISORS = [450, 500, 700, 800];

interface StarsProps {
  scroll: MutableRefObject<number>;
}

function Stars({ scroll }: StarsProps): ReactElement {
  const group = useRef<Group>(null!);
  const { size, viewport } = useThree();
  useFrame(() => {
    if (group) {
      group.current.position.y = viewport.height * scroll.current * STAR_SCROLL_FACTOR;
    }
  });
  const starCount = Math.floor((size.height + size.width) / 10);
  const sectionDim = Math.min(viewport.height, viewport.width);

  const stars: ReactElement[] = new Array(starCount).fill(0).map((_, i) => {
    const starFieldHeight = viewport.height + viewport.height * STAR_SCROLL_FACTOR * 2;
    const x = Math.random() * viewport.width - viewport.width / 2;
    const y = Math.random() * starFieldHeight - starFieldHeight / 2;
    const radius =
      sectionDim /
      RADIUS_DIVISORS[Math.floor(Math.random() * RADIUS_DIVISORS.length)];
    const anim = Math.random() <= STAR_ANIMATION_PROBABILITY;
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
