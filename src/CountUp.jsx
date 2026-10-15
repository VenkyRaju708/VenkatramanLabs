import { useEffect, useRef, useState } from 'react'

// Counts up from 0 to the number in `value` (e.g. "19+") when scrolled into view.
export default function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const ref = useRef(null)
  const [n, setN] = useState(target === null ? null : 0)

  useEffect(() => {
    if (target === null) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setN(target); return }
    const el = ref.current
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration])

  if (target === null) return <span>{value}</span>
  return <span ref={ref}>{n}{suffix}</span>
}
