
const path = require('path')
const express = require('express');
const hbs = require('hbs');
const generalRouter = require('./routers/general');
const actorRouter = require('./routers/actorsite');
const adminRouter = require('./routers/adminsite');

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(path.join(__dirname, '/views')));

app.use('/',generalRouter);
app.use('/actor',actorRouter);
app.use('/admin',adminRouter);

app.listen(3415, () => console.log(`http://localhost:3415/`));