const mongoose = require("mongoose");

const publicacionesSchema = new mongoose.Schema({
    nombre_del_producto:
    {
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    cantidad:
    {
        type:Number,
        required:[true,"Por favor registra la cantidad de hectareas"],
        default: 0
    },
    fecha_de_recolecta:
    {
        type:Date,
        required:[true,"Por favor registra fecha"],
        default: Date.now
        
    },
    departamento:
    {
        type:String,
        required:[true,"Por favor registra departamento"],
        maxLength:[20]
        
    },
    ciudad:
    {
        type:String,
        required:[true,"Por favor registra nombre del municipio"],
        maxLength:[20]
        
    },
    direccion:
    {
        type:String,
        required:[true,"Por favor registra direccion exacta"],
        maxLength:[100, "No exeder los 100 carateres"]
        
    },
    archivos_aduntos:
    [
        {
            public_id:{
                type:String,
               
            },
            url:{
                type:String,
                
            }
        }
    ],
    precio_por_hectarea:
    {
        type:Number,
        require:true,
        default:0.0
    },
    detalles:
    {
        type:String,
        require:false,
    },
    autor:
    {
        type:String,
        //type: mongoose.Schema.ObjectId,
        //ref: 'User',
        required: true
    },
    verificado:
    {
        type:Boolean,
        default:false
    }
   
});

module.exports=mongoose.model('publicaciones', publicacionesSchema);