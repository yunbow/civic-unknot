import type { ReactNode } from 'react'
import { ContentCard } from '../components/ContentCard'
import { SiteHeader } from '../components/SiteHeader'

const demoUrl = 'https://trait-compass.trait-compass.workers.dev'
const surveyUrl = `${demoUrl}/survey`
const supportUrl = `${demoUrl}/support`
const coverageUrl = `${demoUrl}/coverage`
const outcomesUrl = `${demoUrl}/outcomes`

const barriers = [
  ['01', '気づいても、相談するのは不安', '自分や家族の困りごとを言葉にする前の段階でも、静かに整理できる入口をつくります。'],
  ['02', '相談先が、地域ごとに見つけにくい', '東京都・区市町村のオープンデータをほどき、信頼できる公的な窓口へつなぎます。'],
  ['03', '支援に至るまでに、ためらいがある', '医療の手前で、次に何をすればよいかを自分のペースで考えられるようにします。'],
]

const openData = [
  ['保健施設・子ども家庭支援センターのデータ', '保健センターや子ども家庭支援センターの窓口情報を、地域を選ぶだけで相談窓口の候補として表示することにつなげています。'],
  ['保育施設・児童館/こどもクラブのデータ', '子どもの年齢や状況に応じて、身近な預け先や居場所を探す手がかりとして活用しています。'],
  ['区役所等窓口・福祉施設のデータ', '手続きや支援制度の入口となる窓口を、福祉ガイドの案内先として整理しています。'],
]

const flow = [
  ['入口を選ぶ', 'セルフチェックから始めることも、相談先を探すことから始めることもできます。'],
  ['傾向を整理する', '30問のセルフチェックを、1問ずつ・途中再開可能なかたちで進めます。'],
  ['次の一歩を見つける', '傾向の可視化を手がかりに、年齢と地域に合わせた支援情報を探せます。'],
  ['必要なときだけAIを使う', '要約や関連情報は完全オプトイン。送信前に内容を確認できます。'],
]

const architecture = [
  ['利用者', '登録も個人情報の入力も不要です'],
  ['ブラウザ内セルフチェック', '回答は端末の外に送信されません'],
  ['オープンデータで相談先検索', '公的データに基づいて窓口を案内します'],
  ['必要なときだけAI', '整理の補助など、限られた場面でのみ使います'],
]

const principles = [
  ['セルフチェックはブラウザで完結', '回答・スコアリング・結果の表示はブラウザ内で行います。'],
  ['送る情報を選べる', '支援情報検索とAI機能は、必要なときだけ明示的な操作で使えます。'],
  ['保存を最小限に', '回答の履歴保存は任意。自由記述はtrait-compass側では保存せず、AI利用時だけ外部への送信対象になります。'],
]

const criteria = [
  ['データ活用', '東京都・区市町村の19データセット・4,822件のオープンデータを、相談窓口検索と福祉ガイドにつなぎました。'],
  ['アイデア力', '「診断を待つ前に、まず状況の整理と相談先を」という順番の設計で、受診までの空白期間に寄り添います。'],
  ['技術力', 'セルフチェックはブラウザ内で完結させ、AIは必要な場面だけに限定する構成を選びました。'],
  ['ソーシャルインパクト', '「次の行動の手がかりが得られたか」を主要指標と定め、成果ページで継続的に計測しています。'],
  ['サービスデザイン', '登録不要・匿名で、セルフチェックと相談先検索のどちらからでも始められる導線を設計しました。'],
]

const questions: Array<[string, string, ReactNode]> = [
  ['◎', '問1 公共価値', '「気づき」と「相談」のあいだの空白を、信頼できるオープンデータとプライバシー保護設計で埋める。'],
  ['◎', '問2 誰の困りごとか', <>文部科学省の<a href="https://www.mext.go.jp/b_menu/houdou/2022/1421569_00005.htm" target="_blank" rel="noreferrer">令和4年度調査</a>では、通常の学級に在籍する小中学生の8.8%が「知的発達に遅れはないものの、学習面又は行動面で著しい困難を示す」と担任教員等により回答されています。これは診断に基づく数値ではありませんが、そのうち43.2%は授業時間内に個別の配慮・支援を受けていないとも回答されています。授業の中で個別の配慮が十分に届いていない可能性のある子どもたちがいます。</>],
  ['◎', '問3 必要十分なAI', 'セルフチェック本体は完全非AI・静的処理。AIはオプトインの別レイヤのみ。必要な場面にだけ使います。'],
  ['◎', '問4 AIと人の役割分担', '送信前に内容を確認でき、trait-compass側ではAIへの入力内容を保存しない。最終的な意味づけは本人に委ねる。'],
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
      <div className="hero-copy"><p className="eyebrow"><a className="hackathon-link" href="https://odhackathon.metro.tokyo.lg.jp/" target="_blank" rel="noreferrer">東京都知事杯オープンデータ・ハッカソン2026 参加チーム <span aria-hidden="true">↗</span></a></p><h1><span>Civic</span><em>Unknot</em></h1><p className="catchphrase">絡まりは、ほどける。<br />気づきは、つながる。</p><p className="mission">制度や支援情報が複雑に見えるとき、一人で抱え込まないための入口をつくります。CivicUnknotは、東京都のオープンデータを使い、気づきを信頼できる公的な相談窓口へつなぐチームです。</p><div className="button-row"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass を試す <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#product">できることを見る</a></div><p className="cta-reassurance">登録不要・セルフチェックはブラウザ内で完結・医療診断ではありません</p></div>
      <aside className="hero-aside" aria-label="CivicUnknotの考え方"><img className="hero-logo" src="./logo-transparent-outline.png" alt="CivicUnknot チームロゴ：ほどける結び目と、行政と都民をつなぐ橋" /><div className="hero-promise"><span>自分のペースで</span><span>必要なときだけ</span><span>公的な情報へ</span></div></aside>
    </div></section>

    <section id="unknot" className="section"><div className="container narrow"><p className="section-kicker">THE PROBLEM WE UNKNOT</p><h2>相談先につながれない理由を、<br />ひとつずつほどく。</h2><p className="lead">困りごとがあっても、相談までにはいくつもの壁があります。trait-compassは、そのすべてを急がせず、本人が選べる導線として設計しています。</p><div className="barrier-grid">{barriers.map(([number, title, text]) => <article className="barrier" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="open-data" className="section section-tint"><div className="container"><p className="section-kicker">OPEN DATA</p><h2>オープンデータが、<br />相談先への地図になる</h2><p className="lead">trait-compassは、東京都と区市町村が公開するオープンデータを整備し、「どこに相談できるか」を探せるかたちにつなぎ直しています。現在、62区市町村のうち54自治体・19データセット・4,822件のデータを掲載しています（2026年8月時点）。</p><div className="card-grid open-data-grid">{openData.map(([title, text]) => <ContentCard key={title} tone="good"><span className="card-label">OPEN DATA</span><h3>{title}</h3><p>{text}</p></ContentCard>)}</div><a className="text-link" href={coverageUrl} target="_blank" rel="noreferrer">対応自治体とデータの内訳を見る（trait-compass データカバレッジページ） <span aria-hidden="true">→</span></a></div></section>

    <section id="product" className="section"><div className="container"><div className="section-heading"><div className="product-lockup"><img src="./trait-compass-icon.svg" alt="trait-compass のコンパスアイコン" /><div><p className="section-kicker">PRODUCT / TRAIT-COMPASS</p><h2>「整理する」と「探す」を、<br />ひとつの流れに。</h2></div></div><p className="lead"><strong>trait-compass</strong> は、発達特性と日常の困りごとを整理し、公的な支援情報へつなぐブラウザ完結型のセルフチェックアプリです。医療行為ではありません。</p></div>
      <div className="entry-options" aria-label="trait-compassの始め方"><a className="entry-option" href={surveyUrl} target="_blank" rel="noreferrer"><span className="entry-icon" aria-hidden="true">◎</span><span><strong>セルフチェックから</strong><small>約5分・30問で傾向を整理する</small></span><b aria-hidden="true">→</b></a><a className="entry-option" href={supportUrl} target="_blank" rel="noreferrer"><span className="entry-icon" aria-hidden="true">⌕</span><span><strong>相談先を探すことから</strong><small>年齢と地域から公的な窓口を探す</small></span><b aria-hidden="true">→</b></a></div>
      <ol className="flow">{flow.map(([title, text], index) => <li key={title}><span className="flow-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <div className="architecture-intro"><h3>AIに頼りすぎない、4段のしくみ</h3><p className="lead">生成AIをすべての入口に置くのではなく、確かなデータで答えられることはデータで答える構成にしています。</p></div>
      <ol className="architecture-diagram" aria-label="trait-compassのシステム構成">{architecture.map(([title, text], index) => <li key={title}><span className="flow-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <div className="feature-row"><div><h3>結果を、行動につなげる</h3><p>レーダーとベン図で傾向を見やすくし、上位カテゴリを相談分野へ読み替えます。年齢と区市町村を選ぶと、相談窓口・支援制度・福祉ガイドを探せます。</p></div><a className="text-link" href={demoUrl} target="_blank" rel="noreferrer">デモで体験する <span aria-hidden="true">→</span></a></div>
    </div></section>

    <section className="section section-tint"><div className="container"><div className="section-heading"><div><p className="section-kicker">PRIVACY BY DESIGN</p><h2>情報の扱いも、<br />わかりやすく選べるように。</h2></div><p className="lead">センシティブな情報だからこそ、何が端末に残り、いつ外部とやり取りするのかを、機能ごとに分けて伝えます。</p></div><div className="principle-grid">{principles.map(([title, text]) => <ContentCard key={title} tone="good"><span className="card-label">PRIVACY</span><h3>{title}</h3><p>{text}</p></ContentCard>)}</div><p className="privacy-footnote">AIによる要約・関連情報の案内は、完全オプトインです。危機的な内容はAIで扱わず、公的な相談窓口を案内します。</p></div></section>

    <section id="outcomes" className="section"><div className="container narrow"><p className="section-kicker">SOCIAL IMPACT</p><h2>目指す成果</h2><p className="lead">「良いことをしている」で終わらせず、成果を測れるかたちで定義しています。実績値はtrait-compassの成果ページで、いつでも最新の状態を確認できます。</p><ContentCard tone="good"><span className="card-label">主要KPI</span><h3>次の行動の手がかり率</h3><p>利用後のアンケート「次に何をすればよいか分かりましたか？」への肯定回答の割合です。診断ではなく「次の一歩」につなぐという、このサービスの目的そのものを測ります。</p></ContentCard><ul className="outcome-sub"><li><strong>支援情報一覧への到達数</strong> — 相談先の候補に実際にたどり着けた回数</li><li><strong>相談メモ画面への到達数</strong> — 相談の準備まで進んだ回数</li></ul><p className="privacy-footnote">計測は始まったばかりで、回答数はまだごく少数です。数字が小さいうちから公開し、育てていきます。</p><a className="text-link" href={outcomesUrl} target="_blank" rel="noreferrer">最新の実績値を見る（trait-compass 成果ページ） <span aria-hidden="true">→</span></a></div></section>

    <section id="judging-points" className="section section-tint"><div className="container"><p className="section-kicker">JUDGING POINTS</p><h2>5つの審査観点への答え</h2><p className="lead question-lead">ハッカソンの審査観点に沿って、私たちが作ったものを先にまとめます。詳しい自己点検は、この下の「8つの問い」に続きます。</p><dl className="criteria-list">{criteria.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl></div></section>

    <section id="eight-questions" className="section"><div className="container"><p className="section-kicker">EIGHT QUESTIONS</p><h2>できていることも、<br />これからのことも公開する。</h2><p className="lead question-lead">trait-compassは、行政向けAIサービス設計のフレームワーク「8つの問い」に沿って自己点検しています。</p><h3 className="group-heading">設計で応えられていること</h3><div className="card-grid questions">{questions.map(([mark, title, text]) => <ContentCard key={title} tone="good"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><h3 className="group-heading">これからの課題</h3><div className="card-grid questions">{challenges.map(([mark, title, text]) => <ContentCard key={title} tone="challenge"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><p className="closing">私たちはこの3つを、伸びしろとして公開し続けます。</p></div></section>

    <section id="demo" className="demo-section"><div className="container demo-grid"><div><p className="section-kicker">TRY THE DEMO</p><h2>気になった今、<br />自分のペースで。</h2><p>セルフチェックからでも、相談先を探すことからでも始められます。</p></div><div className="demo-action"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass を試す <span aria-hidden="true">↗</span></a><p className="disclaimer">本サービスは医療行為ではありません。結果は医学的な判定を示すものではなく、公的な相談窓口への相談を後押しするためのものです。</p><a className="coming-soon" href="https://github.com/yunbow/trait-compass" target="_blank" rel="noreferrer">GitHubリポジトリ: trait-compass <span aria-hidden="true">↗</span></a></div></div></section>
  </main><a className="mobile-cta" href={demoUrl} target="_blank" rel="noreferrer">trait-compassを試してみる <span aria-hidden="true">↗</span></a><footer><div className="container footer-content"><div className="footer-brand"><img src="./logo-transparent-outline.png" alt="CivicUnknot チームロゴ" /><p>© 2026 CivicUnknot</p></div><div><p>東京都知事杯オープンデータ・ハッカソン2026 参加チーム</p><p>支援情報データ出典: 東京都オープンデータカタログサイトおよび区市町村オープンデータ</p></div></div></footer>
  </>
}
