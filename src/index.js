const express = require("express");
const userRouter = require("./router/user.router");
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome"
    });
});


app.use(userRouter);

app.listen(8000, () => {
    console.log("App listen on port 8000");
})