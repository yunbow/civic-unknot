import { useEffect, useRef, useState } from 'react'

const links = [['#unknot', '解きたい課題'], ['#open-data', 'オープンデータ'], ['#product', 'trait-compass'], ['#eight-questions', '8つの問い'], ['#demo', 'デモ']]

export function SiteHeader() {
  const [activeId, setActiveId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = links.map(([href]) => document.querySelector(href)).filter((section): section is HTMLElement => section instanceof HTMLElement)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) setActiveId(`#${visible[visible.length - 1].target.id}`)
    }, { rootMargin: '-25% 0px -65% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return <header className="site-header"><nav className="nav container" aria-label="主要ナビゲーション">
    <a className="nav-brand" href="#top" aria-label="CivicUnknot トップへ"><img src="./logo-transparent-outline.png" alt="" /><span>Civic<span>Unknot</span></span></a>
    <button type="button" className="nav-toggle" ref={toggleRef} aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? '閉じる' : 'メニュー'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '閉じる' : 'メニュー'}</button>
    <div className="nav-links" id="site-nav" data-open={menuOpen || undefined}>{links.map(([href, label]) => { const isActive = activeId === href; return <a className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'location' : undefined} key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a> })}</div>
  </nav></header>
}
