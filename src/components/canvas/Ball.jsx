/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import {Canvas} from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.5]}/>
    <mesh castShadow receiveShadow scale={2.75}>
    <icosahedronGeometry args={[1, 1]} />
    <meshStandardMaterial 
      color="3fff8eb"
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading  
    />
    <Decal 
      position={[0, 0, 1]}
      flatShading 
      map={decal}
    />
    </mesh>
    </Float>
  )
}

// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
     frameloop="demand" 
     shadows 
     gl={{ preserveDrawingBuffer: true }}>

    <Suspense>

    <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
      <Ball imgUrl={icon} />

    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default BallCanvas