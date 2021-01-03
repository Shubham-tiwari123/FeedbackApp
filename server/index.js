const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
  res.send({newMsg:'bye buddy'});
})

console.log('Server started!!!')
app.listen(PORT);
