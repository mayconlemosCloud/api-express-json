const routes = require("express").Router();
const atendimentosController = require("../controllers/index.js");




routes.get("/listar", atendimentosController.listar);
routes.get("/listarDiariamente", atendimentosController.listarDiariamente);
routes.get("/listarSemanal", atendimentosController.listarSemanal);

routes.post("/salvar", atendimentosController.salvar); //passar pelo boby igual o formato de listar 
routes.post("/salvarDiario", atendimentosController.salvarDiario); //passar pelo boby igual o formato de listarDiariamente 
routes.post("/salvarSemanal", atendimentosController.salvarSemanal); //passar pelo boby igual o formato de listarSemanal 



routes.delete("/deletarDay/:day", atendimentosController.deletarDay); //passar como paramentro o Day 
routes.delete("/DeletarDiariamente/:day", atendimentosController.DeletarDiariamente); //passar como paramentro o Day 
routes.delete("/deletarSemanalmente/:day", atendimentosController.deletarSemanalmente); //passar como paramentro o Day 





module.exports = routes;