import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { W, Card, Chip, SubHead, SectionHead, Reveal, CountUp, use3D } from './ui'

const Knot = lazy(() => import('./Scene').then((m) => ({ default: m.ContactKnot })))
import { ContactHeading, HireBadge } from './ContactHeading'
import { useClock } from '../hooks'
import { profile, nav, stack, stats, about, journey, learnHow, learningNext, skills, certs, work, education } from '../data'

export function Snapshot() {
  const time = useClock()
  return (
    <section id="stat-section" className="py-22">
      <div className={W}>
        <SectionHead tag="where I'm at, currently" right="updated as things change" title="A quick snapshot." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          <Card className="sm:col-span-2 lg:col-span-2">
            <p className="mb-3.5 font-mono text-xs text-muted">building</p>
            <p className="font-serif text-[22px] leading-[1.3]">Crafting polished, responsive interfaces with React and growing my skills in Next.js, while using SQL, Python and Power BI to turn data into actionable insights.</p>
          </Card>
          <Card className="flex flex-col justify-center">
            <div className="mb-3.5 flex items-center justify-between gap-3">
              <p className="m-0 font-mono text-xs text-muted">my time</p>
              <span className="font-mono text-[12.5px] text-muted">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="font-mono text-[38px] leading-none text-lime">{time}</div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                <span className="size-1.5 rounded-full bg-lime" />
                UTC+6
              </span>
            </div>
            <p className="mt-4 max-w-[24ch] font-serif text-sm italic text-muted">
              “Make time for what moves you forward.”
            </p>
          </Card>
          <Card>
            <p className="mb-3.5 font-mono text-xs text-muted">what I reach for</p>
            <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
              {stack.map(([k, v]) => (
                <li key={k} className="flex items-start justify-between gap-3 font-mono text-[13.5px]">
                  <span className="shrink-0">{k}</span>
                  <span className="min-w-0 break-words text-right text-muted">{v}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="grid grid-cols-2 gap-3 sm:col-span-2 lg:col-span-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <CountUp n={s.n} suffix={s.suffix} />
                <span className="font-mono text-[12.5px] text-muted">{s.label}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="bg-paper py-22 text-paperink">
      <div className={`${W} grid items-start gap-8 md:grid-cols-[.72fr_1.28fr] md:gap-14`}>
        <div className="max-w-[300px]">
          <div className="group relative aspect-[1/1.08] transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[1.5deg]">
            <div className="absolute inset-0 rotate-6 rounded-[22px] bg-lime opacity-55 sm:animate-[wobble_7s_ease-in-out_infinite]" />
            <div className="absolute inset-0 overflow-hidden rounded-[22px] bg-lime">
              <img src={profile.photo} alt={profile.name} className="size-full object-cover object-[center_20%]" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div className="absolute -left-2 bottom-[18px] rounded-full bg-[#141410] px-4 py-2 sm:animate-[bob_3.5s_ease-in-out_infinite] font-mono text-[12.5px] text-white shadow-[0_6px_16px_rgba(0,0,0,.18)]">that's me</div>
          </div>
          <div className="mt-4 flex justify-between font-mono text-[11.5px] text-papermuted"><span>{profile.name}</span><span>Dhaka, BD</span></div>
        </div>
        <div>
          <SectionHead tag="about" title={about.title} light />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mb-4 max-w-[52ch] text-[17px] text-papermuted">{p}</p>
          ))}
          <div className="mt-7 grid gap-5.5 sm:grid-cols-2">
            {about.points.map(({ title, text }, i) => (
              <Reveal key={title} x={-24} className="border-t border-paperline pt-3">
                <p className="font-mono text-xs text-papermuted">0{i + 1}</p>
                <p className="mt-1.5 text-[14.5px]"><strong className="font-semibold">{title}:</strong> {text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <section id="journey" className="py-22">
      <div className={W}>
        <SectionHead tag="how I got here" right="still learning" title="My learning journey." />
        <SubHead>// timeline</SubHead>
        <div className="relative mb-5 hidden lg:block">
          <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
          <motion.div className="absolute inset-x-0 top-1/2 h-px origin-left bg-lime" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: 'easeInOut' }} />
          <div className="relative grid grid-cols-5 gap-4">
            {journey.map((s, i) => (
              <motion.span key={s.title} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.35, type: 'spring', stiffness: 300, damping: 15 }} className={`ml-6 size-3 rounded-full border-2 bg-bg ${s.now ? 'animate-ring border-data' : 'border-lime'}`} />
            ))}
          </div>
        </div>
        <div className="mb-14 grid gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {journey.map((s) => (
            <Card key={s.title} className={`!p-[22px] ${s.now ? '!border-data' : ''}`}>
              <p className="mb-2.5 font-mono text-xs text-data">{s.when}</p>
              <h4 className="mb-2 font-serif text-[19px] font-semibold leading-tight">{s.title}</h4>
              <p className="text-sm text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
        <SubHead>// how I learn</SubHead>
        <div className="grid gap-4 md:grid-cols-3">
          {learnHow.map(([t, p]) => (
            <Card key={t}>
              <h4 className="mb-2 font-serif text-[19px] font-semibold leading-tight">{t}</h4>
              <p className="text-sm text-muted">{p}</p>
            </Card>
          ))}
        </div>
        <SubHead className="mt-14">// learning next</SubHead>
        <div className="flex flex-wrap gap-2">{learningNext.map((c) => <Chip key={c}>{c}</Chip>)}</div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-22">
      <div className={W}>
        <SectionHead tag="skills & credentials" right="what I work with" title="Tools of the trade." />
        <SubHead>// skills</SubHead>
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(([t, list]) => (
            <Card key={t}>
              <h4 className="mb-4 font-serif text-xl font-semibold">{t}</h4>
              <div className="flex flex-wrap gap-2">{list.map((c) => <Chip key={c}>{c}</Chip>)}</div>
            </Card>
          ))}
        </div>
        <SubHead>// certifications</SubHead>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <Card key={c.title} className="!p-[22px]">
              <p className="mb-2.5 font-mono text-[11.5px] text-data">{c.level}</p>
              <h4 className="text-[16.5px] font-semibold">{c.title}</h4>
              {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-xs text-lime">Verify ↗</a>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Timeline({ items }) {
  return (
    <div className="border-t border-paperline">
      {items.map((it) => (
        <Reveal key={it.title} className="grid grid-cols-[24px_1fr] gap-x-6 gap-y-1.5 border-b border-paperline py-7.5 transition-[padding] hover:pl-2.5 md:grid-cols-[24px_170px_1fr]">
          <div className={`mt-1.5 size-[9px] rounded-full ${it.current ? 'animate-ring bg-data' : 'bg-paperink'}`} />
          <div className="col-start-2 font-mono text-[12.5px] text-papermuted md:col-start-auto">
            {it.date}{it.sub && <><br />{it.sub}</>}
          </div>
          <div className="col-start-2 md:col-start-auto">
            <h4 className="mb-1.5 text-[19px] font-semibold">{it.title}</h4>
            <div className="mb-2.5 font-mono text-[12.5px] text-papermuted">{it.org}</div>
            {it.bullets && (
              <ul className="m-0 list-disc pl-[18px] text-[14.5px] text-papermuted">
                {it.bullets.map((b) => <li key={b} className="mb-1">{b}</li>)}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <>
      <section id="work" className="bg-paper pb-22 pt-22 text-paperink">
        <div className={W}>
          <SectionHead tag="where I've worked" title="Work experience." light />
          <Timeline items={work} />
        </div>
      </section>
      <section id="education" className="bg-paper pb-22 text-paperink">
        <div className={W}>
          <SectionHead tag="education" title="SSC to BSc." light />
          <Timeline items={education} />
        </div>
      </section>
    </>
  )
}

function ContactIcon({ label }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', className: 'size-[18px]', 'aria-hidden': true }

  if (label === 'WhatsApp') {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z" />
        <path d="M8.8 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-1.8.6-1.1-.2-2.5-.9-3.8-2.1-1.2-1.1-2-2.5-2.2-3.4-.2-.8.1-1.7.6-2.5Z" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.4 3.8 1.7.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 10H5.7v8h2.6v-8ZM7 6.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5.1 3.9H9.6v8h2.6v-4c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3V18h2.6v-4.5c0-2.2-.5-3.9-3.1-3.9-1.2 0-2.1.7-2.5 1.3h-.1V10Z" />
      </svg>
    )
  }

  return (
    <svg {...common} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function Contact() {
  const cells = [
    ['Email', `mailto:${profile.email}`, profile.email],
    ['WhatsApp', 'https://wa.me/8801880003042', '+880 1880-003042'],
    ['GitHub', profile.github, profile.github.replace('https://', '')],
    ['LinkedIn', profile.linkedin, profile.linkedin.replace('https://www.', '').replace(/\/$/, '')],
  ]
  const show3D = use3D(0)
  return (
    <section id="contact" className="relative isolate overflow-hidden pb-16 pt-1 md:pb-20 md:pt-2">
      {show3D && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="pointer-events-none absolute right-0 top-0 h-[62%] w-full opacity-20 md:h-[72%] md:w-[66%] md:opacity-35">
          <Suspense fallback={null}><Knot /></Suspense>
        </motion.div>
      )}
      <div className={`${W} relative`}>
        <div className="grid items-end gap-8 border-b border-soft pb-12 md:grid-cols-[1.2fr_.8fr] md:gap-14 md:pb-16">
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.2em] text-muted">
              <span className="size-2 rounded-full bg-lime shadow-[0_0_14px_rgba(144,238,144,.65)]" />
              Have a project in mind?
            </div>
            <ContactHeading />
          </div>
          <div className="relative z-10 flex max-w-sm flex-col items-start gap-5 md:pb-2">
            <div className="rounded-full border border-lime/25 bg-lime/[.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[.16em] text-lime">
              Open to new opportunities
            </div>
            <p className="text-[15.5px] leading-7 text-muted">Open to new roles, collaborations and data projects. Have something in mind? Drop me a line — I’d love to hear about it.</p>
            <HireBadge />
          </div>
        </div>
        <div className="grid gap-2.5 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {cells.map(([label, href, text]) => (
            <Reveal
              key={label}
              as="a"
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group relative flex min-h-[88px] items-center gap-3 overflow-hidden rounded-lg border border-line bg-panel/70 p-3 no-underline transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:bg-panel sm:min-h-[94px] sm:p-3.5"
            >
              <span className="grid size-8 flex-none place-items-center rounded-md border border-lime/15 bg-lime/[.06] text-lime transition-colors group-hover:bg-lime group-hover:text-limeink">
                <ContactIcon label={label} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 font-mono text-[9px] uppercase tracking-[.15em] text-muted">{label}</div>
                <div className="break-all text-xs font-medium leading-5 text-ink transition-colors group-hover:text-lime">{text}</div>
              </div>
              <span aria-hidden className="flex-none text-xs text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime">↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-soft">
      <div className={`${W} py-8 md:py-12`}>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel px-6 py-8 sm:px-9 md:px-12 md:py-11">
          <div className="pointer-events-none absolute -right-12 -top-20 size-64 rounded-full bg-lime opacity-[.07] blur-[80px]" />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_.8fr] md:gap-14">
            <div className="max-w-lg">
              <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Thanks for stopping by
              </p>
              <h2 className="mb-3 font-serif text-[clamp(30px,5vw,48px)] font-semibold leading-[1.05] tracking-[-.035em]">
                Building thoughtful<br className="hidden sm:block" /> interfaces, one idea at a time.
              </h2>
              <p className="mb-6 max-w-[42ch] text-sm text-muted">Always learning, always making. Have an idea or want to work together?</p>
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-3 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-limeink no-underline transition-transform hover:-translate-y-0.5">
                Say hello <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
              </a>
            </div>
            <div className="flex flex-col gap-6 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-1">
              <nav aria-label="Footer navigation">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[.18em] text-muted">Explore</p>
                <div className="grid max-w-xs grid-cols-2 gap-x-5 gap-y-2">
                  {[...nav, ['contact', 'Contact']].map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="text-sm text-ink/80 no-underline transition-colors hover:text-lime">{label}</a>
                  ))}
                </div>
              </nav>
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] text-muted">Elsewhere</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/80 no-underline transition-colors hover:text-lime">GitHub ↗</a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/80 no-underline transition-colors hover:text-lime">LinkedIn ↗</a>
                  <a href={`mailto:${profile.email}`} className="break-all text-sm text-ink/80 no-underline transition-colors hover:text-lime">Email ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-1 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>© {new Date().getFullYear()} {profile.name}. Built with</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 text-lime">
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
            </svg>
            <span>React.</span>
          </p>
          <div className="flex items-center gap-4">
            <span>Dhaka, Bangladesh</span>
            <span className="text-line">•</span>
            <a href="#top" className="text-muted no-underline transition-colors hover:text-lime">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
