const boom = require('@hapi/boom');
const validator = require('validator');
//const User = require('../models/miembros.model');

class UserService{
    //constructor: constructor(){}

    create(data){}
    async find(){        
        const users = await User.find({});
        if (!users){
            throw boom.notFound('no hay elementos para mostrar');
        }
        return users.sort();
    }
    async findOne(id){
        const user = await User.findById(_id);
        if (!user){
            throw boom.notFound('User not found');
        }
        return user;
    }
    async update(id, body){
        const user = await User.findByIdAndUpdate({_id:_id}, body, {new:true});
        if (!user){
            if(!elementUbdated) throw boom.notFound('Error, Elemento no encontrado');
        }
        return user;
    }
    async delete(id){
        await Miembro.findByIdAndDelete({_id:_id});
        return {_id};
    }

}

module.exports = UserService;
