const { get, put } = require("../router/user.router");

const {User} = require('./../models/index')

module.exports = {
    get:async (req, res) => {
        try {
            const user = await User.findAll()
            
            return res.send({
                message: "user resource",
                data:user
            });
        } catch (error) {
            return res.send ({
                errorCode: 500,
                message: error.message
            })
        }
    },

    post:async (req, res) => {
        const {body} = req;

        const user = await User.create(body);
        return res.status(201).send({
            message: "Create User Resource",
            data: user
        })
    },

    put:async (req, res) => {
        
    },
    delete:async (req, res) => {

    }
}