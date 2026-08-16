import { ContentCard } from '../components/ContentCard'
import { SiteHeader } from '../components/SiteHeader'

const demoUrl = 'https://trait-compass.trait-compass.workers.dev'

const barriers = [
  ['01', '気づいても、相談するのは不安', '自分や家族の困りごとを言葉にする前の段階でも、静かに整理できる入口をつくります。'],
  ['02', '相談先が、地域ごとに見つけにくい', '東京都・区市町村のオープンデータをほどき、信頼できる公的な窓口へつなぎます。'],
  ['03', '支援に至るまでに、ためらいがある', '医療の手前で、次に何をすればよいかを自分のペースで考えられるようにします。'],
]

const flow = [
  ['入口を選ぶ', 'セルフチェックから始めることも、相談先を探すことから始めることもできます。'],
  ['傾向を整理する', '30問のセルフチェックを、1問ずつ・途中再開可能なかたちで進めます。'],
  ['次の一歩を見つける', '傾向の可視化を手がかりに、年齢と地域に合わせた支援情報を探せます。'],
  ['必要なときだけAIを使う', '要約や関連情報は完全オプトイン。送信前に内容を確認できます。'],
]

const principles = [
  ['ブラウザで完結', '回答・スコアリング・結果の表示はブラウザ内で行います。'],
  ['送る情報を選べる', '支援情報検索とAI機能は、必要なときだけ明示的な操作で使えます。'],
  ['保存を最小限に', '回答の履歴保存は任意。自由記述は保存せず、AI利用時だけ送信対象になります。'],
]

const questions = [
  ['◎', '問1 公共価値', '「気づき」と「相談」のあいだの空白を、信頼できるオープンデータとプライバシー保護設計で埋める。'],
  ['◎', '問2 誰の困りごとか', '文部科学省の全国調査（2022年公表）で8.8%に発達障害の可能性、うち43.2%は個別の配慮を受けていない。心理・情報・供給の3層の障壁を整理し、それぞれに対応。'],
  ['◎', '問3 必要十分なAI', 'セルフチェック本体は完全非AI・静的処理。AIはオプトインの別レイヤのみ。必要な場面にだけ使います。'],
  ['◎', '問4 AIと人の役割分担', '送信前プレビューとログ非保存を徹底し、最終的な意味づけは本人に委ねる。'],
  ['◎', '問6 データ活用と説明可能性', '根拠ソースと出典を示し、データの偏りやカバレッジも見えるかたちにする。'],
]

const challenges = [
  ['×', '問5 行政職員の業務との接続', '統一支援施設スキーマの提案はあるが、行政組織への接続実績はまだない。'],
  ['△', '問7 誰一人取り残されない設計', 'AIを使わずに窓口へ到達できる一方、多言語対応やデジタルに不慣れな方への配慮は今後の課題。'],
  ['△', '問8 成果測定', '需要の確かめ方とAI品質評価の仕組みは設計済みだが、実運用の実績データはまだない。'],
]

export function HomePage() {
  return <><a className="skip-link" href="#main-content">本文へ移動</a><SiteHeader /><main id="main-content">
    <section id="top" className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow">東京都知事杯オープンデータ・ハッカソン2026 参加チーム</p><h1><span>Civic</span><em>Unknot</em></h1><p className="catchphrase">絡まりは、ほどける。<br />気づきは、つながる。</p><p className="mission">制度や支援情報が複雑に見えるとき、一人で抱え込まないための入口をつくります。CivicUnknotは、東京都のオープンデータを使い、気づきを信頼できる公的な相談窓口へつなぐチームです。</p><div className="button-row"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass を試す <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#product">できることを見る</a></div></div>
      <aside className="hero-aside" aria-label="CivicUnknotの考え方"><img className="hero-logo" src="./logo-transparent-outline.png" alt="CivicUnknot チームロゴ：ほどける結び目と、行政と都民をつなぐ橋" /><div className="hero-promise"><span>自分のペースで</span><span>必要なときだけ</span><span>公的な情報へ</span></div></aside>
    </div></section>

    <section id="unknot" className="section"><div className="container narrow"><p className="section-kicker">THE PROBLEM WE UNKNOT</p><h2>相談先につながれない理由を、<br />ひとつずつほどく。</h2><p className="lead">困りごとがあっても、相談までにはいくつもの壁があります。trait-compassは、そのすべてを急がせず、本人が選べる導線として設計しています。</p><div className="barrier-grid">{barriers.map(([number, title, text]) => <article className="barrier" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="product" className="section section-tint"><div className="container"><div className="section-heading"><div><p className="section-kicker">PRODUCT / TRAIT-COMPASS</p><h2>「整理する」と「探す」を、<br />ひとつの流れに。</h2></div><p className="lead"><strong>trait-compass</strong> は、発達特性と日常の困りごとを整理し、公的な支援情報へつなぐブラウザ完結型のセルフチェックアプリです。医療行為ではありません。</p></div>
      <div className="entry-note"><span>選べる2つの入口</span><p><strong>セルフチェックから</strong> 傾向を整理する ／ <strong>相談先を探すことから</strong> 年齢と地域で支援情報を探す</p></div>
      <ol className="flow">{flow.map(([title, text], index) => <li key={title}><span className="flow-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <div className="feature-row"><div><h3>結果を、行動につなげる</h3><p>レーダーとベン図で傾向を見やすくし、上位カテゴリを相談分野へ読み替えます。年齢と区市町村を選ぶと、相談窓口・支援制度・福祉ガイドを探せます。</p></div><a className="text-link" href={demoUrl} target="_blank" rel="noreferrer">デモで体験する <span aria-hidden="true">→</span></a></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><p className="section-kicker">PRIVACY BY DESIGN</p><h2>情報の扱いも、<br />わかりやすく選べるように。</h2></div><p className="lead">センシティブな情報だからこそ、何が端末に残り、いつ外部とやり取りするのかを、機能ごとに分けて伝えます。</p></div><div className="principle-grid">{principles.map(([title, text]) => <ContentCard key={title} tone="good"><span className="card-label">PRIVACY</span><h3>{title}</h3><p>{text}</p></ContentCard>)}</div><p className="privacy-footnote">AIによる要約・関連情報の案内は、完全オプトインです。危機的な内容はAIで扱わず、公的な相談窓口を案内します。</p></div></section>

    <section id="eight-questions" className="section section-tint"><div className="container"><p className="section-kicker">EIGHT QUESTIONS</p><h2>できていることも、<br />これからのことも公開する。</h2><p className="lead question-lead">trait-compassは、行政向けAIサービス設計のフレームワーク「8つの問い」に沿って自己点検しています。</p><h3 className="group-heading">設計で応えられていること</h3><div className="card-grid questions">{questions.map(([mark, title, text]) => <ContentCard key={title} tone="good"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><h3 className="group-heading">これからの課題</h3><div className="card-grid questions">{challenges.map(([mark, title, text]) => <ContentCard key={title} tone="challenge"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><p className="closing">私たちはこの3つを、伸びしろとして公開し続けます。</p></div></section>

    <section id="demo" className="demo-section"><div className="container demo-grid"><div><p className="section-kicker">TRY THE DEMO</p><h2>気になった今、<br />自分のペースで。</h2><p>セルフチェックからでも、相談先を探すことからでも始められます。</p></div><div className="demo-action"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass を試す <span aria-hidden="true">↗</span></a><p className="disclaimer">本サービスは医療行為ではありません。結果は医学的な判定を示すものではなく、公的な相談窓口への相談を後押しするためのものです。</p><a className="coming-soon" href="https://github.com/yunbow/trait-compass" target="_blank" rel="noreferrer">GitHubリポジトリ: trait-compass <span aria-hidden="true">↗</span></a></div></div></section>
  </main><footer><div className="container footer-content"><div className="footer-brand"><img src="./logo-transparent-outline.png" alt="CivicUnknot チームロゴ" /><p>© 2026 CivicUnknot</p></div><div><p>東京都知事杯オープンデータ・ハッカソン2026 参加チーム</p><p>支援情報データ出典: 東京都オープンデータカタログサイトおよび区市町村オープンデータ</p></div></div></footer>
  </>
}
