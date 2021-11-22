var express = require('express');
var router = express.Router();
const User = require('../models/User')
const Todo = require('../models/Todo')

router.get('/', async function(req, res, next) {
    console.log("Get all users")
    const rawusers = await User.find().exec()
    const users = rawusers.map( (user) => {
        return {
            username: user.username,
            userid: user._id
        } 
    });
    console.log(users);
    return res.status(200).json({"userlist": users});
    // return res.status(200).json({"users": todos})
});

router.get('/:userId', async function(req, res, next) {
    const todos = await Todo.find().where('author').equals(req.params.userId).exec()
    return res.status(200).json({"todos": todos})
});

module.exports = router;

