import { ReactElement } from 'react';
import { useThree } from '@react-three/fiber';
import Star from '../meshes/Star';

const RADIUS_DIVISORS = [450, 500, 700, 800];

function Stars(): ReactElement {
  const { size, viewport } = useThree();
  const starCount = Math.floor((size.height + size.width) / 10);
  const referenceDim = Math.min(viewport.height, viewport.width);

  const stars: ReactElement[] = new Array(starCount).fill(0).map((_, i) => {
    const x = Math.random() * viewport.width - viewport.width / 2;
    const y = Math.random() * viewport.height - viewport.height / 2;
    const radius =
      referenceDim /
      RADIUS_DIVISORS[Math.floor(Math.random() * RADIUS_DIVISORS.length)];
    return <Star key={i} position={[x, y, 0]} radius={radius} segments={15} />;
  });
  return <>{stars}</>;
}

export default Stars;
