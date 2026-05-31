import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top  = p.ry + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)

    const hoverEls = document.querySelectorAll('a, button, .svc-card, .port-item')
    const enter = () => {
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(2)')
      dotRef.current  && (dotRef.current.style.transform  = 'translate(-50%,-50%) scale(0.4)')
    }
    const leave = () => {
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
      dotRef.current  && (dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)')
    }
    hoverEls.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ background: '#C19A52', transform: 'translate(-50%,-50%)', transition: 'transform 0.1s' }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9998]"
        style={{ border: '1px solid #C19A52', transform: 'translate(-50%,-50%)', transition: 'all 0.18s ease' }}
      />
    </>
  )
}
