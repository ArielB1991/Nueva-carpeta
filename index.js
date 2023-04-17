//INCORPORA LA PROGRAMACION DEL SERVER "EXPRESS"
const express= require ('express');
//GENERAMOS EL SERVER DESDE EL OBJETO IMPORTADO
const app= express();
//CREAMOS UNA CONSTANTE PARA GUARDAR EL PUERTO DE NUESTRO SERVER
const port= 5000;
//RUTAS


//RETORNA PRODUCTOS
app.get('/productos', (req, res)=>{
    res.send('Este es el listado de productos')
});

//RETORNA OFERTAS
app.get('/ofertas', (req, res)=>{
    res.send('Ofertas 2023')
});
// POSTEA PRODUCTO NUEVO
app.post('/productos/nuevo', (req, res)=>{
    res.send('Producto nuevo')
});

//EL METODO LISTEN QUEDA ESCUCHANDO LAS SOLICITUDES DE CLIENTES
app.listen(port, () =>{
    console.log(`El servidor esta escuchando en el puerto  ${port}`)
});
//MOSTRAR TODOS LOS USUARIOS
app.get('/todosLosUsuarios', (req, res)=>{
    res.send('Todos los usuarios')
});
//CREAR USUARIO
app.post('/crearUsuario', (req, res)=>{
    res.send('Crear Usuario')
});
//ELIMINAR USUARIO
app.delete('/eliminarUsuario', (req, res)=>{
    res.send('Eliminar usuario')
});
