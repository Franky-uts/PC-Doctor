const Registro = document.querySelector(".Esconder");
const Botones = document.getElementById("bts");
const Boton1 = document.getElementById("bt1");
const Boton2 = document.getElementById("bt2");
const BotonR = document.getElementById("btR");
const BotonI = document.getElementById("btI");
const Reg = document.getElementById("RegistroSec");
const Ini = document.getElementById("InicioSec");

window.addEventListener("scroll",function(){
    if(Registro.getBoundingClientRect().top < this.window.innerHeight){
        Botones.classList.add("fade");
        Botones.classList.remove("show");
        
    }
    else{
        Botones.classList.add("show");
        Botones.classList.remove("fade");
    }
})

Boton1.addEventListener("click", function(){
    Ini.classList.add("visually-hidden");
    Reg.classList.remove("visually-hidden");
})
Boton2.addEventListener("click", function(){
    Ini.classList.remove("visually-hidden");
    Reg.classList.add("visually-hidden");
})
BotonR.addEventListener("click", function(){
    Ini.classList.add("visually-hidden");
    Reg.classList.remove("visually-hidden");
})
BotonI.addEventListener("click", function(){
    Ini.classList.remove("visually-hidden");
    Reg.classList.add("visually-hidden");
})

const FormularioLogin = document.getElementById('Inicio');
const FormularioRegistro = document.getElementById('Registro');
const InputsLogin = document.querySelectorAll('#Inicio input');
const InputsRegistro = document.querySelectorAll('#Registro input');
const input_Contra = document.getElementById('Contraseña');
const input_Coconntra = document.getElementById('Concontraseña');

const camposLogin = {
    CorreoI: false,
    ContraseñaI: false
}
const camposReg = {
    Nombre:false,
    Contraseña:false,
    Correo:false,
    Concontraseña:false
}

const expresiones = {
    Nombre:/^[a-zA-ZÁ-ÿ\s]{1,25}$/,
    Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Contraseña:/^.{1,20}$/
}

const validarFormLog = (e)=>{
    switch (e.target.name){
        case "CorreoI":
            if (expresiones.Correo.test(e.target.value)) {
                document.getElementById("ErrorI1").classList.add("visually-hidden");
                document.getElementById("CorreoI").classList.add("border-success");
                document.getElementById("CorreoI").classList.add("is-valid");
                document.getElementById("CorreoI").classList.remove("border-danger");
                camposLogin['CorreoI'] = true;
            }else{
                document.getElementById("ErrorI1").classList.remove("visually-hidden");
                document.getElementById("CorreoI").classList.remove("border-success");
                document.getElementById("CorreoI").classList.remove("is-valid");
                document.getElementById("CorreoI").classList.add("border-danger");
                camposLogin['CorreoI'] = false;
            }
        break;
        case "ContraseñaI":
            if (expresiones.Contraseña.test(e.target.value)) {
                document.getElementById("ErrorI2").classList.add("visually-hidden");
                document.getElementById("ContraseñaI").classList.add("border-success");
                document.getElementById("ContraseñaI").classList.add("is-valid");
                document.getElementById("ContraseñaI").classList.remove("border-danger");
                camposLogin['ContraseñaI'] = true;
            }else{
                document.getElementById("ErrorI2").classList.remove("visually-hidden");
                document.getElementById("ContraseñaI").classList.remove("border-success");
                document.getElementById("ContraseñaI").classList.remove("is-valid");
                document.getElementById("ContraseñaI").classList.add("border-danger");
                camposLogin['ContraseñaI'] = false;
            }
        break;
    }
};

const validarFormReg = (e)=>{
    switch (e.target.name){
        case "Nombre":
            if (expresiones.Nombre.test(e.target.value)) {
                document.getElementById("ErrorN1").classList.add("visually-hidden");
                document.getElementById("Nombre").classList.add("border-success");
                document.getElementById("Nombre").classList.add("is-valid");
                document.getElementById("Nombre").classList.remove("border-danger");
                camposReg['Nombre'] = true;
            }else{
                document.getElementById("ErrorN1").classList.remove("visually-hidden");
                document.getElementById("Nombre").classList.remove("border-success");
                document.getElementById("Nombre").classList.remove("is-valid");
                document.getElementById("Nombre").classList.add("border-danger");
                camposReg['Nombre'] = false;
            }
        break;
        case "Correo":
            if (expresiones.Correo.test(e.target.value)) {
                document.getElementById("ErrorC2").classList.add("visually-hidden");
                document.getElementById("Correo").classList.add("border-success");
                document.getElementById("Correo").classList.add("is-valid");
                document.getElementById("Correo").classList.remove("border-danger");
                camposReg['Correo'] = true;
            }else{
                document.getElementById("ErrorC2").classList.remove("visually-hidden");
                document.getElementById("Correo").classList.remove("border-success");
                document.getElementById("Correo").classList.remove("is-valid");
                document.getElementById("Correo").classList.add("border-danger");
                camposReg['Correo'] = false;
            }
        break;
        case "Contraseña":
            if (expresiones.Contraseña.test(e.target.value)) {
                document.getElementById("ErrorCo1").classList.add("visually-hidden");
                document.getElementById("Contraseña").classList.add("border-success");
                document.getElementById("Contraseña").classList.add("is-valid");
                document.getElementById("Contraseña").classList.remove("border-danger");
                camposReg['Contraseña']=true;
            }else{
                document.getElementById("ErrorCo1").classList.remove("visually-hidden");
                document.getElementById("Contraseña").classList.remove("border-success");
                document.getElementById("Contraseña").classList.remove("is-valid");
                document.getElementById("Contraseña").classList.add("border-danger");
                camposReg['Contraseña']=false;
            }
            if (input_Contra.value !== input_Coconntra.value) {
                document.getElementById("ErrorCo3").classList.remove("visually-hidden");
                document.getElementById("Concontraseña").classList.remove("border-success");
                document.getElementById("Concontraseña").classList.remove("is-valid");
                document.getElementById("Concontraseña").classList.add("border-danger");
                camposReg['Concontraseña']=false;
            }else{
                document.getElementById("ErrorCo3").classList.add("visually-hidden");
                document.getElementById("Concontraseña").classList.add("border-success");
                document.getElementById("Concontraseña").classList.add("is-valid");
                document.getElementById("Concontraseña").classList.remove("border-danger");
                camposReg['Concontraseña'] = true;
            }
        break;
        case "Concontraseña":
            if (expresiones.Contraseña.test(e.target.value)) {
                document.getElementById("ErrorCo2").classList.add("visually-hidden");
                document.getElementById("Concontraseña").classList.add("border-success");
                document.getElementById("Concontraseña").classList.add("is-valid");
                document.getElementById("Concontraseña").classList.remove("border-danger");

            }else{
                document.getElementById("ErrorCo2").classList.remove("visually-hidden");
                document.getElementById("Concontraseña").classList.remove("border-success");
                document.getElementById("Concontraseña").classList.remove("is-valid");
                document.getElementById("Concontraseña").classList.add("border-danger");
            }
            if (input_Contra.value !== input_Coconntra.value) {
                document.getElementById("ErrorCo3").classList.remove("visually-hidden");
                document.getElementById("Concontraseña").classList.remove("border-success");
                document.getElementById("Concontraseña").classList.remove("is-valid");
                document.getElementById("Concontraseña").classList.add("border-danger");
                camposReg['Concontraseña'] = false;
            }else{
                document.getElementById("ErrorCo3").classList.add("visually-hidden");
                document.getElementById("Concontraseña").classList.add("border-success");
                document.getElementById("Concontraseña").classList.add("is-valid");
                document.getElementById("Concontraseña").classList.remove("border-danger");
                camposReg['Concontraseña'] = true;
            }
        break;
    }
};

InputsLogin.forEach((input)=> {
    input.addEventListener('keydown', validarFormLog);
    input.addEventListener('blur', validarFormLog);
});


InputsRegistro.forEach((input)=> {
    input.addEventListener('keyup',validarFormReg);
    input.addEventListener('blur',validarFormReg);
});
FormularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(camposLogin.CorreoI && camposLogin.ContraseñaI){
        /*Por si las dudas
        conexion.query(`SELECT Nombre FROM usuarios WHERE Contraseña = "${document.getElementById('ContraseñaI')}" AND Correo = "${document.getElementById('CorreoI')}"`,function(error,fields){
            if (error) {
                throw error;
            }else{
                fields.forEach(fila => {
                    console.log(fila);
                    var Nombresito = fila.Nombre.value();
                });
            }
        });*/
        document.getElementById("navUsuario").classList.remove("visually-hidden");
        document.getElementById("navNormal").classList.add("visually-hidden");
        document.getElementById("CorreoI").value=("");
        document.getElementById("ContraseñaI").value=("");
        document.getElementById("SiInicio").classList.remove("visually-hidden");
        setTimeout(() => {
            document.getElementById("SiInicio").classList.add("visually-hidden");
        }, 5000);
        document.querySelectorAll('.form-control').forEach((Input)=>{
            Input.classList.remove("border-success");
            Input.classList.remove("is-valid");
        });
    }else{
        document.getElementById("ErrorI0").classList.remove("visually-hidden");
        setTimeout(() => {
            document.getElementById("ErrorI0").classList.add("visually-hidden");
        }, 5000);
    }
});
FormularioRegistro.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(camposReg.Concontraseña && camposReg.Contraseña && camposReg.Correo && camposReg.Nombre ){
        /*Por si las dudas
        conexion.query(`INSERT INTO usuarios (Correo, Contraseña, Nombre) VALUES ("${document.getElementById('Correo').value}","${document.getElementById('Contraseña').value}","${document.getElementById('Nombre').value}")`, function(error,resultados){
            if(error)throw error;
            console.log('¡Registro Agregado!',resultados)
        });*/
        
        document.getElementById("Concontraseña").value=("");
        document.getElementById("Contraseña").value=("");
        document.getElementById("Correo").value=("");
        document.getElementById("Nombre").value=("");
        document.getElementById("SiRegistro").classList.remove("visually-hidden");
        setTimeout(() => {
            document.getElementById("SiRegistro").classList.add("visually-hidden");
        }, 5000);
        document.querySelectorAll('.form-control').forEach((Input)=>{
            Input.classList.remove("border-success");
            Input.classList.remove("is-valid");
        });
    }else{
        document.getElementById("ErrorR0").classList.remove("visually-hidden");
        setTimeout(() => {
            document.getElementById("ErrorR0").classList.add("visually-hidden");
        }, 5000);
    }
});

const btnReg = document.getElementById('RegistrarVer')
const btnIni = document.getElementById('IniciaSesionVer')

    
btnReg.addEventListener('click', () => {
    var correito = (document.getElementById("Correo").value)
    var Correoomg = correito.split('@')
    var Correo1 = Correoomg[0]
    var Correo2 = Correoomg[1]
    let data = {
        Correo: Correo1+Correo2,
        Contrasea:document.getElementById("Contraseña").value,
        Nombre:document.getElementById("Nombre").value
    }
    fetch('/signup', {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})
btnIni.addEventListener('click', () => {
    var correitoI = (document.getElementById("CorreoI").value)
    var CorreoomgI = correitoI.split('@')
    var Correo11 = CorreoomgI[0]
    var Correo22 = CorreoomgI[1]
    let data = {
        Correo: Correo11+Correo22,
        Contrasea:document.getElementById("ContraseñaI").value,
    }
    fetch('/login', {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})