import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

// SVG render art for each portfolio item
const RenderTower = () => (
  <svg width="100%" height="100%" viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="480" fill="#12100a"/>
    <rect x="0" y="0" width="600" height="320" fill="#0e1420"/>
    <rect x="160" y="30" width="130" height="420" fill="#1c1608"/>
    <rect x="180" y="50" width="90" height="380" fill="#221c0c"/>
    <g fill="rgba(193,154,82,0.1)">
      {[65,98,131,164,197,230].map(y => [192,216,240].map(x => (
        <rect key={`${x}-${y}`} x={x} y={y} width="16" height="22"/>
      )))}
    </g>
    <g fill="rgba(230,175,70,0.28)">
      <rect x="216" y="98" width="16" height="22"/>
      <rect x="192" y="164" width="16" height="22"/>
      <rect x="240" y="131" width="16" height="22"/>
    </g>
    <rect x="50" y="180" width="90" height="270" fill="#181208"/>
    <rect x="380" y="120" width="110" height="330" fill="#1e1a0c"/>
    <rect x="0" y="420" width="600" height="60" fill="#0e0c06"/>
    <line x1="60" y1="425" x2="540" y2="425" stroke="rgba(193,154,82,0.12)" strokeWidth="1"/>
    <g fill="rgba(255,255,230,0.3)">
      <circle cx="20" cy="40" r="0.8"/><circle cx="80" cy="20" r="0.6"/>
      <circle cx="500" cy="50" r="0.8"/><circle cx="560" cy="15" r="0.6"/>
    </g>
  </svg>
)
const RenderVilla = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="240" fill="#0c1016"/>
    <rect x="40" y="60" width="280" height="150" fill="#141a22"/>
    <rect x="40" y="60" width="280" height="28" fill="#0e1218"/>
    <rect x="60" y="100" width="140" height="90" fill="rgba(140,170,210,0.05)" stroke="#1e2a38" strokeWidth="0.5"/>
    <rect x="68" y="108" width="60" height="72" fill="rgba(180,200,240,0.04)"/>
    <rect x="135" y="108" width="55" height="72" fill="rgba(120,155,200,0.06)"/>
    <rect x="222" y="140" width="42" height="70" fill="#080c10" stroke="#1c2430" strokeWidth="0.5"/>
    <circle cx="258" cy="176" r="2" fill="rgba(193,154,82,0.5)"/>
    <rect x="40" y="210" width="280" height="20" fill="#080e14"/>
  </svg>
)
const RenderMuseum = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="240" fill="#12100a"/>
    <rect x="30" y="190" width="300" height="30" fill="#1a1408"/>
    <polygon points="40,190 180,60 320,190" fill="none" stroke="rgba(193,154,82,0.25)" strokeWidth="0.8"/>
    <polygon points="65,190 180,80 295,190" fill="#1c1610"/>
    <polygon points="90,190 180,100 270,190" fill="#221e12" stroke="rgba(193,154,82,0.08)" strokeWidth="0.5"/>
    <line x1="180" y1="80" x2="145" y2="190" stroke="rgba(193,154,82,0.18)" strokeWidth="0.5"/>
    <line x1="180" y1="80" x2="180" y2="190" stroke="rgba(193,154,82,0.18)" strokeWidth="0.5"/>
    <line x1="180" y1="80" x2="215" y2="190" stroke="rgba(193,154,82,0.18)" strokeWidth="0.5"/>
    <rect x="152" y="158" width="56" height="32" fill="#0e0c06"/>
    <line x1="30" y1="190" x2="330" y2="190" stroke="rgba(193,154,82,0.3)" strokeWidth="0.8"/>
  </svg>
)
const RenderInterior = () => (
  <svg width="100%" height="100%" viewBox="0 0 460 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="lg" cx="50%" cy="35%" r="50%"><stop offset="0" stopColor="#c8a050" stopOpacity="0.08"/><stop offset="1" stopColor="#c8a050" stopOpacity="0"/></radialGradient></defs>
    <rect width="460" height="480" fill="#0e1812"/>
    <rect x="0" y="340" width="460" height="140" fill="#141e18"/>
    <rect x="40" y="30" width="380" height="290" fill="rgba(120,180,150,0.03)" stroke="#1a2820" strokeWidth="0.5"/>
    <rect x="58" y="48" width="170" height="255" fill="rgba(170,210,190,0.025)"/>
    <rect x="242" y="48" width="160" height="255" fill="rgba(140,190,165,0.035)"/>
    <line x1="234" y1="48" x2="234" y2="303" stroke="#1a2820" strokeWidth="0.5"/>
    <line x1="230" y1="0" x2="230" y2="100" stroke="rgba(193,154,82,0.25)" strokeWidth="0.5"/>
    <circle cx="230" cy="104" r="8" fill="rgba(193,154,82,0.12)" stroke="rgba(193,154,82,0.3)" strokeWidth="0.5"/>
    <circle cx="230" cy="104" r="4" fill="rgba(230,185,90,0.45)"/>
    <rect x="0" y="0" width="460" height="480" fill="url(#lg)"/>
    <rect x="110" y="375" width="240" height="58" fill="#0c1410" rx="2"/>
    <rect x="80" y="355" width="300" height="14" fill="#101810" rx="1"/>
  </svg>
)
const RenderFacade = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="240" fill="#12100a"/>
    <rect x="15" y="15" width="330" height="210" fill="#1c1610"/>
    <g stroke="rgba(193,154,82,0.09)" strokeWidth="0.5" fill="none">
      <line x1="95" y1="15" x2="95" y2="225"/><line x1="175" y1="15" x2="175" y2="225"/>
      <line x1="255" y1="15" x2="255" y2="225"/>
      <line x1="15" y1="75" x2="345" y2="75"/><line x1="15" y1="135" x2="345" y2="135"/>
    </g>
    <g fill="rgba(193,154,82,0.07)">
      <rect x="25" y="25" width="60" height="40"/><rect x="105" y="25" width="60" height="40"/>
      <rect x="185" y="25" width="60" height="40"/><rect x="265" y="25" width="60" height="40"/>
      <rect x="25" y="85" width="60" height="40"/><rect x="265" y="85" width="60" height="40"/>
    </g>
    <rect x="185" y="85" width="60" height="40" fill="rgba(193,154,82,0.2)"/>
    <rect x="105" y="85" width="60" height="40" fill="rgba(193,154,82,0.13)"/>
    <rect x="130" y="185" width="100" height="8" fill="#251e12" stroke="rgba(193,154,82,0.2)" strokeWidth="0.5"/>
    <rect x="150" y="193" width="60" height="30" fill="#0e0c08"/>
  </svg>
)
const RenderSitePlan = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="240" fill="#0c1018"/>
    <g stroke="rgba(80,120,180,0.07)" strokeWidth="0.5">
      <line x1="0" y1="60" x2="360" y2="60"/><line x1="0" y1="120" x2="360" y2="120"/>
      <line x1="0" y1="180" x2="360" y2="180"/><line x1="72" y1="0" x2="72" y2="240"/>
      <line x1="144" y1="0" x2="144" y2="240"/><line x1="216" y1="0" x2="216" y2="240"/>
      <line x1="288" y1="0" x2="288" y2="240"/>
    </g>
    <rect x="20" y="18" width="90" height="70" fill="#161e2c" stroke="rgba(193,154,82,0.3)" strokeWidth="0.8" rx="2"/>
    <rect x="40" y="130" width="65" height="60" fill="#161e2c" stroke="rgba(193,154,82,0.2)" strokeWidth="0.8" rx="2"/>
    <rect x="155" y="24" width="120" height="90" fill="#161e2c" stroke="rgba(193,154,82,0.45)" strokeWidth="0.8" rx="2"/>
    <rect x="235" y="148" width="70" height="55" fill="#161e2c" stroke="rgba(193,154,82,0.2)" strokeWidth="0.8" rx="2"/>
    <path d="M118 53 Q138 53 155 70" fill="none" stroke="rgba(193,154,82,0.18)" strokeWidth="1.5"/>
    <g fill="rgba(50,85,40,0.4)" stroke="#1e3018" strokeWidth="0.4">
      <circle cx="145" cy="190" r="10"/><circle cx="310" cy="40" r="8"/><circle cx="325" cy="110" r="11"/>
    </g>
  </svg>
)
const RenderLandscape = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="240" fill="#0e1408"/>
    <rect x="0" y="130" width="360" height="110" fill="#131c0e"/>
    <rect x="140" y="90" width="80" height="150" fill="#181e10"/>
    <path d="M110 90 L180 30 L250 90z" fill="#0e1208" stroke="rgba(140,190,80,0.2)" strokeWidth="0.8"/>
    <rect x="128" y="90" width="104" height="60" fill="#101608"/>
    <rect x="136" y="90" width="4" height="60" fill="#141a0c"/>
    <rect x="178" y="90" width="4" height="60" fill="#141a0c"/>
    <rect x="218" y="90" width="4" height="60" fill="#141a0c"/>
    <g fill="rgba(55,90,35,0.4)" stroke="#1e3010" strokeWidth="0.3">
      <circle cx="52" cy="105" r="28"/><circle cx="310" cy="105" r="22"/>
    </g>
    <rect x="49" y="133" width="5" height="38" fill="#141008"/>
    <rect x="307" y="127" width="5" height="38" fill="#141008"/>
  </svg>
)
const RenderNight = () => (
  <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="gw" cx="50%" cy="100%" r="55%"><stop offset="0" stopColor="#c8a050" stopOpacity="0.15"/><stop offset="1" stopColor="#c8a050" stopOpacity="0"/></radialGradient></defs>
    <rect width="360" height="240" fill="#060402"/>
    <rect x="68" y="28" width="220" height="185" fill="#110e08"/>
    <rect x="88" y="18" width="55" height="195" fill="#0d0a06"/>
    <rect x="218" y="45" width="55" height="168" fill="#110e08"/>
    <g fill="rgba(255,175,55,0.38)">
      <rect x="96" y="28" width="18" height="14"/><rect x="122" y="28" width="18" height="14"/>
      <rect x="96" y="50" width="18" height="14"/>
    </g>
    <g fill="rgba(193,154,82,0.2)">
      <rect x="96" y="72" width="18" height="14"/><rect x="122" y="50" width="18" height="14"/>
      <rect x="226" y="65" width="15" height="12"/><rect x="248" y="65" width="15" height="12"/>
      <rect x="226" y="87" width="15" height="12"/><rect x="248" y="87" width="15" height="12"/>
    </g>
    <rect x="50" y="180" width="260" height="60" fill="url(#gw)"/>
    <g fill="rgba(255,255,230,0.45)">
      <circle cx="25" cy="18" r="0.8"/><circle cx="55" cy="8" r="0.6"/>
      <circle cx="330" cy="25" r="0.8"/><circle cx="350" cy="12" r="0.6"/>
    </g>
  </svg>
)

const items = [
  { cat: 'High-rise Tower', title: 'Menara Dusk Jakarta', bg: '#12100a', Render: RenderTower,
    gridCol: '1 / 6', gridRow: '1 / 3' },
  { cat: 'Residential', title: 'Villa Ceragem', bg: '#0c1016', Render: RenderVilla,
    gridCol: '6 / 9', gridRow: '1 / 2' },
  { cat: 'Cultural', title: 'Museum Geometri', bg: '#12100a', Render: RenderMuseum,
    gridCol: '9 / 13', gridRow: '1 / 2' },
  { cat: 'Interior', title: 'Ruang Tamu Tenang', bg: '#0c1410', Render: RenderInterior,
    gridCol: '6 / 10', gridRow: '2 / 4' },
  { cat: 'Commercial', title: 'Facade Komersial', bg: '#141008', Render: RenderFacade,
    gridCol: '10 / 13', gridRow: '2 / 3' },
  { cat: 'Site Plan', title: 'Masterplan Kawasan', bg: '#0e1420', Render: RenderSitePlan,
    gridCol: '1 / 4', gridRow: '3 / 4' },
  { cat: 'Landscape', title: 'Taman Kota Hijau', bg: '#0e1408', Render: RenderLandscape,
    gridCol: '4 / 6', gridRow: '3 / 4' },
  { cat: 'Night Render', title: 'Pencahayaan Dramatik', bg: '#060402', Render: RenderNight,
    gridCol: '10 / 13', gridRow: '3 / 4' },
]

export default function Portfolio() {
  const gridRef = useRef(null)
  const btnRef  = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: 0.05 })
    ;[gridRef, btnRef].forEach(r => r.current && obs.observe(r.current))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-[120px] px-[60px]">
      <SectionHeader label="Portofolio" count="03" />

      <div
        ref={gridRef}
        className="fade-in mb-[60px]"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(3, 240px)', gap: '4px' }}
      >
        {items.map(({ cat, title, bg, Render, gridCol, gridRow }) => (
          <div
            key={title}
            className="port-item relative overflow-hidden cursor-pointer"
            style={{ gridColumn: gridCol, gridRow, background: bg }}
          >
            <div className="port-img w-full h-full">
              <Render />
            </div>
            <div className="port-overlay">
              <div className="font-cond text-[10px] tracking-widest-2 text-gold uppercase mb-1">{cat}</div>
              <div className="font-serif text-[18px] text-cream">{title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          ref={btnRef}
          href="#"
          className="fade-up inline-block font-cond text-[12px] tracking-widest-2 uppercase text-cream
                     px-12 py-[18px] no-underline transition-all duration-300
                     hover:text-gold"
          style={{ border: '1px solid rgba(242,234,216,0.1)' }}
        >
          Lihat Semua Karya →
        </a>
      </div>
    </section>
  )
}
