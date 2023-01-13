const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();




app.get('/login', (req, res) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=a727daaaf35737b322cb`,
      );
  console.log("sdasd");
  console.log(req.body)

});
app.listen(3000);

app.get('/oauth-callback', ({ query: { code } }, res) => {
  const body = {
    client_id: "**",
    client_secret: "**",
    code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
    
      console.log('My token:', token);

      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});



