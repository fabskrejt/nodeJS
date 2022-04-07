const fs = require('fs')

//const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' },]

const getUsers = () => {

  return new Promise((res, rej) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
      res(data)
      //callback(data)
    })
  })

}

const addUser = (name) => {
  users.push({ name })
}

exports.getUsers = getUsers
exports.addUser = addUser