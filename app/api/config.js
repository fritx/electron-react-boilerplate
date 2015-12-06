
// import nconf from 'nconf'
import Chance from 'chance'
import configFile from '../const/filePaths'
import * as defaultConfig from '../const/defaultConfig'

const chance = new Chance()


// 不方面在RendererProcess 执行node代码
// nconf.argv().env()
//   .defaults(defaultConfig)
//   .file({ file: configFile })


export function loadConfig() {
  // return Promise.resolve(nconf.get())
  const rememberMe = chance.bool()
  const autoLogin = rememberMe && chance.bool() // 基于rememberMe
  const firstName = chance.first()
  const lastName = chance.last()
  const username = `${firstName}.${lastName}`.toLowerCase()
  const password = rememberMe ? username : '' // 密码和用户名相同即通过
  return Promise.resolve({
    ...defaultConfig,
    login: {
      ...defaultConfig.login,
      username,
      password,
      rememberMe,
      autoLogin
    }
  })
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
