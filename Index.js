/* Esta función multiplica los valores de los campos "uno" y "dos" */
function multiplicar() {
    let num1 = document.getElementById("uno").value;
    let num2 = document.getElementById("dos").value;
    document.getElementById("resultado").innerHTML = num1 * num2;
}

function dividir() {
    let num1 = document.getElementById("uno").value;
    let num2 = document.getElementById("dos").value;
    if(num2==0){
        document.getElementById("resultado").innerHTML = "La división por cero no existe";
    }else{
        document.getElementById("resultado").innerHTML = num1 / num2;
    }
    
}


function fechaHora(){
    document.getElementById('hora').innerHTML=Date();
}


    let texto = "\tBuenos días chicos";
    let longitudd = texto.length;
    document.getElementById('longitud').innerHTML=longitudd + texto;
    document.getElementById('test').innerHTML=texto;

const estudiantes = {
    nombre:"Andrés",
    apellido:"Perez",
    edad:45
}
document.getElementById('estudiante').innerHTML=estudiantes.nombre + " " 
+estudiantes.apellido + " " +estudiantes.edad;
