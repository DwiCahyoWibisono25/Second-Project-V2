const links = ['Services', 'Portfolio', 'Process', 'About', 'Kontak']

export default function Footer() {
  return (
    <footer
      className="px-[60px] py-[60px] flex justify-between items-center"
      style={{ borderTop: '1px solid rgba(242,234,216,0.1)' }}
    >
      <div className="font-cond font-[200] text-[18px] tracking-[0.35em] text-cream">
        FOR<span className="text-gold">M</span>A
      </div>

      <ul className="flex gap-8 list-none">
        {links.map(l => (
          <li key={l}>
            <a href={l === 'Kontak' ? '#cta' : `#${l.toLowerCase()}`}
              className="font-cond text-[11px] tracking-widest-2 text-cream-2 uppercase no-underline
                         hover:text-gold transition-colors duration-300">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="font-cond text-[11px] tracking-[0.15em] text-cream-2">
        © 2025 FORMA Studio. Bandung, Indonesia.
      </div>
    </footer>
  )
}
