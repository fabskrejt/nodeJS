const fs = require('fs')

const getUsers = () => {
  return new Promise((res, rej) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(JSON.parse(data))
      res(JSON.parse(data))
    })
  })

}

const addUser = async (name) => {
  const users = await getUsers()
  users.push({name})

  return new Promise((res, rej) => {
    fs.writeFile('users.json', JSON.stringify(users), err => {
      if (err) {
        console.error(err)
        return
      }
      res()
    })
  })


}

exports.getUsers = getUsers
exports.addUser = addUser