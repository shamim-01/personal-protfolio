import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Color, Vector3 } from 'three'

// shared cursor position (-1..1), updated once for all scenes
const mouse = { x: 0, y: 0 }
if (typeof window !== 'undefined') {
  addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1
    mouse.y = -((e.clientY / innerHeight) * 2 - 1)
  })
}

// renders only while visible on screen (saves battery / GPU)
function Stage({ className, children }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting))
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}>
      <Canvas
        frameloop={on ? 'always' : 'never'}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        {children}
      </Canvas>
    </div>
  )
}

/* ---------- Hero: a "data network" sphere — nodes + links ---------- */
function Network() {
  const group = useRef()
  const viewport = useThree((s) => s.viewport)

  const { pos, col, lines } = useMemo(() => {
    const N = 150
    const golden = Math.PI * (3 - Math.sqrt(5))
    const pts = []
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const t = golden * i
      const k = 1.7 + Math.random() * 0.3
      pts.push(new Vector3(Math.cos(t) * r * k, y * k, Math.sin(t) * r * k))
    }
    const lime = new Color('#90EE90'), amber = new Color('#90EE90')
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3)
    pts.forEach((p, i) => { p.toArray(pos, i * 3); (i % 7 === 0 ? amber : lime).toArray(col, i * 3) })
    const l = []
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++)
        if (pts[i].distanceTo(pts[j]) < 0.8) l.push(...pts[i].toArray(), ...pts[j].toArray())
    return { pos, col, lines: new Float32Array(l) }
  }, [])

  useFrame((_, dt) => {
    const g = group.current
    const k = Math.min(dt * 3, 1)
    g.rotation.y += dt * 0.15
    g.rotation.x += (mouse.y * 0.35 - g.rotation.x) * k
    const baseX = viewport.width > 7 ? viewport.width * 0.24 : 0
    g.position.x += (baseX + mouse.x * 0.3 - g.position.x) * k
    g.position.y = scrollY * 0.0025
    g.scale.setScalar(1 - Math.min(scrollY / 1400, 0.35))
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pos, 3]} />
          <bufferAttribute attach="attributes-color" args={[col, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#90EE90" transparent opacity={0.16} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#90EE90" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  )
}

export function HeroNetwork() {
  return (
    <Stage className="absolute inset-0">
      <Network />
    </Stage>
  )
}

/* ---------- Contact: softly drifting orbital mesh ---------- */
function Knot() {
  const m = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    m.current.rotation.x = 0.12 + Math.sin(t * 0.22) * 0.08
    m.current.rotation.y = t * 0.035 + mouse.x * 0.025
    m.current.position.y = Math.sin(t * 0.45) * 0.08
  })
  return (
    <group ref={m} position={[1.15, 0, 0]} scale={1.65}>
      <mesh>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshBasicMaterial color="#90EE90" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.4, 0]}>
        <torusGeometry args={[1.48, 0.009, 6, 120]} />
        <meshBasicMaterial color="#90EE90" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[0.65, 0.2, 0.9]}>
        <torusGeometry args={[1.32, 0.006, 6, 120]} />
        <meshBasicMaterial color="#90EE90" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

export function ContactKnot() {
  return (
    <Stage className="absolute inset-0">
      <Knot />
    </Stage>
  )
}
