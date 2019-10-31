const express = require('express');
const app = express();
const localport = 8082;

const APP = ()=>{
  app.get('/',(req,res)=>{
    res.send('ok');
  })
  //app.use(express.static('./frontend/webapp/build/'));
  app.set('port',process.env.PORT || localport);

  app.listen(app.get('port'),()=>{
    console.log(`APP is running at ${app.get('port')}`);
    
  });
};

module.exports = APP;