let answer = null;
const array = [];

alert('Hola, Vamos a hacer una lista de números');

answer = Number (prompt('Ingresa un número del 1 al 50'));

while (answer<=0 || answer>=51){
    answer = prompt('El número que ingreso está fuera del rango, por favor ingresa un número del 1 al 50');
}



for (let i = 0; i <= 50; i++){
    if (answer >= i){
        array.push(i);
    }else{
        i = 51;
    }
    
}

alert('Contamos tu número con el siguiente arreglo ['+array+'] y tu número es '+ answer);