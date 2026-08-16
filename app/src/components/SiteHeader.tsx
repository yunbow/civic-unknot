import { useEffect, useState } from 'react'

const links = [['#unknot', 'Unknotとは'], ['#product', 'trait-compass'], ['#eight-questions', '8つの問い'], ['#demo', 'デモ']]

export function SiteHeader() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = links.map(([href]) => document.querySelector(href)).filter((section): section is HTMLElement => section instanceof HTMLElement)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) setActiveId(`#${visible[visible.length - 1].target.id}`)
    }, { rootMargin: '-25% 0px -65% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <header className="site-header"><nav className="nav container" aria-label="主要ナビゲーション">
    <a className="nav-brand" href="#top" aria-label="CivicUnknot トップへ"><img src="./logo-transparent-outline.png" alt="" /><span>Civic<span>Unknot</span></span></a>
    <div className="nav-links">{links.map(([href, label]) => <a className={activeId === href ? 'is-active' : undefined} key={href} href={href}>{label}</a>)}</div>
  </nav></header>
}
