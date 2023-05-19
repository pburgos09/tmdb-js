const express = require("express");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const db = require("./config/db")

const PORT=8000

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(volleyball);

app.get("/prueba",(req,res)=>{
    res.status(200).send("Conexion back correcta")
});

(async ()=>{
    try{
        await db.sync({ force: false });
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch(error){
        console.log(`Unable to conect: ${error.message}`);
    }
})();