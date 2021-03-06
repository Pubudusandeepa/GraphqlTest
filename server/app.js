const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

//connect to databse
mongoose.connect('mongodb://localhost:27017/sandeepa',{ 
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } )
mongoose.connection.once('open', () =>{
    console.log('connect to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
   graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Now listening for requests on port 4000')
})