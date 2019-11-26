const fs = require('fs');
const express = require('express');
const excelToJSON = require('convert-excel-to-json');
const dataFactory = require('./data.factory');
const app = express();
const localport = 8082;

const APP = ()=>{
  
  app.use((req,res,next)=>{
    res.setHeader('BholeBaba','ParKarega');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','application,applicationdesc,authorization');    
    next();
  });

  app.options('/api/auth/login',(req,res)=>{
    res.setHeader('BholeBaba','ParKarega');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','application,applicationdesc,authorization');  
      console.log(req);
      res.json({});
  });

  app.post('/api/auth/login',(req,res)=>{
    res.setHeader('BholeBaba','ParKarega');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','application,applicationdesc,authorization');  
      console.log(req);
      res.json({});
  });

  app.get('/api/data/',(req,res)=>{
  const data=  excelToJSON({
      sourceFile : './data_files/Focus-tracker.xlsx'
    });
  
  res.json(dataFactory(data));  
  });

  app.get('/api/photos/:id',(req,res)=>{
    res.setHeader('Content-Type','image/jpg');
    const imgData = fs.readFileSync(`./backend/assets/slides/PIC000${req.params.id}.jpg`);
    res.send(imgData);
  });
  app.use(express.static('./frontend/webapp/build/'));
  
  app.set('port',process.env.PORT || localport);

  app.listen(app.get('port'),()=>{
    console.log(`APP is running at ${app.get('port')}`);
    
  });
};

module.exports = APP;