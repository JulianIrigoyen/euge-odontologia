'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SmileCurve() {
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const glowMaterialRef = useRef<THREE.ShaderMaterial>(null)

  const curve = useMemo(
    () =>
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-2.8, 0.4, 0),
        new THREE.Vector3(0, -1.2, 0),
        new THREE.Vector3(2.8, 0.4, 0)
      ),
    []
  )

  const coreGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 128, 0.06, 16, false),
    [curve]
  )

  const glowGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 128, 0.35, 16, false),
    [curve]
  )

  const coreShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#5cc0cb') },
        uGlow: { value: new THREE.Color('#c87080') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;
          float wave = sin(uTime * 0.8 + pos.x * 2.0) * 0.03;
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
          vec3 color = mix(uColor, uGlow, vUv.x);
          float pulse = sin(uTime * 1.2) * 0.1 + 0.9;
          float edge = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
          float alpha = edge * pulse;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    }),
    []
  )

  const glowShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#5cc0cb') },
        uGlow: { value: new THREE.Color('#c87080') },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;
          float wave = sin(uTime * 0.8 + pos.x * 2.0) * 0.03;
          pos.y += wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uGlow;

        void main() {
          vec3 color = mix(uColor, uGlow, vUv.x);
          float pulse = sin(uTime * 1.2) * 0.08 + 0.92;

          float dist = abs(vUv.y - 0.5) * 2.0;
          float glow = exp(-dist * dist * 3.0) * 0.4;

          float endFade = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);

          float alpha = glow * pulse * endFade;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    }),
    []
  )

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (materialRef.current) materialRef.current.uniforms.uTime.value = t
    if (glowMaterialRef.current) glowMaterialRef.current.uniforms.uTime.value = t
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.015
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} scale={1.4} position={[0, 0.2, 0]}>
      <mesh geometry={glowGeometry}>
        <shaderMaterial
          ref={glowMaterialRef}
          args={[glowShader]}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={coreGeometry}>
        <shaderMaterial
          ref={materialRef}
          args={[coreShader]}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const { positions, speeds, colors } = useMemo(() => {
    const count = 120
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    const col = new Float32Array(count * 3)

    const teal = new THREE.Color('#5cc0cb')
    const rose = new THREE.Color('#c87080')
    const white = new THREE.Color('#d5f0f4')

    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const curveX = -2.8 + t * 5.6
      const curveY = 0.4 - Math.sin(t * Math.PI) * 1.6

      pos[i * 3] = curveX + (Math.random() - 0.5) * 3
      pos[i * 3 + 1] = curveY + (Math.random() - 0.5) * 2.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.5
      spd[i] = 0.3 + Math.random() * 0.7

      const r = Math.random()
      const c = r < 0.55 ? teal : r < 0.75 ? rose : white
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }

    return { positions: pos, speeds: spd, colors: col }
  }, [])

  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    const time = clock.getElapsedTime()
    const posArray = particlesRef.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < posArray.length / 3; i++) {
      posArray[i * 3 + 1] += Math.sin(time * 0.4 + speeds[i] * 10) * 0.003
      posArray[i * 3] += Math.cos(time * 0.3 + speeds[i] * 8) * 0.001
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function SmileScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <SmileCurve />
        <Particles />
      </Canvas>
    </div>
  )
}
