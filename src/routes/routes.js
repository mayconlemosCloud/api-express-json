const routes = require("express").Router();
const atendimentosController = require("../controllers/index.js");




routes.get("/listar", atendimentosController.listar);
routes.get("/listarDiariamente", atendimentosController.listarDiariamente);
routes.get("/listarSemanal", atendimentosController.listarSemanal);

routes.post("/salvar", atendimentosController.salvar);
routes.post("/salvarDiario", atendimentosController.salvarDiario);
routes.post("/salvarSemanal", atendimentosController.salvarSemanal);



routes.delete("/deletarDay/:day", atendimentosController.deletarDay);
routes.delete("/DeletarDiariamente/:day", atendimentosController.DeletarDiariamente);
routes.delete("/deletarSemanalmente/:day", atendimentosController.deletarSemanalmente);





module.exports = routes;