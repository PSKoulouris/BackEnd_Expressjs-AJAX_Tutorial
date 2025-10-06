const express = require('express');

const db = require('../database_connection/connection');

const router = express.Router();
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//redirect the user on / to /posts directly: 
router.get("/", function(req, res) {
    res.redirect("/posts");
});

/*router.get("/posts", async function(req, res) {
    res.render("posts-list");
});*/



//retrieve the data and send information to posts_list.ejs:
router.get("/posts", async function(req, res) {

    const q = `SELECT posts.*, authors.name AS author_name
               FROM posts
               INNER JOIN authors
               ON authors.author_id = posts.author_id`;

    const [posts] = await db.query(q) 
    console.log(posts); 
    res.render("posts-list",{ posts: posts});
});



//routes to create new posts with async from database:
router.get("/new-post", async function(req, res) {

    const q = `SELECT author_id, name
               FROM authors`;

    const [authors] = await db.query(q) //return an array of objects [ { name: 'Vanessa' }, { name: 'Philippe' }, { name: 'Stephane' } ]
    console.log(authors);
    res.render("create-post", { authors: authors }); //define authors with the value authors

});



//Insert new posts into database blog:
router.post("/new-post", async function(req, res) {
    
    const q = `INSERT INTO posts (title, summary, body, author_id)
               VALUES (?)`;

    const data = [
        req.body.title, 
        req.body.summary, 
        req.body.content, 
        req.body.author
    ];

    await db.query(q,[data,])
         
    res.redirect("/posts");
    
});



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;