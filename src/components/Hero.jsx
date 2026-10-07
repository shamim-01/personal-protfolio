import { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { W, EASE, Magnetic, use3D } from './ui'
import { useTyped, useClock } from '../hooks'
import { profile, building, ticker } from '../data'

const Network = lazy(() => import('./Scene').then((m) => ({ default: m.HeroNetwork })))

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }
const slide = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } } }

// big title: every letter rises out of a mask
function Letters({ text }) {
  return (
    <span aria-label={text}>
      {[...text].map((c, i) => (
        <span key={i} aria-hidden className="-mb-[.1em] inline-block overflow-hidden pb-[.1em] align-bottom">
          <motion.span
            className="inline-block cursor-default"
            variants={{ hidden: { y: '115%' }, show: { y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.1 + i * 0.05 } } }}
            whileHover={{ color: '#90EE90', transition: { duration: 0.15 } }}
          >
            {c}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const typed = useTyped(profile.roles)
  const time = useClock()
  const items = [...ticker, ...ticker]
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 700], [0, 110])
  const y2 = useTransform(scrollY, [0, 700], [0, -70])
  const show3D = use3D()
  const float = typeof window !== 'undefined' && innerWidth >= 680

  return (
    <section id="now" className="relative overflow-hidden pt-16">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -left-24 -top-28">
        <motion.div animate={float ? { x: [0, 60, 0], y: [0, 40, 0] } : {}} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} className="size-[420px] rounded-full bg-lime opacity-20 blur-[90px]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-20 top-36">
        <motion.div animate={float ? { x: [0, -50, 0], y: [0, -30, 0] } : {}} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="size-[340px] rounded-full bg-data opacity-[.14] blur-[90px]" />
      </motion.div>

      {show3D && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.6 }} className="pointer-events-none absolute inset-0">
          <Suspense fallback={null}><Network /></Suspense>
        </motion.div>
      )}

      <motion.div variants={container} initial="hidden" animate="show" className={`${W} relative grid items-start gap-9 md:grid-cols-[1.3fr_1fr] md:gap-12`}>
        <div>
          <motion.p variants={item} className="mb-1.5 font-mono text-[13px] text-muted">
            Hey, I'm <span className="text-lime">{typed}</span>
            <span className="ml-[3px] inline-block h-[1em] w-2 translate-y-[2px] animate-blink bg-lime" />
          </motion.p>
          <motion.h1 variants={{ hidden: {}, show: {} }} className="mb-5.5 font-serif text-[clamp(38px,5.6vw,64px)] font-semibold leading-[1.06]">
            <Letters text="Shamim" /><br /><Letters text="Alam." />
          </motion.h1>
          <motion.p variants={item} className="max-w-[50ch] text-[17.5px] text-muted">{profile.intro}</motion.p>
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <Magnetic>
              <a href={profile.cv} download className="inline-block rounded-full border border-lime bg-lime px-[22px] py-3 text-sm font-semibold text-limeink no-underline transition-shadow hover:shadow-[0_8px_22px_rgba(144,238,144,.3)]">Download CV ↓</a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="inline-block rounded-full border border-line px-[22px] py-3 text-sm font-semibold no-underline transition-colors hover:border-lime hover:text-lime">View projects →</a>
            </Magnetic>
          </motion.div>
          <motion.div variants={item} className="mt-8.5 border-t border-soft pt-[18px] font-mono text-[13px] text-muted">
            now → <b className="font-medium text-lime">{profile.now}</b>
            <br />Dhaka, Bangladesh · {time}
          </motion.div>
        </div>

        <motion.div variants={container}>
          <motion.div variants={slide} className="mb-3.5 flex justify-between font-mono text-[12.5px] text-muted"><span>what I'm working on</span><span>·</span></motion.div>
          {building.map(([t, s]) => (
            <motion.div key={t} variants={slide} whileHover={{ x: 10 }} className="border-t border-soft py-4 last:border-b">
              <h4 className="mb-1 text-lg font-semibold">{t}</h4>
              <p className="font-mono text-[13.5px] text-muted">{s}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease: EASE }} className="relative mt-12 overflow-hidden bg-lime text-limeink">
        <div className="flex w-max animate-ticker whitespace-nowrap hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <span key={i} className="px-7 py-3 font-mono text-[13.5px] font-medium">{t}<span className="ml-14 opacity-60">•</span></span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
