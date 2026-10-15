import { useEffect, useState } from 'react'

// Types each phrase, pauses, deletes it, then moves to the next.
// With reduced motion, the first phrase is shown without animation.
export default function TypeRotator({ phrases, typeMs = 70, deleteMs = 35, holdMs = 1800 }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [i, setI] = useState(0)
  const [text, setText] = useState(reduce ? phrases[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const full = phrases[i]
    let t
    if (!deleting && text === full) t = setTimeout(() => setDeleting(true), holdMs)
    else if (deleting && text === '') { setDeleting(false); setI((i + 1) % phrases.length) }
    else t = setTimeout(() => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)), deleting ? deleteMs : typeMs)
    return () => clearTimeout(t)
  }, [text, deleting, i])

  return (
    <span className="type-rotator" aria-live="polite">
      <span className="type-text">{text}</span>
      <span className="type-caret" aria-hidden="true" />
    </span>
  )
}
