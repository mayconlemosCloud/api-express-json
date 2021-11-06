
const express = require('express');

const routes = require("./routes/routes.js");
var bodyParser = require('body-parser')
const PORT = 3009
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(routes);








app.listen(PORT, () => console.log('API funcionando na porta ' + PORT));