import { useState } from 'react'
import { motion } from 'framer-motion'
import { nav, profile } from '../data'
import { useScrollSpy } from '../hooks'
import { EASE } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy([...nav.map(([id]) => id), 'contact'])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-0 z-50 border-b border-soft bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-3 sm:px-8 sm:py-3.5">
        <a href="#top" className="relative flex items-center gap-2.5 no-underline">
          <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="size-9 flex-none overflow-hidden rounded-full bg-lime">
            <img src={profile.photo} alt={profile.name} className="size-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </motion.span>
          <span className="absolute left-6 top-6 size-[11px] rounded-full border-[2.5px] border-bg bg-[#90EE90] sm:animate-dot" />
          <span className="font-semibold max-[380px]:hidden">shamimalam.</span>
        </a>

        <nav className="hidden items-center gap-[18px] min-[860px]:flex min-[1000px]:gap-[30px]">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`relative py-1 text-sm no-underline transition-colors hover:text-ink ${active === id ? 'text-ink' : 'text-muted'}`}>
              {label}
              {active === id && (
                <motion.span layoutId="nav-underline" transition={{ type: 'spring', stiffness: 380, damping: 30 }} className="absolute inset-x-0 -bottom-[3px] h-[1.5px] bg-lime" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-ink px-[18px] py-2.5 text-[13.5px] font-semibold text-bg no-underline transition-colors hover:bg-lime max-[380px]:px-3 max-[380px]:py-2 max-[380px]:text-[12.5px]"
          >
            Get in touch
          </motion.a>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex size-[34px] cursor-pointer flex-col justify-center gap-[5px] border-0 bg-transparent p-0 min-[860px]:hidden">
            <span className={`block h-[1.5px] w-full bg-ink transition ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-full bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-full bg-ink transition ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <nav className={`flex flex-col overflow-hidden border-soft bg-panel transition-[max-height] duration-300 min-[860px]:hidden ${open ? 'max-h-[420px] border-b' : 'max-h-0'}`}>
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`border-t border-soft px-5 py-4 text-[15px] no-underline transition-all hover:pl-[26px] hover:text-lime ${active === id ? 'pl-[26px] text-lime' : 'text-muted'}`}>
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
