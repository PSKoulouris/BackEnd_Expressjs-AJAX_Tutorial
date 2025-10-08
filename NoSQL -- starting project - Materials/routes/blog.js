const express = require('express');

const mongodb = require('mongodb');
const db = require('../data/database');

const ObjectId = mongodb.ObjectId;
const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/posts');
});

//Get data for authors:
router.get("/new-post", async function(req, res) {
  const authors = await db.getDB()
    .collection("authors")
    .find()
    .toArray();

   console.log(authors)

  res.render("create-post", {authors: authors})
});

//Post data for authors:
router.post("/posts", async function(req, res) {
  const authorId = new ObjectId(req.body.author) //install mongoDB package for id:const ObjectId = mongodb.ObjectId;
  const author = await db
    .getDB()
    .collection("authors")
    .findOne({ _id: authorId })

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      authorId: authorId,
      name: author.name,
      email: author.email
    }
  }
  await db.getDB().collection("posts").insertOne(newPost); //alternatively, store result back into a variable
  res.redirect("/posts");
});


  //Get data for posts:

  router.get('/posts', async function(req, res) {
    const posts = await db.getDB()
      .collection("posts")
      .find({},{title: 1, summary: 1, "author.name": 1}) //FIND SYNTAX: {},{1=retrieve, 0: don't retrieve}
      .toArray();

    console.log(posts)
  res.render('posts-list', {posts: posts});
});




module.exports = router;