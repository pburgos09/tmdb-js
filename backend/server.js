const express = require("express");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");

const PORT=3001

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(volleyball);

app.get("/prueba",(req,res)=>{
    res.status(200).send("Conexion back correcta")
});

(async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        });
    } catch(error){
        console.log(`Unable to conect: ${error.message}`);
    }
})();