import { ContentCard } from '../components/ContentCard'
import { SiteHeader } from '../components/SiteHeader'

const demoUrl = 'https://trait-compass.trait-compass.workers.dev'
const questions = [
  ['◎', '問1 公共価値', '「気づき」と「相談」のあいだの空白を、信頼できるオープンデータとプライバシー保護設計で埋める。'],
  ['◎', '問2 誰の困りごとか', '文部科学省の全国調査（2022年公表）で8.8%に発達障害の可能性、うち43.2%は個別の配慮を受けていない。心理・情報・供給の3層の障壁を整理し、それぞれに対応。'],
  ['◎', '問3 必要十分なAI', 'セルフチェック本体は完全非AI・静的処理。AIはオプトインの別レイヤのみ。「使えば使うほど良い」ではなく「どこに要る/要らないか」を切り分け。'],
  ['◎', '問4 AIと人の役割分担', '完全オプトイン・送信前プレビュー・ログ非保存。危機的な内容はAIが扱わず公的窓口の案内のみ。最終的な意味づけは本人に委ねる。'],
  ['◎', '問6 データ活用と説明可能性', '根拠ソースの明示、ライセンス区分の自動判定、生成テキストの捏造検知を自動テストで評価、データの偏りを可視化するカバレッジページ。'],
]
const challenges = [
  ['×', '問5 行政職員の業務との接続', '統一支援施設スキーマの提案はあるが、行政組織への接続実績はまだない。'],
  ['△', '問7 誰一人取り残されない設計', 'AIを使わなくても最短1分で窓口に到達できる設計とアクセシビリティ監査は済んでいる一方、多言語対応・デジタルに不慣れな方への配慮は今後の課題。'],
  ['△', '問8 成果測定', '需要検証の指標とAI品質評価（精度・捏造検知・危機対応ガード）の仕組みは設計済みだが、実運用の実績データはまだない。需要を確かめてから機能投資する運用ルールを最初から組み込んでいる。'],
]

export function HomePage() {
  return <><a className="skip-link" href="#main-content">本文へ移動</a><SiteHeader /><main id="main-content">
    <section id="top" className="hero"><div className="container hero-content">
      <p className="eyebrow">東京都知事杯オープンデータ・ハッカソン2026 参加チーム</p><img className="hero-logo" src="./logo.png" alt="CivicUnknot チームロゴ：ほどける結び目と、行政と都民をつなぐ橋" />
      <h1><span>Civic</span><em>Unknot</em></h1><p className="catchphrase">絡まりは、ほどける。気づきは、つながる。</p>
      <p className="mission">CivicUnknotは、複雑に絡まって見える制度や支援の情報を東京都のオープンデータの力でほどき、一人ひとりの「気づき」を信頼できる公的な相談窓口へつなぐことを目指すチームです。医療の手前にある「気づいたけれど、どこへ相談すればいいかわからない」という空白を、プライバシー保護とデータの裏づけを最優先にした設計で埋めていきます。行政との連携、デジタルに不慣れな方への配慮、実利用にもとづく効果検証はまだ道の途上ですが、その途上にあることも含めて正直に公開しながら進みます。</p>
      <div className="button-row"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass のデモを見る</a><a className="button button-secondary" href="#unknot">チームを知る</a></div>
    </div></section>
    <section id="unknot" className="section"><div className="container narrow"><p className="section-kicker">NAME &amp; LOGO</p><h2>「Unknot」とは — 名前とロゴにこめたもの</h2><p>結び目理論でいうunknotは、一見複雑に絡まって見えても、切らずにほどくと単純な輪に戻る結び目です。見え方は複雑でも、ほどく道筋をたどることで元の姿に戻れます。</p><p>制度・情報・支援窓口の絡まりも、切る（作り直す）のではなく、ほどける。ほどく道具がオープンデータです。</p><div className="card-grid three"><ContentCard><h3>結び目と光</h3><p>絡まりがほどける「気づき」を表しています。</p></ContentCard><ContentCard><h3>ネットワークグラフ</h3><p>オープンデータとつながりを表しています。</p></ContentCard><ContentCard><h3>橋と議事堂・スカイツリー</h3><p>行政と都民をつなぐ橋を表しています。</p></ContentCard></div></div></section>
    <section id="product" className="section section-tint"><div className="container"><p className="section-kicker">PRODUCT</p><h2>プロダクト: trait-compass</h2><p className="lead"><strong>trait-compass</strong> — 発達特性のセルフチェック結果を、東京都・区市町村のオープンデータによる公的相談窓口の案内へつなぐ支援ナビ。傾向の可視化とセルフチェックのためのツールであり、医療行為ではありません。結果はブラウザの中だけで完結し、外部には保存されません。</p><h3>体験フロー</h3><ol className="flow"><li>トップで免責を確認</li><li>セルフチェック（242問プールから10カテゴリ×3問＝30問、1問1画面・3件法・ブラウザ内完結・途中再開可）</li><li>結果の可視化（10カテゴリのレーダーチャート＋ASD/ADHD/LD/DCDベン図＋上位カテゴリ解説）</li><li>支援情報検索（年齢＋区市町村から相談窓口・支援制度・福祉ガイドをタブ表示。医療機関は載せず相談機関のみ）</li><li>AIオプション（要約・関連情報レコメンド・解説。完全オプトイン・送信前プレビュー必須）</li></ol><h3>主要機能</h3><div className="card-grid five">{['科学的根拠にもとづく自前242問データベース（既存尺度は不使用）','レーダー×ベン図の可視化','東京都・区市町村オープンデータ（CKAN API、台東区175施設の実取込を確認済み）による窓口検索','自動データ取込パイプライン（CKAN→R2→Workers AI→D1、死活監視付き）','ADHD・ASD・感覚過敏に配慮したアクセシビリティ設計（タイマーなし、prefers-reduced-motion対応、W3C COGA準拠）'].map(text => <ContentCard key={text}><p>{text}</p></ContentCard>)}</div><h3>プライバシー・安全設計</h3><ul className="plain-list"><li>非収益化（医療機関への送客ゼロ）</li><li>データ保存の三層分離（localStorage・IndexedDB・未保存の使い分け）</li><li>AI機能の4重ガード（完全オプトイン・送信内容プレビュー・ログ非保存・危機的な内容はAIが扱わず公的窓口の案内のみ）</li><li>オープンデータのライセンス遵守（出典クレジット必須）</li></ul><p className="tech">Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / Cloudflare Workers・D1・R2・Vectorize・Workers AI / Vertex AI Gemini Flash（AI Gateway経由）</p><div className="product-end"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass のデモを見る</a><p className="disclaimer">本サービスは医療行為ではありません。結果は医学的な判定を示すものではなく、公的な相談窓口への相談を後押しするためのものです。</p></div></div></section>
    <section id="eight-questions" className="section"><div className="container"><p className="section-kicker">EIGHT QUESTIONS</p><h2>サービス設計・8つの問いへの向き合い</h2><p className="lead">trait-compassは、行政向けAIサービス設計のフレームワーク「8つの問い」に沿って自己点検しています。できていることと、まだできていないことを、同じ場所に並べて公開します。</p><h3>設計で応えられていること</h3><div className="card-grid questions">{questions.map(([mark,title,text]) => <ContentCard key={title} tone="good"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><h3>これからの課題</h3><div className="card-grid questions">{challenges.map(([mark,title,text]) => <ContentCard key={title} tone="challenge"><h3><span>{mark}</span>{title}</h3><p>{text}</p></ContentCard>)}</div><p className="closing">私たちはこの3つを、伸びしろとして公開し続けます。</p></div></section>
    <section id="demo" className="demo-section"><div className="container narrow"><p className="section-kicker">DEMO</p><h2>trait-compass を試す</h2><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">trait-compass を試す</a><p className="disclaimer">本サービスは医療行為ではありません。結果は医学的な判定を示すものではなく、公的な相談窓口への相談を後押しするためのものです。</p><p className="coming-soon">GitHubリポジトリ: 近日公開</p></div></section>
  </main><footer><div className="container footer-content"><div><img src="./logo.png" alt="CivicUnknot チームロゴ：ほどける結び目と、行政と都民をつなぐ橋" /><p>© 2026 CivicUnknot</p></div><div><p>東京都知事杯オープンデータ・ハッカソン2026 参加チーム</p><p>支援情報データ出典: 東京都オープンデータカタログサイトおよび区市町村オープンデータ</p></div></div></footer>
  </>
}
