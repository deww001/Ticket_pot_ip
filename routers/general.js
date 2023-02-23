const express = require('express');

const router = express.Router();

router.get('/',(request,response)=> {
    response.render('firstpage'); 
});

module.exports = router;