const db = require ('../data/database')


class UserDatabase {
    constructor(name, email, street, streetNumber) {
        this.name = name
        this.email = email
        this.address = {
            street: street,
            streetNumber : streetNumber
        }
    }

    async saveUsersToDatabase(){
        await db.getDb().collection('database_users').insertOne({
            name : this.name,
            email : this.email,
            address : this.address,
        });
    }

}


module.exports = UserDatabase
