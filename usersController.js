const { getUsers, addUser } = require('./repository');

exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        addUser('User4')
        res.write(JSON.stringify({ success: true }))
        res.end()
    } else {
        const users = await getUsers()
        res.write(users)
        res.end()
    }
}