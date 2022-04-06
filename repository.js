const fs = require('fs')

//const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' },]

const getUsers = () => {

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
}

const addUser = (name) => {
    users.push({name})
}

exports.getUsers = getUsers
exports.addUser = addUser