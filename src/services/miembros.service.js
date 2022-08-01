const boom = require('@hapi/boom');
const validator = require('validator');
const Miembro = require('../models/miembros.model');

class MiembroService{
    constructor(){
        
        
    }

    create(data){
        try{
            var validateNumDocument = !validator.isEmpty(data.numDocument);
            var validatEemail = !validator.isEmpty(data.email);
            var validateFullName = !validator.isEmpty(data.fullName);
        } catch (error) {
            console.log(error);
            throw boom.notFound('faltan datos');
        }
        if(validateNumDocument && validatEemail && validateFullName){
            const newMiembro = {
                ...data
            }
            const miembro =new Miembro(newMiembro);

            miembro.save((err, miembroStored)=>{
                if(err || !miembroStored){
                    console.log(err);
                    throw boom.badData('miembro no guardado');
                }
                return miembroStored;
            });

        }else{
            throw boom.badData('Los datos no son validos');
        }
    }
    async find(){        
        const miembros = await Miembro.find({});
        if (!miembros){
            throw boom.notFound('no hay elementos para mostrar');
        }
        return miembros.sort();
    }
    async findOne(_id){
        const miembro = await Miembro.findById(_id);
        if (!miembro){
            throw boom.notFound('miembro not found');
        }
        return miembro;
    }
    async update(_id, body){
        
        const miembro = await Miembro.findByIdAndUpdate({_id:_id}, body, {new:true});
        if (!miembro){
            throw boom.notFound('Error, Elemento no encontrado');
        }
        return miembro;

    }
    async delete(_id){
        await Miembro.findByIdAndDelete({_id:_id});
        return {_id};
    }

}

module.exports = MiembroService;

