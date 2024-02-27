console.log(
    'Hello world!'
)

function add(a,b) {
    return a + b;
}

const substract = (a,b) => {
    return a - b;
}

const secti = add

console.log(secti(1, 2))

const binaryOperation = (a, operation, b) => {
    return operation(a,b)
}

const pridej = (c,d) => {
    return c + d
}

console.log(binaryOperation(10, add, 2))

const makePerson = (name) => {
    let _name = name
    
    const getName = () => {
        return _name
    }

    const setName = (name) => {
        _name = name
    }

    return {
        getName,
        setName,
    }
}