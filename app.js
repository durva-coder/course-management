var express = require('express');
var coursesController = require('./controllers/courseControllers');
const cors = require('cors');
const router = require('./routes/courseRouter.js');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))


app.get('/', (req,res) =>{
    res.json({message: 'hello from api'})
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})

// routers

app.use('/', router)



// set up template engines
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// coursesController(app);

//listen to port
//app.listen(PORT);
//console.log('You are listening to port 3000');