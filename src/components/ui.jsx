import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useMotionTemplate, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useInView, useCount } from '../hooks'

export const W = 'mx-auto w-full max-w-[1160px] px-5 sm:px-8'
export const EASE = [0.22, 1, 0.36, 1]

// stagger by position among siblings (0, .08, .16 …)
function useSiblingDelay(ref) {
  const [d, setD] = useState(0)
  useLayoutEffect(() => {
    const el = ref.current
    if (el?.parentNode) setD(Math.min([...el.parentNode.children].indexOf(el), 5) * 0.08)
  }, [])
  return d
}

export function Reveal({ as = 'div', className = '', children, x = 0, ...rest }) {
  const ref = useRef(null)
  const delay = useSiblingDelay(ref)
  const M = motion[as]
  return (
    <M
      ref={ref}
      initial={{ opacity: 0, y: 28, x }}
      whileInView={{ opacity: 1, y: 0, x: 0, transition: { duration: 0.7, delay, ease: EASE } }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  )
}

// card with entrance, hover lift, 3D tilt and cursor spotlight
export function Card({ className = '', children }) {
  const ref = useRef(null)
  const delay = useSiblingDelay(ref)
  const mx = useMotionValue(-300), my = useMotionValue(-300)
  const px = useMotionValue(0), py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 })
  const spot = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgba(144,238,144,.13), transparent 65%)`

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left); my.set(e.clientY - r.top)
    px.set((e.clientX - r.left) / r.width - 0.5); py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => { px.set(0); py.set(0); mx.set(-300); my.set(-300) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay, ease: EASE } }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.15 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative overflow-hidden rounded-[14px] border border-line bg-panel p-6 transition-[border-color,box-shadow] duration-300 hover:border-lime hover:shadow-[0_14px_30px_rgba(0,0,0,.35)] ${className}`}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
      {children}
    </motion.div>
  )
}

export function Chip({ children }) {
  const ref = useRef(null)
  const delay = useSiblingDelay(ref)
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1, transition: { delay: delay * 0.6, type: 'spring', stiffness: 260, damping: 18 } }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }}
      className="cursor-default rounded-full border border-line px-3 py-[5px] font-mono text-[12.5px] transition-colors hover:border-lime hover:text-lime"
    >
      {children}
    </motion.span>
  )
}

export function SubHead({ children, className = '' }) {
  return <Reveal className={`mb-4.5 font-mono text-xs tracking-[.04em] text-data ${className}`}>{children}</Reveal>
}

// heading: words slide up from a mask, then the accent line draws in.
// The viewport trigger sits on the <h2> itself (not on the clipped words).
const headWord = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 0.7, delay: i * 0.05, ease: EASE } }),
}
const headLine = {
  hidden: { width: 0 },
  show: { width: 64, transition: { duration: 0.9, delay: 0.4, ease: EASE } },
}

export function SectionHead({ tag, right, title, light }) {
  return (
    <>
      <Reveal className={`mb-2.5 flex justify-between font-mono text-[12.5px] ${light ? 'text-papermuted' : 'text-muted'}`}>
        <span>{tag}</span>
        {right && <span>{right}</span>}
      </Reveal>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 font-serif text-[clamp(28px,4.4vw,42px)] font-semibold"
      >
        {title.split(' ').map((w, i) => (
          <span key={i} className="mr-[.25em] -mb-1 inline-block overflow-hidden pb-1 align-bottom">
            <motion.span className="inline-block" variants={headWord} custom={i}>{w}</motion.span>
          </span>
        ))}
        <motion.span variants={headLine} className={`mt-3.5 block h-[3px] rounded-sm ${light ? 'bg-paperink' : 'bg-lime'}`} />
      </motion.h2>
    </>
  )
}

export function CountUp({ n, suffix }) {
  const [ref, seen] = useInView()
  const v = useCount(n, seen)
  return <b ref={ref} className="block font-serif text-[34px] font-semibold text-lime">{v}{suffix}</b>
}

// element gently follows the cursor
export function Magnetic({ children }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 220, damping: 15 })
  const y = useSpring(0, { stiffness: 220, damping: 15 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  )
}

// 3D scenes require WebGL and respect reduced-motion preferences.
export function use3D(minWidth = 680) {
  const reduce = useReducedMotion()
  const [ok] = useState(() => {
    if (typeof window === 'undefined' || innerWidth < minWidth) return false
    try { return !!document.createElement('canvas').getContext('webgl') } catch { return false }
  })
  return ok && !reduce
}
