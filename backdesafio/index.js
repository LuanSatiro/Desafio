const express = require('express');
const controllers = require('./controllers');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors())
app.use(express.json());


app.use('/users', controllers.users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));