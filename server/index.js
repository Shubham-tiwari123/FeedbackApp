const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const keys = require('./config/keys')
require('./models/Users')
require('./services/passport');
const authRoutes = require('./routes/authRoutes');``

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app);

mongoose.connect(keys.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.once("open", () =>
    console.log("MongoDB database connection established successfully")
)

console.log('Server started!!!');
app.listen(PORT);
