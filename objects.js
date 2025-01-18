const someObj = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
}

const summProps = (obj) => {
    let summ = null
    for(let key in obj) {
        if (typeof obj[key] === 'number') {
            summ = summ + obj[key]
        }
    }
    return summ
}

console.log(summProps(someObj))


const sortPropsObject = (obj) => {
    
    let arrOfValues = []
    
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            arrOfValues.push(obj[key])
        }
    }

    for (let i = 0; i < arrOfValues.length; i++) {
        for (let j = i + 1; j < arrOfValues.length; j++) {
            if ( arrOfValues[j] > arrOfValues[i] ) {
                [arrOfValues[i], arrOfValues[j]] = [arrOfValues[j], arrOfValues[i]]
            }
        }
    }

    let arrProps = []
    
    for(let i = 0; i < arrOfValues.length; i++) {
        for(let key in obj) {
            if(obj[key] === arrOfValues[i]) {
                arrProps.push(key)
            }
        }
    }
    return arrProps
}

console.log(sortPropsObject(someObj))