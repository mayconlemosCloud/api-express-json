const fs = require('fs');
const { join } = require('path')

const getHorarios = (filePath) => {

    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}


function salvarHorario(horarios, filePath) {
    fs.writeFileSync(filePath, JSON.stringify(horarios, null, '\t'))

}



module.exports = {



async listar(req, res)  {

    const filePath = join(__dirname, './json/horarios.json')
    const horarios = getHorarios(filePath);



    res.status(201).json(horarios)
},

listarDiariamente(req, res) {

    const filePath = join(__dirname, 'json/diariamente.json')
    const horarios = getHorarios(filePath);



    res.status(201).json(horarios)
},

listarSemanal(req, res) {

    const filePath = join(__dirname, 'json/semanal.json')
    const horarios = getHorarios(filePath);



    res.status(201).json(horarios)
},




salvar(req, res) {

    const filePath = join(__dirname, 'json/horarios.json')
    const horarios = getHorarios(filePath);

    const setHorarios = req.body;

    for (const obj of setHorarios) {
        let primeiroTempo = [...obj.intervals].shift();
        let SegundoTempo = [...obj.intervals].pop();

        for (const i of horarios) {

            if (obj.day == i.day) {

                let primeiroTempoJson = [...i.intervals].shift();
                let SegundoTempoJson = [...i.intervals].pop();


                if (SegundoTempo.end <= SegundoTempoJson.end && SegundoTempo.end >= SegundoTempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })

                } else if (primeiroTempo.start >= primeiroTempoJson.start && primeiroTempo.start <= primeiroTempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })
                }
            }


        }
      horarios.push(obj)
     salvarHorario(horarios,filePath)  
    }
   
    res.status(201).json('Salvo')
},

salvarDiario(req, res)  {

    const filePath = join(__dirname, 'json/diariamente.json')
    const horarios = getHorarios(filePath);

    const setHorarios = req.body;

    for (const obj of setHorarios) {
        let horario = [...obj.intervals].shift();
      

        for (const i of horarios) {

            if (obj.day == i.day) {

                let TempoJson = [...i.intervals].shift()
              
                console.log(horario.end , TempoJson.end, horario.end , TempoJson.end)

                if (horario.end <= TempoJson.end && horario.end >= TempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })

                } else if (horario.start >= TempoJson.start && horario.start <= TempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })
                }
            }


        }
      horarios.push(obj)
     salvarHorario(horarios,filePath)  
    }
   
    res.status(201).json('Salvo')
},


salvarSemanal(req, res){

    const filePath = join(__dirname, 'json/semanal.json')
    const horarios = getHorarios(filePath);

    const setHorarios = req.body;

    for (const obj of setHorarios) {
        let horario = [...obj.intervals].shift();
      

        for (const i of horarios) {

            if (obj.day == i.day) {

                let TempoJson = [...i.intervals].shift()            

                if (horario.end <= TempoJson.end && horario.end >= TempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })

                } else if (horario.start >= TempoJson.start && horario.start <= TempoJson.end) {
                    return res.status(500).send({ alerta: 'Período sobreposto' })
                }
            }


        }
      horarios.push(obj)
     salvarHorario(horarios,filePath)  
    }
   
    res.status(201).json('Salvo')
},



deletarDay(req, res) {

    const filePath = join(__dirname, 'json/horarios.json')
    const horarios = getHorarios(filePath);

    const day = req.params.day
    var removeIndex = horarios.findIndex((item) => item.day == day);
    horarios.splice(removeIndex, 1);
    salvarHorario(horarios,filePath) 

    res.status(201).json(horarios)
},

DeletarDiariamente(req, res) {

    const filePath = join(__dirname, 'json/diariamente.json')
    const horarios = getHorarios(filePath);

    const day = req.params.day
    var removeIndex = horarios.findIndex((item) => item.day == day);
    horarios.splice(removeIndex, 1);
    salvarHorario(horarios,filePath) 

    res.status(201).json(horarios)
},

deletarSemanalmente (req, res)  {

    const filePath = join(__dirname, 'json/semanal.json')
    const horarios = getHorarios(filePath);

    const day = req.params.day
    var removeIndex = horarios.findIndex((item) => item.day == day);  
    horarios.splice(removeIndex, 1);
    salvarHorario(horarios,filePath) 

    res.status(201).json(horarios)
}


}