const petModel = require("../model/pet");
const petController = {
    index: (req,res)=>{
        res.send(petModel.listarPets());
    
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