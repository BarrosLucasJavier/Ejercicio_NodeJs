
const number_cardinality = (number) => {

    let array = String(number)

    switch (array[array.length-1]) {
        case "0":
            // se analiza como cadena de caracter si el ultimo es cero
            return "zero"
        case "5":
            // se analiza como cadena de caracter si el ultimo es cinco
            return "five"
        default:
            // despues de analizar el carater final, se toma el numero y calcula si el resto es cero es par, sino impar
            if (number % 2 === 0) {
                return "even"
            } else {
                return "odd"
            }
    }
}

module.exports = number_cardinality;