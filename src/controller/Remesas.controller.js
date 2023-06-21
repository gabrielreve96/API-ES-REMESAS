////controladores conectados a servicios
const{validationResult}=require("express-validator")
const remesasServicios=require("../services/remesas.services.js")
const remesasAll =async (req,res) => {
  try {
    const todasLasRemesas= await remesasServicios.remesasAll()
    console.log(todasLasRemesas)
    res.status(200).json(todasLasRemesas[0])
  } catch (error) {}
};

const remesasId = (req,res) => {
  try {
    const remesaUnica=remesasServicios.remesasId(req.params.remesasId)
    res.send(`remesa ${req.params.remesasId} `)
  } catch (error) {}
};

const nuevaRemesa  = async  (req,res) => { 
    const result=validationResult(req)
    if(!result.isEmpty()){
      let error=result.array()
      res.status(400).json({
        mensage:{
          ms:"se ha prudicdo algunos errore",
          errores:error[0].msg
        }
      })
    }

  try { 
    const{nombre,email,destinatario}=req.body
   const newRemesa={
     nombre:nombre,
     email:email,
     destinatario:destinatario
   }
  const response = await remesasServicios.nuevaRemesa(newRemesa)
   if(response.error){
    return res.status(400).json({
      response
    })
   }else{
    return res.status(200).json({
      response
    })
   }
  } catch (error) {
    console.log(error)
  }
};
const actulizarRemesa = (req,res) => {
  try {
    const actulizarRemesa=remesasServicios.actulizarRemesa(req.params.remesasId)
     res.status(200).json({
      mensage:"actualizado"
     })
  } catch (error) {}
};
const eliminarRemesa = (req,res) => {
  try {
    const eliminandoRemesa=remesasServicios.eliminarRemesa(req.params.remesasId)
    res.send(`remesa ${req.params.remesasId} fue eliminada`)
  } catch (error) {}
};



module.exports={
    remesasAll,
    remesasId,
    nuevaRemesa,
    actulizarRemesa,
  eliminarRemesa
}



