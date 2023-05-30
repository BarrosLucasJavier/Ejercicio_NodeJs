const range_vision = (number) =>{
    
    let array = String (number);
    let valor_vision = []
    for (let i = 0; i < array.length; i++) {

        for (let x = 1; x <= array[i]; x++) {

            if (i-x >= 0) {
                valor_vision[i] ? valor_vision[i] += +array[i-x] : valor_vision[i] = +array[i-x]
            }
            
            if (i+x <= array.length-1) {
                valor_vision[i] ? valor_vision[i] += +array[i+x] : valor_vision[i] = +array[i+x]
            }
        }
    }
    const menor = Math.min.apply(null,valor_vision)
    
    for (let i = 0; i < array.length; i++) {
        if (valor_vision[i] === menor){
            if (+array[i] === 1){
                return true
            }
        }
    }
    return false
}

module.exports = range_vision;