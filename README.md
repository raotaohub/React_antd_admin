<!--
 * @Author: raotaohub
 * @Date: 2021-02-19 17:00:44
 * @LastEditTime: 2021-02-19 19:30:46
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\README.md
 * @Description: Edit......
-->

## 提交规范和配置流程说明

` npm install husky --save-dev`

`npm install lint-staged -D -S `

`npm i commitizen cz-conventional-changelog --save-dev`

```js
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
  "lint-staged": {
    "src/*_/_.{js,vue}": [
      "npm run lint",
      "git add"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }

    "scripts": {
    ...
    // 新增一条命令
    "commit": "git-cz"
  },
```

### 使用篇

在需要提交的时候运行 `npm run commit`

```
feat：新功能
fix：修补 bug
docs：修改文档，比如 README, CHANGELOG, CONTRIBUTE 等等
style： 不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
refactor：重构（既不修复错误也不添加功能）
perf: 优化相关，比如提升性能、体验
test：增加测试，包括单元测试、集成测试等
build: 构建系统或外部依赖项的更改
ci：自动化流程配置或脚本修改
chore: 非 src 和 test 的修改
revert: 恢复先前的提交

```

```
? Select the **type** of change that you're committing:
(type) 选择提交更改的类型
? What is the **scope** of this change (e.g. component or file name)? (press enter to skip)
(scope) 此次更改的范围是什么（组件或者文件名）
? Write a **short**, imperative tense description of the change:
(subject) 写一个简短的，命令式的变化描述
? Provide a **longer description** of the change: (press enter to skip)
(Body) 提供更改的长描述
? Are there any **breaking changes**?
(Footer) 有没有突破性的变化
? Does this change affect any open **issues**? (y/N)
(Footer) 此次更改是否有要关闭 issues


```

```
关于release:

// 发布首个版本
npm run release -- --first-release

// 发布预发布版本
// 例如：v1.0.0 -> v1.0.0-0
npm run release -- --prerelease

// 发布与首个 alpha 版本
// 例如：v1.0.0 -> 1.0.1-alpha.0
npm run release -- --prerelease alpha

// 发布 major、minor、patch 版本
npm run release -- --release-as minor

```
