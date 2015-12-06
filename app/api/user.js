
// 暂时只是假数据/假操作 供测试

import Chance from 'chance'
import * as errors from '../const/errorMessages'

const chance = new Chance()


export function userLogin(user) {

  // 用户名和密码相同 即登录成功
  let ok = user.username &&
    user.username === user.password

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ok) {
        return reject(errors.WRONG_LOGIN_DATA) // 字符串
      }
      const firstName = chance.first()
      const lastName = chance.last()
      const fullName = `${firstName} ${lastName}`

      resolve({
        ...user,
        firstName,
        lastName,
        fullName,
        signature: chance.sentence(),
        email: chance.email(),
        phone: chance.phone(),
        status: chance.pick(['online', 'away', 'busy', 'offline'])
      })
    }, 3000)
  })
}
