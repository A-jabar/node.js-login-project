const express = require('express');
const path = require('path');
const port = 8000;

const app = express();


app.use(express.urlencoded({ extended: true}));

app.get('/', (req , res) =>{
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/login.html', (req , res) =>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/submit' , (req ,res) => {
    const { name , email , password , phone} = req.body;
    
})

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
