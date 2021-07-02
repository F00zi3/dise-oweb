var PisoDeb=[0,0,0];
var acumulador = 0;
var pisoVIS = document.getElementById("piso");
var depVIS = document.getElementById("dep");
var genVIS = document.getElementById("general");
function mostrar(value){
if(acumulador<2){
    PisoDeb[acumulador] = value;
    pisoVIS.value = pisoVIS.value + PisoDeb[acumulador];
}else if (acumulador==2){
    depVIS.value= "Dep:" + PisoDeb[acumulador];
}
acumulador++
}
function llamar(){

}