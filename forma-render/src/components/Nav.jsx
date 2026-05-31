import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-[60px] py-7 flex items-center justify-between transition-all duration-300 after:absolute after:bottom-0 after:left-[60px] after:right-[60px] after:h-px after:bg-white/10"
      style={{
        background: scrolled ? 'rgba(10,9,7,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-cond font-extralight text-[22px] tracking-widest35 text-cream no-underline"
      >
        FOR<span className="text-gold">M</span>A
      </a>

      {/* Links */}
      <ul className="flex gap-10 list-none">
        {['Services', 'Portfolio', 'Process', 'Studio'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-cond font-light text-[12px] tracking-widest2 text-cream-2 no-underline uppercase transition-colors duration-300 hover:text-gold"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#cta"
        className="font-cond font-light text-[11px] tracking-widest25 uppercase text-bg bg-gold px-6 py-[10px] no-underline transition-all duration-300 hover:bg-cream"
      >
        Mulai Proyek
      </a>
    </nav>
  )
}
