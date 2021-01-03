const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
  res.send({newMsg:'deploy automatically on heroku'});
})

console.log('Server started!!!')
app.listen(PORT);
