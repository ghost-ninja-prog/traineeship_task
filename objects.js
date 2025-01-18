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
