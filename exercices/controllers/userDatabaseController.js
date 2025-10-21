const UserDatabase = require('../model/userModelDatabase')


async function saveData(req, res, next) {
    const user = new UserDatabase(
        req.body.name_name,
        req.body.name_email,
        req.body.name_street,
        req.body.name_streetNumber
    )

    try{
       await user.saveUsersToDatabase()
    } catch(error) {
        return next(error)
    }

    res.redirect('/')
}

module.exports = {saveData}