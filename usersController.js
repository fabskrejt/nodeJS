const { getUsers, addUser } = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === 'POST') {
        addUser('User4')
        res.write(JSON.stringify({success: true}))
    } else {
        res.write(JSON.stringify(getUsers()))
    }
}