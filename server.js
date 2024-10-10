const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', true);
app.use(require('./routes'));
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

