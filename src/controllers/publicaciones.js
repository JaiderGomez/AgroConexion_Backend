import publicaciones from "./model/publicaciones.js"

/*/Consultar publicaciones

exports.getPublicaciones = async (req, res, next) =>{
    const getPublicaciones = await publicaciones.find();

    res.status(200).json({
        success: true,
        getPublicaciones
    })

}

//Crear una nueva publicacion
exports.newPublicacion = catchAsyncErrors(async (req, res, next) => {
    const newPost = 
    {
        nombre_del_producto: "Arroz",
        cantidad: 2,
        fecha_de_recolecta: 10/20/2024,
        ciudad: 10,
        direccion: "sffds",
        precio_por_hectarea:20000,
        detalles:"fgfdgdgfdg",
        autor:"juan",
        verificado:true
    };
    newPost.save()
    .then(() => console.log('Publicacion Creada'))
    .catch((err) => console.log(err));


});*/





    

