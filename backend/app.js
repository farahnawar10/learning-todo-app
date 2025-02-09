const bodyParser= require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const todos = require("./routes/todoRoute");

app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cors());

app.use('/api',todos);

const port = 8000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});