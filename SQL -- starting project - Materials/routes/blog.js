const express = require('express');

const db = require('../database_connection/connection');

const router = express.Router();


router.get("/", function(req, res) {
    res.render("posts-list");
});

module.exports = router;