"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},p="Stats \u5bf9\u8c61",s={unversionedId:"webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/README",id:"webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/README",title:"Stats \u5bf9\u8c61",description:"stats \u9009\u9879\u8ba9\u4f60\u66f4\u7cbe\u786e\u5730\u63a7\u5236 bundle \u4fe1\u606f\u8be5\u600e\u4e48\u663e\u793a\u3002",source:"@site/docs/webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/README.md",sourceDirName:"webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177",slug:"/webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/",permalink:"/docs/webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"thread-loader",permalink:"/docs/webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader"},next:{title:"whoami",permalink:"/docs/whoami"}},o={},i=[{value:"Stats Presets",id:"stats-presets",level:2},{value:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stats-\u5bf9\u8c61"},"Stats \u5bf9\u8c61"),(0,r.kt)("p",null,"stats \u9009\u9879\u8ba9\u4f60\u66f4\u7cbe\u786e\u5730\u63a7\u5236 bundle \u4fe1\u606f\u8be5\u600e\u4e48\u663e\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//  webpack.config.js\nmodule.exports = {\n    //...\n    stats: \'verbose\'\n};\n\n// package.js    --json > stats.json\n"build:stats": "rm -rf dist/* && node --max_old_space_size=4092 ./node_modules/.bin/webpack --config build/prod.js --json > stats.json"\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},'build:stats"')," \u547d\u4ee4\u540e\uff0c\u6839\u76ee\u5f55\u5730\u4e0b\u591a\u51fa\u4e00\u4e2a stats.json \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://webpack.github.io/analyse/#home"},"Webpack github analyse")," \u52a0\u8f7d stats.json"),(0,r.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7004).Z,width:"1474",height:"624"})),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://alexkuz.github.io/webpack-chart/"},"Webpack Chart")," \u52a0\u8f7d stats.json"),(0,r.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7636).Z,width:"1478",height:"830"})),(0,r.kt)("h2",{id:"stats-presets"},"Stats Presets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9884\u8bbe"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'errors-only'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u65f6\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'errors-warnings'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u6216\u6709\u65b0\u7684\u7f16\u8bd1\u65f6\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'minimal'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u6216\u65b0\u7684\u7f16\u8bd1\u5f00\u59cb\u65f6\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'none'"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'normal'"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'verbose'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u90e8\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'detailed'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u90e8\u8f93\u51fa\u9664\u4e86 chunkModules \u548c chunkRootModules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'summary'"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa webpack \u7248\u672c\uff0c\u4ee5\u53ca\u8b66\u544a\u6570\u548c\u9519\u8bef\u6570")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/stats/#statsassets"},"webpack stats \u8be6\u7ec6\u914d\u7f6e")),(0,r.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack-bundle-analyzer"),"\u80fd\u5f88\u76f4\u89c2\u7684\u7ed9\u51fa\u6bcf\u4e00\u4e2a\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u7684\u5927\u5c0f\u4ee5\u53ca\u5404\u81ea\u7684\u4f9d\u8d56\uff0c\u80fd\u591f\u66f4\u52a0\u65b9\u4fbf\u7684\u5e2e\u52a9\u6211\u4eec\u5bf9\u9879\u76ee\u8fdb\u884c\u5206\u6790\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"# NPM\nnpm install --save-dev webpack-bundle-analyzer\n# Yarn\nyarn add -D webpack-bundle-analyzer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage (as a plugin)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\n\nmodule.exports = {\n  plugins: [\n    new BundleAnalyzerPlugin()\n  ]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7974).Z,width:"908",height:"547"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/stephencookdev/speed-measure-webpack-plugin"},"speed-measure-webpack-plugin"),"\u5206\u6790\u6574\u4e2a\u6253\u5305\u7684\u603b\u8017\u65f6\uff0c\u4ee5\u53ca\u6bcf\u4e00\u4e2aloader \u548c\u6bcf\u4e00\u4e2a plugins \u6784\u5efa\u6240\u8017\u8d39\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u5b9a\u4f4d\u5230\u53ef\u4ee5\u4f18\u5316 Webpack \u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"# NPM\nnpm install --save-dev speed-measure-webpack-plugin\n# Yarn\nyarn add -D speed-measure-webpack-plugin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage (as a plugin)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");\n\nconst smp = new SpeedMeasurePlugin();\n\nconst webpackConfig = smp.wrap({\n  plugins: [new MyPlugin(), new MyOtherPlugin()],\n});\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(243).Z,width:"720",height:"1448"})))}d.isMDXComponent=!0},243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/speed-measure-webpack-plugin-75471b95589665f9b926cee2b6cf5ddf.png"},7636:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stats-b7b3b2548a2a73ccc8dd810b31ee8f11.png"},7004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stats.webpack.github.io-7c6445d247769b07ea21f9eb64edc682.png"},7974:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webpack-bundle-analyzer-e4af63040abfb8e9b9a948c19541204d.gif"}}]);