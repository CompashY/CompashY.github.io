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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96275da50da4817d16c338893a9c7305"
  },
  {
    "url": "assets/css/0.styles.66d684e8.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.238563f2.js",
    "revision": "8aeb60be7e9282bc24a3729625b0c92b"
  },
  {
    "url": "assets/js/10.d7ebe35d.js",
    "revision": "5dfe007f296b8da5482e4980fb01c1f5"
  },
  {
    "url": "assets/js/14.afe76789.js",
    "revision": "e09a09a2660ddd4d72012b00bd0a7c01"
  },
  {
    "url": "assets/js/15.74eb4110.js",
    "revision": "48bfb5a12680e21a1fad25ca48cd8193"
  },
  {
    "url": "assets/js/16.de458767.js",
    "revision": "c3788709e46cb2fd8bb2278cef85f096"
  },
  {
    "url": "assets/js/17.155ce7ce.js",
    "revision": "9d1141aa4d8e4e157cb5b6c6c34e70e1"
  },
  {
    "url": "assets/js/18.b9ed37ac.js",
    "revision": "dd403fea88baa59c7ba37ee58a90a432"
  },
  {
    "url": "assets/js/19.2c5e5b5b.js",
    "revision": "1a40ce244a05f13a3c6a117eb7b1c59a"
  },
  {
    "url": "assets/js/2.496299c8.js",
    "revision": "0c1a063be4231fa307824490c467ff84"
  },
  {
    "url": "assets/js/20.3cd1b0ff.js",
    "revision": "434173508e64a6d4c463287a8415b629"
  },
  {
    "url": "assets/js/21.866b1ecc.js",
    "revision": "fa24fc220b4e6e6ec51b5024ee7d28dd"
  },
  {
    "url": "assets/js/22.47cd2858.js",
    "revision": "cf05d9f553ff0b801b4f36197bbf921f"
  },
  {
    "url": "assets/js/23.663de762.js",
    "revision": "0d7cabb39987864f16007936cb93965d"
  },
  {
    "url": "assets/js/24.427fa1ee.js",
    "revision": "fa40269ebf941a970bb846bd0ed6db5f"
  },
  {
    "url": "assets/js/25.d199256d.js",
    "revision": "1d5bda1df2d1713c3d5f9f51127afa07"
  },
  {
    "url": "assets/js/26.a97cc8e3.js",
    "revision": "8cb432c3b187c9569dac753fab952617"
  },
  {
    "url": "assets/js/27.d6e4bda7.js",
    "revision": "ca23beb6e037416a5eed3abee4c38e27"
  },
  {
    "url": "assets/js/28.afab28a4.js",
    "revision": "ecad932cd6acf19ff21428b49a157522"
  },
  {
    "url": "assets/js/29.82652176.js",
    "revision": "3d3ec0661469b74d37eb069e54d1d457"
  },
  {
    "url": "assets/js/3.db45bb20.js",
    "revision": "30f8184f5c40bd21f44a9d8159c0be96"
  },
  {
    "url": "assets/js/30.41077d1c.js",
    "revision": "2a6d8b3d4309163ea5afdb41e50ec5a7"
  },
  {
    "url": "assets/js/31.85e1f989.js",
    "revision": "dce81db418327f60201cf7ce3230e65f"
  },
  {
    "url": "assets/js/32.27b087b1.js",
    "revision": "b36d8d42f039a5cf00520995f1ecbf92"
  },
  {
    "url": "assets/js/33.60d4e13f.js",
    "revision": "5c95c258242e71c686d47b6a618ac367"
  },
  {
    "url": "assets/js/34.2807c690.js",
    "revision": "fad4453c4901c84ad02fbf50300bfb5d"
  },
  {
    "url": "assets/js/35.4adad1d4.js",
    "revision": "49989135236678df297b8eb75bd12b14"
  },
  {
    "url": "assets/js/36.a1650bb0.js",
    "revision": "a2a119c91c3fd08537928903dee5a182"
  },
  {
    "url": "assets/js/37.1adc1ff8.js",
    "revision": "104e8c030ed4f88a9ebb09157bbcfd4d"
  },
  {
    "url": "assets/js/38.da4fcbef.js",
    "revision": "942415fcbfa0509b21bb5b81719b6a41"
  },
  {
    "url": "assets/js/39.4615afa7.js",
    "revision": "373f1f6a456bb1340fb13c66b3320ded"
  },
  {
    "url": "assets/js/4.620edd08.js",
    "revision": "af74010a92e6ecab69dced183c6aba43"
  },
  {
    "url": "assets/js/40.a964914f.js",
    "revision": "75405135bca0c4ac01739af90785239f"
  },
  {
    "url": "assets/js/41.be09b632.js",
    "revision": "d2d681b488bbf9f055abf83a881a5f74"
  },
  {
    "url": "assets/js/42.eed4283c.js",
    "revision": "e9403f6fdd4c62d8c23f3f433e3175f8"
  },
  {
    "url": "assets/js/43.7dfd9ee8.js",
    "revision": "00a154385dfff0caac2381a3d4daf03f"
  },
  {
    "url": "assets/js/44.c32f3e57.js",
    "revision": "6863b7bbf8c8f9cd891f4c9eb2b6a710"
  },
  {
    "url": "assets/js/45.d692092e.js",
    "revision": "31bdacaadfb993e49dfbc4b844f65a9b"
  },
  {
    "url": "assets/js/5.914a2687.js",
    "revision": "a4124896c463754c57373439a84a5c51"
  },
  {
    "url": "assets/js/6.901a1f9a.js",
    "revision": "4ec06b0dc2f9ab2886ee9cbb823af737"
  },
  {
    "url": "assets/js/7.fcf5d18e.js",
    "revision": "53314a46987320fd9c9dd99318fe34c1"
  },
  {
    "url": "assets/js/8.c436a761.js",
    "revision": "52444a144a60471c86b2b65743aad9d7"
  },
  {
    "url": "assets/js/9.55bdbe0e.js",
    "revision": "273fff2a2da287caabf56186dbd1d444"
  },
  {
    "url": "assets/js/app.c0679835.js",
    "revision": "9a97294b2f50eb5ad42176a7022a9dba"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.8512197f.js",
    "revision": "c769d28bc27ebe3ee83cc3787c31b863"
  },
  {
    "url": "assets/js/vendors~flowchart.63dff3b6.js",
    "revision": "110377f28de45a35cbf89c289fa4f2a5"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "b86a9adb830d35f8b7b3badfed220fc1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3a7acb6007d2c4687115ab0746d2dc13"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c69aaf2e6b6270e79e4f85c84799c63f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "be2e2e84e7051aa411b5bd876255fc67"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "383a0355680baee2908c866ba7134ac0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7930a1482a391187a5c6d91e76b3c276"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a34bc2549d8e284921b1f1bbb253e3dc"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "88236b9a6ca44467d262581168f13ede"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "753c05a8e6b699fbed86a7f8ebe150f0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2cadab5ad6f2797446de5c5a0109bc84"
  },
  {
    "url": "tags/js/index.html",
    "revision": "819d860b6efcb45221062eaaf133f524"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "822069e29a8731b82bc73112b708f7da"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "66818087e214c65274b9e8d22f707c83"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6fb0fd5dcd565de8e8f8d260a0098f4d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ba1c3b11bcb13ae933098b277b80ee29"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8a77689ce3734e03a00408fa5b5e809c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "81b4eede16ec9343050abe908bc4347a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f4e06f7d5d603601bfbcec2e16c949de"
  },
  {
    "url": "timeline/index.html",
    "revision": "3cd9818ff7f3c82f0a7022639c1912b5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2047f8cf758f222dc2ee452703c5e2c8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "89326e3e9739f3e61e8d695095fad7e1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c0e5893b90da148426a86e56f0f47fd6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ab1700ef738bb9ffb8925d824dbe35ea"
  },
  {
    "url": "生活分享/life.html",
    "revision": "05e82bb97028209bca0423adb4fb8beb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
