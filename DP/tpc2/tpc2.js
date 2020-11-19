function makeStudent(nr, address) {
    return {
        'nr': nr,
        'address': address,
        'print': function() { console.log('I am a Studen with nr: ' + this.nr ) }
    }
}

var std2 = makeStudent(163531, 'Rua das papoilas')

function inspect(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {                       
            if(typeof(obj[key]) == 'function') {
                obj[key]()
            } else { 
                console.log(key + ' = ' + obj[key])
            }
            
        }
    }
}

inspect(std2)
