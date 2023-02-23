const express = require('express');

const router = express.Router();

router.get('/adminlogin',(request,response)=> {
    response.render('admin_Login'); 
});
router.get('/adminHome',(request,response)=> {
    response.render('admin_Home'); 
});
router.get('/adminOrderUpdate',(request,response)=> {
    response.render('admin_orderupdate'); 
});




router.get('/adminHistoryprice',(request,response)=> {
    response.render('admin_historyprice'); 
});
router.get('/adminGraph',(request,response)=> {
    response.render('admin_graph-2'); 
});
router.get('/adminFeedback',(request,response)=> {
    response.render('admin_feedback'); 
});



module.exports = router;