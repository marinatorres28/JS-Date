let fecha = new Date(); //lee fecha y hora
salida = document.querySelector("#salida");

window.onload = () => {
    document.querySelector("#fechaHoy").addEventListener("click", mostrarFechaHoy);
    document.querySelector("#diaHoy").addEventListener("click", mostrarDia);
    document.querySelector("#mesActual").addEventListener("click", mostrarMes);
    document.querySelector("#anioActual").addEventListener("click", mostrarAnio);
    document.querySelector("#fechaCompleta").addEventListener("click", mostrarFechaCompleta);
    document.querySelector("#horaActual").addEventListener("click", mostrarHora);

}

//funcion para mostrar la fecha de hoy
function mostrarFechaHoy() {
    salida.textContent = fecha.toLocaleDateString(); //muestra la fecha segun el formato local
}

// funcion para mostrar el dia de hoy
function mostrarDia() {
    salida.textContent = "Hoy es " + fecha.getDate();//muestra el dia de hoy
}

//funcion para mostrar el mes actual
function mostrarMes() {
    salida.textContent = "El mes actual es " + (fecha.getMonth() + 1); //muestra el mes actual en numero pero enero=0
}
//funcion para mostrar el año actual
function mostrarAnio() {
    salida.textContent = "El año actual " + fecha.getFullYear(); //muestra el año actual
}

//para mostrar la fecha completa
function mostrarFechaCompleta() {
    salida.textContent = "La fecha de hoy es " + fecha.toLocaleString
    ("es-ES",{
        weekday: "long",
        year: "numeric",
        month: "long",
        day:"numeric"
    }).toUpperCase();

}

// 
function mostrarHora(){
    const intervalID=setInterval (() => {
        let now = new Date(); //lee la hora cada segundo
        document.querySelector("#salida").innerHTML=
        now.toLocaleTimeString("es-ES")
    }) //1 segundo (milisegundos)
    document.querySelector("#pararHora").addEventListener("click",()=>{
        clearInterval(intervalID);
    })
}

