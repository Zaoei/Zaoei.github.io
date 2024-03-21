"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3934],{4448:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var l=r(4848),o=r(5680);const a={},s="loader",d={id:"webpack-resolve/loader",title:"loader",description:"\u4ec0\u4e48\u662f loader \uff1f",source:"@site/docs/webpack-resolve/loader.md",sourceDirName:"webpack-resolve",slug:"/webpack-resolve/loader",permalink:"/docs/webpack-resolve/loader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"initCompiler",permalink:"/docs/webpack-resolve/initCompiler"},next:{title:"webpack modules",permalink:"/docs/webpack-resolve/module"}},c={},i=[{value:"\u4ec0\u4e48\u662f loader \uff1f",id:"\u4ec0\u4e48\u662f-loader-",level:2},{value:"Loader \u7684\u672c\u8d28\u662f\u4ec0\u4e48\uff1f",id:"loader-\u7684\u672c\u8d28\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48 webpack \u9700\u8981 loader\uff1f",id:"\u4e3a\u4ec0\u4e48-webpack-\u9700\u8981-loader",level:2},{value:"webpack \u5982\u4f55\u8fd0\u884c loader\uff1f",id:"webpack-\u5982\u4f55\u8fd0\u884c-loader",level:2},{value:"loader \u5206\u7c7b",id:"loader-\u5206\u7c7b",level:2},{value:"pre\u3001normal \u548c post loader",id:"prenormal-\u548c-post-loader",level:3},{value:"inline loader",id:"inline-loader",level:3},{value:"Inline loader \u4fee\u9970\u7b26",id:"inline-loader-\u4fee\u9970\u7b26",level:3},{value:"\u6267\u884c\u987a\u5e8f",id:"\u6267\u884c\u987a\u5e8f",level:2},{value:"loader \u6267\u884c\u8fc7\u7a0b",id:"loader-\u6267\u884c\u8fc7\u7a0b",level:2},{value:"\u5b9e\u73b0\u4e00\u4e2a loader",id:"\u5b9e\u73b0\u4e00\u4e2a-loader",level:2},{value:"\u540c\u6b65 loader",id:"\u540c\u6b65-loader",level:2},{value:"\u5f02\u6b65 Loaders",id:"\u5f02\u6b65-loaders",level:2},{value:"\u8d44\u6e90 Loader",id:"\u8d44\u6e90-loader",level:2},{value:"Pitching Loader",id:"pitching-loader",level:2},{value:"pitch \u53c2\u6570\u8bf4\u660e",id:"pitch-\u53c2\u6570\u8bf4\u660e",level:3}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.RP)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"loader",children:"loader"}),"\n",(0,l.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-loader-",children:"\u4ec0\u4e48\u662f loader \uff1f"}),"\n",(0,l.jsx)(n.p,{children:"Webpack \u53ea\u80fd\u5904\u7406 javascript \u7684\u6a21\u5757\uff0c\u5982\u679c\u8981\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u5c31\u9700\u8981\u4f7f\u7528 loader \u6765\u8f6c\u6362\u3002loader \u662f webpack \u4e2d\u4e00\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5b83\u662f\u6307\u7528\u6765\u964d\u4e00\u6bb5\u4ee3\u7801\u8f6c\u6362\u6210\u53e6\u4e00\u7aef\u4ee3\u7801\u7684 webpack \u52a0\u8f7d\u5668\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"loader-\u7684\u672c\u8d28\u662f\u4ec0\u4e48",children:"Loader \u7684\u672c\u8d28\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"loader \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5bfc\u51fa\u51fd\u6570\u7684 javaScript \u6a21\u5757\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"/**\n * @param {string | Buffer} \u5185\u5bb9\n * @return {string}\n */\nexport default function loader(source) {\n    const options = this.getOptions();\n\n    source = source.replace(/\\[name\\]/g, options.name);\n\n    return `export default ${JSON.stringify(source)}`;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48-webpack-\u9700\u8981-loader",children:"\u4e3a\u4ec0\u4e48 webpack \u9700\u8981 loader\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"Webpack \u5e95\u5c42\u7684\u4f7f\u7528 aorcn \u6765\u89e3\u6790 js \u8bed\u6cd5\u3002\u5bf9\u4e8e css \u548c\u56fe\u7247\u7b49\u6587\u4ef6\u662f\u65e0\u6cd5\u8fdb\u884c\u89e3\u6790\u7684\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981 loader \u628a\u8d44\u6e90\u8f6c\u6362\u6210 aorcn \u80fd\u591f\u89e3\u6790\u7684\u8bed\u6cd5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"webpack-\u5982\u4f55\u8fd0\u884c-loader",children:"webpack \u5982\u4f55\u8fd0\u884c loader\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 NormalModule.js \u6587\u4ef6\u4e2d\u7684 _doBuild \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7\u8c03\u7528 loader-runner \u5305\u4e2d\u7684 runLoaders \u7684\u65b9\u6cd5\u8fd0\u884c loader\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:r(3971).A+"",width:"1113",height:"1371"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u5728 runLoaders \u65b9\u6cd5\u5185\u90e8\uff0c\u5148\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"loaders.map(createLoaderObject)"})," \u4e3a\u6bcf\u4e00\u4e2a loader \u521b\u5efa\u5bf9\u8c61\uff0c\u5305\u542b normal\u3001pitch\u3001raw \u548c data \u7b49\u5c5e\u6027\u3002\n\u6700\u540e\u5728\u6267\u884c iteratePitchingLoaders \u65b9\u6cd5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"exports.runLoaders = function runLoaders(options, callback) {\n    // read options\n    /** ... **/\n\n    // execution state\n    /** ... **/\n\n    // prepare loader objects\n    loaders = loaders.map(createLoaderObject);\n\n    /** ... **/\n\n    iteratePitchingLoaders(\n        processOptions,\n        loaderContext,\n        function (err, result) {\n            if (err) {\n                return callback(err, {\n                    cacheable: requestCacheable,\n                    fileDependencies: fileDependencies,\n                    contextDependencies: contextDependencies,\n                    missingDependencies: missingDependencies\n                });\n            }\n            callback(null, {\n                result: result,\n                resourceBuffer: processOptions.resourceBuffer,\n                cacheable: requestCacheable,\n                fileDependencies: fileDependencies,\n                contextDependencies: contextDependencies,\n                missingDependencies: missingDependencies\n            });\n        }\n    );\n};\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// loader-runner/lib/LoaderRunner.js\nfunction iteratePitchingLoaders(options, loaderContext, callback) {\n    // abort after last loader\n    if (loaderContext.loaderIndex >= loaderContext.loaders.length)\n        // \u5728processResource\u51fd\u6570\u5185\uff0c\u4f1a\u8c03\u7528iterateNormalLoaders\u51fd\u6570\n        // \u5f00\u59cb\u6267\u884cnormal loader\n        return processResource(options, loaderContext, callback);\n\n    // \u9996\u6b21\u6267\u884c\u65f6\uff0cloaderContext.loaderIndex\u7684\u503c\u4e3a0\n    var currentLoaderObject =\n        loaderContext.loaders[loaderContext.loaderIndex];\n\n    // \u5982\u679c\u5f53\u524dloader\u5bf9\u8c61\u7684pitch\u51fd\u6570\u5df2\u7ecf\u88ab\u6267\u884c\u8fc7\u4e86\uff0c\u5219\u6267\u884c\u4e0b\u4e00\u4e2aloader\u7684pitch\u51fd\u6570\n    if (currentLoaderObject.pitchExecuted) {\n        loaderContext.loaderIndex++;\n        return iteratePitchingLoaders(options, loaderContext, callback);\n    }\n\n    // \u52a0\u8f7dloader\u6a21\u5757\n    loadLoader(currentLoaderObject, function (err) {\n        if (err) {\n            loaderContext.cacheable(false);\n            return callback(err);\n        }\n        // \u83b7\u53d6\u5f53\u524dloader\u5bf9\u8c61\u4e0a\u7684pitch\u51fd\u6570\n        var fn = currentLoaderObject.pitch;\n        // \u6807\u8bc6loader\u5bf9\u8c61\u5df2\u7ecf\u88abiteratePitchingLoaders\u51fd\u6570\u5904\u7406\u8fc7\n        currentLoaderObject.pitchExecuted = true;\n        if (!fn) return iteratePitchingLoaders(options, loaderContext,\n            callback);\n\n        // \u5f00\u59cb\u6267\u884cpitch\u51fd\u6570\n        runSyncOrAsync(fn, loaderContext, ...);\n        // \u7701\u7565\u90e8\u5206\u4ee3\u7801\n    });\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728 loadLoader \u52a0\u8f7d\u4e2d\uff0c\u5b58\u5728\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f\uff0cimport \u548c require\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// loader-runner/lib/loadLoader.js\nmodule.exports = function loadLoader(loader, callback) {\n    if (loader.type === 'module') {\n        try {\n            if (url === undefined) url = require('url');\n            var loaderUrl = url.pathToFileURL(loader.path);\n            var modulePromise = eval(\n                'import(' + JSON.stringify(loaderUrl.toString()) + ')'\n            );\n            modulePromise.then(function (module) {\n                handleResult(loader, module, callback);\n            }, callback);\n            return;\n        } catch (e) {\n            callback(e);\n        }\n    } else {\n        try {\n            var module = require(loader.path);\n        } catch (e) {\n            // it is possible for node to choke on a require if the FD descriptor\n            // limit has been reached. give it a chance to recover.\n            if (e instanceof Error && e.code === 'EMFILE') {\n                var retry = loadLoader.bind(null, loader, callback);\n                if (typeof setImmediate === 'function') {\n                    // node >= 0.9.0\n                    return setImmediate(retry);\n                } else {\n                    // node < 0.9.0\n                    return process.nextTick(retry);\n                }\n            }\n            return callback(e);\n        }\n        return handleResult(loader, module, callback);\n    }\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"loader \u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u6700\u7ec8\u90fd\u4f1a\u6267\u884c handleResult \u65b9\u6cd5\uff0c\u83b7\u53d6\u6a21\u5757\u4e2d\u7684\u5bfc\u51fa\u51fd\u6570\u53ca\u8be5\u51fd\u6570\u4e0a pitch \u548c raw \u5c5e\u6027\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u5bf9\u5e94 loader \u5bf9\u8c61\u7684\u76f8\u5e94\u5c5e\u6027\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"function handleResult(loader, module, callback) {\n    if (typeof module !== 'function' && typeof module !== 'object') {\n        return callback(\n            new LoaderLoadingError(\n                \"Module '\" +\n                    loader.path +\n                    \"' is not a loader (export function or es6 module)\"\n            )\n        );\n    }\n    loader.normal = typeof module === 'function' ? module : module.default;\n    loader.pitch = module.pitch;\n    loader.raw = module.raw;\n    if (\n        typeof loader.normal !== 'function' &&\n        typeof loader.pitch !== 'function'\n    ) {\n        return callback(\n            new LoaderLoadingError(\n                \"Module '\" +\n                    loader.path +\n                    \"' is not a loader (must have normal or pitch function)\"\n            )\n        );\n    }\n    callback();\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"loader-\u5206\u7c7b",children:"loader \u5206\u7c7b"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"loader \u5206\u4e3a 4 \u79cd"}),"\uff1a\n_ pre: \u524d\u7f6e loader\n_ normal\uff1a\u666e\u901a loader\n_ inline\uff1a \u5185\u8054 loader\n_ post\uff1a\u540e\u7f6e loader"]}),"\n",(0,l.jsx)(n.h3,{id:"prenormal-\u548c-post-loader",children:"pre\u3001normal \u548c post loader"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 ",(0,l.jsx)(n.code,{children:"webpack"})," \u914d\u7f6e\u9879\u4e2d\u589e\u52a0\u914d\u7f6e",(0,l.jsx)(n.code,{children:"rule"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = {\n    //...\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: 'css-loader'\n                // enforce: 'pre' | 'post',\n            }\n        ]\n    }\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a\u666e\u901a loader\u3002\u5728 rule \u4e2d\u53ef\u4ee5\u901a\u8fc7 enforce \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e \u2018pre\u2019 | \u2018post\u2019\uff0c\u5206\u522b\u5bf9\u5e94\u524d\u7f6e loader \u548c\u540e\u7f6e loader\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#ruleenforce",children:"https://webpack.js.org/configuration/module/#ruleenforce"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"inline-loader",children:"inline loader"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import 'style-loader!!css-loader!!./index.css';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"inline-loader-\u4fee\u9970\u7b26",children:"Inline loader \u4fee\u9970\u7b26"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-!"})," \u8df3\u8fc7 pre loader\n",(0,l.jsx)(n.code,{children:'const noPreAutoLoaders = requestWithoutMatchResource.startsWith("-!");'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"!"})," \u8df3\u8fc7 pre loader \u548c normal loader\n",(0,l.jsx)(n.code,{children:'const noAutoLoaders = noPreAutoLoaders || requestWithoutMatchResource.startsWith("!");'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"!!"})," \u8df3\u8fc7 pre loader\u3001normal loader \u548c post loader\n",(0,l.jsx)(n.code,{children:'const noPrePostAutoLoaders = requestWithoutMatchResource.startsWith("!!");'})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6267\u884c\u987a\u5e8f",children:"\u6267\u884c\u987a\u5e8f"}),"\n",(0,l.jsx)(n.p,{children:"loader \u7684\u6267\u884c\u987a\u5e8f\u662f\u6b63\u5e8f\u52a0\u8f7d\uff0c\u5012\u5e8f\u6267\u884c\u3002\n\u6bd4\u5982\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module: {\n    rules: [\n        {\n            test: /\\.css$/,\n            use: ['style-loader', 'css-loader']\n        }\n    ];\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6309\u7167\u6b63\u5e8f\u4f9d\u6b21\u52a0\u8f7d ",(0,l.jsx)(n.code,{children:"style-loader"}),"\uff0c ",(0,l.jsx)(n.code,{children:"css-loader"}),"\uff0c\u5728\u6267\u884c\u7684\u65f6\u5019\u5012\u5e8f\u8fdb\u884c\uff0c\u5148\u6267\u884c ",(0,l.jsx)(n.code,{children:"css-loader"}),", \u518d\u6267\u884c",(0,l.jsx)(n.code,{children:"style-loader"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u52a0\u8f7d\u65f6\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"LoaderContext.loaderIndex++"}),",\u800c\u5728\u6267\u884c\u65f6\u5c31\u901a\u8fc7",(0,l.jsx)(n.code,{children:"loaderContext.loaderIndex\u2014"}),"\u8fdb\u884c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0d\u540c\u5206\u7c7b\u7684 loader \u800c\u8a00\uff0c\u5728\u6700\u7ec8\u7684 loaders \u96c6\u5408\u4e2d\uff0c\u5148\u6dfb\u52a0\u540e\u7f6e loader\uff0c\u5728\u6839\u636e ",(0,l.jsx)(n.code,{children:"matchResource"}),"\u6765\u6dfb\u52a0\u5185\u8054 loader \u548c\u666e\u901a loader\uff0c\u6700\u540e\u5728\u6dfb\u52a0\u524d\u7f6e loader\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u79cd\u6dfb\u52a0\u987a\u5e8f\u4e5f\u662f\u6309\u7167 loader \u7684\u6267\u884c\u987a\u5e8f\u6765\u8fdb\u884c\u7684\u3002\u6b63\u5e8f\u52a0\u8f7d\uff0c\u5012\u5e8f\u6267\u884c\u3002\u5148\u6dfb\u52a0\u7684\u5f80\u5f80\u662f\u540e\u6267\u884c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// results[0]: post loader \u96c6\u5408\n// results[1]: normal loader \u96c6\u5408\n// results[2]: pre loader \u96c6\u5408\n// loaders: inline loader \u96c6\u5408\nif (matchResource === undefined) {\n    loaders = results[0].concat(loaders, results[1], results[2]);\n} else {\n    loaders = results[0].concat(results[1], loaders, results[2]);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"loader-\u6267\u884c\u8fc7\u7a0b",children:"loader \u6267\u884c\u8fc7\u7a0b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"Compilation"})," \u5f00\u59cb\u5bf9\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\u65f6\uff0c\u5b83\u4f1a\u5148\u8fdb\u884c\u8d44\u6e90\u7edd\u5bf9\u8def\u5f84\u7684\u5904\u7406\uff0c\u4e5f\u5c31\u662f ",(0,l.jsx)(n.code,{children:"resolve"})," \u8fc7\u7a0b\uff0c\u628a\u8def\u5f84\u90fd\u8f6c\u6362\u6210\u7edd\u5bf9\u8def\u5f84\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4f1a\u6536\u96c6\u8ddf\u5f53\u524d\u8d44\u6e90\u76f8\u5173\u7684 ",(0,l.jsx)(n.code,{children:"loader"}),"\u3002\u5e76\u4e14\u6309\u7167\u987a\u5e8f\u5b58\u5165\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"loaders"})," \u6570\u7ec4\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c ",(0,l.jsx)(n.code,{children:"loader-runner"})," \u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"runLoaders"}),"\uff0c\u5f00\u59cb loader \u7684\u8f6c\u8bd1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u904d\u5386 loaders\uff0c\u5bf9 loader \u8fdb\u884c\u5bf9\u8c61\u8f6c\u6362\uff0c\u521d\u59cb\u5316\u4e00\u4e9b",(0,l.jsx)(n.code,{children:"loader"}),"\u5bf9\u8c61\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c iteratePitchingLoaders \u65b9\u6cd5\uff0c\u5f00\u59cb\u52a0\u8f7d loader\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u52a0\u8f7d\u65f6\u5224\u65ad\u5f53\u524d loader \u662f\u5426\u6709\u5bfc\u51fa ",(0,l.jsx)(n.code,{children:"pitch"})," \u65b9\u6cd5\uff0c\u5982\u679c\u5b58\u5728\u5219\u6267\u884c pitch\u3002\u5982\u679c pitch \u5b58\u5728\u8fd4\u56de\u503c\uff0c\u5219\u8df3\u8fc7\u63a5\u4e0b\u6765\u7684 loader \u52a0\u8f7d\uff0c\u5e76\u76f4\u63a5\u6267\u884c\u4ee5\u52a0\u8f7d\u5b8c\u6210\u7684\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u65f6\u5148\u8c03\u7528",(0,l.jsx)(n.code,{children:"node"}),"\u7684",(0,l.jsx)(n.code,{children:"fs"}),"\u6a21\u5757\uff0c\u6839\u636e\u8d44\u6e90\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u5e76\u5b58\u5165\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"buffer"})," \u5bf9\u8c61\u4e2d\uff0c\u518d\u4f20\u5165 loader \u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u5c06\u5904\u7406\u5b8c\u7684\u5185\u5bb9\u8fd4\u56de\u7ed9\u4e0b\u4e00\u4e2a loader \u8fdb\u884c\u5904\u7406\u3002\n11\u2260. \u5c06 loader \u5904\u7406\u5b8c\u7684\u5185\u5bb9\uff0c\u6dfb\u52a0\u81f3\u6a21\u5757\u4fe1\u606f\u5185\uff0c\u5e76\u8bbe\u7f6e ast \u72b6\u6001\uff0c\u5230\u6b64\u4e00\u4e2a\u6a21\u5757\u6587\u4ef6\u7684 loader \u8fc7\u7a0b\u6267\u884c\u5b8c\u6bd5\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u73b0\u4e00\u4e2a-loader",children:"\u5b9e\u73b0\u4e00\u4e2a loader"}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u8fdb\u884c\u521d\u59cb\u5316",(0,l.jsx)(n.code,{children:"npm init"}),"\uff0c\u751f\u6210 ",(0,l.jsx)(n.code,{children:"package.js"}),"\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5b89\u88c5\u4e00\u4e0b\u76f8\u5173\u4f9d\u8d56\u3002\n",(0,l.jsx)(n.code,{children:"yarn add webpack webpack-cli babel-loader @babel/core css-loader style-loader -D"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u589e\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"src"}),"\u76ee\u5f55\uff0c\u5728 ",(0,l.jsx)(n.code,{children:"src"}),"\u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"index.js"}),"\u3001",(0,l.jsx)(n.code,{children:"index.css"}),"\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// src/index.js\nimport './index.css';\n\nconsole.log('\u5f88\u9ad8\u5174\u8ba4\u8bc6\u4f60\uff0cwebpack');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"/* src/index.css */\nbody {\n    margin: 0;\n    padding: 0;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6839\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"custom-loader"}),"\u76ee\u5f55\uff0c\u7528\u6765\u5b58\u653e\u6211\u4eec\u7684\u81ea\u5df1\u5199\u7684 loader\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a css-loader.js \u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// custom-loader/css-loader.js\nmodule.exports = function (sourceCode) {\n    console.log(arguments);\n\n    return sourceCode;\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6839\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"webpack.config.js"}),"\u6587\u4ef6\uff0c\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// webpack.config.js\nconst path = require('path');\n\nmodule.exports = {\n    mode: 'development',\n    context: __dirname,\n    entry: './src/index.js',\n    output: {\n        path: path.join(__dirname, './dist')\n    },\n    // \u914d\u7f6eloader\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                use: ['babel-loader'],\n                exclude: /node_modules/\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader',\n                    'css-loader',\n                    './custom-css-loader/index.js'\n                ]\n            }\n        ]\n    }\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u7ec8\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tree",children:"\u251c\u2500\u2500 custom-css-loader\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.css\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 webpack.config.js\n\u2514\u2500\u2500 yarn.lock\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884c ",(0,l.jsx)(n.code,{children:"build"}),"\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u770b\u5230\u5982\u4e0b\u8f93\u51fa\uff0c\u8fd9\u4e2a\u5c31\u662f\u6211\u4eec\u5199\u5728 ",(0,l.jsx)(n.code,{children:"loader"})," \u7684 ",(0,l.jsx)(n.code,{children:"console.log"})," \u8bed\u53e5\u5185\u5bb9\uff0c\u53ef\u4ee5\u770b\u5230\u5165\u53c2\u53ea\u6709\u4e00\u4e2a\uff0c\u5c31\u662f\u5f53\u524d\u5339\u914d\u6587\u4ef6\u7684\u5185\u5bb9\u3002\n",(0,l.jsx)(n.img,{src:r(2533).A+"",width:"950",height:"56"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5230\u8fd9\uff0c\u5176\u5b9e\u5c31\u5df2\u7ecf\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6700\u7b80\u5355\u7684 loader\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u540c\u6b65-loader",children:"\u540c\u6b65 loader"}),"\n",(0,l.jsx)(n.p,{children:"\u65e0\u8bba\u662f return \u8fd8\u662f this.callback \u90fd\u53ef\u4ee5\u540c\u6b65\u5730\u8fd4\u56de\u8f6c\u6362\u540e\u7684 content \u503c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = function (sourceCode) {\n    return handle(sourceCode);\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"This.callback \u65b9\u6cd5\u5219\u66f4\u7075\u6d3b\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u4f20\u9012\u591a\u4e2a\u53c2\u6570\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f content\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = function (sourceCode) {\n    this.callback(null, handle(sourceCode));\n    return;\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f02\u6b65-loaders",children:"\u5f02\u6b65 Loaders"}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e8e\u5f02\u6b65 loader\uff0c\u4f7f\u7528 this.async \u6765\u83b7\u53d6 callback \u51fd\u6570\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = function (content, map, meta) {\n    var callback = this.async();\n    someAsyncOperation(content, function (err, result) {\n        if (err) return callback(err);\n        callback(null, result, map, meta);\n    });\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6e90\u7801\u91cc\uff1a\n",(0,l.jsx)(n.code,{children:"this.async()"})," \u8fd4\u56de\u7684\u5176\u5b9e\u662f ",(0,l.jsx)(n.code,{children:"innerCallback"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"innerCallback"})," \u548c ",(0,l.jsx)(n.code,{children:"context.callback"})," \u4e2d\uff0c\u90fd\u4f1a\u4fee\u6539 ",(0,l.jsx)(n.code,{children:"isSync"})," \u7684\u503c\u4e3a ",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"context.async = function async() {\n    if (isDone) {\n        if (reportedError) return; // ignore\n        throw new Error('async(): The callback was already called.');\n    }\n    isSync = false;\n    return innerCallback;\n};\nvar innerCallback = (context.callback = function () {\n    if (isDone) {\n        if (reportedError) return; // ignore\n        throw new Error('callback(): The callback was already called.');\n    }\n    isDone = true;\n    isSync = false;\n    try {\n        callback.apply(null, arguments);\n    } catch (e) {\n        isError = true;\n        throw e;\n    }\n});\ntry {\n    var result = (function LOADER_EXECUTION() {\n        return fn.apply(context, args); //  \u6267\u884c fn\uff0c\u5982\u679c\u5185\u90e8\u6709\u4f7f\u7528 this.async \u6216 this.callback \u65f6\uff0c\u5c31\u4f1a\u6539\u53d8 isSync\n    })();\n    // \u4f1a\u6839\u636e isSync \u7684\u503c\u6765\u5224\u65ad\uff0c\u5982\u679c isSync \u4e3a true \u5219\u540c\u6b65\u6267\u884c\uff0c\u5982\u679c isSync \u4e3a false \u5219\u4e0d\u6267\u884c\n    if (isSync) {\n        isDone = true;\n        if (result === undefined) return callback();\n        if (\n            result &&\n            typeof result === 'object' &&\n            typeof result.then === 'function'\n        ) {\n            return result.then(function (r) {\n                callback(null, r);\n            }, callback);\n        }\n        return callback(null, result);\n    }\n} catch (e) {}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8d44\u6e90-loader",children:"\u8d44\u6e90 Loader"}),"\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8d44\u6e90\u6587\u4ef6\u4f1a\u88ab\u8f6c\u5316\u4e3a UTF-8 \u5b57\u7b26\u4e32\uff0c\u7136\u540e\u4f20\u7ed9 loader\u3002\u901a\u8fc7\u8bbe\u7f6e raw \u4e3a true\uff0cloader \u53ef\u4ee5\u63a5\u6536\u539f\u59cb\u7684 Buffer\u3002\u6bcf\u4e00\u4e2a loader \u90fd\u53ef\u4ee5\u7528 String \u6216\u8005 Buffer \u7684\u5f62\u5f0f\u4f20\u9012\u5b83\u7684\u5904\u7406\u7ed3\u679c\u3002complier \u5c06\u4f1a\u628a\u5b83\u4eec\u5728 loader \u4e4b\u95f4\u76f8\u4e92\u8f6c\u6362\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'module.exports = function (content) {\n    assert(content instanceof Buffer);\n    return someSyncOperation(content);\n    // \u8fd4\u56de\u503c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a `Buffer`\n    // \u5373\u4f7f\u4e0d\u662f "raw"\uff0cloader \u4e5f\u6ca1\u95ee\u9898\n};\nmodule.exports.raw = true;\n'})}),"\n",(0,l.jsx)(n.h2,{id:"pitching-loader",children:"Pitching Loader"}),"\n",(0,l.jsx)(n.p,{children:"Loader \u603b\u662f\u4ece\u53f3\u5230\u5de6\u88ab\u8c03\u7528\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0cloader \u53ea\u5173\u5fc3 request \u540e\u9762\u7684\u5143\u6570\u636e(metadata)\uff0c\u5e76\u4e14\u5ffd\u7565\u524d\u4e00\u4e2a loader \u7684\u7ed3\u679c\u3002\u5728\u5b9e\u9645\uff08\u4ece\u53f3\u5230\u5de6\uff09\u6267\u884c loader \u4e4b\u524d\uff0c\u4f1a\u5148 \u4ece\u5de6\u5230\u53f3 \u8c03\u7528 loader \u4e0a\u7684 pitch \u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e8e\u4ee5\u4e0b use \u914d\u7f6e:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = {\n    //...\n    module: {\n        rules: [\n            {\n                //...\n                use: ['a-loader', 'b-loader', 'c-loader']\n            }\n        ]\n    }\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884c\u987a\u5e8f\u5982\u4e0b:\n",(0,l.jsx)(n.img,{src:r(2723).A+"",width:"1011",height:"201"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u7ed9\u5176\u4e2d\u7684 b-loader \u589e\u52a0\u4e00\u4e2a\u8fd4\u56de\u503c\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"module.exports = function (content) {\n    return handle(content);\n};\n\nmodule.exports.pitch = function (remainingRequest, precedingRequest, data) {\n    return (\n        'module.exports = require(' +\n        JSON.stringify('-!' + remainingRequest) +\n        ');'\n    );\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884c\u8fc7\u7a0b\u4f1a\u53d8\u6210\u5982\u4e0b\uff1a\n",(0,l.jsx)(n.img,{src:r(5090).A+"",width:"1011",height:"201"})]}),"\n",(0,l.jsx)(n.h3,{id:"pitch-\u53c2\u6570\u8bf4\u660e",children:"pitch \u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"remainingRequest"}),"\uff1aloader \u94fe\u4e2d\u6392\u5728\u81ea\u5df1\u540e\u9762\u7684 loader \u4ee5\u53ca\u8d44\u6e90\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u4ee5",(0,l.jsx)(n.code,{children:"!"}),"\u4f5c\u4e3a\u8fde\u63a5\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002\n\u6570\u636e\u5982\u4e0b\uff1a\n",(0,l.jsx)(n.code,{children:"'_Users_edy_Desktop_word_game_webpack-loader_node_modules_style-loader_dist_cjs.js !_Users_edy_Desktop_word_game_webpack-loader_node_modules_css-loader_dist_cjs.js !_Users_edy_Desktop_word_game_webpack-loader_node_modules_sass-loader_dist_cjs.js !_Users_edy_Desktop_word_game_webpack-loader_src_index.scss"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"precedingRequest"}),"\uff1aloader \u94fe\u4e2d\u6392\u5728\u81ea\u5df1\u524d\u9762\u7684 loader \u7684\u7edd\u5bf9\u8def\u5f84\u4ee5",(0,l.jsx)(n.code,{children:"!"}),"\u4f5c\u4e3a\u8fde\u63a5\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002\u6570\u636e\u683c\u5f0f\u540c remainingRequest"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"data"}),"\uff1a\u6bcf\u4e2a loader \u4e2d\u5b58\u653e\u5728\u4e0a\u4e0b\u6587\u4e2d\u7684\u56fa\u5b9a\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"// remainingRequest\uff1aloader\u94fe\u4e2d\u6392\u5728\u81ea\u5df1\u540e\u9762\u7684 loader \u4ee5\u53ca\u8d44\u6e90\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u4ee5`!`\u4f5c\u4e3a\u8fde\u63a5\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002\n// precedingRequest\uff1aloader\u94fe\u4e2d\u6392\u5728\u81ea\u5df1\u524d\u9762\u7684 loader \u7684\u7edd\u5bf9\u8def\u5f84\u4ee5`!`\u4f5c\u4e3a\u8fde\u63a5\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002\n// data\uff1a\u6bcf\u4e2a loader \u4e2d\u5b58\u653e\u5728\u4e0a\u4e0b\u6587\u4e2d\u7684\u56fa\u5b9a\u5b57\u6bb5\uff0c\u53ef\u7528\u4e8e pitch \u7ed9 loader \u4f20\u9012\u6570\u636e\nmodule.exports.pitch = function (remainingRequest, precedingRequest, data) {\n    // ...\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://webpack.docschina.org/api/loaders/#root",children:"Loader Interface | webpack \u4e2d\u6587\u6587\u6863"}),"\n",(0,l.jsx)(n.a,{href:"https://webpack.docschina.org/contribute/writing-a-loader/",children:"\u7f16\u5199 loader"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://webpack.docschina.org/api/loaders/",children:"loaderContext \u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\u8bf4\u660e"})}),"\n",(0,l.jsx)(n.p,{children:"webpack \u7684 loaderContext.loadeModule \u7684\u539f\u610f\u4e3a\u89e3\u6790\u6307\u5b9a\u7684 request \u5230\u4e00\u4e2a\u6a21\u5757\uff0c\u5e76\u5bf9\u5176\u5e94\u7528\u5df2\u7ecf\u914d\u7f6e\u7684 loader\uff0c\u6700\u540e\u5411\u5176\u63a5\u6536\u5230\u7684 callback \u4e2d\u4f20\u5165 source\u3001sourceMap\u3001Module\u5b9e\u4f8b\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 webpack loaderContext \u4e2d resolve \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u5411 require \u65b9\u6cd5\u4e00\u6837\u89e3\u6790\u4e00\u4e2a request\uff1b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 webpack \u7684 loaderContext.getResolve \u8fd9\u4e2a\u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u7c7b\u4f3c\u4e0a\u9762 resolve \u7684\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u914d\u7f6e\u9009\u9879\uff0c\u8fd9\u4e9b\u914d\u7f6e\u81ea\u52a8\u4f1a\u548c webpack \u914d\u7f6e\u7684 resolve \u9009\u9879\u5408\u5e76\uff0c\u5b83\u63a5\u6536\u53ef\u4ee5\u63a5\u6536\u56de\u8c03\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff1b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 webpack loaderContext.getOptions \u4e2d\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u63d0\u53d6\u7ed9\u5b9a\u7684 loader \u7684\u9009\u9879\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u53ef\u9009\u7684 json-schema \u5bf9\u8c61\uff0c\u7528\u4e8e\u6821\u9a8c\u9009\u9879\uff1b"}),"\n",(0,l.jsx)(n.p,{children:"loaderContext.emitWarning/emitError \u7528\u4e8e\u5411 webpack \u7f16\u8bd1\u540e\u8f93\u51fa\u7684\u7684\u8b66\u544a\u3001\u9519\u8bef\u4e2d\u5199\u5165 loader \u8fd0\u884c\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u8b66\u544a\u548c\u9519\u8bef\uff1b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"webpack \u7684loader\u9ed8\u8ba4\u914d\u7f6e\u662f\u5728\u54ea\u5904\u7406\u7684\uff0c\u6709\u54ea\u4e9bloader\u9ed8\u8ba4\u914d\u7f6e\u4e48\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"webpack\u4e2d\u6709\u4e00\u4e2aresolver\u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u89e3\u6790\u6a21\u5757\u6587\u4ef6\u7684\u771f\u5b9e\u7edd\u5bf9\u8def\u5f84\uff0c\u90a3\u4e48loader\u548c\u666e\u901a\u6a21\u5757\u7684resolver\u4f7f\u7528\u7684\u662f\u540c\u4e00\u4e2a\u4e48\uff1f\nTODO \u6709\u4ec0\u4e48\u533a\u522b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u77e5\u9053\uff0c\u9664\u4e86config\u4e2d\u7684loader\uff0c\u8fd8\u53ef\u4ee5\u5199inline\u7684loader\uff0c\u90a3\u4e48inline loader\u548cnormal config loader\u6267\u884c\u7684\u5148\u540e\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u4e2d\u7684module.rules\u5728webpack\u4e2d\u662f\u5982\u4f55\u751f\u6548\u4e0e\u5b9e\u73b0\u7684\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"webpack\u7f16\u8bd1\u6d41\u7a0b\u4e2dloader\u662f\u5982\u4f55\u4ee5\u53ca\u5728\u4f55\u65f6\u53d1\u6325\u4f5c\u7528\u7684\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"loader\u4e3a\u4ec0\u4e48\u662f\u81ea\u53f3\u5411\u5de6\u6267\u884c\u7684\uff1f\nTODO"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u5728\u67d0\u4e2apitch\u4e2d\u8fd4\u56de\u503c\uff0c\u5177\u4f53\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5199\u8fc7loader\uff0c\u90a3\u4e48\u53ef\u80fd\u5728loader function\u4e2d\u7528\u5230\u4e86this\uff0c\u8fd9\u91cc\u7684this\u7a76\u7adf\u662f\u4ec0\u4e48\uff0c\u662fwebpack\u5b9e\u4f8b\u4e48\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"loader function\u4e2d\u7684this.data\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u4f55\u5199\u4e00\u4e2a\u5f02\u6b65loader\uff0cwebpack\u53c8\u662f\u5982\u4f55\u5b9e\u73b0loader\u7684\u5f02\u6b65\u5316\u7684\uff1f"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.RP)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},5680:(e,n,r)=>{r.d(n,{RP:()=>i});var l=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,l,o=function(e,n){if(null==e)return{};var r,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=l.createContext({}),i=function(e){var n=l.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},t={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),h=i(r),p=o,x=h["".concat(c,".").concat(p)]||h[p]||t[p]||a;return r?l.createElement(x,s(s({ref:n},u),{},{components:r})):l.createElement(x,s({ref:n},u))}));u.displayName="MDXCreateElement"},2533:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/loader-context-console-139d9dd04594dc110dfa4b2e2da090c3.png"},5090:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/loader-patch-process-17368215ce21024677fd9b077d22eac5.png"},2723:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/loader-process-b6120262515755602afb725b328c34e1.png"},3971:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/runLoaders-ab36cc86c8f079e2abde82b2ed3cb270.png"}}]);