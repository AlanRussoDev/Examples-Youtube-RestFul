const express = require('express')

const app = module.exports = express()

const bodyParser = require('body-parser')


const allowCors = (req, res, next) =>  {

    res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

	next();
}


app.listen(5000,() => {
    console.log(`app listen in port 5000`)
})

app.use(allowCors)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended : true
}))