const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 5000;
const app = express();
authRoutes(app);

console.log('Server started!!!');
app.listen(PORT);
