const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


// use Express here
const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else{
//     next()
//     }
// })

//convert to json data
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


//run the server in port
app.listen(port, () => {
    console.log('Server is up on port' +port);
})


