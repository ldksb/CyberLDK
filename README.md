# CyberLDK
中术电子宠物

## 报告 bug 及参与建设
- 你可以通过 [Issues](https://github.com/ldksb/CyberLDK/issues) 报告 bug
- 你可以通过 [Pull requests](https://github.com/ldksb/CyberLDK/pulls) 参与网站建设

## Markdown页面渲染
将Markdown文件路径作为`page`参数传递给**index.html**以实现Markdown页面渲染。  
示例如下：  
```html
<a href="/index.html?page=index.md">查看主页</a>
```
```markdown
[查看README](/index.html?page=README.md)
```
Markdown样式参考：[/test.md](/test.md)  
Markdown样式展示（链接仅渲染后有效）：[/index.html?page=test.md](/index.html?page=test.md)  

## Markdown技术支持
- [MarkdownIt](https://github.com/markdown-it/markdown-it)
- [typora-purple-theme](https://github.com/hliu202/typora-purple-theme)

## 遥测
本网站使用 [Google Analytics](https://analytics.google.com/) 收集遥测数据并用于用户行为分析。
