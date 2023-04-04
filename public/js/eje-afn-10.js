//alert("Hola Mundo del JavaScript");

function sumaNumeros(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const resultado = parseFloat(n1) + parseFloat(n2);
    changeAnswer(resultado);
}

function restaNumeros(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const resultado = n1 - n2;
    changeAnswer(resultado);
}

function multiplicaNumeros(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const resultado = n1 * n2;
    changeAnswer(resultado);
}

function divideNumeros(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const resultado = n1 / n2;
    changeAnswer(resultado);
}

function changeAnswer(resultado){
    document.getElementById("res").innerHTML=resultado;
}