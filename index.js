//Crear el servidor
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//Configuraciones
//Buscar la carpeta de los html
app.use(express.static('public'))
/*
app.get("/", (req,res) => {
    res.send("En teoria es el index.html")
}) 
*/

app.get("*", (req,res) => {
    //res.send("404 | pagina no encontrada 404.html")
    res.sendFile(_dirname+'public/404.html')
})

//Proceso
app.listen(port,() => {
    console.log("Servidor corrieno en el puerto: ", port);
})
