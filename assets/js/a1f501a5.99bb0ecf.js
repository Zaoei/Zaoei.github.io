"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2097],{1840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(4848),c=n(5680);const o={},i="external",s={id:"webpack-optimize/Externals/README",title:"external",description:"\u9632\u6b62\u5c06\u67d0\u4e9b import \u7684\u5305(package)\u6253\u5305\u5230 bundle \u4e2d\uff0c\u800c\u662f\u5728\u8fd0\u884c\u65f6(runtime)\u518d\u53bb\u4ece\u5916\u90e8\u83b7\u53d6\u8fd9\u4e9b\u6269\u5c55\u4f9d\u8d56(external dependencies)\u3002",source:"@site/docs/webpack-optimize/Externals/README.md",sourceDirName:"webpack-optimize/Externals",slug:"/webpack-optimize/Externals/",permalink:"/docs/webpack-optimize/Externals/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code Splitting",permalink:"/docs/webpack-optimize/Code Splitting/"},next:{title:"WIP \u7b49\u5f85\u586b\u5145",permalink:"/docs/webpack-optimize/"}},a={},p=[];function m(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,c.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"external",children:"external"}),"\n",(0,r.jsx)(t.p,{children:"\u9632\u6b62\u5c06\u67d0\u4e9b import \u7684\u5305(package)\u6253\u5305\u5230 bundle \u4e2d\uff0c\u800c\u662f\u5728\u8fd0\u884c\u65f6(runtime)\u518d\u53bb\u4ece\u5916\u90e8\u83b7\u53d6\u8fd9\u4e9b\u6269\u5c55\u4f9d\u8d56(external dependencies)\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5 moment \u4e3a\u5217\uff0c\u5728\u5f53\u524d\u6253\u5305\u4e2d\u628a moment \u6253\u5305\u5230\u4e86\u6211\u4eec\u7684\u9879\u76ee\u5185\uff0c\u53ef\u4ee5\u770b\u5230\u4f53\u79ef\u8fd8\u662f\u633a\u5927\u7684\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4e0d\u5e0c\u671b moment \u88ab\u6253\u5305\u5230\u8fd9\u4e2a\u9879\u76ee\u5185\uff0c\u53ef\u4ee5\u4f7f\u7528 cdn \u5f15\u7528 moment \u5305\u7684\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(1883).A+"",width:"720",height:"366"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javaScript",children:"`<script src=\"https://cdn.bootcss.com/react/16.7.0/umd/react.production.min.js\"><\/script>`\n`<script src=\"https://cdn.bootcss.com/react-dom/16.7.0/umd/react-dom.production.min.js\"><\/script>`\n`<script src=\"https://cdn.bootcss.com/moment.js/2.23.0/moment.min.js\"><\/script>`\n\n\n// key \u4e3a\u5f53\u524d\u9879\u76ee\u5185\u5f15\u7528\u6a21\u5757\u7684\u540d\u5b57\uff0c value \u4e3a\u6302\u8f7d\u5728 window \u5bf9\u8c61\u7684\u5c5e\u6027\u3002\nmodule.exports = {\n    //...\n    externals: {\n        react: 'React',\n        'react-dom': 'ReactDOM',\n        'moment': 'Moment',\n    },\n};                \n"})}),"\n",(0,r.jsx)(t.p,{children:"\u914d\u7f6e\u540e\uff1a"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(9492).A+"",width:"2960",height:"1502"})})]})}function l(e={}){const{wrapper:t}={...(0,c.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5680:(e,t,n)=>{n.d(t,{RP:()=>p});var r=n(6540);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=c,b=d["".concat(a,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));l.displayName="MDXCreateElement"},9492:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/after-external-moment-348e918f58e68499150b56882df6653e.png"},1883:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/before-external-moment-af92155194a2bd5fd8cfed4c4b14d25b.jpg"}}]);