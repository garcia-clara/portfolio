import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, Environment, Center } from '@react-three/drei'
import * as THREE from 'three'

// Configuration responsive centralisée
const BREAKPOINTS = {
  mobile: { width: 640, height: 500 },
  tablet: { width: 1024, height: 700 }
}

const RESPONSIVE_CONFIG = {
  mobile: {
    scale: 1,
    camera: { position: [15, 5, 6], fov: 20 },
    center: [-1, -1.5, 0],
    canvasStyle: { 
      width: '100vw', 
      height: '100vw', 
      maxWidth: '100vh', 
      maxHeight: '100vh' 
    }
  },
  tablet: {
    scale: 2,
    camera: { position: [10, 0, 5], fov: 50 },
    center: [2.5, -1.15, 1],
    canvasStyle: { width: '100%', height: '100%' }
  },
  desktop: {
    scale: 3,
    camera: { position: [10, 6, 9], fov: 60 },
    center: [-3, -4, 0],
    canvasStyle: { width: '100vh', height: '100vh' }
  }
}

// Hook pour détecter la taille d'écran
function useScreenSize() {
  const [screenType, setScreenType] = useState('desktop')
  
  useEffect(() => {
    const updateScreenType = () => {
      const { innerWidth: w, innerHeight: h } = window
      
      if (w < BREAKPOINTS.mobile.width || h < BREAKPOINTS.mobile.height) {
        setScreenType('mobile')
      } else if (w < BREAKPOINTS.tablet.width || h < BREAKPOINTS.tablet.height) {
        setScreenType('tablet')
      } else {
        setScreenType('desktop')
      }
    }
    
    updateScreenType()
    window.addEventListener('resize', updateScreenType)
    
    return () => window.removeEventListener('resize', updateScreenType)
  }, [])
  
  return screenType
}

// Hook pour la configuration responsive
function useResponsiveSettings() {
  const screenType = useScreenSize()
  return RESPONSIVE_CONFIG[screenType]
}

// Composant pour les lumières de la scène
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 2, 2]} intensity={2} />
      <pointLight position={[0, 5, 5]} intensity={1.5} />
    </>
  )
}

// Animation flottante du modèle
function useFloatingAnimation(groupRef) {
  useFrame((state) => {
    if (!groupRef.current) return
    
    const time = state.clock.getElapsedTime()
    groupRef.current.position.y = 0.2 + Math.sin(time * 1.2) * 0.1
    groupRef.current.rotation.y = Math.sin(time * 0.9) * 0.15
  })
}

// Configuration des animations du modèle
function useModelAnimations(animations, groupRef) {
  const { actions } = useAnimations(animations, groupRef)
  
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return
    
    const firstAction = actions[Object.keys(actions)[0]]
    if (firstAction) {
      firstAction.reset()
      firstAction.clampWhenFinished = true
      firstAction.loop = THREE.LoopOnce
      firstAction.timeScale = 0.4
      firstAction.play()
    }
  }, [actions])
  
  return actions
}

// Composant principal du modèle 3D
function LaptopModel({ scale, center }) {
  const groupRef = useRef()
  const { scene, animations } = useGLTF('/models/laptop/scene.gltf', true)
  
  // Hooks pour les animations
  useFloatingAnimation(groupRef)
  useModelAnimations(animations, groupRef)

  return (
    <Center position={center}>
      <primitive ref={groupRef} object={scene} scale={scale} />
    </Center>
  )
}

// Composant de chargement
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="#666" opacity={0.5} transparent />
    </mesh>
  )
}

// Composant principal exporté
export default function ResponsiveModel3D() {
  const { scale, camera, center, canvasStyle } = useResponsiveSettings()
  
  return (
    <Canvas
      camera={camera}
      gl={{ 
        toneMapping: THREE.ACESFilmicToneMapping, 
        toneMappingExposure: 2.5 
      }}
      style={canvasStyle}
    >
      <SceneLighting />
      
      <Suspense fallback={<LoadingFallback />}>
        <LaptopModel scale={scale} center={center} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}