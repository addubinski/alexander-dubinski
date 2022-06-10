import { ReactElement, useRef, useState } from 'react';
import Circle, { CircleProps } from './Circle';
import { CircleGeometry, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface StarProps extends CircleProps {}

const MIN_SCALE = new Vector3(1, 1, 1);
const MAX_SCALE = new Vector3(3, 3, 3);

function Star(props: StarProps): ReactElement {
  const ref = useRef<Mesh<CircleGeometry, MeshStandardMaterial>>(null);

  const [hover, setHover] = useState<boolean>(false);

  useFrame((_, delta) => {
    if (!ref?.current?.scale) return;
    const d = 10 * delta;
    if (hover) {
      ref.current.scale.add(new Vector3(d, d, d));
    } else if (ref.current.scale.x > 1) {
      ref.current.scale.sub(new Vector3(d, d, d));
    }
    ref.current.scale.clamp(MIN_SCALE, MAX_SCALE);
  });

  return (
    <Circle
      {...props}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      ref={ref}
    />
  );
}

export default Star;
