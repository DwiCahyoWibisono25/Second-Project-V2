export default function SectionHeader({ label, count }) {
  return (
    <div className="flex items-center gap-5 mb-20">
      <span className="font-cond text-[11px] tracking-widest-4 text-gold uppercase">{label}</span>
      <div className="flex-1 h-px" style={{ background: 'rgba(242,234,216,0.1)' }} />
      <span className="font-cond text-[11px] tracking-widest-2 text-cream-2">{count}</span>
    </div>
  )
}
