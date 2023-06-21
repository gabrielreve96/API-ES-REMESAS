const modelServices=require("../database/remesas.model.js")

const remesasAll=async()=>{
const totalReemsas=  await modelServices.allRemesas()
return totalReemsas
}
const remesasId=()=>{

}
const nuevaRemesa=async(newRemesa)=>{
const nuevoServicio= modelServices.nuevaRemesa(newRemesa)
return nuevoServicio;
}
const actulizarRemesa=(id)=>{
 modelServices.updateRemesas(id)
}
const eliminarRemesa=()=>{

}

module.exports={
 remesasAll,
 remesasId,
 nuevaRemesa,
 actulizarRemesa,
eliminarRemesa
        
}