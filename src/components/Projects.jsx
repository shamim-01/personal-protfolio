import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { W, EASE, Reveal, SectionHead } from './ui'
import { projects } from '../data'

function Preview({ src, x, y }) {
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[60] w-[280px] overflow-hidden rounded-xl border border-line shadow-[0_20px_50px_rgba(0,0,0,.5)]"
    >
      <img src={src} alt="" className="block w-full" />
    </motion.div>
  )
}

function Row({ p, index, onPreview }) {
  const [open, setOpen] = useState(false)
  const [imgOk, setImgOk] = useState(false)
  useEffect(() => { const i = new Image(); i.onload = () => setImgOk(true); i.src = p.shot }, [p.shot])
  const linkCls = 'inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-[7px] font-mono transition-colors hover:border-lime hover:text-lime'

  return (
    <Reveal
      onMouseEnter={() => imgOk && onPreview(p.shot)}
      onMouseLeave={() => onPreview(null)}
      className="group relative border-t border-soft px-4 py-6.5 transition-colors last:border-b hover:bg-lime/[.03] sm:px-7 sm:py-8"
    >
      <span className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" />
      <div className="grid grid-cols-[28px_1fr_auto] items-start gap-x-3.5 gap-y-2.5 md:grid-cols-[60px_1.4fr_1fr] md:items-center md:gap-6">
        <div className="pl-1 font-mono text-[13px] text-muted transition-colors group-hover:text-lime">{String(index).padStart(2, '0')}</div>
        <div>
          <h3 className="mb-2 font-serif text-[26px] font-semibold transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime">{p.name}</h3>
          <p className="max-w-[44ch] text-[14.5px] text-muted">{p.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 max-md:flex-col max-md:items-end max-md:gap-1.5">
          {p.tags.map((t) => (
            <motion.span key={t} whileHover={{ y: -2 }} className="rounded-full border border-lime/25 px-[9px] py-[3px] font-mono text-[11.5px] text-data transition-colors group-hover:border-lime">{t}</motion.span>
          ))}
        </div>

        <div className="col-span-full mt-5 flex flex-wrap items-center gap-3">
          {p.live && <a className={`${linkCls} text-[13px] no-underline`} href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
          <a className={`${linkCls} group/l text-[13px] no-underline`} href={p.repo} target="_blank" rel="noopener noreferrer">
            View <span className="transition-transform group-hover/l:translate-x-1">→</span>
          </a>
          <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className={`${linkCls} cursor-pointer bg-transparent text-xs text-muted`}>
            <motion.span animate={{ rotate: open ? 135 : 0 }} transition={{ duration: 0.3 }} className="inline-block">+</motion.span>
            {open ? 'Close' : 'Overview'}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="ov"
              className="col-span-full overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <motion.div
                initial="hidden" animate="show"
                variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
                className="mt-4 grid gap-5.5 rounded-xl border border-line bg-panel p-6 md:grid-cols-2"
              >
                {imgOk && (
                  <motion.figure variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="m-0 overflow-hidden rounded-[10px] border border-line md:col-span-2">
                    <img src={p.shot} alt={`${p.name} screenshot`} className="max-h-[300px] w-full object-cover object-top" />
                  </motion.figure>
                )}
                {[['Problem', p.problem], ['Solution', p.solution]].map(([h, t]) => (
                  <motion.div key={h} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
                    <h5 className="mb-2 font-mono text-[11.5px] uppercase tracking-[.04em] text-data">{h}</h5>
                    <p className="text-sm">{t}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const groups = [...new Set(projects.map((p) => p.group))]
  const [preview, setPreview] = useState(null)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const canHover = typeof window !== 'undefined' && matchMedia('(hover:hover)').matches

  useEffect(() => {
    if (!canHover) return
    const m = (e) => { mx.set(e.clientX + 24); my.set(e.clientY - 90) }
    addEventListener('mousemove', m)
    return () => removeEventListener('mousemove', m)
  }, [])

  let n = 0
  return (
    <section id="projects" className="py-22">
      <div className={W}>
        <SectionHead tag="things I've built" right="from github" title="Projects I've shipped." />
        {groups.map((g, gi) => (
          <div key={g}>
            <Reveal className={`mb-1 font-mono text-xs tracking-[.04em] text-data ${gi ? 'mt-11' : ''}`}>{`// ${g}`}</Reveal>
            {projects.filter((p) => p.group === g).map((p) => (
              <Row key={p.name} p={p} index={++n} onPreview={canHover ? setPreview : () => {}} />
            ))}
          </div>
        ))}
      </div>
      <AnimatePresence>{preview && <Preview key="pv" src={preview} x={mx} y={my} />}</AnimatePresence>
    </section>
  )
}
