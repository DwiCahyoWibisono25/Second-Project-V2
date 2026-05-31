import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

const services = [
  {
    num: '01', name: 'Exterior Rendering',
    desc: 'Visualisasi eksterior fotorealistik dengan pencahayaan alami, material, dan konteks lingkungan sekitar yang akurat.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" stroke="#C19A52" strokeWidth="0.8"/>
        <rect x="12" y="12" width="24" height="24" stroke="#C19A52" strokeWidth="0.5" strokeDasharray="2 2"/>
        <circle cx="24" cy="24" r="6" stroke="#C19A52" strokeWidth="0.8"/>
        <line x1="6" y1="24" x2="18" y2="24" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="30" y1="24" x2="42" y2="24" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="24" y1="6" x2="24" y2="18" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="24" y1="30" x2="24" y2="42" stroke="#C19A52" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    num: '02', name: 'Interior Rendering',
    desc: 'Tampilan interior yang memperlihatkan kualitas material, pencahayaan buatan, dan suasana ruangan secara mendetail.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <path d="M8 8h32v32H8z" stroke="#C19A52" strokeWidth="0.8"/>
        <path d="M8 22h32M22 8v32" stroke="#C19A52" strokeWidth="0.5" strokeDasharray="2 2"/>
        <rect x="13" y="13" width="8" height="8" stroke="#C19A52" strokeWidth="0.8"/>
        <rect x="27" y="27" width="8" height="8" stroke="#C19A52" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    num: '03', name: "Aerial & Bird's Eye",
    desc: 'Perspektif udara yang memperlihatkan tapak, lansekap, dan hubungan bangunan dengan lingkungannya.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L42 28H6L24 6z" stroke="#C19A52" strokeWidth="0.8"/>
        <path d="M14 28v14h20V28" stroke="#C19A52" strokeWidth="0.8"/>
        <line x1="24" y1="28" x2="24" y2="42" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="14" y1="35" x2="34" y2="35" stroke="#C19A52" strokeWidth="0.5"/>
        <circle cx="24" cy="18" r="2" stroke="#C19A52" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    num: '04', name: 'Walkthrough 3D',
    desc: 'Animasi perjalanan virtual melalui desain yang memperlihatkan sekuens ruang dan pengalaman spatial.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" stroke="#C19A52" strokeWidth="0.8"/>
        <circle cx="24" cy="24" r="8" stroke="#C19A52" strokeWidth="0.8"/>
        <circle cx="24" cy="24" r="3" fill="#C19A52" opacity="0.3"/>
        <line x1="6" y1="24" x2="16" y2="24" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="32" y1="24" x2="42" y2="24" stroke="#C19A52" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    num: '05', name: 'Diagram & Infografis',
    desc: 'Diagram konsep, analisis tapak, dan infografis presentasi yang komunikatif, estetis, dan mudah dipahami.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <path d="M6 6h16v16H6zM26 6h16v16H26zM6 26h16v16H6zM26 26h16v16H26z" stroke="#C19A52" strokeWidth="0.8"/>
        <line x1="14" y1="6" x2="14" y2="10" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="34" y1="6" x2="34" y2="10" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="14" y1="26" x2="14" y2="30" stroke="#C19A52" strokeWidth="0.5"/>
        <line x1="34" y1="26" x2="34" y2="30" stroke="#C19A52" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    num: '06', name: '360° Panorama',
    desc: 'Render panorama interaktif 360 derajat untuk presentasi immersif dan virtual tour properti yang memukau.',
    icon: (
      <svg className="w-12 h-12 opacity-70" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#C19A52" strokeWidth="0.8"/>
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="#C19A52" strokeWidth="0.5"/>
        <circle cx="24" cy="24" r="7" stroke="#C19A52" strokeWidth="0.5" strokeDasharray="2 2"/>
        <path d="M20 20l4 4 4-4" stroke="#C19A52" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
]

function ServiceCard({ svc, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="svc-card fade-up relative overflow-hidden p-[50px_40px] border-r border-b"
      style={{ borderColor: 'rgba(242,234,216,0.1)', transitionDelay: `${delay}s` }}
    >
      <span className="block font-cond text-[11px] tracking-widest-2 text-gold mb-[30px]">— {svc.num}</span>
      {svc.icon}
      <h3 className="font-serif font-[300] text-[26px] leading-[1.2] mt-6 mb-4 text-cream">{svc.name}</h3>
      <p className="font-sans font-[300] text-[13px] leading-[1.8] text-cream-2">{svc.desc}</p>
      <a href="#" className="svc-link inline-flex items-center gap-[10px] mt-7 font-cond text-[11px] tracking-widest-2 text-gold uppercase no-underline">
        Lihat Portofolio <span className="arrow-line" />
      </a>
    </div>
  )
}

export default function Services() {
  const h2Ref = useRef(null)
  const pRef  = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: 0.1 })
    ;[h2Ref, pRef].forEach(r => r.current && obs.observe(r.current))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="py-[120px] px-[60px]">
      <SectionHeader label="Layanan" count="02" />

      <div className="grid grid-cols-2 gap-[80px] mb-[100px] items-end">
        <h2 ref={h2Ref} className="fade-up font-serif font-[300] leading-[1.1] text-cream"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Setiap piksel<br />bercerita tentang<br /><em className="text-gold">ruang</em>
        </h2>
        <p ref={pRef} className="fade-up font-sans font-[300] text-[14px] leading-[1.9] text-cream-2"
          style={{ transitionDelay: '0.1s' }}>
          Kami mengkhususkan diri dalam transformasi gambar teknis dan model 3D menjadi visualisasi berkualitas sinema yang menangkap esensi sejati sebuah desain arsitektur.
        </p>
      </div>

      <div
        className="grid grid-cols-3"
        style={{ borderTop: '1px solid rgba(242,234,216,0.1)' }}
      >
        {services.map((svc, i) => (
          <ServiceCard
            key={svc.num}
            svc={svc}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  )
}
