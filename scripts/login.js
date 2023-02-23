const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cookieSession = require('cookie-session');
const connection =require('../server');
const bodyParser= require('body-parser')
const {body, validationResult, Result}= require('express-validator');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('Actor',path.join(__dirname,'Actor'))
app.use(express.static('Actor/2.login'));
app.use(express.static('Actor/3.register'));
app.use(express.static('Actor/1.firstpage'));

app.use(cookieSession({
    name: 'session',
    keys:['key1','key2'],
    maxAge:3600*1000
}))

const ifNotLoggedIn =(req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.render('login-register');
    }next();
}

//root page
app.get('/',(req, res,next) => {
    res.sendFile(path.join(__dirname + "/Actor/2.login/login.html"));
});
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname + "/Actor/1.firstpage/firstpage.html"));
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + "/Actor/3.register/register.html")
});

app.post('/register',(req,res,next) =>{
    var email =req.body.email;
    var name = req.body.name;
    var password = req.body.password;
    var phone = req.bady.phone;

    var sql ='INSERT INTO contacts (email,user_name,password,user_phonenumbe) VALUES ("${email}"),("${name}"),("${password}"),("${phone}",NOW())'
    connection.query(sql,(err,Result)=>{
        if(err) throw err ;
        console.log('recode inserted');
        res.redirect('/register');
    })
    
});
app.listen(3415, () => console.log('server running on port 3000'));

//creat routes

