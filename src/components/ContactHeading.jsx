import { motion } from 'framer-motion'
import { EASE, Magnetic } from './ui'
import { profile } from '../data'

const draw = {
  hidden: { pathLength: 0 },
  show: { pathLength: 1, transition: { duration: 0.8, delay: 0.55, ease: 'easeOut' } },
}

export function ContactHeading() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="font-serif text-[clamp(48px,8vw,88px)] font-semibold leading-[.98] tracking-[-.045em]"
    >
      <span className="mr-[.22em]">Let's</span>
      <span>work</span>
      <br />
      <span className="relative inline-block italic text-lime" aria-label="together.">
        together.
        <svg viewBox="0 0 300 14" fill="none" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-3 w-full overflow-visible" aria-hidden>
          <motion.path initial="hidden" whileInView="show" viewport={{ once: true }} variants={draw} d="M2 9 C 55 1, 110 14, 170 6 S 270 3, 298 9" stroke="#90EE90" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      </span>
    </motion.h2>
  )
}

export function HireBadge() {
  return (
    <Magnetic>
      <a href={`mailto:${profile.email}`} aria-label="Email me" className="group inline-flex items-center gap-3 rounded-full border border-lime/30 bg-panel/80 py-1.5 pl-4 pr-1.5 text-xs font-semibold no-underline transition-colors hover:border-lime hover:bg-lime/[.08]">
        <span>Start a conversation</span>
        <span className="grid size-8 place-items-center rounded-full bg-lime text-base text-limeink transition-transform duration-300 group-hover:rotate-45">
          ↗
        </span>
      </a>
    </Magnetic>
  )
}
