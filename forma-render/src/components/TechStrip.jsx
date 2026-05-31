const tools = ['3ds Max','V-Ray','Rhino 3D','SketchUp','Lumion','Blender','Photoshop','Revit','Corona','Enscape']

export default function TechStrip() {
  return (
    <section
      id="tech"
      className="px-[60px] py-[60px]"
      style={{ background: '#181510', borderTop: '1px solid rgba(242,234,216,0.1)', borderBottom: '1px solid rgba(242,234,216,0.1)' }}
    >
      <div className="font-cond text-[11px] tracking-widest-3 text-cream-2 uppercase mb-8">
        Software &amp; Tools yang Kami Gunakan
      </div>
      <div className="flex gap-12 items-center flex-wrap">
        {tools.map((t, i) => (
          <div key={t} className="flex items-center gap-12">
            <span className="font-cond font-[200] text-[20px] tracking-[0.12em] text-cream-2 hover:text-gold transition-colors duration-300 cursor-default">
              {t}
            </span>
            {i < tools.length - 1 && (
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#8A6B34' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
