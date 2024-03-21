"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4011],{471:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(4848),r=s(5680);const a={},c="Stats \u5bf9\u8c61",i={id:"webpack-optimize/\u6784\u5efa\u5de5\u5177/README",title:"Stats \u5bf9\u8c61",description:"stats \u9009\u9879\u8ba9\u4f60\u66f4\u7cbe\u786e\u5730\u63a7\u5236 bundle \u4fe1\u606f\u8be5\u600e\u4e48\u663e\u793a\u3002",source:"@site/docs/webpack-optimize/\u6784\u5efa\u5de5\u5177/README.md",sourceDirName:"webpack-optimize/\u6784\u5efa\u5de5\u5177",slug:"/webpack-optimize/\u6784\u5efa\u5de5\u5177/",permalink:"/docs/webpack-optimize/\u6784\u5efa\u5de5\u5177/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"thread-loader",permalink:"/docs/webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader"},next:{title:"webpack-resolve",permalink:"/docs/category/webpack-resolve"}},d={},l=[{value:"Stats Presets",id:"stats-presets",level:2},{value:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"stats-\u5bf9\u8c61",children:"Stats \u5bf9\u8c61"}),"\n",(0,t.jsx)(n.p,{children:"stats \u9009\u9879\u8ba9\u4f60\u66f4\u7cbe\u786e\u5730\u63a7\u5236 bundle \u4fe1\u606f\u8be5\u600e\u4e48\u663e\u793a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'//  webpack.config.js\nmodule.exports = {\n    //...\n    stats: \'verbose\'\n};\n\n// package.js    --json > stats.json\n"build:stats": "rm -rf dist/* && node --max_old_space_size=4092 ./node_modules/.bin/webpack --config build/prod.js --json > stats.json"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c ",(0,t.jsx)(n.code,{children:'build:stats"'})," \u547d\u4ee4\u540e\uff0c\u6839\u76ee\u5f55\u5730\u4e0b\u591a\u51fa\u4e00\u4e2a stats.json \u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,t.jsx)(n.a,{href:"http://webpack.github.io/analyse/#home",children:"Webpack github analyse"})," \u52a0\u8f7d stats.json"]}),"\n",(0,t.jsx)(n.p,{children:"\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8298).A+"",width:"1474",height:"624"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,t.jsx)(n.a,{href:"http://alexkuz.github.io/webpack-chart/",children:"Webpack Chart"})," \u52a0\u8f7d stats.json"]}),"\n",(0,t.jsx)(n.p,{children:"\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5414).A+"",width:"1478",height:"830"})}),"\n",(0,t.jsx)(n.h2,{id:"stats-presets",children:"Stats Presets"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u9884\u8bbe"}),(0,t.jsx)(n.th,{children:"\u53ef\u9009\u503c"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'errors-only'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u65f6\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'errors-warnings'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u6216\u6709\u65b0\u7684\u7f16\u8bd1\u65f6\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'minimal'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u53ea\u5728\u53d1\u751f\u9519\u8bef\u6216\u65b0\u7684\u7f16\u8bd1\u5f00\u59cb\u65f6\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'none'"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"\u6ca1\u6709\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'normal'"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"\u6807\u51c6\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'verbose'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u5168\u90e8\u8f93\u51fa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'detailed'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u5168\u90e8\u8f93\u51fa\u9664\u4e86 chunkModules \u548c chunkRootModules"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"'summary'"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"\u8f93\u51fa webpack \u7248\u672c\uff0c\u4ee5\u53ca\u8b66\u544a\u6570\u548c\u9519\u8bef\u6570"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://webpack.js.org/configuration/stats/#statsassets",children:"webpack stats \u8be6\u7ec6\u914d\u7f6e"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",children:"\u7b2c\u4e09\u65b9\u63d2\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",children:"webpack-bundle-analyzer"}),"\u80fd\u5f88\u76f4\u89c2\u7684\u7ed9\u51fa\u6bcf\u4e00\u4e2a\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u7684\u5927\u5c0f\u4ee5\u53ca\u5404\u81ea\u7684\u4f9d\u8d56\uff0c\u80fd\u591f\u66f4\u52a0\u65b9\u4fbf\u7684\u5e2e\u52a9\u6211\u4eec\u5bf9\u9879\u76ee\u8fdb\u884c\u5206\u6790\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Install"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"# NPM\nnpm install --save-dev webpack-bundle-analyzer\n# Yarn\nyarn add -D webpack-bundle-analyzer\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Usage (as a plugin)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\n\nmodule.exports = {\n  plugins: [\n    new BundleAnalyzerPlugin()\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(7401).A+"",width:"908",height:"547"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/stephencookdev/speed-measure-webpack-plugin",children:"speed-measure-webpack-plugin"}),"\u5206\u6790\u6574\u4e2a\u6253\u5305\u7684\u603b\u8017\u65f6\uff0c\u4ee5\u53ca\u6bcf\u4e00\u4e2aloader \u548c\u6bcf\u4e00\u4e2a plugins \u6784\u5efa\u6240\u8017\u8d39\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u5b9a\u4f4d\u5230\u53ef\u4ee5\u4f18\u5316 Webpack \u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Install"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"# NPM\nnpm install --save-dev speed-measure-webpack-plugin\n# Yarn\nyarn add -D speed-measure-webpack-plugin\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Usage (as a plugin)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");\n\nconst smp = new SpeedMeasurePlugin();\n\nconst webpackConfig = smp.wrap({\n  plugins: [new MyPlugin(), new MyOtherPlugin()],\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6691).A+"",width:"720",height:"1448"})})]})}function p(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},5680:(e,n,s)=>{s.d(n,{RP:()=>l});var t=s(6540);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function c(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),s=n;return e&&(s="function"==typeof e?e(n):c(c({},n),e)),s},o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(s),j=r,u=h["".concat(d,".").concat(j)]||h[j]||o[j]||a;return s?t.createElement(u,c(c({ref:n},p),{},{components:s})):t.createElement(u,c({ref:n},p))}));p.displayName="MDXCreateElement"},6691:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/speed-measure-webpack-plugin-75471b95589665f9b926cee2b6cf5ddf.png"},5414:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/stats-b7b3b2548a2a73ccc8dd810b31ee8f11.png"},8298:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/stats.webpack.github.io-7c6445d247769b07ea21f9eb64edc682.png"},7401:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/webpack-bundle-analyzer-e4af63040abfb8e9b9a948c19541204d.gif"}}]);