import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, Environment, Center } from '@react-three/drei'
import * as THREE from 'three'

function useResponsiveModel() {
  const [settings, setSettings] = useState({
    scale: 0.7,
    camera: { position: [10, 0, 4], fov: 25 },
    center: [3, -1.1, 0],
  })

  useEffect(() => {
    function handleResize() {
      const { innerWidth: w, innerHeight: h } = window
      // Mobile portrait
      if (w < 640 || h < 500) {
        setSettings({
          scale: 0.4,
          camera: { position: [8, 0, 6], fov: 32 },
          center: [2, -1.2, 0],
        })
      }
      // Tablette ou petit écran
      else if (w < 1024 || h < 700) {
        setSettings({
          scale: 0.55,
          camera: { position: [9, 0, 5], fov: 28 },
          center: [2.5, -1.15, 0],
        })
      }
      // Grand écran
      else {
        setSettings({
          scale: 0.7,
          camera: { position: [10, 0, 4], fov: 25 },
          center: [3, -1.1, 0],
        })
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return settings
}

function Model({ scale, center }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/laptop/scene.gltf', true)
  const { actions } = useAnimations(animations, group)

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = 0.2 + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.1
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.9) * 0.15
    }
  })

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
      firstAction.reset()
      firstAction.clampWhenFinished = true
      firstAction.loop = THREE.LoopOnce
      firstAction.timeScale = 0.4
      firstAction.play()
    }
  }, [actions])

  return (
    <Center position={center}>
      <primitive ref={group} object={scene} scale={scale} />
    </Center>
  )
}

export default function Model3D() {
  const { scale, camera, center } = useResponsiveModel()

  return (
    <div className="w-full m-auto h-full flex items-center justify-center">
      <Canvas
        camera={camera}
        gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 2.5 }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[0, 2, 2]} intensity={2} />
        <pointLight position={[0, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model scale={scale} center={center} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
