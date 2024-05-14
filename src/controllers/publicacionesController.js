const publicaciones = require("../models/publicacionesModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler=require ("../utils/errorHandler")

//Consultar publicaciones
exports.getPublicaciones = catchAsyncErrors( async (req, res, next) => {
    const getPublicaciones = await publicaciones.find(); //Realizo consulta a la base de datos y guardo en getPublicaciones

    res.status(200).json({
        success: true,
        getPublicaciones
    })// Respuesta a la petición
});


//Crear una nueva publicación
exports.newPublicacion = catchAsyncErrors(async (req, res, next) => {
    const newPost = await publicaciones.create(req.body);
    res.status(201).json({
        success: true,
        message: "Publicacion creada correctamente",
        newPost
    })
});

//Consultar Publicacion por ID
exports.getPublicacionID = catchAsyncErrors(async (req, res, next) => {
    const publicacionID = await publicaciones.findById(req.params.id); //Realizo consulta a la base de datos y guardo en publicacionID
    if (!publicacionID) {
        return next(new ErrorHandler("Publicacion no encontrado", 404))
    }
    res.status(200).json({
        success: true,
        message: "Aquí debajo encuentras información sobre tu publicacion: ",
        publicacionID
    })
});


/*

//Update un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    let imagen=[]

    if (typeof req.body.imagen=="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }
    if (imagen!== undefined){
        //eliminar imagenes asociadas con el product
        for (let i=0; i<product.imagen.lenght; i++){
            const result= await cloudinary.v2.uploader.destroy(product.images[i].public_id)
        }

        let imageLinks=[]
        for (let i=0; i<imagen.lenght; i++){
            const result=await cloudinary.v2.uploader.upload(imagen[i],{
                folder:"products"
            });
            imageLinks.push({
                public_id:result.public_id,
                url: result.secure_url
            })
        }
        req.body.imagen=imageLinks
    }

    //Si el objeto si existia, entonces si ejecuto la actualización
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
})


//Eliminar un producto
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id) //Variable de tipo modificable

    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })
})

*/