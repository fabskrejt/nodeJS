const { getUsers, addUser } = require('./repository');

exports.usersController = async (req, res) => {
    try {
        if (req.method === 'POST') {
            const result = await addUser('User4')
            res.write(JSON.stringify({ success: true }))
            res.end()
        } else {
            const users = await getUsers()
            res.write(JSON.stringify(users))
            res.end()
        }
    } catch (e) {
        console.log(e);
    }

}