const mongoose = require('mongoose');
const jwt= require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto= require("crypto");

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
        unique:true,
        validate: [validator.isEmail, "Por favor ingrese un email valido"]
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


//Encripto contraseña antes de guardarla
usersSchema.pre("save", async function (next) {
    if (!this.isModified("clave")) {
        next()
    }
    this.clave = await bcrypt.hash(this.clave, 10)
});

//Decodifico contraseñas y comparo
usersSchema.methods.compararPass = async function (passDada){
    return await bcrypt.compare(passDada, this.clave)
};


//Retornar un JWT token
usersSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRACION
    })
};

//Generar un token para reset de contraseña
usersSchema.methods.genResetPasswordToken = function () {
    const resetToken= crypto.randomBytes(20).toString('hex')

    //Hashear y setear resetToken
    this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest('hex')

    //Setear fecha de expiración del token
    this.resetPasswordExpire= Date.now() + 30*60*1000 //el token dura solo 30 min

    return resetToken
}




module.exports=mongoose.model('users', usersSchema);