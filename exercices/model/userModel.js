const fs = require("fs")
const path = require ("path")




const filePath = path.join (__dirname, "..", "data", "users2.json")

function readUsers2(){
    const file_data = fs.readFileSync(filePath)
    const data = JSON.parse(file_data)
    return data
}

module.exports = readUsers2

