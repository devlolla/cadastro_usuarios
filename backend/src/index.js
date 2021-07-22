const express = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}))


app.use(express.json());
app.use(routes);

app.listen(3333, function () {
  console.log('Pronto Capitã')
})