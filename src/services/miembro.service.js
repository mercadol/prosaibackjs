const boom = require('@hapi/boom');
const Miembro = require('../models/miembros.model');

class MiembroService{
    constructor(){
        
        
    }

    create(data){
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
        return newMiembro
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
    async update(_id, body){//colocar validaciones
        const miembro = await Miembro.findByIdAndUpdate({_id:_id}, body, {new:true});/*
        const miembro = await Miembro.findByIdAndUpdate({_id:_id}, body, {new:true}, (err, elementUbdated)=>{
            if(err) throw boom.badRequest('Error al actualizar!!');
            if(!elementUbdated) throw boom.notFound('Error, Elemento no encontrado');
        });*/
        return miembro;

    }
    async delete(_id){
        await Miembro.findByIdAndDelete({_id:_id});
        return {_id};
    }

}

module.exports = MiembroService;

