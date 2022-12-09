var mysql= require('mysql');
var nodemon = require('nodemon');
var express = require('express');
const app = express();
var bodyParser = require('body-parser');
const { query } = require('express');

const PORT = process.env.PORT||3050;

app.use(express.static('public'))
app.use(express.json())

app.use(bodyParser.json())

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'pc_doctor',
    user: 'root',
    password: ''
});

app.get('/',(req,res)=>{
    res.sendFile('index.html', { root: 'public'})
});

app.post('/signup',(req,res)=>{
    console.log(req.body)
    conexion.query(`INSERT INTO usuarios (Nombre, Contraseña, Correo) VALUES ("${req.body.Nombre}", "${req.body.Contrasea}", "${req.body.Correo}")`, function(error,resultados){
        conexion.end();
        if(error)throw error;
        console.log('¡Nombre del usuario!',resultados)
        
    })
});

app.post('/login',(req,res)=>{
    console.log(req.body)
    conexion.query(`SELECT Nombre FROM usuarios WHERE Contraseña = "${req.body.Contrasea}" AND Correo = "${req.body.Correo}"`, function(error,resultados){
        conexion.end();
        if(error)throw error;
        console.log('¡Registro Agregado!',resultados)
    })
});

conexion.connect(function(error){
    if (error) {
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
});

app.listen(PORT,() => console.log(`Conexion en el puerto ${PORT}`));
/*
//mostrar
conexion.query('SELECT Nombre FROM usuarios WHERE Contraseña = "Hola123" AND Correo = "fran.roac02@gmail.com"',function(error,fields){
    if (error) {
        throw error;
    }else{
        fields.forEach(fila => {
            console.log(fila);
        });
    }
});
//insertar
conexion.query('INSERT INTO usuarios (Correo, Contraseña, Nombre) VALUES ("Correo","Contraseña","Nombre")', function(error,resultados){
    if(error)throw error;
    console.log('¡Registro Agregado!',resultados)
});
//Actualizar
conexion.query('UPDATE usuarios SET Nombre = "Franky" WHERE id=1',function(error,resultados){
    if(error)throw error;
    console.log('¡Registro Actualizado!',resultados);
})
//borrar
conexion.query('DELETE FROM usuarios WHERE id = 1',function(error, resultados){
    if(error)throw error;
    console.log('Registro eliminado',resultados)
})*/
//conexion.end();