const expres = require("express");
const router = expres.Router();
const controllerRemesas = require("../../controller/Remesas.controller.js");
////VALIDACIONES  EXPRES REGULATOR
const {body}=require("express-validator")
router
.get("/", controllerRemesas.remesasAll)
.get("/:remesasId", controllerRemesas.remesasId)
.post("/",
 body("nombre","ingrese un nombre valido donde maximo 20 caracteres y minimo 10").trim().isLength({max:20}).isLength({min:10}),
 body("email","ingrese un email valido").trim().normalizeEmail(),
 body("destinatario","ingrese un destinatario valido").trim().isLength({max:20}).isLength({min:10})
,controllerRemesas.nuevaRemesa)
.put("/:remesasId", controllerRemesas.actulizarRemesa)
.delete("/:remesasId", controllerRemesas.eliminarRemesa);

module.exports = router;
