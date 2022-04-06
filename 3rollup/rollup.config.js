/*
 * @Author: TerryMin
 * @Date: 2022-04-03 15:38:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-03 16:29:45
 * @Description: https://juejin.cn/post/6956501799327137828
 */
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js', //入口
  output: {
    file:'./dist/bundle.js',//打包后的存放文件
    format:'cjs',//输出格式 amd es6 iife umd cjs
    name:'bundleName'//如果iife,umd需要指定一个全局变量
  },
  format: 'umd', //兼容 规范 script导入 amd commonjs
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: 'build/bundle.js'
}