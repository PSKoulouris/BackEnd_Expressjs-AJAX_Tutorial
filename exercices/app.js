const express = require("express")
const path = require("path")
const fs = require("fs")
const uuid = require("uuid") //installed with npm install uuid

const app = express()

const userRoutes = require('./routes/userRoutes')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.set('view engine', 'ejs')
app.set("views", path.join(__dirname,"views"))


app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))


//use routes from userRouter:
app.use('/users', userRoutes)






/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/exercices", function(req,res){
    res.render("exercices")
})

app.get("/", function(req, res){
    res.render("home")
})

app.get('/database_users_form', function(req, res){
    res.render('database_users_form')
})

/*
app.post("/store-user",function(req,res){
    const username = req.body
    username.uId = uuid.v4()

    const fileDataPath = path.join(__dirname, "data", "users.json")
    const fileData = fs.readFileSync(fileDataPath)
    const users = JSON.parse(fileData)
    users.push(username)
    fs.writeFileSync(fileDataPath, JSON.stringify(users))
    //res.send("User stored successfully!");
    res.redirect("/")
})
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000)

