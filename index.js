const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();
const path=require('path')

// app.use(express.static(path.join(__dirname,'public')))

// app.use(reqFilter);
// route.use(reqFilter)
app.get('/home/:name', (req, resp) => {
    resp.send('Welcome to Home page '+ req.params.name)
});

app.get('/users', reqFilter,(res, resp) => {

    resp.send('Welcome to Users page')
});

app.get('/about', (req, res) => {
    res.json({
        mirha:"0909"
    })
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

// app.use('/', route);

app.listen(5000)