const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
