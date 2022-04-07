const { getUsers, addUser } = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === 'POST') {
        addUser('User4')
        res.write(JSON.stringify({ success: true }))
        res.end()
    } else {
        getUsers((users) => {
            res.write(users)
            res.end()
        })
        // res.write(JSON.stringify(getUsers()))
    }
}