import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
import { Suspense } from 'react';

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{ }}
    >
    <Suspense fallback={<CanvasLoader />}
    <OrbitControls />
    </Suspense>

    </Canvas>
  )
}

export default Earth