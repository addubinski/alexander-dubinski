import { ReactElement, useRef, useState } from 'react';
import Circle, { CircleProps } from './Circle';
import { CircleGeometry, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface StarProps extends CircleProps {
  anim: boolean;
}

const MIN_SCALE = new Vector3(1, 1, 1);
const MAX_SCALE = new Vector3(3, 3, 3);

function Star({ anim, ...props }: StarProps): ReactElement {
  const ref = useRef<Mesh<CircleGeometry, MeshStandardMaterial>>(null!);
  const [twinkle, setTwinkle] = useState<boolean>(false);
  let time = 0;

  useFrame((_, delta) => {
    if (!ref?.current?.scale) return;
    if (anim && !twinkle) {
      if (time > 1) {
        const shouldTwinkle = Math.random() < 0.1;
        if (shouldTwinkle) setTwinkle(true);
        time = 0;
      } else {
        time += delta;
      }
    }
    const d = 10 * delta;
    if (twinkle) {
      if (ref.current.scale.x < 3) {
        ref.current.scale.add(new Vector3(d, d, d));
      } else {
        setTwinkle(false);
      }
    }
    if (!twinkle) ref.current.scale.sub(new Vector3(d, d, d));
    ref.current.scale.clamp(MIN_SCALE, MAX_SCALE);
  });

  return <Circle {...props} ref={ref} />;
}

export default Star;
