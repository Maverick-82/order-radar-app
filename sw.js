// 최소 서비스 워커: 설치형 앱(WebAPK) 인식을 위해 필요. 캐시 없이 네트워크 그대로 사용.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { /* 네트워크 우선(기본 동작) */ });
