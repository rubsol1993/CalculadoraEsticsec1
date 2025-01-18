var segundotexto = false;
var operador = "";
function Sumar() {
    segundotexto = true;
    operador = "+";
}
function Restar() {
    segundotexto = true;
    operador = "-";

}
function multiplicacion() {
    segundotexto = true;
    operador = "*";
}
function Division() {
    segundotexto = true;
    operador = "/";
}
function Escribir(numBoton) {
    if (!segundotexto) {
        txtNum1.value += numBoton;

    }
    if (segundotexto) {
        txtNum2.value += numBoton;
    }

}   
function borrarUltimo() {
    if (!segundotexto) {
        txtNum1.value = txtNum1.value.slice(0, -1);
    }   

    if (segundotexto) {
        txtNum2.value = txtNum2.value.slice(0, -1);
    }
}



function operacion() {
    switch (operador) {
        case "+":
            alert("el resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("el resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("el resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
        case "/":
            alert("el resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default:
            break;     
    }
}
function borrar() {
    txtNum1.value= "";
    txtNum2.value = "";
    segundotexto = false;
    operador = ""; {
     }
}
