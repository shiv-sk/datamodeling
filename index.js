const express = require('express');
const app = express();

app.get('/' ,(req,res)=>{
    res.send('things are working perfectly..')
})

app.listen(4000 , ()=>{
    
    console.log('server is listening on port 4000')
})