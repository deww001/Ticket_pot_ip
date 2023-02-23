const express = require('express');

const router = express.Router();

router.get('/actor_register',(request,response)=> {
    response.render('actor_register'); 
});
router.get('/actor_login',(request,response)=> {
    response.render('actor_login'); 
});
router.get('/actor_from',(request,response)=> {
    response.render('actor_from'); 
});
router.get('/actor_selectorder',(request,response)=> {
    response.render('actor_selectorder'); 
});

router.get('/actor_cancelOrder',(request,response)=> {
    response.render('actor_cancelOrder'); 
});
router.get('/actor_comment',(request,response)=> {
    response.render('actor_comment'); 
});
router.get('/actor_ticket',(request,response)=> {
    response.render('actor_ticket'); 
});



module.exports = router;