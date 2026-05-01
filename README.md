# 📚 塾スケジュール管理 PWA

塾・予備校生のためのスケジュール管理ツールです。

## ファイル構成

```
juku-pwa/
├── index.html       ← メインアプリ
├── manifest.json    ← PWA設定
├── sw.js            ← Service Worker（オフライン対応）
├── icons/
│   ├── icon-192.png ← アプリアイコン
│   └── icon-512.png ← アプリアイコン（大）
└── README.md        ← このファイル
```

---

## 🚀 公開方法（GitHub Pages 無料）

### 手順

1. **GitHubアカウントを作成**（持っていない場合）
   - https://github.com へアクセス → Sign up

2. **新しいリポジトリを作成**
   - 右上の「＋」→「New repository」
   - リポジトリ名: `juku-schedule`（任意）
   - Public を選択
   - 「Create repository」

3. **ファイルをアップロード**
   - 「uploading an existing file」をクリック
   - `juku-pwa/` フォルダ内のファイルを全て選択してドラッグ
   - 「Commit changes」

4. **GitHub Pages を有効化**
   - リポジトリの「Settings」タブ
   - 左メニュー「Pages」
   - Source: 「Deploy from a branch」
   - Branch: `main` / `(root)` を選択
   - 「Save」

5. **URLが発行される（数分後）**
   ```
   https://あなたのユーザー名.github.io/juku-schedule/
   ```

6. **このURLを塾生に共有する**

---

## 📱 スマホのホーム画面に追加する方法

### iPhone（Safari）
1. Safariでアプリを開く
2. 下の「共有」ボタン（四角に上矢印）をタップ
3. 「ホーム画面に追加」をタップ
4. 「追加」をタップ

### Android（Chrome）
1. Chromeでアプリを開く
2. 画面上部にバナーが表示される → 「追加する」をタップ
   （バナーが出ない場合：メニュー → 「ホーム画面に追加」）

---

## 💡 今後の改善（Step2以降）

| やること | 内容 |
|---|---|
| Firebase追加 | クラウド保存・複数端末同期 |
| ログイン機能 | 生徒ごとにデータを管理 |
| 先生用管理画面 | スケジュールを一括配信 |

---

## 🔒 データについて

- データは**各自のスマホ・PCのブラウザ**に保存されます
- 設定 → 「バックアップ」でJSONファイルに書き出せます
- 機種変更時はバックアップ→復元で引き継げます
