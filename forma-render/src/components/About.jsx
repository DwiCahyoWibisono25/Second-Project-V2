import { useEffect, useRef } from 'react'

const awards = [
  { year: '2024', name: 'Best Visualization Studio', org: 'IAI Awards, Jakarta' },
  { year: '2023', name: 'Excellence in Render', org: 'ArcViz Asia Pacific' },
  { year: '2023', name: 'Top 50 Studios', org: 'CGArchitect Global' },
  { year: '2022', name: 'Rising Studio Award', org: 'ARCASIA Indonesia' },
]

const BORDER = '1px solid rgba(242,234,216,0.1)'

function AboutArt() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 340 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="340" height="500" fill="#1a1610"/>
      <g stroke="rgba(193,154,82,0.07)" strokeWidth="0.5" fill="none">
        <line x1="170" y1="250" x2="0" y2="0"/><line x1="170" y1="250" x2="113" y2="0"/>
        <line x1="170" y1="250" x2="227" y2="0"/><line x1="170" y1="250" x2="340" y2="0"/>
        <line x1="170" y1="250" x2="0" y2="500"/><line x1="170" y1="250" x2="340" y2="500"/>
        <line x1="0" y1="100" x2="340" y2="100"/><line x1="0" y1="180" x2="340" y2="180"/>
        <line x1="0" y1="320" x2="340" y2="320"/><line x1="0" y1="400" x2="340" y2="400"/>
      </g>
      <rect x="50" y="75" width="175" height="245" fill="#221c12" stroke="rgba(193,154,82,0.2)" strokeWidth="0.8"/>
      <rect x="68" y="95" width="139" height="205" fill="#271f15"/>
      <g fill="rgba(193,154,82,0.1)" stroke="rgba(193,154,82,0.15)" strokeWidth="0.3">
        <rect x="80" y="108" width="28" height="38"/><rect x="116" y="108" width="28" height="38"/><rect x="152" y="108" width="28" height="38"/>
        <rect x="80" y="155" width="28" height="38"/><rect x="116" y="155" width="28" height="38"/><rect x="152" y="155" width="28" height="38"/>
        <rect x="80" y="202" width="28" height="38"/><rect x="116" y="202" width="28" height="38"/><rect x="152" y="202" width="28" height="38"/>
      </g>
      <rect x="116" y="155" width="28" height="38" fill="rgba(220,165,55,0.22)"/>
      <rect x="80" y="202" width="28" height="38" fill="rgba(200,148,50,0.17)"/>
      <rect x="195" y="140" width="95" height="180" fill="#1e1a10" stroke="rgba(193,154,82,0.15)" strokeWidth="0.5"/>
      <rect x="42" y="70" width="192" height="12" fill="#2c2210" stroke="rgba(193,154,82,0.25)" strokeWidth="0.5"/>
      <rect x="0" y="335" width="340" height="165" fill="#141008"/>
      <ellipse cx="138" cy="342" rx="115" ry="7" fill="rgba(0,0,0,0.6)"/>
      <path d="M268 238 Q282 195 298 238 Q312 175 328 238z" fill="#0e1008" stroke="#162010" strokeWidth="0.3"/>
      <rect x="295" y="238" width="5" height="60" fill="#0c0e08"/>
      <line x1="0" y1="335" x2="340" y2="335" stroke="rgba(193,154,82,0.35)" strokeWidth="0.8"/>
    </svg>
  )
}

export default function About() {
  const visRef  = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: 0.1 })
    ;[visRef, textRef].forEach(r => r.current && obs.observe(r.current))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-[120px] px-[60px] grid grid-cols-2 gap-[120px] items-center">
      {/* Visual side */}
      <div ref={visRef} className="fade-in relative" style={{ height: '580px', transitionDelay: '0.2s' }}>
        <div className="absolute inset-0" style={{ border: BORDER.replace('0.1', '0.15') }} />
        <div className="absolute" style={{ inset: '20px', border: BORDER.replace('0.1', '0.09') }} />
        <div className="absolute overflow-hidden" style={{ inset: '40px', background: '#181510' }}>
          <AboutArt />
        </div>
        {/* Badge */}
        <div
          className="absolute font-cond"
          style={{ right: '-20px', bottom: '80px', background: '#C19A52', padding: '20px 24px' }}
        >
          <div className="font-[300] text-bg leading-none" style={{ fontSize: '40px' }}>A+</div>
          <div className="text-[10px] tracking-widest-2 uppercase mt-1" style={{ color: 'rgba(10,9,7,0.7)' }}>Quality Standard</div>
        </div>
      </div>

      {/* Text side */}
      <div ref={textRef} className="fade-up">
        <div className="flex items-center gap-3 mb-6 font-cond text-[11px] tracking-widest-4 text-gold uppercase">
          <span style={{ width: '40px', height: '1px', background: '#C19A52', display: 'inline-block' }} />
          Tentang Studio
        </div>

        <h2 className="font-serif font-[300] leading-[1.15] mb-7 text-cream"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Seni &amp; teknik<br />dalam setiap<br /><em className="text-gold">render</em>
        </h2>

        <p className="font-sans font-[300] text-[14px] leading-[1.9] text-cream-2 mb-3">
          FORMA adalah studio render arsitektur yang berdedikasi menghadirkan visualisasi berkualitas sinema untuk arsitek, developer, dan desainer interior di seluruh Indonesia.
        </p>
        <p className="font-sans font-[300] text-[14px] leading-[1.9] text-cream-2">
          Kami percaya bahwa render yang baik bukan hanya soal teknis — ini tentang bercerita, menangkap jiwa sebuah desain dan mengkomunikasikannya dengan jelas.
        </p>

        {/* Awards */}
        <div className="grid grid-cols-2 gap-5 mt-12 pt-12" style={{ borderTop: BORDER }}>
          {awards.map(a => (
            <div key={a.name} className="p-[18px]" style={{ border: BORDER }}>
              <div className="font-cond text-[11px] tracking-widest-2 text-gold mb-1">{a.year}</div>
              <div className="font-sans text-[14px] text-cream mb-1">{a.name}</div>
              <div className="font-sans text-[12px] text-cream-2">{a.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
