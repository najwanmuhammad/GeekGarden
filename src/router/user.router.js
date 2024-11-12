const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get("/user", userController.get);
userRouter.post("/user", userController.post);
userRouter.put("/user/:id", userController.put);    //user/8
userRouter.delete("/user/:id", userController.delete); //user/8

// http://localhost:8000/user

module.exports = userRouter;