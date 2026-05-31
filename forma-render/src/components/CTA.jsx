import { useEffect, useRef } from 'react'

export default function CTA() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: 0.1 })
    refs.forEach(r => r.current && obs.observe(r.current))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cta" className="relative py-[160px] px-[60px] text-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(193,154,82,0.05) 0%, transparent 70%)' }} />

      {/* Decorative frame */}
      <div className="cta-frame absolute pointer-events-none"
        style={{ inset: '40px', border: '1px solid rgba(242,234,216,0.1)' }} />

      <div className="relative z-10">
        <div ref={refs[0]} className="fade-up font-cond text-[11px] tracking-widest-4 text-gold uppercase mb-8">
          Mulai Kolaborasi
        </div>

        <h2 ref={refs[1]} className="fade-up font-serif font-[300] leading-[0.95] mb-12 text-cream"
          style={{ fontSize: 'clamp(42px, 7vw, 100px)', transitionDelay: '0.1s' }}>
          Wujudkan<br /><em className="text-cream-2">visi</em> Anda<br />bersama kami
        </h2>

        <div ref={refs[2]} className="fade-up flex gap-5 justify-center items-center" style={{ transitionDelay: '0.2s' }}>
          <a href="mailto:hello@forma.studio"
            className="font-cond text-[12px] tracking-widest-2 uppercase text-bg bg-gold
                       px-12 py-[18px] no-underline transition-all duration-300 hover:bg-cream">
            Hubungi Kami
          </a>
          <a href="#portfolio"
            className="font-cond text-[12px] tracking-widest-2 uppercase text-cream
                       px-12 py-[18px] no-underline transition-all duration-300 hover:text-gold"
            style={{ border: '1px solid rgba(242,234,216,0.1)' }}>
            Lihat Karya
          </a>
        </div>

        <div ref={refs[3]} className="fade-up mt-20 font-cond text-[13px] tracking-[0.15em] text-cream-2"
          style={{ transitionDelay: '0.3s' }}>
          Email langsung ke{' '}
          <a href="mailto:hello@forma.studio" className="text-gold no-underline">hello@forma.studio</a>
          {' '}·{' '}
          WhatsApp{' '}
          <a href="tel:+6281234567890" className="text-gold no-underline">+62 812-3456-7890</a>
        </div>
      </div>
    </section>
  )
}
