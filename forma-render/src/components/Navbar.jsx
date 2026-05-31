import { useState, useEffect } from 'react'

const links = ['Services', 'Portfolio', 'Process', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-[60px] py-7 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,9,7,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid rgba(242,234,216,0.1)',
      }}
    >
      <a href="#" className="font-cond font-[200] text-[22px] tracking-[0.35em] text-cream no-underline">
        FOR<span className="text-gold">M</span>A
      </a>

      <ul className="flex gap-10 list-none">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="font-cond font-[300] text-[12px] tracking-widest-2 text-cream-2 uppercase no-underline
                         hover:text-gold transition-colors duration-300"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className="font-cond font-[300] text-[11px] tracking-widest-2 uppercase text-bg
                   bg-gold px-6 py-[10px] no-underline hover:bg-cream transition-all duration-300"
      >
        Mulai Proyek
      </a>
    </nav>
  )
}
