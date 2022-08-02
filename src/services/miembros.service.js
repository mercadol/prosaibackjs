const boom = require('@hapi/boom');
const validator = require('validator');
const Miembro = require('../models/miembros.model');

class MiembroService{
    constructor(){
    }

    async create(data){
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
            try{
                await miembro.save((err, miembroStored)=>{
                    if(err || !miembroStored){
                        console.log(err);
                        throw boom.badData('miembro no guardado');
                    }
                    return miembroStored;
                });
                return miembro;
            } catch (error) {
                console.log(error); 
                throw boom.badData('no guardado miembro ');
            }
        }else{
            throw boom.badData('Los datos no son validos');
        }
    }


    async filtro({ pageNumber = 1, pageSize = 10, cc, from, to, sort }){
        try {
            const miembros = await Miembro.find({});
            if (!miembros){
                throw boom.notFound('no hay elementos para mostrar');
            }
            let datafinal = miembros;
            if (cc){
                const filtersData = miembros.filter(item => item.numDocument == cc); 
                datafinal=filtersData;
            }
            if (from && to){
                const filtersData = datafinal.filter(item =>
                    Number(from) < item.age && item.age < Number(to)); 
                datafinal=filtersData;
            }
            if (sort){
                var sorT=JSON.parse(sort);
                if(sorT.name=='asc'){
                    datafinal.sort((miembro1, miembro2)=>{
                        return miembro1.fullName - miembro2.fullName
                    });
                }
                if (sorT.name=='desc') {
                    datafinal.reverse();
                }
            }
    
            const startIndex = (pageNumber - 1)* pageSize;
            const endIndex = pageNumber * pageSize;
            datafinal.slice(startIndex, endIndex);
    
            return datafinal;
        } catch(error){
            console.log(error);
            throw boom.notFound('no se encontraron elementos');
        }
    }
    async find(){        
        const miembros = await Miembro.find({});
        if (!miembros){
            throw boom.notFound('no hay elementos para mostrar');
        }
        return miembros.sort();
    }
    async findOne(id){
        const miembro = await Miembro.findById(id);
        if (!miembro){
            throw boom.notFound('miembro not found');
        }
        return miembro;
    }
    async update(id, body){
        
        const miembro = await Miembro.findByIdAndUpdate({_id:id}, body, {new:true});
        if (!miembro){
            throw boom.notFound('Error, Elemento no encontrado');
        }
        return miembro;

    }
    async delete(id){
        await Miembro.findByIdAndDelete({_id:id});
        return {id};
    }

}

module.exports = MiembroService;

