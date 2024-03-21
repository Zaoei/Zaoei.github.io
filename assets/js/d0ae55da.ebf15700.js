"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2230],{8172:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=r(4848),i=r(5680);const l={},s="\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u6784\u5efa",d={id:"webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/README",title:"\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u6784\u5efa",description:"\u8fd0\u884c\u5728 Node.js \u4e4b\u4e0a\u7684 webpack \u662f\u5355\u7ebf\u7a0b\u6a21\u5f0f\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cwebpack \u6253\u5305\u53ea\u80fd\u9010\u4e2a\u6587\u4ef6\u5904\u7406\uff0c\u5f53 webpack \u9700\u8981\u6253\u5305\u5927\u91cf\u6587\u4ef6\u65f6\uff0c\u6253\u5305\u65f6\u95f4\u5c31\u4f1a\u6bd4\u8f83\u6f2b\u957f\u3002",source:"@site/docs/webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/README.md",sourceDirName:"webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b",slug:"/webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/",permalink:"/docs/webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u538b\u7f29\u4ee3\u7801",permalink:"/docs/webpack-optimize/\u538b\u7f29/"},next:{title:"thread-loader",permalink:"/docs/webpack-optimize/\u591a\u8fdb\u7a0b and \u591a\u7ebf\u7a0b/thread-loader"}},t={},c=[{value:"thread-loader",id:"thread-loader",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"HappyPack",id:"happypack",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-1",level:3},{value:"parallel-webpack",id:"parallel-webpack",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-2",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-2",level:3},{value:"\u5e76\u884c\u538b\u7f29",id:"\u5e76\u884c\u538b\u7f29",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u591a\u8fdb\u7a0b\u591a\u5b9e\u4f8b\u6784\u5efa",children:"\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u6784\u5efa"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd0\u884c\u5728 Node.js \u4e4b\u4e0a\u7684 webpack \u662f\u5355\u7ebf\u7a0b\u6a21\u5f0f\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cwebpack \u6253\u5305\u53ea\u80fd\u9010\u4e2a\u6587\u4ef6\u5904\u7406\uff0c\u5f53 webpack \u9700\u8981\u6253\u5305\u5927\u91cf\u6587\u4ef6\u65f6\uff0c\u6253\u5305\u65f6\u95f4\u5c31\u4f1a\u6bd4\u8f83\u6f2b\u957f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u6784\u5efa\u7684\u65b9\u6848\u6bd4\u8f83\u77e5\u540d\u7684\u6709\u4ee5\u4e0b\u4e09\u79cd\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"thread-loader\uff08\u5b98\u65b9\u63a8\u51fa\uff09"}),"\n",(0,a.jsx)(n.li,{children:"parallel-webpack"}),"\n",(0,a.jsx)(n.li,{children:"HappyPack"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"thread-loader",children:(0,a.jsx)(n.a,{href:"https://www.webpackjs.com/loaders/thread-loader/",children:"thread-loader"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"install"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"npm install --save-dev thread-loader\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u7528\u6cd5"}),"\n\u628a\u8fd9\u4e2a loader \u653e\u7f6e\u5728\u5176\u4ed6 loader \u4e4b\u524d\uff0c \u653e\u7f6e\u5728\u8fd9\u4e2a loader \u4e4b\u540e\u7684 loader \u5c31\u4f1a\u5728\u4e00\u4e2a\u5355\u72ec\u7684 worker \u6c60(worker pool)\u4e2d\u8fd0\u884c"]}),"\n",(0,a.jsx)(n.p,{children:"\u5728 worker \u6c60(worker pool)\u4e2d\u8fd0\u884c\u7684 loader \u662f\u53d7\u5230\u9650\u5236\u7684\u3002\u4f8b\u5982\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u8fd9\u4e9b loader \u4e0d\u80fd\u4ea7\u751f\u65b0\u7684\u6587\u4ef6\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u8fd9\u4e9b loader \u4e0d\u80fd\u4f7f\u7528\u5b9a\u5236\u7684 loader API\uff08\u4e5f\u5c31\u662f\u8bf4\uff0c\u901a\u8fc7\u63d2\u4ef6\uff09\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u8fd9\u4e9b loader \u65e0\u6cd5\u83b7\u53d6 webpack \u7684\u9009\u9879\u8bbe\u7f6e\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u6bcf\u4e2a worker \u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684 node.js \u8fdb\u7a0b\uff0c\u5176\u5f00\u9500\u5927\u7ea6\u4e3a 600ms \u5de6\u53f3\u3002\u540c\u65f6\u4f1a\u9650\u5236\u8de8\u8fdb\u7a0b\u7684\u6570\u636e\u4ea4\u6362\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u8bf7\u4ec5\u5728\u8017\u65f6\u7684 loader \u4e0a\u4f7f\u7528\u3002"}),"\n",(0,a.jsx)(n.p,{children:"// TODO \u4e86\u89e3 thread-loader \u91cc\u9762\u6267\u884c\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve("src"),\n        use: [\n          "thread-loader",\n          "expensive-loader"\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u542f\u52a8\u65f6\uff0c\u4ee5 pitch \u65b9\u5f0f\u62e6\u622a Loader \u6267\u884c\u94fe"}),"\n",(0,a.jsx)(n.li,{children:"\u5206\u6790 Webpack \u914d\u7f6e\u5bf9\u8c61\uff0c\u83b7\u53d6 thread-loader \u540e\u9762\u7684 Loader \u5217\u8868"}),"\n",(0,a.jsx)(n.li,{children:"\u8c03\u7528 child_process.spawn \u521b\u5efa worker \u8fdb\u7a0b\uff0c\u5e76\u5c06 Loader \u5217\u8868\u3001\u6587\u4ef6\u8def\u5f84\u3001\u4e0a\u4e0b\u6587\u7b49\u53c2\u6570\u4f20\u9012\u5230\u5b50\u8fdb\u7a0b"}),"\n",(0,a.jsx)(n.li,{children:"\u5b50\u8fdb\u7a0b\u4e2d\u8c03\u7528 loader-runner\uff0c\u8f6c\u8bd1\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,a.jsx)(n.li,{children:"\u8f6c\u8bd1\u5b8c\u6bd5\u540e\uff0c\u5c06\u7ed3\u679c\u4f20\u56de\u4e3b\u8fdb\u7a0b"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Loader \u4e2d\u4e0d\u80fd\u8c03\u7528 emitAsset \u7b49\u63a5\u53e3\uff0c\u8fd9\u4f1a\u5bfc\u81f4 style-loader \u8fd9\u4e00\u7c7b Loader \u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c\u89e3\u51b3\u65b9\u6848\u662f\u5c06\u8fd9\u7c7b\u7ec4\u4ef6\u653e\u7f6e\u5728 thread-loader \u4e4b\u524d\uff0c\u5982 ['style-loader', 'thread-loader', 'css-loader']"}),"\n",(0,a.jsx)(n.li,{children:"Loader \u4e2d\u4e0d\u80fd\u83b7\u53d6 compilation\u3001compiler \u7b49\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4e5f\u65e0\u6cd5\u83b7\u53d6 Webpack \u914d\u7f6e"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"happypack",children:(0,a.jsx)(n.a,{href:"https://github.com/amireh/happypack",children:"HappyPack"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"install"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"npm install --save-dev happypack\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u7528\u6cd5"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const HappyPack = require('happypack');\n\nexports.module = {\n  rules: [\n    {\n      test: /.js$/,\n      // 1) replace your original list of loaders with \"happypack/loader\":\n      // loaders: [ 'babel-loader?presets[]=es2015' ],\n      use: 'happypack/loader',\n      include: [ /* ... */ ],\n      exclude: [ /* ... */ ]\n    }\n  ]\n};\n\nexports.plugins = [\n  // 2) create the plugin:\n  new HappyPack({\n    // 3) re-add the loaders you replaced above in #1:\n    loaders: [ 'babel-loader?presets[]=es2015' ]\n  })\n];\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u539f\u7406-1",children:"\u539f\u7406"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"happlypack/loader \u63a5\u53d7\u5230\u8f6c\u8bd1\u8bf7\u6c42\u540e\uff0c\u4ece Webpack \u914d\u7f6e\u4e2d\u8bfb\u53d6\u51fa\u76f8\u5e94 HappyPack \u63d2\u4ef6\u5b9e\u4f8b"}),"\n",(0,a.jsx)(n.li,{children:"\u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u7684 compile \u65b9\u6cd5\uff0c\u521b\u5efa HappyThread \u5b9e\u4f8b(\u6216\u4ece HappyThreadPool \u53d6\u51fa\u7a7a\u95f2\u5b9e\u4f8b)"}),"\n",(0,a.jsx)(n.li,{children:"HappyThread \u5185\u90e8\u8c03\u7528 child_process.fork \u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u5e76\u6267\u884c HappyWorkerChannel \u6587\u4ef6"}),"\n",(0,a.jsx)(n.li,{children:"HappyWorkerChannel \u521b\u5efa HappyWorker \uff0c\u5f00\u59cb\u6267\u884c Loader \u8f6c\u8bd1\u903b\u8f91"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:r(5162).A+"",width:"1581",height:"1021"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7f3a\u70b9-1",children:"\u7f3a\u70b9"}),"\n",(0,a.jsx)(n.p,{children:"HappyPack \u867d\u7136\u786e\u5b9e\u80fd\u6709\u6548\u63d0\u5347 Webpack \u7684\u6253\u5305\u6784\u5efa\u901f\u5ea6\uff0c\u4f46\u5b83\u6709\u4e00\u4e9b\u660e\u663e\u7684\u7f3a\u70b9\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4f5c\u8005\u5df2\u7ecf\u660e\u786e\u8868\u793a\u4e0d\u4f1a\u7ee7\u7eed\u7ef4\u62a4\uff0c\u6269\u5c55\u6027\u4e0e\u7a33\u5b9a\u6027\u7f3a\u4e4f\u4fdd\u969c\uff0c\u968f\u7740 Webpack \u672c\u8eab\u7684\u53d1\u5c55\u8fed\u4ee3\uff0c\u53ef\u4ee5\u9884\u89c1\u603b\u6709\u4e00\u5929 HappyPack \u65e0\u6cd5\u5b8c\u5168\u517c\u5bb9 Webpack"}),"\n",(0,a.jsx)(n.li,{children:"HappyPack \u5e95\u5c42\u4ee5\u81ea\u5df1\u7684\u65b9\u5f0f\u91cd\u65b0\u5b9e\u73b0\u4e86\u52a0\u8f7d\u5668\u903b\u8f91\uff0c\u6e90\u7801\u4e0e\u4f7f\u7528\u65b9\u6cd5\u90fd\u4e0d\u5982 Thread-loader \u6e05\u723d\u7b80\u5355"}),"\n",(0,a.jsxs)(n.li,{children:["\u4e0d\u652f\u6301\u90e8\u5206 Loader\uff0c",(0,a.jsx)(n.a,{href:"https://github.com/amireh/happypack/wiki/Loader-Compatibility-List",children:"\u517c\u5bb9\u5217\u8868"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"parallel-webpack",children:"parallel-webpack"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"install"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"npm install parallel-webpack --save-dev\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u7528\u6cd5"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var createVariants = require('parallel-webpack').createVariants;\n\n// Those options will be mixed into every variant\n// and passed to the `createConfig` callback.\nvar baseOptions = {\n    preferredDevTool: process.env.DEVTOOL || 'eval'\n};\n\n// This object defines the potential option variants\n// the key of the object is used as the option name, its value must be an array\n// which contains all potential values of your build.\nvar variants = {\n    minified: [true, false],\n    debug: [true, false],\n    target: ['commonjs2', 'var', 'umd', 'amd']\n};\n\nfunction createConfig(options) {\n    var plugins = [\n        new webpack.optimize.DedupePlugin(),\n        new webpack.optimize.OccurenceOrderPlugin(),\n        new webpack.DefinePlugin({\n            DEBUG: JSON.stringify(JSON.parse(options.debug))\n        })\n    ];\n    if(options.minified) {\n        plugins.push(new webpack.optimize.UglifyJsPlugin({\n            sourceMap: false,\n            compress: {\n                warnings: false\n            }\n        }));\n    }\n    return {\n        entry: './index.js',\n        devtool: options.preferredDevTool,\n        output: {\n            path: './dist/',\n            filename: 'MyLib.' +\n                options.target +\n                (options.minified ? '.min' : '') +\n                (options.debug ? '.debug' : '')\n                + '.js',\n            libraryTarget: options.target\n        },\n        plugins: plugins\n    };\n}\n\nmodule.exports = createVariants(baseOptions, variants, createConfig);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u8ff0\u793a\u4f8b\u4f7f\u7528 createVariants \u51fd\u6570\uff0c\u6839\u636e variants \u53d8\u91cf\u642d\u914d\u51fa 16 \u79cd\u4e0d\u540c\u7684 minified\u3001debug\u3001target \u7ec4\u5408\uff0c\u6700\u7ec8\u751f\u6210\u5982\u4e0b\u4ea7\u7269\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[WEBPACK] Building 16 targets in parallel\n[WEBPACK] Started building MyLib.umd.js\n[WEBPACK] Started building MyLib.umd.min.js\n[WEBPACK] Started building MyLib.umd.debug.js\n[WEBPACK] Started building MyLib.umd.min.debug.js\n\n[WEBPACK] Started building MyLib.amd.js\n[WEBPACK] Started building MyLib.amd.min.js\n[WEBPACK] Started building MyLib.amd.debug.js\n[WEBPACK] Started building MyLib.amd.min.debug.js\n\n[WEBPACK] Started building MyLib.commonjs2.js\n[WEBPACK] Started building MyLib.commonjs2.min.js\n[WEBPACK] Started building MyLib.commonjs2.debug.js\n[WEBPACK] Started building MyLib.commonjs2.min.debug.js\n\n[WEBPACK] Started building MyLib.var.js\n[WEBPACK] Started building MyLib.var.min.js\n[WEBPACK] Started building MyLib.var.debug.js\n[WEBPACK] Started building MyLib.var.min.debug.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u539f\u7406-2",children:"\u539f\u7406"}),"\n",(0,a.jsx)(n.p,{children:"parallel-webpack \u7684\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u5728 Webpack \u4e0a\u5957\u4e86\u4e2a\u58f3\uff0c\u6838\u5fc3\u903b\u8f91\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6839\u636e\u4f20\u5165\u7684\u914d\u7f6e\u9879\u6570\u91cf\uff0c\u8c03\u7528 worker-farm \u521b\u5efa\u590d\u6570\u4e2a\u5de5\u4f5c\u8fdb\u7a0b"}),"\n",(0,a.jsx)(n.li,{children:"\u5de5\u4f5c\u8fdb\u7a0b\u5185\u8c03\u7528 Webpack \u6267\u884c\u6784\u5efa"}),"\n",(0,a.jsx)(n.li,{children:"\u5de5\u4f5c\u8fdb\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u8c03\u7528 node-ipc \u5411\u4e3b\u8fdb\u7a0b\u53d1\u9001\u7ed3\u675f\u4fe1\u53f7"}),"\n",(0,a.jsx)(n.li,{children:"\u5230\u8fd9\u91cc\uff0c\u6240\u6709\u5de5\u4f5c\u5c31\u5b8c\u6210\u4e86\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7f3a\u70b9-2",children:"\u7f3a\u70b9"}),"\n",(0,a.jsx)(n.p,{children:"\u867d\u7136\uff0cparallel-webpack \u76f8\u5bf9\u4e8e Thread-loader\u3001HappyPack \u6709\u66f4\u9ad8\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u8fdb\u7a0b\u5b9e\u4f8b\u4e0e\u5b9e\u4f8b\u4e4b\u95f4\u5e76\u6ca1\u6709\u505a\u4efb\u4f55\u5f62\u5f0f\u7684\u901a\u8baf\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u76f8\u540c\u7684\u5de5\u4f5c\u5728\u4e0d\u540c\u8fdb\u7a0b \u2014\u2014 \u6216\u8005\u8bf4\u4e0d\u540c CPU \u6838\u4e0a\u88ab\u91cd\u590d\u6267\u884c\u3002\u4f8b\u5982\u9700\u8981\u5bf9\u540c\u4e00\u4efd\u4ee3\u7801\u540c\u65f6\u6253\u5305\u51fa\u538b\u7f29\u548c\u975e\u538b\u7f29\u7248\u672c\u65f6\uff0c\u5728 parallel-webpack \u65b9\u6848\u4e0b\uff0c\u524d\u7f6e\u7684\u8d44\u6e90\u52a0\u8f7d\u3001\u4f9d\u8d56\u89e3\u6790\u3001AST \u5206\u6790\u7b49\u64cd\u4f5c\u4f1a\u88ab\u91cd\u590d\u6267\u884c\uff0c\u4ec5\u4ec5\u6700\u7ec8\u9636\u6bb5\u751f\u6210\u4ee3\u7801\u65f6\u6709\u6240\u5dee\u5f02\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u79cd\u6280\u672f\u5b9e\u73b0\uff0c\u5bf9\u5355 entry \u7684\u9879\u76ee\u6ca1\u6709\u4efb\u4f55\u6536\u76ca\uff0c\u53ea\u4f1a\u5f92\u589e\u8fdb\u7a0b\u521b\u5efa\u6210\u672c\uff1b\u4f46\u7279\u522b\u9002\u5408 MPA \u7b49\u591a entry \u573a\u666f\uff0c\u6216\u8005\u9700\u8981\u540c\u65f6\u7f16\u8bd1\u51fa esm\u3001umd\u3001amd \u7b49\u591a\u79cd\u4ea7\u7269\u5f62\u6001\u7684\u7c7b\u5e93\u573a\u666f\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://fed.taobao.org/blog/taofed/do71ct/happypack-source-code-analysis/",children:"happypack \u539f\u7406\u89e3\u6790"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/425076452",children:"Webpack \u6027\u80fd\u7cfb\u5217\u4e8c\uff1a\u591a\u8fdb\u7a0b\u6253\u5305"}),"\n",(0,a.jsx)(n.a,{href:"https://fed.taobao.org/blog/taofed/do71ct/happypack-source-code-analysis/",children:"happypack \u539f\u7406\u89e3\u6790"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u5e76\u884c\u538b\u7f29",children:"\u5e76\u884c\u538b\u7f29"}),"\n",(0,a.jsx)(n.p,{children:"webpack v5 \u5f00\u7bb1\u5373\u5e26\u6709\u6700\u65b0\u7248\u672c\u7684 terser-webpack-plugin\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u5df2\u5f00\u542f\u5e76\u884c\u538b\u7f29\u80fd\u529b\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u4fdd\u6301\u9ed8\u8ba4\u914d\u7f6e\u5373 parallel = true \u5373\u53ef\u83b7\u5f97\u6700\u4f73\u7684\u6027\u80fd\u6536\u76ca\u3002\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7 parallel \u53c2\u6570\u5173\u95ed\u6216\u8bbe\u5b9a\u5177\u4f53\u7684\u5e76\u884c\u8fdb\u7a0b\u6570\u91cf\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const TerserPlugin = require("terser-webpack-plugin");\n\nmodule.exports = {\n    optimization: {\n        minimize: true,\n        minimizer: [new TerserPlugin({\n            parallel: 2 // number | boolean\n        })],\n    },\n};\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u8ff0\u914d\u7f6e\u5373\u53ef\u8bbe\u5b9a\u6700\u5927\u5e76\u884c\u8fdb\u7a0b\u6570\u4e3a2\u3002"}),"\n",(0,a.jsx)(n.h1,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,a.jsx)(n.p,{children:"\u591a\u8fdb\u7a0b\u6253\u5305\u5c5e\u4e8e\u6253\u5305\u4f18\u5316\uff0c\u5f00\u53d1\u8005\u5e94\u8be5\u89c6\u9879\u76ee\u60c5\u51b5\u51b3\u5b9a\u662f\u5426\u5bf9\u67d0\u9879\u6253\u5305\u4efb\u52a1\u91c7\u7528\u591a\u8fdb\u7a0b\u6253\u5305\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u7528\u5f97\u597d\uff0c\u5c31\u80fd\u8282\u7ea6\u6253\u5305\u65f6\u95f4\uff0c\u7528\u5f97\u4e0d\u597d\uff0c\u4e0d\u5982\u4e0d\u7528\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5680:(e,n,r)=>{r.d(n,{RP:()=>c});var a=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var t=a.createContext({}),c=function(e){var n=a.useContext(t),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},o=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,t=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),h=c(r),u=i,j=h["".concat(t,".").concat(u)]||h[u]||p[u]||l;return r?a.createElement(j,s(s({ref:n},o),{},{components:r})):a.createElement(j,s({ref:n},o))}));o.displayName="MDXCreateElement"},5162:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/happypack-f66577ab9b0fae71ed94f2ccfb8aea59.png"}}]);