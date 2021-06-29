/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/favicon.png",
    "revision": "11a077955d9baa3df0f388b267462469"
  },
  {
    "url": "static/icons/favicon.png"
  },
  {
    "url": "styles.3f0a7ec7074e191a3961.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-0e597f20bd8f548e069f.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-c7bfcee6110dd33a91c5.js"
  },
  {
    "url": "app-22eafaba83a64bbdbcf1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5926c893da9eb1af565311644aed6b4a"
  },
  {
    "url": "webpack-runtime-73db45f57271593440ae.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "polyfill-de3cd8f71b81e7cfc6f9.js"
  },
  {
    "url": "05d954cf-8519981dbcfd141b56ed.js"
  },
  {
    "url": "9f70b16ea71fb14f101d9de1c0b981c9b4c9653d-bbea201f62de75ac9b76.js"
  },
  {
    "url": "be76f471b20cc10e0e2924bc36c010f1b4c88dcf-e8d5c597196995a5249a.js"
  },
  {
    "url": "604a744d2c251c356f4883de75fbe215c488e05b-42359052aa280417b65a.js"
  },
  {
    "url": "component---src-pages-index-tsx-9aba661f5f56e3a7c047.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "fcf84427fbb4dad8956c50ecd5092f3c"
  },
  {
    "url": "page-data/sq/d/1093090721.json",
    "revision": "ab07decaab1cb4dd079ec295f4067d77"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "c48d48b80e595994344fb5ff6f5aefd0"
  },
  {
    "url": "component---src-templates-page-tsx-ee7cfd8c9a9e71ece862.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "9529b9c8e35662d8aa11e2bd6d400a85"
  },
  {
    "url": "page-data/fa/page-data.json",
    "revision": "7051189b32ae6617bdf2a0d6ff74bb79"
  },
  {
    "url": "component---src-pages-404-tsx-8315a9f8ad76bbee0a05.js"
  },
  {
    "url": "page-data/fa/404/page-data.json",
    "revision": "bbb50b3b76b46e5c662f15a020506069"
  },
  {
    "url": "page-data/fa/about/page-data.json",
    "revision": "1de4f326761cd98c86589cf34279854e"
  },
  {
    "url": "component---src-pages-artworks-tsx-ef35d6625cfaaeca85c6.js"
  },
  {
    "url": "page-data/fa/artworks/page-data.json",
    "revision": "e5adbcd5961d55796ac43ca447705564"
  },
  {
    "url": "component---src-templates-artwork-tsx-244f0480fcc30491ed69.js"
  },
  {
    "url": "page-data/fa/artworks/A-Way-Out/page-data.json",
    "revision": "a20114a9bdeebb27c83c1bd0e28f8a57"
  },
  {
    "url": "page-data/fa/artworks/Fananees-series/page-data.json",
    "revision": "144594475c4eb9ab52182d104a6f606d"
  },
  {
    "url": "page-data/fa/artworks/Freedom-Song/page-data.json",
    "revision": "dcdeda8d322140021386ed63d9c060e6"
  },
  {
    "url": "page-data/fa/artworks/Ghost City/page-data.json",
    "revision": "510a4efdc364ec32841d1214594a8b2e"
  },
  {
    "url": "page-data/fa/artworks/Giant-The-Shepherd/page-data.json",
    "revision": "b4fea34c5deae3a8a028b70772472e6e"
  },
  {
    "url": "page-data/fa/artworks/Nazeer/page-data.json",
    "revision": "00ab037a72e9a83976aebe5fa3ba9e5e"
  },
  {
    "url": "page-data/fa/artworks/Old-Hospital/page-data.json",
    "revision": "c627cf7ad3e0253bd35b785139d28829"
  },
  {
    "url": "page-data/fa/artworks/Parking/page-data.json",
    "revision": "789cd964fba0ecf74dae7a948d25c66e"
  },
  {
    "url": "page-data/fa/artworks/Real-Smoke!/page-data.json",
    "revision": "652fe86c0e5f54af1523698c9d782ef3"
  },
  {
    "url": "page-data/fa/artworks/Shiv/page-data.json",
    "revision": "da599c1e9ce1a02b17f705fcca4ce248"
  },
  {
    "url": "page-data/fa/artworks/Simple-Cube-E01/page-data.json",
    "revision": "fb842d07ea75b95612e86538f0402490"
  },
  {
    "url": "page-data/fa/artworks/Simple-Cube-E02/page-data.json",
    "revision": "6386d4b6ade9da3d6cedb9c234e9fd44"
  },
  {
    "url": "page-data/fa/artworks/Stairs/page-data.json",
    "revision": "eeef01e29f1c1e13ac218e0bf9edfd70"
  },
  {
    "url": "page-data/fa/artworks/the-year-that-passed-2020/page-data.json",
    "revision": "474689d91700baebb4f2474f28f4026e"
  },
  {
    "url": "page-data/fa/artworks/Tiny-Tank/page-data.json",
    "revision": "9030df3f1e82ed92a6332824e1a5c697"
  },
  {
    "url": "component---src-pages-blog-tsx-50cfb608270feb3d6e00.js"
  },
  {
    "url": "page-data/fa/blog/page-data.json",
    "revision": "defcda71d5957eed0e5ca1e1f5c53452"
  },
  {
    "url": "component---src-templates-blog-tsx-633d938829ee26677b7c.js"
  },
  {
    "url": "page-data/fa/blog/Giant-Face-Color-Tut/page-data.json",
    "revision": "dcafa9c3b8cac2a52bc64f9027a592e4"
  },
  {
    "url": "component---src-pages-filmography-tsx-cfcf3e6c39e483457585.js"
  },
  {
    "url": "page-data/fa/filmography/page-data.json",
    "revision": "72fbfdb71f0b60c6c010a88563dc77b8"
  },
  {
    "url": "page-data/fa/filmography/abadan-1160/page-data.json",
    "revision": "433a48c4dc2c8e176292ff4de46f6ebc"
  },
  {
    "url": "page-data/fa/filmography/Cheetoz-Chips/page-data.json",
    "revision": "af848cb674c71687fa597f80bef0b0e5"
  },
  {
    "url": "page-data/fa/filmography/cheetoz-mr-fish/page-data.json",
    "revision": "70a837e201980ab8cbd3de00166d1243"
  },
  {
    "url": "page-data/fa/filmography/frog/page-data.json",
    "revision": "c55e8531bbe9084bf3e5adeca8076572"
  },
  {
    "url": "page-data/fa/filmography/no-fly-zone/page-data.json",
    "revision": "1018552232183363d4cc956aa1548cdc"
  },
  {
    "url": "page-data/fa/filmography/saaho/page-data.json",
    "revision": "e5ab1405807ceb26617d8c7a17109baa"
  },
  {
    "url": "page-data/fa/filmography/sun-children/page-data.json",
    "revision": "9ec64d1e776addf80d4fd84e7632e921"
  },
  {
    "url": "page-data/fa/filmography/syeraa/page-data.json",
    "revision": "ff9098909deb260bcccf435c387ceac9"
  },
  {
    "url": "page-data/fa/filmography/the-undercover/page-data.json",
    "revision": "68d3514126752224b1e5a0734daa42b5"
  },
  {
    "url": "page-data/fa/filmography/بی همه چیز/page-data.json",
    "revision": "9c1a04eda0152fbb3eb70c70ee04fa4e"
  },
  {
    "url": "page-data/fa/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "0607ab0b250488c0cdf656c5df9d1a73"
  },
  {
    "url": "component---src-templates-tag-tsx-d66edc1dbb7486ba6569.js"
  },
  {
    "url": "page-data/fa/tags/animation/page-data.json",
    "revision": "5994555f65b8ffe93529621511ca763b"
  },
  {
    "url": "page-data/fa/tags/article/page-data.json",
    "revision": "3c37be8b1b2bc262a085db94ee26fb72"
  },
  {
    "url": "page-data/fa/tags/daily/page-data.json",
    "revision": "062901bcf69999748f4eb7e49212ccbb"
  },
  {
    "url": "page-data/fa/tags/getting-started/page-data.json",
    "revision": "1992dc880f321ac3a9c3e279f756376c"
  },
  {
    "url": "page-data/fa/tags/image/page-data.json",
    "revision": "0d994e31096cf505456d099145105122"
  },
  {
    "url": "page-data/fa/tags/review/page-data.json",
    "revision": "1e5e0329386667b9344c4d970dfd518f"
  },
  {
    "url": "page-data/fa/tags/speeches/page-data.json",
    "revision": "9032de69eaa3579f6acbba6be4980584"
  },
  {
    "url": "page-data/fa/tags/tutorial/page-data.json",
    "revision": "5f53368b8936790731ffff269218ef11"
  },
  {
    "url": "component---src-pages-tutorials-tsx-f6bacb0a0ac33cbce32d.js"
  },
  {
    "url": "page-data/fa/tutorials/page-data.json",
    "revision": "ac914d01f513172d85eaf9cfacb50f79"
  },
  {
    "url": "component---src-templates-tutorial-tsx-b681c0d918604ee2c667.js"
  },
  {
    "url": "page-data/fa/tutorials/style-tutorialsdd/page-data.json",
    "revision": "a0181166e5408c6542c7bf4151fa8a11"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "81baaeae8d7828958479c0a0a2ea8769"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-22eafaba83a64bbdbcf1.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
