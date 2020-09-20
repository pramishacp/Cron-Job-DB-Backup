const express = require('express');
const cron = require("node-cron");
const app = express();

const config = require('./config');
var Cron = require('./mongodbBackup.js');

cron.schedule("0 0 * * *", function(){
  // every day at midnight at 00:00
  Cron.dbAutoBackUp();
});

app.listen(`${config.app.port}`, () => {
  console.log(`App listening at http://localhost:${config.app.port}`)
});