import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

export function useClock(tz = 'Asia/Dhaka') {
  const get = () => {
    try {
      return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date())
    } catch { return '--:--' }
  }
  const [t, setT] = useState(get)
  useEffect(() => {
    const id = setInterval(() => setT(get()), 15000)
    return () => clearInterval(id)
  }, [])
  return t
}

export function useTyped(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, c = 0, del = false, t
    const tick = () => {
      const s = words[w]
      setText(s.slice(0, c))
      if (!del && c === s.length) { del = true; t = setTimeout(tick, 1600); return }
      if (del && c === 0) { del = false; w = (w + 1) % words.length }
      c += del ? -1 : 1
      t = setTimeout(tick, del ? 40 : 80)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return text
}

export function useCount(target, run) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let start = null, id
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 900, 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) id = requestAnimationFrame(step)
    }
    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [run, target])
  return n
}

export function useScrollSpy(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      setP(h > 0 ? scrollY / h : 0)
    }
    f()
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return p
}
