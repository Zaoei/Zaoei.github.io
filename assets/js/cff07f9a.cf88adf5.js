"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5783],{1750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(4848),i=r(5680);const o={},c=void 0,a={id:"algorithm/\u9996\u6b21\u9002\u914d",title:"\u9996\u6b21\u9002\u914d",description:"FF: First Fit",source:"@site/docs/algorithm/\u9996\u6b21\u9002\u914d.md",sourceDirName:"algorithm",slug:"/algorithm/\u9996\u6b21\u9002\u914d",permalink:"/docs/algorithm/\u9996\u6b21\u9002\u914d",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WF\uff1aWorst Fit",permalink:"/docs/algorithm/\u6700\u5dee\u9002\u914d"},next:{title:"micfrontend",permalink:"/docs/category/micfrontend"}},s={},l=[{value:"FF: First Fit",id:"ff-first-fit",level:3},{value:"\u4f18\u70b9\uff1a\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\uff0c\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6\u3002",id:"\u4f18\u70b9\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6",level:5},{value:"\u7f3a\u70b9\uff1a\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\uff0c\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\uff0c\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u79f0\u4e3a\u788e\u7247\u3002\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\uff0c\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500\u3002",id:"\u7f3a\u70b9\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\u79f0\u4e3a\u788e\u7247\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500",level:5}];function p(e){const t={h3:"h3",h5:"h5",img:"img",p:"p",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"ff-first-fit",children:"FF: First Fit"}),"\n",(0,n.jsx)(t.p,{children:"\u8be5\u7b97\u6cd5\u4ece\u7a7a\u95f2\u5206\u533a\u94fe\u9996\u5f00\u59cb\u67e5\u627e\uff0c\u76f4\u81f3\u627e\u5230\u4e00\u4e2a\u80fd\u6ee1\u8db3\u5176\u5927\u5c0f\u8981\u6c42\u7684\u7a7a\u95f2\u5206\u533a\u4e3a\u6b62\u3002\u7136\u540e\u518d\u6309\u7167\u4f5c\u4e1a\u7684\u5927\u5c0f\uff0c\u4ece\u8be5\u5206\u533a\u4e2d\u5212\u51fa\u4e00\u5757\u5185\u5b58\u5206\u914d\u7ed9\u8bf7\u6c42\u8005\uff0c\u4f59\u4e0b\u7684\u7a7a\u95f2\u5206\u533a\u4ecd\u7559\u5728\u7a7a\u95f2\u5206\u533a\u94fe\u4e2d\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(1639).A+"",width:"3078",height:"1023"})}),"\n",(0,n.jsx)(t.h5,{id:"\u4f18\u70b9\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6",children:"\u4f18\u70b9\uff1a\u4f18\u5148\u5229\u7528\u5185\u5b58\u4e2d\u4f4e\u5740\u90e8\u5206\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u4ece\u800c\u4fdd\u7559\u4e86\u9ad8\u5740\u90e8\u5206\u7684\u5927\u7a7a\u95f2\u533a\uff0c\u8fd9\u4e3a\u4ee5\u540e\u5230\u8fbe\u7684\u5927\u4f5c\u4e1a\u5206\u914d\u5927\u7684\u5185\u5b58\u7a7a\u95f4\u521b\u9020\u4e86\u6761\u4ef6\u3002"}),"\n",(0,n.jsx)(t.h5,{id:"\u7f3a\u70b9\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\u79f0\u4e3a\u788e\u7247\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500",children:"\u7f3a\u70b9\uff1a\u4f4e\u5740\u90e8\u5206\u4e0d\u65ad\u88ab\u5212\u5206\uff0c\u4f1a\u7559\u4e0b\u8bb8\u591a\u96be\u4ee5\u5229\u7528\u7684\uff0c\u5f88\u5c0f\u7684\u7a7a\u95f2\u5206\u533a\uff0c\u79f0\u4e3a\u788e\u7247\u3002\u800c\u6bcf\u6b21\u67e5\u627e\u53c8\u90fd\u662f\u4ece\u4f4e\u5740\u90e8\u5206\u5f00\u59cb\u7684\uff0c\u8fd9\u65e0\u7591\u53c8\u4f1a\u589e\u52a0\u67e5\u627e\u53ef\u7528\u7a7a\u95f2\u5206\u533a\u65f6\u7684\u5f00\u9500\u3002"})]})}function u(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>l});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));u.displayName="MDXCreateElement"},1639:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/FF-8a592e0a6b95a9d8379c72b963833002.png"}}]);