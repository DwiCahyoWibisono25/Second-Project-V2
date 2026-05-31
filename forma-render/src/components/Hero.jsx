import { useEffect, useRef } from 'react'

export default function Hero() {
  const geoRef = useRef(null)
  const numRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (geoRef.current) geoRef.current.style.transform = `translateX(-50%) translateY(${y * 0.12}px)`
      if (numRef.current) numRef.current.style.transform = `translateY(${y * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-20 overflow-hidden"
      style={{ padding: '0 60px 80px' }}
    >
      {/* Big number */}
      <div
        ref={numRef}
        className="absolute top-[120px] right-[60px] font-cond font-[200] select-none leading-none will-change-transform"
        style={{ fontSize: '220px', letterSpacing: '-0.05em', color: 'rgba(193,154,82,0.06)' }}
      >
        01
      </div>

      {/* Rotating geometric rings */}
      <div
        ref={geoRef}
        className="absolute will-change-transform pointer-events-none"
        style={{ top: '140px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px' }}
      >
        {/* Circle 1 */}
        <div className="absolute rounded-full geo-circle-1"
          style={{ width:'500px', height:'500px', top:0, left:0, border:'1px solid rgba(193,154,82,0.08)' }} />
        {/* Circle 2 */}
        <div className="absolute rounded-full geo-circle-2"
          style={{ width:'380px', height:'380px', top:'60px', left:'60px', border:'1px solid rgba(193,154,82,0.12)' }} />
        {/* Circle 3 */}
        <div className="absolute rounded-full geo-circle-3"
          style={{ width:'260px', height:'260px', top:'120px', left:'120px', border:'1px solid rgba(193,154,82,0.18)' }} />
        {/* Cross */}
        <div className="absolute" style={{ top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}>
          <div className="absolute" style={{ width:'1px', height:'80px', top:'-40px', left:0, background:'rgba(193,154,82,0.3)' }} />
          <div className="absolute" style={{ width:'80px', height:'1px', left:'-40px', top:0, background:'rgba(193,154,82,0.3)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="hero-tag-anim flex items-center gap-3 mb-6 font-cond text-[11px] tracking-widest-4 text-gold uppercase">
          <span style={{ width:'40px', height:'1px', background:'#C19A52', display:'inline-block' }} />
          Architectural Render Studio
        </div>

        <h1 className="hero-title-anim font-serif font-[300] leading-[0.9] mb-10"
          style={{ fontSize: 'clamp(60px, 9vw, 130px)' }}>
          Visualisasi<br />
          <em className="text-cream-2">Arsitektur</em><br />
          <span className="text-gold">Presisi</span>
        </h1>

        <div className="hero-btm-anim flex items-end justify-between w-full">
          <p className="font-sans font-[300] text-[14px] leading-[1.8] text-cream-2 max-w-[380px]">
            Menghadirkan visi arsitektur Anda menjadi render fotorealistik yang memukau — dari konsep awal hingga presentasi final yang memenangkan klien.
          </p>
          <div className="flex gap-[60px]">
            {[['120+', 'Proyek Selesai'], ['8', 'Tahun Pengalaman']].map(([num, label]) => (
              <div key={label} className="text-right">
                <div className="font-serif font-[300] text-cream leading-none" style={{ fontSize:'52px' }}>{num}</div>
                <div className="font-cond text-[11px] tracking-widest-2 text-cream-2 uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      font-cond text-[10px] tracking-widest-3 text-cream-2 uppercase scroll-pulse">
        Scroll
      </div>
    </section>
  )
}
