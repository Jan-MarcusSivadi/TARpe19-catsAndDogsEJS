const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));

app.get('/', (req, res) => {
    //https://api.thecatapi.com/v1/images/search
    let defaultimageurl = {
        url: "https://cdn2.thecatapi.com/images/MTgzNTE4NA.jpg"
    };
    res.render('index.ejs', {imageSrc: defaultimageurl});
});

app.post('/get-cat', (req, res)=>{
    const url = "https://api.thecatapi.com/v1/images/search";

    axios.get(url)
    .then(response =>{
        let randomImageUrl = {
            url: response.data[0].url
        };

        res.render('index.ejs', {imageSrc: randomImageUrl});

    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});