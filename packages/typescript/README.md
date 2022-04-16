# Usage

## package.json
```json
{
  "devDependencies": {
    "hydrated-pig/typescript": "workspace:*"
  }
}
```

## tsconfig.json
```json
{
  "extends": "@hydrated-pig/typescript"
}
```

## 废案
与其这么麻烦配置还不如直接配置在 monorepo 顶层，还可以避免在这里配置的 *相对路径* 不易读导致的错误

例如
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "rootDir": "./",
    "paths": {
      "@hydrated-packages/*": [
        "packages/*/src"
      ],
      "@hydrated-apps/*": [
        "apps/*/src"
      ]
    }
  }
}
```
如果这边这么配置，顶层读到的只是```@hydrated-pig/typescript```的路径，还需要添加自己的```compilerOptions```进行覆盖