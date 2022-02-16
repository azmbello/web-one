

const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const reviewsRoutes = require('./routes/reviewRoutes');


const app = express();
// constant to connect to database
const bdURI = 'mongodb+srv://loupgarou:test1234@discuss1.qenca.mongodb.net/az_data_2?retryWrites=true&w=majority'

// use mongoose to connect to database 
const port = process.env.port || 3000;
mongoose.connect(bdURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => app.listen(port))
.catch(err => console.log(err))


// third party middleware
app.use(morgan('dev'));

// post middleware
app.use(express.urlencoded({extended: true}));

// for static files

app.use(express.static('public'))

// for dynamic view
app.set('view engine', 'ejs');




app.get('/', (req, res) =>{

    res.render('index',{title:'home'});
})

app.get('/about', (req, res) =>{
res.render('about', {title: 'about'})
})

app.get('/contact', (req, res) =>{
    res.render('contact', {title: 'contact'})
    })

 app.get('/create', (req, res) =>{
        res.render('create', {title: 'create'})
        })
        
 

 app.get('/taste', (req, res) =>{
     res.render('taste', {title:'taste'})
     })
                          



//  review routes
app.use(reviewsRoutes);


// 404 page
app.use((req, res) =>{
    res.render('404', {title: '404'})
   })