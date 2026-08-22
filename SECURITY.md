# セキュリティポリシー

## 対象範囲

このリポジトリは、CivicUnknot のチーム紹介用静的 Web サイトです。React と Vite によって生成したファイルを GitHub Pages で公開します。

サイト自体は入力フォーム、サーバーサイド処理、データベースを持たず、訪問者の情報を収集・保存しません。掲載している trait-compass へのリンク先は別サービスであり、そのセキュリティに関する報告は当該サービスの窓口をご利用ください。

## 脆弱性の報告

XSS、依存パッケージの脆弱性、意図しない外部リソースの読み込み、リンク先の取り違えなどのセキュリティ上の脆弱性を発見した場合は、公開の Issue には投稿せず、GitHub の Private Vulnerability Reporting（[Security タブの「Report a vulnerability」](https://github.com/yunbow/civic-unknot/security/advisories/new)）から非公開でご報告ください。修正が公開されるまで、公開の Issue や Pull Request に脆弱性の詳細や再現手順を記載することは避けてください。

表示崩れやリンク切れなど、セキュリティに関わらない通常の不具合は、[GitHub Issues](https://github.com/yunbow/civic-unknot/issues) をご利用ください。

## サポート対象バージョン

`main` ブランチの最新版を継続的にメンテナンスします。過去バージョンへの個別対応は行いません。
