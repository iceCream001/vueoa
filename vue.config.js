module.exports = {
    pages: {
        //配置展开写法
        pagetwo: {
            // 必需项:应用入口配置，相当于单页面应用的main.js
            entry: 'src/modules/pagetwo/main.js',

            //可选项： 应用的html模版，相当于单页面应用的public/index.html，，省略时默认与模块名一致
            template: 'public/pagetwo.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'pagetwo.html',

            // 可选项，html中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'pagetwo page',

            //可选项，需要引入的打包后的块
            chunks: ['chunk-vendors','pagetwo']
        },
        // 配置简写：直接用字符串表示模块入口，其他采用默认
        pagethree: 'src/modules/pagethree/main.js'
    }
}
