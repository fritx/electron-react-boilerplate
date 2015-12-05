
// import nconf from 'nconf'
import configFile from '../const/filePaths'
import * as defaultConfig from '../const/defaultConfig'


// 不方面在RendererProcess 执行node代码
// nconf.argv().env()
//   .defaults(defaultConfig)
//   .file({ file: configFile })


export function loadConfig() {
  // return Promise.resolve(nconf.get())
  return Promise.resolve(defaultConfig)
}

export function setConfig(key, value) {
  // nconf.set(key, value)
}

export function saveConfig() {
  // return new Promise((resolve, reject) => {
  //   nconf.save((err) => {
  //     if (err) return reject(err)
  //     resolve()
  //   })
  // })
  return Promise.resolve()
}
