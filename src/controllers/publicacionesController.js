const publicaciones = require("../models/publicacionesModel");
const catchAsyncErrors = require("../catchAsyncErrors");


//Consultar publicaciones
exports.getPublicaciones = catchAsyncErrors( async (req, res, next) => {
    const getPublicaciones = await publicaciones.find(); //

    res.status(200).json({
        success: true,
        getPublicaciones
    })
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