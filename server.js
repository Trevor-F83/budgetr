const { response } = require('express');
const express = require('express');
const app = express();
const budgets = require('./models/budgets');
app.use(express.static('public'));

app.get('/', (request, response) => {
response.send('Welcome to Budgetr')
});

app.get('/budgets', (request, response) => {
    response.send('budgets')
})


// app.get('/budgets/:index', (request, response) => {
//     response.send('budgets_show.ejs', {budget: budgets[request.params.index]
//     });
// });

// app.get('/budgets/new', (request, response) => {
//     response.render('new.ejs')
// });

// app.post('/budgets', (request, response) => {
//     if (request.body.)
// })

console.log(budgets)
    
    app.listen(3000, () => {
        console.log('Listening on 3000')
    });