import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   // 配置选项
//   plugins: [react()],
// })



// 情景配置
export default defineConfig(({ command, mode, ssrBuild }) => {

  // vite dev/build
  // command - serve/build
  // mode - production/development
  console.log(command, mode, ssrBuild)

  // 环境变量读取，vite 默认不加载 .env, 使用 loadEnv 加载
  const env = loadEnv(mode, process.cwd(), 'SFQ_')
  if (mode === 'production') {
    console.log("production env:", env)
  } else if (mode === "development") {
    console.log("development env:", env)
  }

  return {
    // 环境变量和模式
    /**
     * import.meta.env.MODE
     * import meta.env.BASE_URL
     * import.meta.env.PROD
     * import.meta.env.DE
     * import.meta.env.SSR
     */

    // 插件
    plugins: [react()],

    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    root: "",

    // 开发或生产环境服务的公共基础路径
    // base: "/app/",
    // base: "https://sfq.me/app/",

    // 在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。也可以通过命令行 --mode 选项来重写。
    // mode


    // 定义一个名为 `APPDEF` 的全局常量，值为字符串 "My App"
    // 请确保在 env.d.ts 或 vite-env.d.ts 文件中添加类型声明，以获得类型检查以及代码提示。
    // 在 tsconfig.json 的 include 或者 files 添加引用
    define: {
      AppDef: {
        "name": "sfq"
      }
    },

    // 静态资源
    // publicDir: "public",

    // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。如需重新生成缓存文件，你可以使用 --force 命令行选项或手动删除目录。
    // cacheDir: "node_modules/.vite",

    resolve: {
      // 
      alias: {

      },
      
      dedupe: [
        'lodash',
      ]
    }



  }
})
