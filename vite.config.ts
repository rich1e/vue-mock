import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'

// vite plugin
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default ({ command, mode }: ConfigEnv): UserConfigExport => {

  /**
   * 是否开启mock
   * @param {String} command 命令类型，serve｜build
   * @param {String} mode 运行模式
   * @returns 
   * @see https://cn.vitejs.dev/config/#environment-variables
   * @see https://cn.vitejs.dev/guide/api-javascript.html#loadenv
   */
  const isEnabledMock = (command: string, mode: string): boolean => {
    // console.log('command#', command)
    // console.log('mode#', mode)
    // console.log('path#', process.cwd())
    // console.log('env#', loadEnv(mode, process.cwd()).VITE_APP_RUNTIME, '')
    // console.log('isEnabledMock#', command !== 'build' ? mode === 'development' : mode === 'testing')
    return command !== 'build' ? mode === 'development' : mode === 'testing'
  }

  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: isEnabledMock(command, mode),
      }),
    ],
  }
}
