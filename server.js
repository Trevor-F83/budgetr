const { response } = require('express');
const express = require('express');
const app = express();
const budget = require('./models/budgets');
app.use(express.static('public'));

app.get('/', (request, response) => {
response.send('Welcome to Budgetr')
});

//Index
app.get('/budgets', (request, response) => {
    response.render('index.ejs', {allBudget: budget})
});

//New
app.get('/budgets/:index', (request, response) => {
    response.send(budget[request.params.index])
    });

    //Post
    app.post('/budgets', (request, response) => {
        response.send('sup')
    });


console.log(budget)
    
    app.listen(3000, () => {
        console.log('Listening on 3000')
    });