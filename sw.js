if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),u={module:{uri:r},exports:t,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"14dd8d75e6fe92fd608f000b4ae4e050"},{url:"assets/app.81e61516.js",revision:null},{url:"assets/chunks/pwa.b3b4e6da.js",revision:null},{url:"assets/guide_why.md.749da652.js",revision:null},{url:"assets/guide_why.md.749da652.lean.js",revision:null},{url:"assets/index.md.4cc36be2.js",revision:null},{url:"assets/index.md.4cc36be2.lean.js",revision:null},{url:"assets/inter-cyrillic-ext.0877b0d9.woff2",revision:null},{url:"assets/inter-cyrillic.f8750142.woff2",revision:null},{url:"assets/inter-greek-ext.3e6f6728.woff2",revision:null},{url:"assets/inter-greek.117e1956.woff2",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-latin-ext.7cc429bc.woff2",revision:null},{url:"assets/inter-latin.4fe6132f.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/inter-vietnamese.2c644a25.woff2",revision:null},{url:"assets/README.md.40f1683e.js",revision:null},{url:"assets/README.md.40f1683e.lean.js",revision:null},{url:"assets/style.8e478b90.css",revision:null},{url:"guide/why.html",revision:"4416f35d9edd7189d6e70f8834b59340"},{url:"index.html",revision:"1f735f246f712efe760c0f7e03c57221"},{url:"README.html",revision:"a17153b9b25c4e160fbe90d116ef7bc6"},{url:"manifest.webmanifest",revision:"571488ca3f5652ce6b8f0cfd2432b098"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));