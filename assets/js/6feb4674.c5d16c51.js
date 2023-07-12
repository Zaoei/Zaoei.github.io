"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},i="Code Splitting",o={unversionedId:"webpack-resolve/optimize/Code Splitting/README",id:"webpack-resolve/optimize/Code Splitting/README",title:"Code Splitting",description:"Refers to dividing your code into various bundles/chunks which you can then load on demand instead of loading a single bundle containing everything.",source:"@site/docs/webpack-resolve/optimize/Code Splitting/README.md",sourceDirName:"webpack-resolve/optimize/Code Splitting",slug:"/webpack-resolve/optimize/Code Splitting/",permalink:"/docs/webpack-resolve/optimize/Code Splitting/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bundle Splitting",permalink:"/docs/webpack-resolve/optimize/Bundle Splitting/"},next:{title:"external",permalink:"/docs/webpack-resolve/optimize/Externals/"}},p={},c=[{value:"\u6309\u9700\u52a0\u8f7d",id:"\u6309\u9700\u52a0\u8f7d",level:2},{value:"\u52a8\u6001\u5bfc\u5165(dynamic import)",id:"\u52a8\u6001\u5bfc\u5165dynamic-import",level:2},{value:"\u9884\u83b7\u53d6/\u9884\u52a0\u8f7d\u6a21\u5757(prefetch/preload module)",id:"\u9884\u83b7\u53d6\u9884\u52a0\u8f7d\u6a21\u5757prefetchpreload-module",level:2},{value:"prefetch",id:"prefetch",level:3},{value:"prefetch (\u5f85\u5b9a\u4e2d\uff0c\u5728runtime\u4ee3\u7801\u4e2d\u672a\u627e\u5230\u76f8\u5173\u5904\u7406)",id:"prefetch-\u5f85\u5b9a\u4e2d\u5728runtime\u4ee3\u7801\u4e2d\u672a\u627e\u5230\u76f8\u5173\u5904\u7406",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"code-splitting"},"Code Splitting"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Refers to dividing your code into various bundles/chunks which you can then load on demand instead of loading a single bundle containing everything."),(0,l.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u5206\u79bb\u6307\u5c06\u4ee3\u7801\u5206\u6210\u4e0d\u540c\u7684\u5305/\u5757\uff0c\u7136\u540e\u53ef\u4ee5\u6309\u9700\u52a0\u8f7d\uff0c\u800c\u4e0d\u662f\u52a0\u8f7d\u5305\u542b\u6240\u6709\u5185\u5bb9\u7684\u5355\u4e2a\u5305\u3002")),(0,l.kt)("p",null,"\u9002\u7528\u7684\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62bd\u79bb\u76f8\u540c\u4ee3\u7801\u5230\u5355\u4e2a\u5171\u4eab\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u811a\u672c\u61d2\u52a0\u8f7d\uff0c\u4f7f\u5f97\u521d\u59cb\u52a0\u8f7d\u7684\u6587\u4ef6\u66f4\u5c0f")),(0,l.kt)("h2",{id:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"),(0,l.kt)("p",null,"\u968f\u7740\u4e92\u8054\u7f51\u7684\u53d1\u5c55\uff0c\u4e00\u4e2a\u7f51\u9875\u9700\u8981\u627f\u8f7d\u7684\u529f\u80fd\u8d8a\u6765\u8d8a\u591a\u3002\u5bf9\u4e8e\u91c7\u7528\u5355\u9875\u5e94\u7528\u4f5c\u4e3a\u524d\u7aef\u67b6\u6784\u7684\u7f51\u7ad9\u6765\u8bf4\uff0c\u4f1a\u9762\u4e34\u7740\u4e00\u4e2a\u7f51\u9875\u9700\u8981\u52a0\u8f7d\u7684\u4ee3\u7801\u91cf\u5f88\u5927\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u8bb8\u591a\u529f\u80fd\u90fd\u96c6\u4e2d\u7684\u505a\u5230\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"HTML")," \u91cc\u3002 \u8fd9\u4f1a\u5bfc\u81f4\u7f51\u9875\u52a0\u8f7d\u7f13\u6162\u3001\u4ea4\u4e92\u5361\u987f\uff0c\u7528\u6237\u4f53\u9a8c\u5c06\u975e\u5e38\u7cdf\u7cd5\u3002"),(0,l.kt)("p",null,"\u5bfc\u81f4\u8fd9\u4e2a\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\u5728\u4e8e\u4e00\u6b21\u6027\u7684\u52a0\u8f7d\u6240\u6709\u529f\u80fd\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u4f46\u5176\u5b9e\u7528\u6237\u6bcf\u4e00\u9636\u6bb5\u53ea\u53ef\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u90e8\u5206\u529f\u80fd\u3002 \u6240\u4ee5\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\u7684\u65b9\u6cd5\u5c31\u662f\u7528\u6237\u5f53\u524d\u9700\u8981\u7528\u4ec0\u4e48\u529f\u80fd\u5c31\u53ea\u52a0\u8f7d\u8fd9\u4e2a\u529f\u80fd\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u4e5f\u5c31\u662f\u6240\u8c13\u7684\u6309\u9700\u52a0\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u52a8\u6001\u5bfc\u5165dynamic-import"},"\u52a8\u6001\u5bfc\u5165(dynamic import)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u4f1a\u6839\u636e\u5165\u53e3\u7684\u914d\u7f6e\u751f\u6210\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u4e00\u4e2a\u5165\u53e3\u5c31\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u591a\u4e2a\u5165\u53e3\u5c31\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk"),"\u3002\u5f53\u7136\u4e86\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u5728\u5bf9\u6a21\u5757\u4f9d\u8d56\u67e5\u627e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u53d1\u73b0\u662f\u5f02\u6b65\u4f9d\u8d56\uff0c\u4e5f\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk"),"\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u63a8\u8350\u4f7f\u7528\u7684\u662f\u7b26\u5408 ECMAScript \u63d0\u6848 \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"import()")," \u8bed\u6cd5 \u6765\u5b9e\u73b0\u52a8\u6001\u5bfc\u5165\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* path */ './src/another-module.js')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7457).Z,width:"1239",height:"67"})),(0,l.kt)("p",null,"// TODO \u672a\u8be6\u7ec6\u4e86\u89e3\u8fc7"),(0,l.kt)("h2",{id:"\u9884\u83b7\u53d6\u9884\u52a0\u8f7d\u6a21\u5757prefetchpreload-module"},(0,l.kt)("a",{parentName:"h2",href:"https://webpack.docschina.org/guides/code-splitting/#prefetchingpreloading-modules"},"\u9884\u83b7\u53d6/\u9884\u52a0\u8f7d\u6a21\u5757(prefetch/preload module)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prefetch(\u9884\u83b7\u53d6)\uff1a\u5c06\u6765\u67d0\u4e9b\u5bfc\u822a\u4e0b\u53ef\u80fd\u9700\u8981\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"preload(\u9884\u52a0\u8f7d)\uff1a\u5f53\u524d\u5bfc\u822a\u4e0b\u53ef\u80fd\u9700\u8981\u8d44\u6e90")),(0,l.kt)("h3",{id:"prefetch"},"prefetch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackPrefetch: true */ './another-module.js');\n")),(0,l.kt)("p",null,"\u8fd9\u4f1a\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},'<link rel="prefetch" href="login-modal-chunk.js">')," \u5e76\u8ffd\u52a0\u5230\u9875\u9762\u5934\u90e8\uff0c\u6307\u793a\u7740\u6d4f\u89c8\u5668\u5728\u95f2\u7f6e\u65f6\u95f4\u9884\u53d6 login-modal-chunk.js \u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types/prefetch"},(0,l.kt)("strong",{parentName:"a"},"prefetch"))),(0,l.kt)("p",null,"\u952e\u5b57 prefetch \u4f5c\u4e3a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"<link>"),"  \u7684\u5c5e\u6027 rel \u7684\u503c\uff0c\u662f\u4e3a\u4e86\u63d0\u793a\u6d4f\u89c8\u5668\uff0c\u7528\u6237\u672a\u6765\u7684\u6d4f\u89c8\u6709\u53ef\u80fd\u9700\u8981\u52a0\u8f7d\u76ee\u6807\u8d44\u6e90\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u6709\u53ef\u80fd\u901a\u8fc7\u4e8b\u5148\u83b7\u53d6\u548c\u7f13\u5b58\u5bf9\u5e94\u8d44\u6e90\uff0c\u4f18\u5316\u7528\u6237\u4f53\u9a8c\u3002"),(0,l.kt)("h3",{id:"prefetch-\u5f85\u5b9a\u4e2d\u5728runtime\u4ee3\u7801\u4e2d\u672a\u627e\u5230\u76f8\u5173\u5904\u7406"},"prefetch (\u5f85\u5b9a\u4e2d\uff0c\u5728runtime\u4ee3\u7801\u4e2d\u672a\u627e\u5230\u76f8\u5173\u5904\u7406)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackPreload: true */ './another-module.js');\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"preload chunk \u4f1a\u5728\u7236 chunk \u52a0\u8f7d\u65f6\uff0c\u4ee5\u5e76\u884c\u65b9\u5f0f\u5f00\u59cb\u52a0\u8f7d\u3002prefetch chunk \u4f1a\u5728\u7236 chunk \u52a0\u8f7d\u7ed3\u675f\u540e\u5f00\u59cb\u52a0\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"preload chunk \u5177\u6709\u4e2d\u7b49\u4f18\u5148\u7ea7\uff0c\u5e76\u7acb\u5373\u4e0b\u8f7d\u3002prefetch chunk \u5728\u6d4f\u89c8\u5668\u95f2\u7f6e\u65f6\u4e0b\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"preload chunk \u4f1a\u5728\u7236 chunk \u4e2d\u7acb\u5373\u8bf7\u6c42\uff0c\u7528\u4e8e\u5f53\u4e0b\u65f6\u523b\u3002prefetch chunk \u4f1a\u7528\u4e8e\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u523b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u652f\u6301\u7a0b\u5ea6\u4e0d\u540c\u3002")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types/prefetch"},(0,l.kt)("strong",{parentName:"a"},"preload"))),(0,l.kt)("p",null,"\u5173\u952e\u5b57 preload \u4f5c\u4e3a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"<link>")," \u7684\u5c5e\u6027 rel \u7684\u503c\uff0c\u8868\u793a\u7528\u6237\u5341\u5206\u6709\u53ef\u80fd\u9700\u8981\u5728\u5f53\u524d\u6d4f\u89c8\u4e2d\u52a0\u8f7d\u76ee\u6807\u8d44\u6e90\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u5fc5\u987b\u9884\u5148\u83b7\u53d6\u548c\u7f13\u5b58\u5bf9\u5e94\u8d44\u6e90\u3002 "),(0,l.kt)("p",null,"// preload / prefetch\n// \u7f13\u5b58\u76f8\u5173"))}m.isMDXComponent=!0},7457:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/async_build-90050829975f300abbc5f6adfd702fc4.png"}}]);