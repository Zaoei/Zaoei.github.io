## 收集模块导出

### module parse 中
每一个 module 本身都有一个 dependencies 数组，用来存放当前模块的倒入导出相关，也就是 import ，export 的数据。

HarmonyImportXXXXXXXDependency 代表的是当前模块的依赖模块，也就是外部的导入模块。

HarmonyExportXXXXXXXDependency 代表的是当前模块的导出相关。
HarmonyExportExpressionDependency 默认导出
HarmonyExportSpecifierDependency 具名导出

### compilation.finish 中
1、当我们完成所有模块的 parse 后，触发 compilation.hooks.finishModules 钩子，开始执行 FlagDependencyExportsPlugin 插件回调。
2、在 FlagDependencyExportsPlugin 内，会通过 processDependenciesBlock 方法，找出所有的导出信息，也就是 HarmonyExportXXXXXXXDependency 相关的。收集起来存放到每个 module 中 exportInfo 中，为了后续做查找标记做准备。

## 标记模块导出

这一阶段就是查找那些模块被人使用过，那些模块没有，标记被使用过的模块。
这个过程发生在 compilation.seal 中
```js
while (this.hooks.optimizeDependencies.call(this.modules)) {
    /* empty */
}
```
1、触发 compilation.hooks.optimizeDependencies 钩子，开始执行 FlagDependencyUsagePlugin 插件逻辑
2、在 FlagDependencyUsagePlugin 插件中，从 entry 开始逐步遍历 ModuleGraph 存储的所有 module 对象
3、遍历 module 对象对应的 exportInfo 数组
4、为每一个 exportInfo 对象执行 compilation.getDependencyReferencedExports 方法，确定其对应的 dependency 对象有否被其它模块使用
```js
// referencedExports ['main']
const referencedExports = compilation.getDependencyReferencedExports(dep, runtime);
```
5、被任意模块使用到的导出值，调用 exportInfo.setUsedConditionally 方法将其标记为已被使用。
6、exportInfo.setUsedConditionally 内部修改 exportInfo._usedInRuntime 属性，记录该导出被如何使用

## 生成代码
打包阶段，调用 HarmonyExportXXXDependency.Template.apply 方法生成代码
在 apply 方法内，读取 ModuleGraph 中存储的 exportsInfo 信息，判断哪些导出值被使用，哪些未被使用
对已经被使用及未被使用的导出值，分别创建对应的 HarmonyExportInitFragment 对象，保存到 initFragments 数组
遍历 initFragments 数组，生成最终结果

## 删除 Dead Code
由 Terser、UglifyJS 等 DCE 工具“摇”掉这部分无效代码，构成完整的 Tree Shaking 操作。


