[FLOW官网](https://flow.org/en/docs/getting-started/)

1. 先安装babel（编译Flow文件）
```
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```

2. 安装flow
```
npm install --save-dev flow-bin
```

3. 第一次运行flow（生成.flowconfig文件）
```
npm run flow init
```

4. 编写Flow Code [docs](https://flow.org/en/docs/types/primitives/)
```javascript
// @flow
function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}
```

5. 检测Flow代码
```
npm run flow
```

6. 利用babel编译Flow文件
```
package.json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"build": "babel src/ -d lib/",
	"prepublish": "npm run build",
	"flow": "flow"
}
npm run prepublish
```