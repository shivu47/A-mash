const express = require("express");
const app = express(); // express is function and excute this and store  value(object) in app
// console.dir(app); //printing object

let port = 3005; // logical endpoint of a network connection which used for exchange info bet webserver and clints   
//points where clints share info with server


//method in app object
app.listen(port,()=>{     
    console.log(`app is listening on port ${port}`);
})
app.get('/', (req, res) => res.send('Hello World!'))

app.use((req,res)=>{
    console.log("request received");
});