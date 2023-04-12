このフォルダ（typescriptお試し環境）の作り方

1. Node.jsをインストールしてnpmやnpxを使えるようにしておく。
2. VSCodeで空のフォルダを開き、ターミナルから以下を実施。

npm init -y
npm i -D typescript
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx tsc --init

3. tsconfig.jsonは以下のように書き換え

{
  /* Visit https://aka.ms/tsconfig to read more about this file */
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    // "importHelpers": true,
    "target": "es2015",
    "module": "es2015",
    "useDefineForClassFields": false,
    "lib": [
      "es2015",
      "dom"
    ],
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "src"
  ],
}

4. （オプション）eslintしたい場合、以下を実施してeslintを設定する

npx eslint --init
    ? How would you like to use ESLint? ...
        > To check syntax and find problems
    ? What type of modules does your project use? ...
        > JavaScript modules (import/export)
    ? Which framework does your project use? ...
        > None of these
    ? Does your project use TypeScript?
        » Yes
    ? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
        > Browser
    ? What format do you want your config file to be in? ...
        > JSON
    @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
    ? Would you like to install them now?
        » Yes
    ? Which package manager do you want to use? ...
        > npm

5. （オプション続き）作成された.eslintrc.jsonを好みに調整する。例えば以下
（rootとprojectは記載したほうが扱いやすい）

{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}

6. 典型的な例では、ソースファイルはsrc、ビルド出力先は/dist/out-tsc
ただしhtmlをコピーするためのタスクランナーの設定は面倒なので、tsのお試し環境を用意したいだけなら以下の通り
（タスクランナーを設定しないのでhtmlをdistにコピーする仕組みがない。そのためhtmlはsrc下に置かず、相対パスも強引に調整）

index.html
src/hello-world.ts

7. ビルド

npx tsc --build

8. 確認。
上記ソースはmoduleモードのjsとして動作するように記載したので、ローカルファイルで実行できない。
そのため、例えば「Web server for Chrome」拡張をchromeにインストールしてローカルでWebサーバをエミュレートするなどが必要

8.1. Chromeに「Web server for Chrome拡張」を追加
8.2. 「chrome://apps/」を開く
8.3. Web server for Chromeを開き、WebサーバのContentRootになるフォルダを指定する

9. （オプション）eslintでコーディング作法をチェックしたい場合は以下を実施

npx eslint src/**