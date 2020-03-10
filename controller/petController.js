const petModel = require("../model/petModel");
const path = require("path");
const petController = {
    index: (req,res)=>{
        /*
        res.send(petModel.listarPets());
        */
       res.sendFile(path.join(__dirname, '../HTML', 'index.html'));
       
       res.sendFile(path.join(__dirname, '../css', 'style.css'));
        
    },
    add: (req,res)=>{
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`${novoPet.nome} foi adicionado com sucesso!`);
    },
    buscar:(req,res)=>{
        let novoPet = req.params.nome;
        let petsEncontrados = petModel.buscarPet(novoPet);
        if(petsEncontrados.length > 0){
            res.send(`Foram encontrados ${petsEncontrados.length}!`);
        }else{
            res.send(`Olá nao foi encontrado nada ${petsEncontrados.length}!`)
        }
    }
}


module.exports = petController;