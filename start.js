const express = require('express');
const excelToJSON = require('convert-excel-to-json');
const dataFactory = require('./backend/data.factory');
const app = express();
const localport = 8082;

const APP = ()=>{
  
  app.get('/api/data/',(req,res)=>{
  const data=  excelToJSON({
      sourceFile : './data_files/Focus-tracker.xlsx'
    });
  
  res.json(dataFactory(data));  
  });
  app.use(express.static('./frontend/webapp/build/'));
  app.set('port',process.env.PORT || localport);

  app.listen(app.get('port'),()=>{
    console.log(`APP is running at ${app.get('port')}`);
    
  });
};

module.exports = APP;