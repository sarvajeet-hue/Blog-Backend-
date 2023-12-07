const express = require("express")
const app = express();

//middleware

 app.use(express.json())

const ConnectWithDB = require("./config/dataBase")
ConnectWithDB();


//router 
const blogRouter = require("./routers/router");
app.use('/api/v1' , blogRouter)


require("dotenv").config();

const port = process.env.PORT || 5000


app.get('/' , (req , res) => {
    res.send(`<h1>Hello Ji ki haal chal</h1>`)
})


app.listen(port , () => {
    console.log(`server chl gya ${port}`)
})