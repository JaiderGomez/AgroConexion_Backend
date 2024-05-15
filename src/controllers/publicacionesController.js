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
    };// Verifico que la publicacion exista

    res.status(200).json({
        success: true,
        message: "Aquí debajo encuentras información sobre tu publicacion: ",
        publicacionID
    })
});




//Actualizar una publicacion
exports.updatePublicacion = catchAsyncErrors(async (req, res, next) => {
    let post = await publicaciones.findById(req.params.id) //Variable de tipo modificable con la publicacion a actualizar
    if (!post) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    };// Verifico la existencia de la publicacion

    //Si la publicacion si existe, entonces si ejecuto la actualización
    post = await publicaciones.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });

    //Respondo Ok si la publicacion si se actualizó
    res.status(200).json({
        success: true,
        message: "Publicacion actualizada correctamente",
        post
    })
})


//Eliminar una publicacion
exports.deletePublicacion = catchAsyncErrors(async (req, res, next) => {
    const getPublicacion = await publicaciones.findById(req.params.id) //Variable para consultar la publicacion

    if (!getPublicacion) {
        return next(new ErrorHandler("Publicacion no encontrado", 404))
    }// Verifico que la publicacion exista

    await publicaciones.findByIdAndDelete(getPublicacion.id); //Elimino la publicacion
    res.status(200).json({
        success: true,
        message: "Publicacion eliminada correctamente"
    })
})

