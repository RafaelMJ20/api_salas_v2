const express = require("express");

const SalaRoutes = require("./routes/SalaRoutes");
const cors = require("cors");
const  { connectDB }  = require("./data/config");
const PORT = 3018;

//crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

connectDB();


app.use("/",SalaRoutes);

app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
}); 