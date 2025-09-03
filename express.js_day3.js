const express = require('express');
const app = express();  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/harsh/:kavi', (req, res) => {
    res.send(req.params.kavi,);
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});


