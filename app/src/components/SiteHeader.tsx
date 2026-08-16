const links = [['#unknot', 'Unknotとは'], ['#product', 'trait-compass'], ['#eight-questions', '8つの問い'], ['#demo', 'デモ']]

export function SiteHeader() {
  return <header className="site-header"><nav className="nav container" aria-label="主要ナビゲーション">
    <a className="nav-brand" href="#top" aria-label="CivicUnknot トップへ"><img src="./logo.png" alt="" /><span>Civic<span>Unknot</span></span></a>
    <div className="nav-links">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div>
  </nav></header>
}
