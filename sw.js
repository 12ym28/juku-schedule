// ===================================================
// Service Worker - 自動アップデート対応版
// バージョンを上げるだけで全ユーザーに更新が届く
// ===================================================

const VERSION = 'v1.0.1'; // ← アップデート時はここの数字を上げる
const CACHE_NAME = `juku-pwa-${VERSION}`;

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// インストール：新バージョンのファイルをキャッシュ
self.addEventListener('install', e => {
  console.log(`[SW] Installing ${VERSION}`);
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()) // 即座に新SWを有効化
  );
});

// アクティベート：古いバージョンのキャッシュを全削除
self.addEventListener('activate', e => {
  console.log(`[SW] Activating ${VERSION}`);
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME) // 現バージョン以外を削除
          .map(k => {
            console.log(`[SW] Deleting old cache: ${k}`);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim()) // 全タブに即反映
  );
});

// フェッチ：キャッシュ優先、なければネットワーク
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // 成功したレスポンスはキャッシュに追加
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    })
  );
});

// メッセージ受信：強制アップデート指示
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
