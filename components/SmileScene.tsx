'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SmileCurve() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#2dd4bf') },
        uGlow: { value: new THREE.Color('#C4A882') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Subtle breathing animation
          float wave = sin(uTime * 0.8 + pos.x * 2.0) * 0.02;
          pos.y += wave;
          vElevation = wave;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uGlow;

        void main() {
          // Gradient from teal to gold along the curve
          vec3 color = mix(uColor, uGlow, vUv.x);

          // Pulse glow effect
          float pulse = sin(uTime * 1.2) * 0.15 + 0.85;
          float edge = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

          // Opacity fade at edges
          float alpha = edge * pulse * (0.6 + vElevation * 4.0);

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    }),
    []
  )

  // Generate smile curve geometry
  const geometry = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.2, 0.3, 0),
      new THREE.Vector3(0, -0.8, 0),
      new THREE.Vector3(2.2, 0.3, 0)
    )

    const tubeGeom = new THREE.TubeGeometry(curve, 64, 0.08, 16, false)
    return tubeGeom
  }, [])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.02
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.2}>
      <shaderMaterial ref={materialRef} args={[shaderArgs]} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const { positions, opacities } = useMemo(() => {
    const count = 60
    const pos = new Float32Array(count * 3)
    const opac = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Scatter particles around the smile area
      pos[i * 3] = (Math.random() - 0.5) * 6
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2
      opac[i] = Math.random()
    }

    return { positions: pos, opacities: opac }
  }, [])

  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    const time = clock.getElapsedTime()
    const posArray = particlesRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < posArray.length / 3; i++) {
      posArray[i * 3 + 1] += Math.sin(time * 0.5 + opacities[i] * 10) * 0.002
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#2dd4bf"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export default function SmileScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <SmileCurve />
        <Particles />
      </Canvas>
    </div>
  )
}
