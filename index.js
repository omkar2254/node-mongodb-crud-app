const express = require('express')
const app = express()
const PORT = 8000
//const users = require('./FakeData.json') we are using database now
const userRouter = require('./routes/users')
const { connectToMongoDb } = require('./connection')
const { logRequestResponse } = require('./middleware')


//connection
connectToMongoDb('mongodb://127.0.0.1:27017/myNode-app-1')
.then(()=>
    console.log('MongoDB connected')
)
.catch(error => console.log("Not connected db: ",error))

//middleware
app.use(express.urlencoded({ extended: false }))

//log data
app.use(logRequestResponse("log.txt"))

//router connections
app.use('/api/users', userRouter)

//Port
app.listen(PORT, ()=> console.log('Server started'))