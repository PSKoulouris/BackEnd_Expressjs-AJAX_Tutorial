const users2Model = require("../model/userModel")

function listUsers(req, res){

    const users2_data = users2Model()

   /* const user_data = [
        {name : "philippe",
         email: "philippe@gmail.com"
        },
        {name : "Stephane",
        email: "stephane@gmail.com"
        }
    ]
*/

    res.render("users", {users2_data})
}

module.exports = listUsers

