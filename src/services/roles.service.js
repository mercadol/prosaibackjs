const boom = require('@hapi/boom');
const validator = require('validator');
const Role = require('../models/roles.model');

class RoleService{

    create(data){
        try{
            var validateroleName = !validator.isEmpty(data.roleName);
        } catch (error) {
            throw boom.notFound('faltan datos');
        }
        if(validateroleName){
            const newRole = {
                ...data
            }
            const role =new Role(newRole);

            role.save((err, roleStored)=>{
                if(err || !roleStored){
                    console.log(err);
                    throw boom.badData('Role no guardado');
                }
                return roleStored;
            });

        }else{
            throw boom.badData('Los datos no son validos');
        }
    }
    async find(){        
        const roles = await Role.find({});
        if (!roles){
            throw boom.notFound('no hay elementos para mostrar');
        }
        return roles.sort();
    }
    async findOne(_id){
        const role = await Role.findById(_id);
        if (!role){
            throw boom.notFound('role not found');
        }
        return role;
    }
    async update(_id, body){
        
        const role = await Role.findByIdAndUpdate({_id:_id}, body, {new:true});
        if (!role){
            throw boom.notFound('Error, Elemento no encontrado');
        }
        return role;

    }
    async delete(_id){
        await Role.findByIdAndDelete({_id:_id});
        return {_id};
    }

}

module.exports = RoleService;

