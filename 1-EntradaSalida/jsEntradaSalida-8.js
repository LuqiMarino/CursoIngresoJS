/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var n1;
    var n2;
    var resulta;

    n1 = parseInt (document.getElementById("numeroDividendo").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDivisor").value);
    /* Funcion auxiliar
    console.log(n2);*/
    resulta = n1 % n2;
    alert("El resto es "+resulta);
}
