
const express = require('express');
const Review = require('../models/review');
const router = express.Router();

router.get('/reviews', (req, res) =>{

    Review.find().sort({createdAt:-1})
       .then(result =>{
        res.render('reviews', {title: 'all reviews', reviews: result})
       })
       .catch(err => console.log(err))
    
     });

router.post('/reviews', (req, res) => {
   const review = new Review(req.body);

   review.save()
   .then(result =>{
       res.redirect('/reviews');
   })
   .catch(err => console.log(err));
})

module.exports = router;