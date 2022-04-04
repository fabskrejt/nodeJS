const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' },]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    users.push({name})
}

exports.getUsers = getUsers
exports.addUser = addUser