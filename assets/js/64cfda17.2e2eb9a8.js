"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,c={unversionedId:"algorithm/\u5355\u8c03\u6808",id:"algorithm/\u5355\u8c03\u6808",title:"\u5355\u8c03\u6808",description:"\u5355\u8c03\u6808\u901a\u7528\u6a21\u7248\uff1a",source:"@site/docs/algorithm/\u5355\u8c03\u6808.md",sourceDirName:"algorithm",slug:"/algorithm/\u5355\u8c03\u6808",permalink:"/docs/algorithm/\u5355\u8c03\u6808",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e0b\u6b21\u9002\u914d",permalink:"/docs/algorithm/\u4e0b\u6b21\u9002\u914d"},next:{title:"\u6700\u4f73\u9002\u914d",permalink:"/docs/algorithm/\u6700\u4f73\u9002\u914d"}},l={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5355\u8c03\u6808\u901a\u7528\u6a21\u7248\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var monotonicStack = function (nums) {\n    // \u521b\u5efa\u5faa\u73af\u957f\u5ea6\uff0c\u5355\u8c03\u6808\u76d2\u8f93\u51fa\u7ed3\u679c\n    const numsLength = nums.length;\n    const stack = [];\n    const result = new Array(numsLength).fill(0);\n\n    // \u6839\u636e\u6570\u7ec4\u957f\u5ea6\u8fdb\u884c\u4fbf\u5229\n    for (let i = 0; i < numsLength; i++) {\n        // \u901a\u8fc7\u5927\u5c0f\u8fdb\u884c\u5224\u65ad\uff0c\u5347\u5e8f\u548c\u964d\u5e8f\n        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n            // \u7b26\u5408\u8981\u6c42\u79fb\u9664\u6808\u9876\n            const pop = stack.pop();\n            // \u79fb\u9664\u7684\u540c\u65f6\uff0c\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\n            result[pop] = i - pop;\n        }\n\n        stack.push(i);\n    }\n    return result;\n};\n")))}m.isMDXComponent=!0}}]);