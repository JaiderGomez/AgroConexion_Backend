const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    clave:{
        type:String,
        require:[true, "Por favor Ingrese la contraseña"],
        maxLength:[20, "Máximo 20 caracteres"],
        minLength:[8, "Mínimo 8 caracteres"]

    },
    nombres:{
        type:String,
        require:[true, "Por favor Ingrese sus nombres"],
        maxLength:[40, "Máximo 40 caracteres"],

    },
    apellidos:{
        type:String,
        require:[true, "Por favor ingrese sus apellidos"],
        maxLength:[40, "Máximo 40 caracteres"],

    },
    email:{
        type:String,
        require:[true, "Por favor ingrese su correo electrónico"],
        maxLength:[80, "Máximo 80 caracteres"],

    },
    departamento:{
        type:String,
        require:[true, "Por favor ingrese el departamento de residencia"],
        maxLength:[40, "Máximo 40 caracteres"],

    },
    ciudad:{
        type:String,
        require:[true, "Por favor ingrese la ciudad de residencia"],
        maxLength:[40, "Máximo 40 caracteres"],

    },
    direccion:{
        type:String,
        require:[true, "Por favor ingrese su dirección"],
        maxLength:[60, "Máximo 60 caracteres"],

    },
    rol:{
        type:String,
        require:[true, "Por favor seleccione rol"],
        maxLength:[20, "Máximo 20 caracteres"],

    },
    fecha_de_nacimiento:{
        type:Date
    },
    fecha_de_registro:{
        type:Date,
        default:Date.now
    },
    telefono:{
        type:String,
        require:[true, "Por favor ingrese su numero de teléfono"],
        maxLength:[13, "Máximo 13 caracteres"]
    },
    verificado:{
        type:Boolean,
        default:false
    },


});

module.exports=mongoose.model('users', usersSchema);