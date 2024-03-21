"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5214],{9701:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var s=i(4848),r=i(5680);const c={},d="Bundle Splitting",t={id:"webpack-optimize/Bundle Splitting/README",title:"Bundle Splitting",description:"Bundle Splitting",source:"@site/docs/webpack-optimize/Bundle Splitting/README.md",sourceDirName:"webpack-optimize/Bundle Splitting",slug:"/webpack-optimize/Bundle Splitting/",permalink:"/docs/webpack-optimize/Bundle Splitting/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack-optimize",permalink:"/docs/category/webpack-optimize"},next:{title:"Code Splitting",permalink:"/docs/webpack-optimize/Code Splitting/"}},l={},o=[{value:"\u591a\u5165\u53e3(entry point)",id:"\u591a\u5165\u53e3entry-point",level:2},{value:"\u9632\u6b62\u91cd\u590d(prevent duplication)",id:"\u9632\u6b62\u91cd\u590dprevent-duplication",level:2},{value:"SplitChunksPlugin",id:"splitchunksplugin",level:2},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",level:3},{value:"\u5b9e\u64cd",id:"\u5b9e\u64cd",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bundle-splitting",children:"Bundle Splitting"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/guides/code-splitting/",children:"Bundle Splitting"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This process offers one way of optimizing a build, allowing webpack to generate multiple bundles for a single application. As a result, each bundle can be isolated from changes effecting others, reducing the amount of code that needs to be republished and therefore re-downloaded by the client and taking advantage of browser caching."}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u8fc7\u7a0b\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f18\u5316\u6784\u5efa\u7684\u65b9\u6cd5\uff0c\u5141\u8bb8 webpack \u4e3a\u5355\u4e2a\u5e94\u7528\u7a0b\u5e8f\u751f\u6210\u591a\u4e2a bundle \u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u5c06\u6bcf\u4e2a bundle \u6587\u4ef6\u4e0e\u5f71\u54cd\u5176\u4ed6\u6587\u4ef6\u7684\u66f4\u6539\u8fdb\u884c\u5206\u79bb\uff0c\u4ece\u800c\u51cf\u5c11\u91cd\u65b0\u53d1\u5e03\u5e76\u7531\u6b64\u88ab\u5ba2\u6237\u7aef\u91cd\u65b0\u4e0b\u8f7d\u7684\u4ee3\u7801\u91cf\uff0c\u5e76\u4e14\u8fd0\u7528\u6d4f\u89c8\u5668\u7f13\u5b58\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5305\u5206\u79bb\u80cc\u540e\u7684\u601d\u60f3\u975e\u5e38\u7b80\u5355\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u4f53\u79ef\u5de8\u5927\u7684\u6587\u4ef6\uff0c\u5e76\u4e14\u53ea\u6539\u4e86\u4e00\u884c\u4ee3\u7801\uff0c\u7528\u6237\u4ecd\u7136\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u6574\u4e2a\u6587\u4ef6\u3002\u4f46\u662f\u5982\u679c\u4f60\u628a\u5b83\u5206\u4e3a\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u90a3\u4e48\u7528\u6237\u53ea\u9700\u8981\u4e0b\u8f7d\u90a3\u4e2a\u88ab\u4fee\u6539\u7684\u6587\u4ef6\uff0c\u800c\u6d4f\u89c8\u5668\u5219\u53ef\u4ee5\u4ece\u7f13\u5b58\u4e2d\u52a0\u8f7d\u53e6\u4e00\u4e2a\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5e38\u7528\u7684\u4ee3\u7801\u5206\u79bb\u65b9\u6cd5\u6709\u4e09\u79cd\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5165\u53e3\u8d77\u70b9\uff1a\u4f7f\u7528 entry \u914d\u7f6e\u624b\u52a8\u5730\u5206\u79bb\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9632\u6b62\u91cd\u590d\uff1a\u4f7f\u7528 Entry dependencies \u6216\u8005 SplitChunksPlugin \u53bb\u91cd\u548c\u5206\u79bb chunk\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u52a8\u6001\u5bfc\u5165\uff1a\u901a\u8fc7\u6a21\u5757\u7684\u5185\u8054\u51fd\u6570\u8c03\u7528\u6765\u5206\u79bb\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u591a\u5165\u53e3entry-point",children:"\u591a\u5165\u53e3(entry point)"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u6700\u7b80\u5355\u7684\u4ee3\u7801\u5206\u5272\u65b9\u5f0f\uff0c\u76f8\u5bf9\u5e94\u7684\u9700\u8981\u5f88\u591a\u7684\u624b\u52a8\u914d\u7f6e\uff0c\u4e0b\u9762\u4e00\u4e00\u8fdb\u884c\u8bf4\u660e\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u5f00\u53d1\u4e2d\uff0c\u6700\u5e38\u63a5\u89e6\u5230\u7684\u662f\u5355\u6587\u4ef6\u5e94\u7528\uff0c\u901a\u5e38\u5bf9\u4e8e\u5165\u53e3 ",(0,s.jsx)(n.code,{children:"entry"})," \u914d\u7f6e\uff0c\u4e5f\u53ea\u662f\u914d\u7f6e\u4e00\u4e2a\u5730\u5740\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: path.join(__dirname, 'src/index.jsx');\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5314).A+"",width:"1026",height:"50"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"webpack"})," \u4f1a\u6839\u636e\u5165\u53e3\u7684\u914d\u7f6e\u751f\u6210\u5bf9\u5e94\u7684 ",(0,s.jsx)(n.code,{children:"chunk"}),"\uff0c\u4e00\u4e2a\u5165\u53e3\u5c31\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"chunk"}),"\uff0c\u591a\u4e2a\u5165\u53e3\u5c31\u591a\u4e2a ",(0,s.jsx)(n.code,{children:"chunk"}),"\u3002\u5f53\u7136\u4e86\uff0c",(0,s.jsx)(n.code,{children:"webpack"})," \u5728\u5bf9\u6a21\u5757\u4f9d\u8d56\u67e5\u627e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u53d1\u73b0\u662f\u5f02\u6b65\u4f9d\u8d56\uff0c\u4e5f\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"chunk"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u4fee\u6539\u4e0b ",(0,s.jsx)(n.code,{children:"entry"})," \u7684\u914d\u7f6e:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: {\n    index: {\n        import: './src/index.jsx',\n        dependOn: 'shared'\n    },\n    another: {\n        import: './src/another-module.js',\n        dependOn: 'shared'\n    },\n    shared: 'lodash',\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u6253\u5305\uff0c\u751f\u6210\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8465).A+"",width:"1039",height:"87"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5305\u7684\u7ed3\u679c\u4ece\u539f\u5148\u7684 ",(0,s.jsx)(n.code,{children:"main.bundle.js"})," \u6587\u4ef6\uff0c\u53d8\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"index.bundle.js"}),"\u3001\u548c ",(0,s.jsx)(n.code,{children:"another.bundle.js"})," \u4e24\u4e2a\u6587\u4ef6\u3002\u5b9e\u73b0\u4e86\u4ee3\u7801\u7684\u62c6\u5206\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f\u6574\u4f53\u4f53\u79ef\uff0c\u4ece\u539f\u5148\u5355 ",(0,s.jsx)(n.code,{children:"main.bundle.js"})," \u6587\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"1.31 MiB"})," \u589e\u52a0\u6210\u591a\u6587\u4ef6\u540e ",(0,s.jsx)(n.code,{children:"1.78 MiB"}),"\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u5b58\u5728\u4e00\u4e9b\u9690\u60a3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5165\u53e3 ",(0,s.jsx)(n.code,{children:"chunk"})," \u4e4b\u95f4\u5305\u542b\u4e00\u4e9b\u91cd\u590d\u7684\u6a21\u5757\uff0c\u90a3\u4e9b\u91cd\u590d\u6a21\u5757\u90fd\u4f1a\u88ab\u5f15\u5165\u5230\u5404\u4e2a ",(0,s.jsx)(n.code,{children:"bundle"})," \u4e2d\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u591f\u7075\u6d3b\uff0c\u5e76\u4e14\u4e0d\u80fd\u52a8\u6001\u5730\u5c06\u6838\u5fc3\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u4e2d\u7684\u4ee3\u7801\u62c6\u5206\u51fa\u6765"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9632\u6b62\u91cd\u590dprevent-duplication",children:"\u9632\u6b62\u91cd\u590d(prevent duplication)"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5165\u53e3 ",(0,s.jsx)(n.code,{children:"chunk"})," \u4e4b\u95f4\u5305\u542b\u4e00\u4e9b\u91cd\u590d\u7684\u6a21\u5757\uff0c\u90a3\u4e9b\u91cd\u590d\u6a21\u5757\u90fd\u4f1a\u88ab\u5f15\u5165\u5230\u5404\u4e2a ",(0,s.jsx)(n.code,{children:"bundle"})," \u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u589e\u52a0 ",(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/entry-context/#dependencies",children:(0,s.jsx)(n.code,{children:"Dependencies"})})," \u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: {\n    index: {\n        import: './src/index.jsx',\n        dependOn: 'shared'\n    },\n    another: {\n        import: './src/another-module.js',\n        dependOn: 'shared'\n    },\n    shared: 'lodash',\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u6253\u5305\uff0c\u751f\u6210\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(9151).A+"",width:"1031",height:"104"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0e\u672a\u589e\u52a0 ",(0,s.jsx)(n.code,{children:"dependOn"})," \u8fdb\u884c\u5bf9\u6bd4:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u603b\u7684\u6253\u5305\u63d0\u4ea4\u4ece ",(0,s.jsx)(n.code,{children:"1.78 MiB"})," \u964d\u81f3 ",(0,s.jsx)(n.code,{children:"1.32 MiB"}),"\uff0c\u5df2\u7ecf\u4e0e\u5355\u5165\u53e3\u6253\u5305\u7684\u4f53\u79ef\u57fa\u672c\u4e0a\u4e00\u81f4\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"index.bundle.js"})," \u4ece ",(0,s.jsx)(n.code,{children:"1.31 MiB"})," \u964d\u81f3 ",(0,s.jsx)(n.code,{children:"858 KiB"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"another.bundle.js"})," \u4ece ",(0,s.jsx)(n.code,{children:"485 KiB"})," \u964d\u81f3 ",(0,s.jsx)(n.code,{children:"1.9 KiB"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"index"})," \u6a21\u5757\u4e2d\u6709\u5bf9 ",(0,s.jsx)(n.code,{children:"another"})," \u8fdb\u884c\u4f7f\u7528\uff0c\u5728\u6253\u5305\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"index"})," \u5185\u4e5f\u628a ",(0,s.jsx)(n.code,{children:"another"})," \u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u6253\u5305\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u7ee7\u7eed\u589e\u52a0\u914d\u7f6e\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"index"})," \u7684 ",(0,s.jsx)(n.code,{children:"dependOn"})," \u7684\u589e\u52a0 ",(0,s.jsx)(n.code,{children:"another"})," \u8fdb\u884c\u4f18\u5316:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: {\n    index: {\n        import: './src/index.jsx',\n        dependOn: ['shared', 'another']\n    },\n    another: {\n        import: './src/another-module.js',\n        dependOn: 'shared'\n    },\n    shared: 'lodash',\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(2104).A+"",width:"1028",height:"102"}),"\n\u4e0e\u4e0a\u9762\u7684\u8fdb\u884c\u6bd4\u8f83\uff0c\u5176\u4ed6\u7684\u5927\u5c0f\u4e0d\u53d8\uff0c",(0,s.jsx)(n.code,{children:"index.bundle.js"})," \u51cf\u5c11\u4e86 ",(0,s.jsx)(n.code,{children:"1 KiB"}),"\uff0c\u5f53\u7136\u5c0f\u5c0f\u7684 ",(0,s.jsx)(n.code,{children:"1 KiB"})," \u5bf9\u6574\u4f53\u5f71\u54cd\u5e76\u6ca1\u6709\u591a\u5c11\uff0c\u4f46\u662f\u8fd9\u662f\u5efa\u7acb\u5728 ",(0,s.jsx)(n.code,{children:"another"})," \u5185\u5bb9\u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5185\u5bb9\u5927\uff0c\u8fd9\u4e2a\u4f18\u5316\u5c31\u5f88\u660e\u663e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u80fd\u7ee7\u7eed\u4f18\u5316\uff0c\u628a\u4e00\u4e0b\u5e38\u7528\u6a21\u5757\u4f9d\u8d56\u8fdb\u884c\u62c6\u5206\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: {\n    index: {\n        import: './src/index.jsx',\n        dependOn: ['another', 'shared', 'reactDependOn']\n    },\n    another: {\n        import: './src/another-module.js',\n        dependOn: 'shared'\n    },\n    shared: 'lodash',\n    reactDependOn: ['react', 'react-dom']\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(5017).A+"",width:"1032",height:"118"}),"\n\u6574\u4f53\u4f53\u79ef\u4e0d\u53d8\uff0c\u4f46\u662f\u62c6\u5206\u51fa\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"react"})," \u76f8\u5173\u7684\u6587\u4ef6\uff0c\u76f8\u5bf9\u5e94\u7684 ",(0,s.jsx)(n.code,{children:"index.bundle.js"})," \u7684\u5927\u5c0f\u4e5f\u660e\u663e\u7684\u7f29\u5c0f\u4e86\uff0c\u4ece\u539f\u5148\u7684 ",(0,s.jsx)(n.code,{children:"857 KiB"})," \u53d8\u6210\u4e86\u73b0\u5728\u7684 ",(0,s.jsx)(n.code,{children:"4.07 KiB"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"splitchunksplugin",children:"SplitChunksPlugin"}),"\n",(0,s.jsx)(n.h3,{id:"\u9ed8\u8ba4\u503c",children:"\u9ed8\u8ba4\u503c"}),"\n",(0,s.jsx)(n.p,{children:"webpack \u5c06\u6839\u636e\u4ee5\u4e0b\u6761\u4ef6\u81ea\u52a8\u62c6\u5206 chunks\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65b0\u7684 chunk \u53ef\u4ee5\u88ab\u5171\u4eab\uff0c\u6216\u8005\u6a21\u5757\u6765\u81ea\u4e8e node_modules \u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(n.li,{children:"\u65b0\u7684 chunk \u4f53\u79ef\u5927\u4e8e 20kb\uff08\u5728\u8fdb\u884c min+gz \u4e4b\u524d\u7684\u4f53\u79ef\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u6309\u9700\u52a0\u8f7d chunks \u65f6\uff0c\u5e76\u884c\u8bf7\u6c42\u7684\u6700\u5927\u6570\u91cf\u5c0f\u4e8e\u6216\u7b49\u4e8e 30"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u52a0\u8f7d\u521d\u59cb\u5316\u9875\u9762\u65f6\uff0c\u5e76\u53d1\u8bf7\u6c42\u7684\u6700\u5927\u6570\u91cf\u5c0f\u4e8e\u6216\u7b49\u4e8e 30"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  //...\n  optimization: {\n    splitChunks: {\n      // \u8868\u793a\u9009\u62e9\u54ea\u4e9b chunks \u8fdb\u884c\u5206\u5272\uff0c\u53ef\u9009\u503c\u6709\uff1aasync\uff0cinitial\u548call\n      chunks: 'async',\n      // \u8868\u793a\u65b0\u5206\u79bb\u51fa\u7684chunk\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8eminSize\uff0c\u9ed8\u8ba4\u4e3a20000\uff0c\u7ea620kb\u3002\n      minSize: 20000,\n      // \u901a\u8fc7\u786e\u4fdd\u62c6\u5206\u540e\u5269\u4f59\u7684\u6700\u5c0f chunk \u4f53\u79ef\u8d85\u8fc7\u9650\u5236\u6765\u907f\u514d\u5927\u5c0f\u4e3a\u96f6\u7684\u6a21\u5757\u3002\n      minRemainingSize: 0,\n      // \u8868\u793a\u4e00\u4e2a\u6a21\u5757\u81f3\u5c11\u5e94\u88abminChunks\u4e2achunk\u6240\u5305\u542b\u624d\u80fd\u5206\u5272\u3002\u9ed8\u8ba4\u4e3a1\n      minChunks: 1,\n      // \u8868\u793a\u6309\u9700\u52a0\u8f7d\u6587\u4ef6\u65f6\uff0c\u5e76\u884c\u8bf7\u6c42\u7684\u6700\u5927\u6570\u76ee\u3002\u9ed8\u8ba4\u4e3a30\u3002\n      maxAsyncRequests: 30,\n      // \u8868\u793a\u52a0\u8f7d\u5165\u53e3\u6587\u4ef6\u65f6\uff0c\u5e76\u884c\u8bf7\u6c42\u7684\u6700\u5927\u6570\u76ee\u3002\u9ed8\u8ba4\u4e3a30\u3002\n      maxInitialRequests: 30,\n      // \u5982\u679c chunk \u7684\u4f53\u79ef\u8d85\u8fc7\u4e86 50k, \u5f3a\u5236\u6267\u884c\u62c6\u5206\u7684\u4f53\u79ef\u9608\u503c\u548c\u5176\u4ed6\u9650\u5236\uff08minRemainingSize\uff0cmaxAsyncRequests\uff0cmaxInitialRequests\uff09\u5c06\u88ab\u5ffd\u7565\u3002\n      enforceSizeThreshold: 50000,\n      // cacheGroups \u4e0b\u53ef\u4ee5\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u7ec4\uff0c\u6bcf\u4e2a\u7ec4\u6839\u636etest\u8bbe\u7f6e\u6761\u4ef6\uff0c\u7b26\u5408test\u6761\u4ef6\u7684\u6a21\u5757\uff0c\u5c31\u5206\u914d\u5230\u8be5\u7ec4\u3002\u6a21\u5757\u53ef\u4ee5\u88ab\u591a\u4e2a\u7ec4\u5f15\u7528\uff0c\u4f46\u6700\u7ec8\u4f1a\u6839\u636epriority\u6765\u51b3\u5b9a\u6253\u5305\u5230\u54ea\u4e2a\u7ec4\u4e2d\u3002\u9ed8\u8ba4\u5c06\u6240\u6709\u6765\u81eanode_modules\u76ee\u5f55\u7684\u6a21\u5757\u6253\u5305\u81f3vendors\u7ec4\uff0c\u5c06\u4e24\u4e2a\u4ee5\u4e0a\u7684chunk\u6240\u5171\u4eab\u7684\u6a21\u5757\u6253\u5305\u81f3default\u7ec4\u3002\n      cacheGroups: {\n        defaultVendors: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          // \u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u8d8a\u5148\u8fdb\u884c\u62c6\u5206\n          priority: -10,\n          // \u5df2\u7ecf\u88ab\u62c6\u5206\u8fc7\u6765\uff0c\u4e0d\u7528\u5728\u8fdb\u884c\u62c6\u5206\n          reuseExistingChunk: true\n        },\n        default: {\n          minChunks: 2,\n          priority: -20,\n          reuseExistingChunk: true\n        }\n      }\n    }\n  }\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u64cd",children:"\u5b9e\u64cd"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u628a\u539f\u6709 ",(0,s.jsx)(n.code,{children:"entry"})," \u914d\u7f6e\u8c03\u6574\u4e00\u4e0b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"entry: {\n    index: {\n        import: './src/index.jsx',\n    },\n    another: {\n        import: './src/another-module.js',\n    },\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5e76\u5728 ",(0,s.jsx)(n.code,{children:"webpack.config.js"})," \u4e2d\u52a0\u4e0a\u4e0a\u8ff0\u9ed8\u8ba4\u503c\uff0c \u5e76\u628a chunk \u6539\u6210 ",(0,s.jsx)(n.code,{children:"all"}),"\uff0c\u652f\u6301\u5f02\u6b65\u6a21\u5757\u548c\u540c\u6b65\u6a21\u5757\u7684\u4ee3\u7801\u62c6\u5206\uff0c\u5728\u5f00\u53d1\u4e2d\u4e5f\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"all"})," \u4f5c\u4e3a\u9009\u9879\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(749).A+"",width:"1684",height:"171"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u89c9\u5f97\u6253\u5305\u51fa\u6765\u7684 defaultVendors \u6587\u4ef6\u8fd8\u662f\u592a\u5927\uff0c\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u5728 ",(0,s.jsx)(n.code,{children:"cacheGroups"})," \u4e2d\u589e\u52a0\u5206\u7ec4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"cacheGroups: {\n    react: {\n        test: /[\\\\/]node_modules[\\\\/]react/,\n        priority: 0,\n        reuseExistingChunk: true\n    },\n    defaultVendors: {\n        test: /[\\\\/]node_modules[\\\\/]/,\n        priority: -10,\n        reuseExistingChunk: true\n    },\n    default: {\n        minChunks: 2,\n        priority: -20,\n        reuseExistingChunk: true\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5364).A+"",width:"1694",height:"259"})})]})}function a(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5680:(e,n,i)=>{i.d(n,{RP:()=>o});var s=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,s)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function t(e,n){if(null==e)return{};var i,s,r=function(e,n){if(null==e)return{};var i,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)i=c[s],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)i=c[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=s.createContext({}),o=function(e){var n=s.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},a=s.forwardRef((function(e,n){var i=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,a=t(e,["components","mdxType","originalType","parentName"]),p=o(i),u=r,j=p["".concat(l,".").concat(u)]||p[u]||h[u]||c;return i?s.createElement(j,d(d({ref:n},a),{},{components:i})):s.createElement(j,d({ref:n},a))}));a.displayName="MDXCreateElement"},749:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/default_splitChunks-3c555af0cff4978c6cf63ed40d153c12.png"},2104:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/dependOn_module_entry-5dcf2cfa228f3cc6ddc8f6c7131f9ec7.png"},8465:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/m_entry-36ecde22b1da6840cdc8c104366d687c.png"},5314:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/one-entry-0fb843a8a3433ae5b6aa1a0690b6bda5.png"},5364:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/react_cacheGroups-f6f08a3f93a2b6bc1755710d92c57811.png"},5017:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/react_entry-235a3cd374e4b816ce5d98a94da0b096.png"},9151:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/shared-entty-876d6988feaad18bf0b3b2fb085b1f8f.png"}}]);