
const express = require('express');
const { use } = require('express/lib/application');
const bodyParser = require('body-parser')
const app = express();
const budget = require('./models/budgets');
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

// app.use((request, response) => {
//     console.log('I run for all routes')
//     next()
// });

//Index
app.get('/budgets', (request, response) => {
    response.render('index.ejs', { allBudget: budget })
});

// app.get('/budgets', (req, res) => {
//     res.render('/budgets', {
//         user : budgets.CreateExpense
//     });
// });

// New
app.get('/budgets/new', (request, response) => {
    response.render('new.ejs');
});


//Post
app.post('/budgets', (request, response) => {
    console.log(request.body)
    budget.push(request.body)
    response.redirect('/budgets')
});

//Show
app.get('/budgets/:index', (request, response) => {
    response.render('show.ejs', { allBudget: budget[request.params.index] });
});




app.listen(3000, () => {
    console.log('Listening on 3000')
});