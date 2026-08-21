# CivicUnknot

[![Lint & Link Check](https://github.com/yunbow/civic-unknot/actions/workflows/lint.yml/badge.svg)](https://github.com/yunbow/civic-unknot/actions/workflows/lint.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**デモ:** https://yunbow.github.io/civic-unknot/

複雑に絡まって見える制度や支援の情報を、東京都のオープンデータの力でほどき、一人ひとりの気づきを信頼できる公的な相談窓口へつなぐことを目指すチーム紹介サイトです。

- 「Unknot」という名前とロゴにこめた考え方
- 発達特性のセルフチェックと公的相談窓口の案内をつなぐ支援ナビ「trait-compass」の紹介
- プライバシー・安全設計と、オープンデータ活用の考え方
- 行政向けAIサービス設計フレームワーク「8つの問い」への向き合い

trait-compass のセルフチェック結果はブラウザ内で完結し、外部には保存されません。医療行為ではなく、公的な相談窓口への相談を後押しするためのツールです。

## 技術スタック

TypeScript / React 19 / Vite 8 / CSS

## 開発

```bash
cd app            # アプリケーションディレクトリへ移動
npm ci            # 依存関係をインストール
npm run dev       # 開発サーバーを起動
npm run build     # 型チェックと GitHub Pages 用の公開ファイルを生成
npm run preview   # ビルド結果をプレビュー
```

## デプロイ（GitHub Pages）

`main` ブランチへの push をトリガーに `.github/workflows/deploy.yml` が `app/` で `npm run build` を実行し、
`app/dist` を GitHub Pages へ自動デプロイします。ビルド成果物はリポジトリにコミットしません。
GitHub Pages の **Settings → Pages → Build and deployment → Source** は **GitHub Actions** を選択してください。
Vite の相対 `base: "./"` を使用しているため、プロジェクトサイトのサブパスでも動作します。

`npm run build` は型チェック・クライアントビルドに加え、`react-dom/server` によるサーバーサイドレンダリングを実行し、
`app/dist/index.html` にページ本文を静的に埋め込みます（軽量プリレンダリング）。JavaScript が無効な環境やクローラーにも
本文が見える状態でHTMLが配信され、JavaScript読み込み後は `hydrateRoot` でそのまま操作可能になります。

ローカルで公開ファイルを確認する場合は `cd app && npm run build && npm run preview` を実行してください。

## ディレクトリ構成

```text
app/
├─ src/
│  ├─ app/            アプリケーションの起点
│  ├─ components/     再利用可能な画面部品
│  ├─ pages/          ページコンポーネント
│  ├─ main.tsx        クライアントエントリ（hydrateRoot）
│  └─ entry-server.tsx サーバーサイドレンダリング用エントリ
├─ scripts/
│  └─ prerender.mjs   ビルド後にSSR結果をdist/index.htmlへ注入
├─ public/            ロゴ、OGP、検索エンジン向けの静的ファイル
├─ package.json
└─ vite.config.ts
```

## サービスについて

- trait-compass は、発達特性のセルフチェック結果を、東京都・区市町村のオープンデータによる公的相談窓口の案内へつなぐ支援ナビです。
- AI 機能は完全オプトインで、送信前プレビューとログ非保存を前提としています。
- 行政との接続、多言語対応やデジタルに不慣れな方への配慮、実運用における成果測定は、今後も公開しながら取り組む課題です。

## 免責事項

本サイトで紹介する trait-compass は医療行為ではありません。セルフチェックの結果は医学的な判定を示すものではなく、公的な相談窓口への相談を後押しするためのものです。

---
