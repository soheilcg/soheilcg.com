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
    "url": "styles.ccd93fd94010e07fcd4e.css"
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
    "url": "app-05cbf9841177c981c4b4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "37984918f6c005eff695f267a2d75b08"
  },
  {
    "url": "webpack-runtime-128bc2d203a122563fa4.js"
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
    "url": "9f70b16ea71fb14f101d9de1c0b981c9b4c9653d-046d998ef1dae19fea68.js"
  },
  {
    "url": "be76f471b20cc10e0e2924bc36c010f1b4c88dcf-e8d5c597196995a5249a.js"
  },
  {
    "url": "604a744d2c251c356f4883de75fbe215c488e05b-b969dada6313eb5e8d36.js"
  },
  {
    "url": "component---src-pages-index-tsx-219ca49d36be921ef250.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "6fea65ce5405c2470c09976a2debdd5e"
  },
  {
    "url": "page-data/sq/d/1093090721.json",
    "revision": "61a27ca11a13ce6b8c730c55098aec98"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b9db005fc5a9a1350ef8b63369639d9d"
  },
  {
    "url": "component---src-templates-page-tsx-9b64d1ed82d6cd92ccfb.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "092864108aae6509127c297d739a5a7b"
  },
  {
    "url": "page-data/fa/page-data.json",
    "revision": "8d581862bca30a0dfeee3362782d16de"
  },
  {
    "url": "component---src-pages-404-tsx-b96bbee1f8af8b3a8199.js"
  },
  {
    "url": "page-data/fa/404/page-data.json",
    "revision": "c0180419a1fac507ba61d8884cab22a1"
  },
  {
    "url": "page-data/fa/about/page-data.json",
    "revision": "cdb20c4b2faffd7912c2ed62a9942eec"
  },
  {
    "url": "component---src-pages-artworks-tsx-460327f88a7939b8a811.js"
  },
  {
    "url": "page-data/fa/artworks/page-data.json",
    "revision": "f2fd3603141adc0cdf729fb5624bcb6d"
  },
  {
    "url": "component---src-templates-artwork-tsx-dea4e0ad0502089fbf8e.js"
  },
  {
    "url": "page-data/fa/artworks/A-Way-Out/page-data.json",
    "revision": "a20114a9bdeebb27c83c1bd0e28f8a57"
  },
  {
    "url": "page-data/fa/artworks/Fananees-series/page-data.json",
    "revision": "1510d4893ab9971420f9e81ffb90ac12"
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
    "url": "page-data/fa/artworks/My-Showreel-2021/page-data.json",
    "revision": "b014424a3bc0ca69bb3989d5388854fd"
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
    "url": "page-data/fa/artworks/Simple-Cube-E01/page-data.json",
    "revision": "87f6adddb510a54d594d9c7bc3c939df"
  },
  {
    "url": "page-data/fa/artworks/Simple-Cube-E02/page-data.json",
    "revision": "c50dccb22e9b2eb406730fca9e144219"
  },
  {
    "url": "page-data/fa/artworks/so-what/page-data.json",
    "revision": "07b082305b73fd5fc8c76fc650d3b7d3"
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
    "url": "component---src-pages-blog-tsx-029824ef5ce056a64c5e.js"
  },
  {
    "url": "page-data/fa/blog/page-data.json",
    "revision": "404af4f7b17537269314de9a95474185"
  },
  {
    "url": "component---src-templates-blog-tsx-453ae89c85d531be8ed8.js"
  },
  {
    "url": "page-data/fa/blog/Giant-Face-Color-Tut/page-data.json",
    "revision": "ac84ccaf0d28220cb7600d2131792fb8"
  },
  {
    "url": "page-data/fa/blog/javads-barber-castle/page-data.json",
    "revision": "d9849df0189ab4f74a5f783129ccdc49"
  },
  {
    "url": "page-data/fa/blog/Pickles/page-data.json",
    "revision": "7a48ce4bb1b0ffb4aa1453faf638af2e"
  },
  {
    "url": "page-data/fa/blog/Real-Story-Of-Birds/page-data.json",
    "revision": "6211a477d68b128e47d990ecb0691b3a"
  },
  {
    "url": "page-data/fa/blog/Top-Student/page-data.json",
    "revision": "7db06ed68d9d6d7a06411b7ca46025a8"
  },
  {
    "url": "component---src-pages-filmography-tsx-e5386bdfbb9af5eec7f2.js"
  },
  {
    "url": "page-data/fa/filmography/page-data.json",
    "revision": "06d5e43de19025ac24f2123228989c50"
  },
  {
    "url": "page-data/fa/filmography/abadan-1160/page-data.json",
    "revision": "433a48c4dc2c8e176292ff4de46f6ebc"
  },
  {
    "url": "page-data/fa/filmography/Bir-Bank/page-data.json",
    "revision": "fbd65334db21b2080baaffa66cc4fa36"
  },
  {
    "url": "page-data/fa/filmography/Cheetoz-Chips/page-data.json",
    "revision": "a3147e275e166bb631e4e18a9279960e"
  },
  {
    "url": "page-data/fa/filmography/cheetoz-mr-fish/page-data.json",
    "revision": "8afdb9037faffae6cc8dff3651dc189a"
  },
  {
    "url": "page-data/fa/filmography/frog/page-data.json",
    "revision": "ca4dee20250b282737b316a7c1ec4064"
  },
  {
    "url": "page-data/fa/filmography/no-fly-zone/page-data.json",
    "revision": "1018552232183363d4cc956aa1548cdc"
  },
  {
    "url": "page-data/fa/filmography/Once-Upon-a-Time-in-Iran/page-data.json",
    "revision": "a587fa67e0cdfb1610a0d6b7c672630d"
  },
  {
    "url": "page-data/fa/filmography/Red-Square`/page-data.json",
    "revision": "54def9dbc64701a4ac326fe4254fe31c"
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
    "url": "page-data/fa/filmography/V-Nut/page-data.json",
    "revision": "d4bbde31664b4b6052dc1fd538475f54"
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
    "url": "component---src-templates-tag-tsx-ea47f9552685c4b45643.js"
  },
  {
    "url": "page-data/fa/tags/animation/page-data.json",
    "revision": "8e43311ba9db34462693573d458397f7"
  },
  {
    "url": "page-data/fa/tags/article/page-data.json",
    "revision": "3c37be8b1b2bc262a085db94ee26fb72"
  },
  {
    "url": "page-data/fa/tags/daily/page-data.json",
    "revision": "c3b36ecff9f98b5c605c18c6ba56f6c3"
  },
  {
    "url": "page-data/fa/tags/getting-started/page-data.json",
    "revision": "1992dc880f321ac3a9c3e279f756376c"
  },
  {
    "url": "page-data/fa/tags/image/page-data.json",
    "revision": "0d4ab5d426d8e03666d3a3f0069056b2"
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
    "revision": "aae5e3fd88ac716bb84b50ee45bbd362"
  },
  {
    "url": "component---src-pages-tutorials-tsx-514fe47a34d7aaa53e06.js"
  },
  {
    "url": "page-data/fa/tutorials/page-data.json",
    "revision": "ac914d01f513172d85eaf9cfacb50f79"
  },
  {
    "url": "component---src-templates-tutorial-tsx-59671a8ad1d135d05769.js"
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
  if (!resources || !(await caches.match(`/app-05cbf9841177c981c4b4.js`))) {
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
