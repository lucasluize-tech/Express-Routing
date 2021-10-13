function meanValueOf(array) {
    let sum = 0;
    for (let num of array) {
        sum += parseInt(num)
    }
    return sum / array.length;
}

function medianValueOf(array) {
    let result;
    if (array.length % 2 === 0) {
        const val1 = array[(array.length / 2) - 1]
        const val2 = array[(array.length / 2)]
        result = (parseInt(val1) + parseInt(val2)) / 2
    } else {
        result = array[Math.floor(array.length / 2)]
    }
    return result
}


function mostFrequentOf(array) {
    let counts = {}
    let compare = 0
    let mostFrequent;

    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (!counts[num]) { counts[num] = 1 }
        else{counts[num] += 1}
        if (counts[num] > compare) {
            compare = counts[num]
            mostFrequent = array[i]
        }
    }
    
    return parseInt(mostFrequent)
}

module.exports = {
    mostFrequentOf: mostFrequentOf,
    medianValueOf: medianValueOf,
    meanValueOf: meanValueOf
}
