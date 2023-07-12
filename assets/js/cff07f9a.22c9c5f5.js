"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,c={unversionedId:"algorithm/\u9996\u6b21\u9002\u914d",id:"algorithm/\u9996\u6b21\u9002\u914d",title:"\u9996\u6b21\u9002\u914d",description:"FF: First Fit",source:"@site/docs/algorithm/\u9996\u6b21\u9002\u914d.md",sourceDirName:"algorithm",slug:"/algorithm/\u9996\u6b21\u9002\u914d",permalink:"/docs/algorithm/\u9996\u6b21\u9002\u914d",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WF\uff1aWorst Fit",permalink:"/docs/algorithm/\u6700\u5dee\u9002\u914d"},next:{title:"micfrontend",permalink:"/docs/category/micfrontend"}},l={},p=[{value:"FF: First Fit",id:"ff-first-fit",level:3},{value:"\u4f18\u70b9\uff1a\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\uff0c\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6\u3002",id:"\u4f18\u70b9\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6",level:5},{value:"\u7f3a\u70b9\uff1a\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\uff0c\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\uff0c\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u79f0\u4e3a\u788e\u7247\u3002\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\uff0c\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500\u3002",id:"\u7f3a\u70b9\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\u79f0\u4e3a\u788e\u7247\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500",level:5}],s={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ff-first-fit"},"FF: First Fit"),(0,o.kt)("p",null,"\u8be5\u7b97\u6cd5\u4ece\u7a7a\u95f2\u5206\u533a\u94fe\u9996\u5f00\u59cb\u67e5\u627e\uff0c\u76f4\u81f3\u627e\u5230\u4e00\u4e2a\u80fd\u6ee1\u8db3\u5176\u5927\u5c0f\u8981\u6c42\u7684\u7a7a\u95f2\u5206\u533a\u4e3a\u6b62\u3002\u7136\u540e\u518d\u6309\u7167\u4f5c\u4e1a\u7684\u5927\u5c0f\uff0c\u4ece\u8be5\u5206\u533a\u4e2d\u5212\u51fa\u4e00\u5757\u5185\u5b58\u5206\u914d\u7ed9\u8bf7\u6c42\u8005\uff0c\u4f59\u4e0b\u7684\u7a7a\u95f2\u5206\u533a\u4ecd\u7559\u5728\u7a7a\u95f2\u5206\u533a\u94fe\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4365).Z,width:"3078",height:"1023"})),(0,o.kt)("h5",{id:"\u4f18\u70b9\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6"},"\u4f18\u70b9\uff1a\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\uff0c\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6\u3002"),(0,o.kt)("h5",{id:"\u7f3a\u70b9\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\u79f0\u4e3a\u788e\u7247\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500"},"\u7f3a\u70b9\uff1a\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\uff0c\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\uff0c\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u79f0\u4e3a\u788e\u7247\u3002\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\uff0c\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500\u3002"))}f.isMDXComponent=!0},4365:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/FF-8a592e0a6b95a9d8379c72b963833002.png"}}]);