"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),i=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(u.Provider,{value:r},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=i(t),d=n,b=s["".concat(u,".").concat(d)]||s[d]||k[d]||a;return t?o.createElement(b,l(l({ref:r},c),{},{components:t})):o.createElement(b,l({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const a={},l="thread-loader",p={unversionedId:"webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader",id:"webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader",title:"thread-loader",description:"\u539f\u7406",source:"@site/docs/webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader.md",sourceDirName:"webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b",slug:"/webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader",permalink:"/docs/webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u6784\u5efa",permalink:"/docs/webpack-resolve/optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/"},next:{title:"Stats \u5bf9\u8c61",permalink:"/docs/webpack-resolve/optimize/\u6784\u5efa\u5de5\u5177/"}},u={},i=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"worker \u7684\u4e2a\u6570",id:"worker-\u7684\u4e2a\u6570",level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2}],c={toc:i},s="wrapper";function k(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"thread-loader"},"thread-loader"),(0,n.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\uff0c\u4ee5 pitch \u65b9\u5f0f\u62e6\u622a Loader \u6267\u884c\u94fe"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6790 Webpack \u914d\u7f6e\u5bf9\u8c61\uff0c\u83b7\u53d6 thread-loader \u540e\u9762\u7684 Loader \u5217\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u7528 child_process.spawn \u521b\u5efa worker \u8fdb\u7a0b\uff0c\u5e76\u5c06 Loader \u5217\u8868\u3001\u6587\u4ef6\u8def\u5f84\u3001\u4e0a\u4e0b\u6587\u7b49\u53c2\u6570\u4f20\u9012\u5230\u5b50\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u5b50\u8fdb\u7a0b\u4e2d\u8c03\u7528 loader-runner\uff0c\u8f6c\u8bd1\u6587\u4ef6\u5185\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u8bd1\u5b8c\u6bd5\u540e\uff0c\u5c06\u7ed3\u679c\u4f20\u56de\u4e3b\u8fdb\u7a0b")),(0,n.kt)("h2",{id:"worker-\u7684\u4e2a\u6570"},"worker \u7684\u4e2a\u6570"),(0,n.kt)("p",null,"worker \u542f\u52a8\u7684\u4e2a\u6570\u6839\u636e\u4f20\u5165\u914d\u7f6e\u9879 workers \u51b3\u5b9a\uff0c\u5982\u679c\u6ca1\u6709\u4f20\uff0c\u5219\u6839\u636e\u5f53\u524d\u7535\u8111\u7684 cpu \u4e2a\u6570\u51b3\u5b9a\u3002\u5b58\u5728\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u673a\u5668 cpu \u4e2a\u6570\u4e3a 1\uff0c\u90a3\u4e48 worker \u6570\u91cf\u5219\u4e3a 1."),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u673a\u5668 cpu \u4e2a\u6570\u5927\u4e8e 1\uff0c\u90a3\u4e48 worker \u6570\u636e\u5219\u4e3a\u5f53\u524d cpu \u4e2a\u6570\u603b\u548c - 1.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"options.workers || calculateNumberOfWorkers()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function calculateNumberOfWorkers() {\n    const cpus = os.cpus() || { length: 1 };\n    return Math.max(1, cpus.length - 1);\n}\n")),(0,n.kt)("p",null,"thread-loader \u7684 pitch \u65b9\u6cd5\u62e6\u622a\u5b83\u540e\u9762\u7684\u6240\u6709 loader\uff1b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa WorkerPool \u5b9e\u4f8b workerPool\uff0c\u5b83\u662f\u4e2a\u8fdb\u7a0b\u6c60\u5b50\uff0c\u7528\u4ee5\u8c03\u5ea6\u8fdb\u7a0b\uff1b\u8c03\u5ea6\u5de5\u4f5c\u4f9d\u8d56\u4f7f\u7528 neo-async/queue.js \u521b\u5efa\u7684 poolQueue \u961f\u5217\uff1b"),(0,n.kt)("li",{parentName:"ol"},"poolQueue.push(data, callback)\uff1b"),(0,n.kt)("li",{parentName:"ol"},"poolQueue.push \u540e\u4f1a\u6267\u884c poolQueue \u7684 worker \u51fd\u6570 \u2014\u2014 distributeJob \u521b\u5efa\u5b50\u8fdb\u7a0b\uff1b"),(0,n.kt)("li",{parentName:"ol"},"distributeJob \u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u7ba1\u9053\u901a\u4fe1\uff0c\u5229\u7528 readPipe \u63a5\u6536\u5b50\u8fdb\u7a0b\u6d88\u606f\uff0c\u5229\u7528 writePipe \u5411\u5b50\u8fdb\u7a0b\u53d1\u9001\u6d88\u606f\uff0c\u901a\u4fe1\u7684\u6570\u636e\u8f7d\u4f53\u662f JSON \u683c\u5f0f\u5b57\u7b26\u4e32\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5b50\u8fdb\u7a0b\u63a5\u6536\u6765\u81ea\u7236\u8fdb\u7a0b\u53d1\u9001\u8fc7\u6765\u7684\u6d88\u606f\u8fd0\u884c loader\uff0c\u788d\u4e8e\u8fdb\u7a0b\u95f4\u901a\u4fe1\u9650\u5236\uff0c\u5b50\u8fdb\u7a0b\u81ea\u5df1\u6784\u9020\u4e86\u4e00\u4e2a loaderContext \u5bf9\u8c61\uff0c\u5f53\u7528\u5230\u7236\u8fdb\u7a0b loaderContext \u4e2d\u7684\u65b9\u6cd5\u65f6\uff0c\u6784\u9020\u7684 loaderContext \u5bf9\u8c61\u4f1a\u901a\u8fc7\u8fdb\u7a0b\u95f4\u901a\u4fe1\u59d4\u6258\u7236\u8fdb\u7a0b\u5b9e\u73b0\uff1b\n\u5f53\u5b50\u8fdb\u7a0b\u5b8c\u6210 runLoaders \u5de5\u4f5c\u540e\uff0c\u5728\u56de\u8c03\u4e2d\u5229\u7528\u7ba1\u9053\u5411\u7236\u8fdb\u7a0b\u53d1\u9001\u7ed3\u679c\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u7236\u8fdb\u7a0b\u6536\u5230\u6d88\u606f\u540e\uff0c\u627e\u5230\u672c\u6b21\u8fd0\u884c loader \u65f6\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u628a\u8fd9\u4e9b\u7ed3\u679c \u2014\u2014 \u5404\u79cd\u7c7b\u578b\u7684\u4f9d\u8d56\uff0c\u6dfb\u52a0\u5230\u6784\u5efa\u4e2d\uff1b")),(0,n.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"workerPools\uff1a \u662f\u8fdb\u7a0b\u6c60\uff0c\u7528\u6765\u7ba1\u7406\u8fdb\u7a0b\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"workerPool\uff1a\u8fdb\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"poolQueue\uff1a\u5f53\u524d\u8fdb\u7a0b\u4e2d\u7684\u4efb\u52a1\u961f\u5217\u3002poolParallelJobs\u662f\u7528\u6765\u8868\u793a\u5f53\u524d\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6700\u5927\u7684\u5e76\u53d1\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},"workers\uff1a\u8fdb\u7a0b\u4e2d\u7684\u7ebf\u7a0b\u6c60\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"worker\uff1a\u7ebf\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"queue\uff1a \u7ebf\u7a0b\u7684\u4efb\u52a1\u961f\u5217\u3002 ")))))))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"workerPools : {\n  workerPool : {\n    poolQueue: [job, job, job, job, job, job] , poolParallelJobs\n\n    workers : [\n      worker: {\n        queue: [job, job, job, job, job] -- workerParallelJobs\n      }\n\n      worker: {\n        queue: [job, job] -- workerParallelJobs\n      }\n    ]\n  },\n  workerPool : {\n    poolQueue: [job, job, job, job, job, job] , poolParallelJobs\n\n    workers : [\n      worker: {\n        queue: [job, job, job, job, job] -- workerParallelJobs\n      },\n      worker: {\n        queue: [job, job] -- workerParallelJobs\n      }\n\n    ]\n  }\n}\n")))}k.isMDXComponent=!0}}]);