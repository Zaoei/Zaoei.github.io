## 介绍 webpack5 的主流程

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
2. 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
3. 解析路径：解析文件的绝对路径。
4. 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. chunk生成：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,
6. 输出资源：把每个 Chunk 转换成一个单独的文件加入到输出列表。
7. 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

## 目录

  - [Cli](cli/README.md)
  - [Compiler](initCompiler/README.md)
  - [Resolve](module/README.md)
  - [Module](module/README.md)
  - [Chunk](chunk/README.md)
  - [hmr](hmr/README.md)
  - [loader](loader/README.md)
  - [plugin](plugin/README.md)
  - [optimize](optimize/README.md)
