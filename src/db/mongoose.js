const mongoose = require('mongoose')


//connect to database
mongoose.connect(process.env.MONGO_URL, {
useNewUrlParser: true,
})

