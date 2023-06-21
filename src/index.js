const expres=require("express");
const pool  = require("./database/remesas.conexion.js");


const app=expres()
const port=process.env.PORT || 3000;
pool.getConnection()
.then(conection=>{
    conection.release()
     console.log("base de datos conectada")
})
.catch(err=>{
 console.log(err)
})
app.use(expres.json())

app.set("name_Server","paginas de remesas")
app.use("/api/v01/remesas",require("./v1/Router/Remesas.js"))
app.listen(port,()=>{
    console.log("servidor inciiado" + app.get("name_Server"))
})