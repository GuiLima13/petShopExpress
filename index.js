const express = require("express");
const app = express();
const petRotas = require("./routes/petRouter");
app.use(petRotas);

app.listen(3000, () =>{
    
});
