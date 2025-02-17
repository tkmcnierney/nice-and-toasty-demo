'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1dc1580152d13a1e78f0a39496361441",
"version.json": "8a71a2502eaf4d4ff39efc707e6d2723",
"index.html": "3e8befbff1e5c65dc6ead5e85461353e",
"/": "3e8befbff1e5c65dc6ead5e85461353e",
"main.dart.js": "c9b3b39107ba11b898bcacb5297897aa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d4370611f678f5cf88b9794de9421b6b",
"assets/AssetManifest.json": "66f96a4eaf8a5487dae6aabb893bfabd",
"assets/NOTICES": "d6d26c209a1148e8cb30823482eee3b8",
"assets/FontManifest.json": "44ea6bc2b26fa7c5bd65bd0d4ab70f3a",
"assets/AssetManifest.bin.json": "cd94e909b5ca7cb36fa217d1c3faf647",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "58968d187c70632e9190d3aeda7e3e9a",
"assets/fonts/Kollektif.ttf": "4d49be6e42d18464b230d87d1fab175a",
"assets/fonts/Kollektif-BoldItalic.ttf": "6763df240291636923f89e208ef12b5e",
"assets/fonts/Kollektif-Italic.ttf": "a28604a01636f3a9249559626bc6e5ab",
"assets/fonts/LuckiestGuy-Regular.ttf": "79188087ce07615e9fb2c074d8808bdb",
"assets/fonts/MaterialIcons-Regular.otf": "b72c34b85129bec1389c0223a6668127",
"assets/fonts/Kollektif-Bold.ttf": "04c38a99d8afcbb092591a7a88a39a88",
"assets/assets/sizzling.png": "0091513354d8f5123a8275f3bd05a8a0",
"assets/assets/rules.png": "23e50258ab2e35ce84dc89b39cea2735",
"assets/assets/winner.png": "0643b2d2944c8bcf4e6eb837461871f5",
"assets/assets/play_button_desaturated.png": "f1f3c8d0952624f8268a94023ff3bfe5",
"assets/assets/play_again.png": "eded00d3c12ec59c50952a23e8f0075c",
"assets/assets/background.png": "b2f788256c94320890c1bde6f821717a",
"assets/assets/logo.png": "50facf49dc97233ebd1e51c6ec5e92ad",
"assets/assets/play_button.png": "3d490c6543aa224bb0156212390bd7a5",
"assets/assets/feedback.png": "8a994a867d0b35150fe30b9133557a26",
"assets/assets/toasty.png": "7085aaab8d8c6c0f5f6a6270a2597333",
"assets/assets/deck/Truth-11.png": "6f3d7b9705f5da92ce8d30822b302134",
"assets/assets/deck/Spotlight-45.png": "47b5d99052fa73ed1d9a5964ef105651",
"assets/assets/deck/Pop%2520Quiz-27.png": "1ae65178a8e2651f332fec040834732a",
"assets/assets/deck/Pop%2520Quiz-26.png": "cd2ab76d9ebad0f875020a89e8d33de6",
"assets/assets/deck/Spotlight-44.png": "24d59acb0940bc1512c12b03fe411515",
"assets/assets/deck/Truth-10.png": "7ee99c965bdb61c4c662da0294edc40a",
"assets/assets/deck/Truth-12.png": "8ab82c0b31abd0332fa57ece56a96523",
"assets/assets/deck/Pop%2520Quiz-18.png": "fe71ec52dc8d76fd5bfc7087b0ad3fb3",
"assets/assets/deck/Pop%2520Quiz-24.png": "9fddb8d6bf1df7bc1131961ccd37f4fc",
"assets/assets/deck/Pop%2520Quiz-30.png": "a9a666f04b57ba33d00191593d629d40",
"assets/assets/deck/Pop%2520Quiz-25.png": "106647c54066024d17914af35f9177f3",
"assets/assets/deck/Pop%2520Quiz-19.png": "ff9d3c7dd647d0fab24fcf053e221b9d",
"assets/assets/deck/Truth-13.png": "8265e7c20d4eeb1d82a545df5bbfd02c",
"assets/assets/deck/Spotlight-43.png": "a4d873e7988b783d1cf862856a4cbdc8",
"assets/assets/deck/Pop%2520Quiz-21.png": "bb73fdad9ac70028f8723ab6f02a8b4e",
"assets/assets/deck/Pop%2520Quiz-20.png": "8ff49c2d12b6f174ea90aa8d4718b945",
"assets/assets/deck/Spotlight-42.png": "ebc4f5a51cca8f9472d3f1c8a9c5719b",
"assets/assets/deck/Truth-14.png": "b440617a36559aa50d0339d24c851881",
"assets/assets/deck/Spotlight-40.png": "c4e45c8644795dbc4a57b3bc1d330949",
"assets/assets/deck/Pop%2520Quiz-22.png": "4ba51ca4c1458e9fc38b6d1a77a38e76",
"assets/assets/deck/Pop%2520Quiz-23.png": "bc0b6daa3bd4d4f38b21f691e66d89e8",
"assets/assets/deck/Spotlight-41.png": "fdf8458ee341e31a04f2d8941d402e66",
"assets/assets/deck/Truth-15.png": "e401e2b6f57abb415ea29479ec444dcd",
"assets/assets/deck/Spotlight-32.png": "7743794a79195dd25da9bc5ceb302885",
"assets/assets/deck/Truth-3.png": "0b5d615c3a4cbfe7fe1829f3836f52a2",
"assets/assets/deck/Truth-2.png": "766f3df7f67d26c93a3416e9e84e1505",
"assets/assets/deck/Spotlight-33.png": "abad44802bffc09f9b084d280aea65de",
"assets/assets/deck/Spotlight-31.png": "6b7fe3b15767555d8167d35242b1dc9d",
"assets/assets/deck/Truth-1.png": "06de6678717a948a177f8843e2102801",
"assets/assets/deck/Spotlight-34.png": "cdc20814292b0c0b17b539460a9a385a",
"assets/assets/deck/Truth-5.png": "853e14163ae31511de22644358bea81d",
"assets/assets/deck/Truth-4.png": "a25ede3623df59b592e1bdbfe9c1173e",
"assets/assets/deck/Spotlight-35.png": "a9bd21635104f46ea29bab55251cd812",
"assets/assets/deck/Spotlight-37.png": "a114ab5ccb834f35d9591c920491d618",
"assets/assets/deck/Truth-6.png": "fbd1abfbc13db4d25cf33a395ac15d92",
"assets/assets/deck/Truth-7.png": "5293235fd156ea4ed2335e7390195e62",
"assets/assets/deck/Spotlight-36.png": "dec2c52d2bc9165da69cb5aed65933c8",
"assets/assets/deck/Spotlight-38.png": "200befbe62d1c71bebb605524f3642b5",
"assets/assets/deck/Truth-9.png": "eee6ea85364d00ef69b072d6fcceb0e7",
"assets/assets/deck/Truth-8.png": "24185a0e36e90509b3b5ab1c076e165f",
"assets/assets/deck/Spotlight-39.png": "40f388274cfee931979c5f4e7fe9d868",
"assets/assets/deck/Pop%2520Quiz-28.png": "c5dc31fb7a827e8fa7796272e97c98fa",
"assets/assets/deck/Pop%2520Quiz-29.png": "9a187b34cfbf2f5248068ab3e256b3e7",
"assets/assets/deck/Pop%2520Quiz-17.png": "52daa27a3f490a948097731580be6ffc",
"assets/assets/deck/Pop%2520Quiz-16.png": "4409f4254142dd33c383ffb7ab959dca",
"assets/assets/continue_button.png": "893afe847b9c02a950550821d9d7b0b4",
"assets/assets/skip_button.png": "86f8758f1d5c75656e02e5129cf98146",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
