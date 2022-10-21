/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** App 运行时 */
  readonly VITE_APP_RUNTIME: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
