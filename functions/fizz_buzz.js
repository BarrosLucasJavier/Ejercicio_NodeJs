const fizz_buzz = (number) =>{
    let array = [];


    for (let i = 1; i <= number; i++) {

        const tres = i % 3;  // almaceno el resto de i dividido 3 para ver si es multiplo
        const cinco = i % 5; // idem con 5

        array[i-1] = i;  // guardo el número en el array para despues ver si es multiplo se sobrescribe

        if (tres === 0) {
            array[i-1] =  "Fizz";
        }
        if (cinco === 0) {
            array[i-1] = "Buzz";
        }
        if ((tres === 0) && (cinco === 0)) {
            array[i-1] = "FizzBuzz";
        }
        
    }
    return array
}

module.exports = fizz_buzz