const express = require('express');
require('./models/WorkPermit');
require('./models/Employee');
require('./models/Area');
require('./database');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.json({ type: 'application/json'}));

require('./routes')(app);
require('./routes/auth.routes')(app);
console.log("working");

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('workpermitclient/build'));

  const path = require('path');
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'workpermitclient', 'build', 'index.html'));
  })
};


const PORT = process.env.PORT || 5000;
app.listen(PORT);