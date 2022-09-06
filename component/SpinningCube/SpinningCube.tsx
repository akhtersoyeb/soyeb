import { Canvas } from "@react-three/fiber"
import styles from './SpinningCube.module.css'


const SpinningCube = () => {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default SpinningCube