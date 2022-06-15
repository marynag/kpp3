console.log('+') 

const express = require('express')

const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    //mongodb+srv://user:user@cluster0.9mfem.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://qwerty:qwerty123@cluster0.b6pb9.mongodb.net/auth_roles?retryWrites=true&w=majority
    
    try {
        await mongoose.connect(`mongodb+srv://user:user@cluster0.p3bbo.mongodb.net/courier_db?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)

    }
}

start();





