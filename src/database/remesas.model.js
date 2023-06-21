const { use } = require("../v1/Router/Remesas");
const pool = require("./remesas.conexion");

const allRemesas = async () => {
 const [result]= await pool.query("select * from remesas");
 if(result[0]){
   return result[0]
 }else{
  return error= {mensage:"No hay remesas actulizadas"}
 }
};

const nuevaRemesa = async (newRemesa) => {
  const [result] = await pool.query("SELECT * FROM remesas WHERE email = ?", [newRemesa.email]);
  if (result[0]) {
    return error= {mensage:"la remesa ya eiste"}
   
  } else {

    await pool.query("INSERT INTO remesas (nombre, email, destinatario) VALUES (?, ?, ?)", [
      newRemesa.nombre,
      newRemesa.email,
      newRemesa.destinatario
    ]);

     return success={mensage:"remesa registrada"}
     
  }
};



const updateRemesas = async (id) => {
    const [user] = await pool.query("SELECT * FROM remesas WHERE id = ?", [id]);
    if (user[0]) {
        const {nombre,email,destinatario,id }=user[0]
        console.log(nombre,email,destinatario,id)
        await pool.query('UPDATE remesas SET nombre=?,email=?,destinatario=? WHERE id=?',[nombre,email,destinatario,id])
        return success={mensage:"remesa actulizada"}
       }else{
        return erro={error:"No se ha podido actulizar"}
       }
  
  }
module.exports = {
  allRemesas,
  nuevaRemesa,
  updateRemesas
};
