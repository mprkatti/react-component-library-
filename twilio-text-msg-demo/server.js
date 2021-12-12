const express = require('express')
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('hi there ...');
  res.send('Hello there !!!! from Rishil . not pushing.');
});

app.listen(6001, () => {
  console.log('listening on 6000');
})