import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

const steps = [
  {
    num: '01', title: 'Brief & File Collection',
    desc: 'Kami menerima file CAD, SketchUp, Revit, atau referensi. Diskusi mendalam tentang mood, angle, pencahayaan, dan material yang diinginkan.',
  },
  {
    num: '02', title: 'Modeling & Scene Setup',
    desc: 'Pembangunan atau penyempurnaan model 3D, penempatan kamera, pengaturan environment, dan texturing awal berdasarkan referensi material.',
  },
  {
    num: '03', title: 'Draft Preview & Feedback',
    desc: 'Draft render resolusi rendah dikirim untuk persetujuan komposisi, angle, dan pencahayaan sebelum final rendering dimulai.',
  },
  {
    num: '04', title: 'Final Render & Post-Production',
    desc: 'Rendering resolusi tinggi, color grading, retouching, penambahan entourage manusia, vegetasi, dan detail atmosfer final.',
  },
  {
    num: '05', title: 'Delivery',
    desc: 'File final dalam format yang dibutuhkan (TIFF, PNG, JPEG) beserta revisi minor tanpa biaya tambahan dalam 24 jam.',
  },
]

const LINE = { borderBottom: '1px solid rgba(242,234,216,0.1)' }
const BORDER = '1px solid rgba(242,234,216,0.1)'

export default function Process() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: 0.1 })
    ;[leftRef, rightRef].forEach(r => r.current && obs.observe(r.current))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="process" style={{ background: '#111009' }}>
      <div className="px-[60px] pt-[120px] pb-0">
        <SectionHeader label="Proses Kerja" count="04" />
      </div>

      <div className="grid grid-cols-2" style={{ borderTop: BORDER, borderBottom: BORDER }}>
        {/* Left */}
        <div ref={leftRef} className="fade-up p-[80px]" style={{ borderRight: BORDER }}>
          <h2 className="font-serif font-[300] leading-[1.1] mb-8 text-cream"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
            Dari konsep<br />menjadi <em className="text-gold">karya</em><br />yang berbicara
          </h2>
          <p className="font-sans font-[300] text-[14px] leading-[1.9] text-cream-2 mb-12">
            Workflow kami dirancang untuk menghasilkan render berkualitas tinggi dengan komunikasi yang jelas dan revisi yang efisien di setiap tahap.
          </p>

          {/* Turnaround box */}
          <div className="p-8" style={{ background: '#0A0907', border: BORDER }}>
            <div className="font-cond text-[11px] tracking-widest-2 text-gold uppercase mb-5">
              Turnaround Time
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[['3–5', 'Hari Kerja', 'Still Rendering'], ['7–14', 'Hari Kerja', 'Animasi 3D']].map(([n, l1, l2]) => (
                <div key={n}>
                  <div className="font-serif font-[300] text-cream leading-none text-[36px]">{n}</div>
                  <div className="font-cond text-[10px] tracking-[0.15em] text-cream-2 uppercase mt-1">{l1}<br />{l2}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Steps */}
        <div ref={rightRef} className="fade-up p-[80px] flex flex-col" style={{ transitionDelay: '0.15s' }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex gap-8 py-7"
              style={{ ...LINE, ...(i === 0 ? { paddingTop: 0 } : {}), ...(i === steps.length - 1 ? { borderBottom: 'none', paddingBottom: 0 } : {}) }}
            >
              <span className="font-cond text-[12px] tracking-widest-2 text-gold min-w-[28px] pt-1">
                {s.num}
              </span>
              <div>
                <h3 className="font-serif font-[300] text-[22px] text-cream mb-2">{s.title}</h3>
                <p className="font-sans font-[300] text-[13px] leading-[1.8] text-cream-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
