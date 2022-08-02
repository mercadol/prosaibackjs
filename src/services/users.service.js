const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const User = require('../models/users.model');

class UserService{
    //constructor: constructor(){}

    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser ={
            ...data,
            password:hash
        };
        const usuario = new User(newUser);
        await usuario.save();
        return newUser;
    }
    async find(){        
        const users = await User.find({});
        if (!users){
            throw boom.notFound('no hay elementos para mostrar');
        }
        return users.sort();
    }
    async findByEmail(email){        
        const users = await User.findOne({email:email});
        if (!users){
            throw boom.notFound('User not found');
        }
        return users;
    }
    async findOne(id){
        let user = await User.findById(id);
        if (!user){
            throw boom.notFound('User not found');
        }
        user= { "email":user.email, "role":user.role};
        return user;
    }
    async update(id, body){
        const user = await User.findByIdAndUpdate({_id:id}, body, {new:true});
        if (!user){
            if(!elementUbdated) throw boom.notFound('Error, Elemento no encontrado');
        }
        return user;
    }
    async delete(id){
        await Miembro.findByIdAndDelete({_id:id});
        return {id};
    }

}

module.exports = UserService;
