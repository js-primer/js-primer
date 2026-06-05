# JavaScript Primer [![test](https://github.com/js-primer/js-primer/actions/workflows/test.yml/badge.svg)](https://github.com/js-primer/js-primer/actions/workflows/test.yml)

この書籍はECMAScript 2015以降をベースとしたJavaScriptの入門書です。

今のJavaScriptがよくわからないという人が、
今のJavaScriptアプリケーションを読み書きできるようになる目的の書籍です。

ウェブ版は次のURLから閲覧できます。

- ウェブ版: <https://jsprimer.net/>

書籍版は次のページから購入できます。

- 物理書籍とKindle: [JavaScript Primer 改訂2版 迷わないための入門書 | azu, Suguru Inatomi |本 | 通販 | Amazon](https://www.amazon.co.jp/dp/4048931105/)
- PDFとepub: [JavaScript Primer 改訂2版【委託】 - 達人出版会](https://tatsu-zine.com/books/javascript-primer-2ed)

ウェブ版と書籍版の内容は基本的には同じです。
詳細は[ウェブ版と書籍版の違い](https://jsprimer.net/intro/#diff-with-print-version)を参照してください。

Twitterのハッシュタグは [#jsprimer](https://twitter.com/intent/tweet?hashtags=jsprimer) です。

## 書籍への支援方法

JavaScript PrimerはECMAScriptのアップデートに追従したり、現実の使い方を反映するために、継続してアップデートしています。
継続的にアップデートするために、書籍への支援はいつでも歓迎しています。

GitHub Sponsorsで著者を支援できます。

- [Sponsor @azu on GitHub Sponsors](https://github.com/sponsors/azu)

Open Collectiveでjsprimerプロジェクトを支援できます。
Open Collectiveでの支援には、サイト上にロゴを表示するといった企業向けの特典があります。

- [JavaScript Primer - Open Collective](https://opencollective.com/jsprimer)

**Gold Sponsors**

[![jsprimer sponsors](https://opencollective.com/jsprimer/sponsors.svg?width=890&avatarHeight=80)](https://opencollective.com/jsprimer#sponsors)

**Supporters**

[![jsprimer backers](https://opencollective.com/jsprimer/backers.svg?width=890&avatarHeight=40)](https://opencollective.com/jsprimer#backers)


また、書籍版へのレビューを書くことも支援に繋がります。

- [JavaScript Primer 改訂2版 迷わないための入門書 | azu, Suguru Inatomi |本 | 通販 | Amazon](https://www.amazon.co.jp/dp/4048931105/)

GitHubのDiscussions（掲示板）の他の人の質問に答えたり、JSPrimerを読んだ感想を書くことも支援になります。

- [Discussions · js-primer/js-primer](https://github.com/js-primer/js-primer/discussions)

Discussionsのガイドラインは次のスレッドにまとめられています。

- [👋 ようこそ JavaScript Primer へ ! · Discussion #1304 · js-primer/js-primer](https://github.com/js-primer/js-primer/discussions/1304)

書籍に対してIssueを立てたり、Pull Requestを送ったりして直接的に支援もできます。
IssueやPull Requestについては、次のページを参照してください。

- [文章の間違いに気づいたら · JavaScript Primer #jsprimer](https://jsprimer.net/intro/feedback/)

## :warning: Status :warning:

この書籍は開発中の内容となっています。

どのような経緯で動いているかはミーティングノートを参照してください。

- [Meeting Notes](https://github.com/js-primer/js-primer/tree/master/meetings "Meeting Notes")

リポジトリの更新を追いたい方はリポジトリをWatchしてください。

[![Watch button](./source/landing/img/repo-actions-watch.png)](https://github.com/js-primer/js-primer/watchers)

また、下記フォームからメールアドレスを登録しておくと更新情報を受け取れます。

- [更新通知を受け取るメールアドレスを登録するフォーム](https://us13.list-manage.com/subscribe?u=fc41e11a2b9dc6f05350e0de0&id=7ab1594ae8)

## Installation

    # corepackを有効化
    corepack enable
    # インストール
    npm ci

開発は次のバージョンのNode.jsとnpmで行われています。

```
$ node -v
v26.3.0
$ npm -v
11.16.0
```

## Usage

**Build**

HonKitのbuildをします。

    npm run build

**Watch**

HonKitのbuildかつWatchをします。
プレビューをする場合は、ローカルサーバーを利用してください。

次のコマンドを実行後、[http://localhost:4000/](http://localhost:4000/)へアクセスすることでプレビューを見られます。

    npm run start
    # open http://localhost:4000/

**Test**

このプロジェクトでは文章やコードに対してテストを実行しています。
文章中のインラインコードのテスト、特定のファイル名にもとづくテスト、コメントを使ったDocTestなどが含まれます。

以下のコマンドを実行すると全てのテストが実行されます。

    npm install && npm test


詳しくは [CONTRIBUTING.md](./CONTRIBUTING.md) を見てください。

## Contributing

小さなtypoでもIssueやPull Requestを歓迎しています。

コントリビュートの方法や確認方法については[CONTRIBUTING.md](./CONTRIBUTING.md)を参照してください。
また[文章の間違いに気づいたら](https://jsprimer.net/intro/feedback/)も参照してください。

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

[CODE_OF_CONDUCT](https://github.com/js-primer/js-primer/blob/master/.github/CODE_OF_CONDUCT.md)もあわせて参照してください。

## License

Copyright (c) 2016-present jsprimer project

jsprimerは次のライセンスで配布されています。

- ソースコード: [MITライセンス](./LICENSE-MIT)
- 文章: [CC BY 4.0](./LICENSE-CC-BY)

**ソースコード** とは、書籍中のサンプルコードやこのプロジェクトを構成するプログラムのソースコードを示します。
主にJavaScriptファイルに書かれたコードやMarkdownのコードブロックに書かれているサンプルコードを指します。

**文章**とは、書籍の文章やサイト上の文章を示します。
主にMarkdownファイルに書かれている文章を指します。

## Project Member

jsprimerプロジェクトは次のメンバーで構成されています。

- azu([@azu](https://github.com/azu))
- Suguru Inatomi([@lacolaco](https://github.com/lacolaco))

## Contact

バグ報告は次のページを参照してください。

- [文章の間違いに気づいたら · JavaScript Primer #jsprimer](https://jsprimer.net/intro/feedback/)

感想などのフィードバックには次のフォームを利用してください。

- [jsprimer.netの感想/フィードバック](https://docs.google.com/forms/d/e/1FAIpQLSc11vV1IO3dWEUDXDFE-I9IwxE-zoYWvfrJWLCHFxMcLWwdqA/viewform)

その他の連絡は次のメールアドレスに送ってください。

- info@jsprimer.net

## OSS Supporters

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" alt="Netlify"/>
</a>
