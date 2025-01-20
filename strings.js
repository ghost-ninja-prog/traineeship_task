
const firstCharacterUppercase = (str) => {
    if(!str) return str

    return str.charAt(0).toUpperCase() + str.slice(1); 
}

const truncateString = (str, quantity) => {
    
    if (str.length <= quantity) return str
    
    const regexp = /[a-zа-яё0-9-]+[^\s]/ig    
    const arrWords = str.match(regexp)

    let newStr = ''

    for(let i = 0; newStr.length <= quantity; i++) {
        if(`${newStr} ${arrWords[i]}`.length > quantity) {
            return `${newStr}...`
        }
        newStr = i === 0 ? `${arrWords[i]}` : `${newStr} ${arrWords[i]}`
    }    
}



const testingIncludedStrings = (str2, str1) => {
    return str1.includes(str2) || str2.includes(str1)    
}

const anyString = 'some String the length, of which should not be more than 40 characters'
const anyString2 = 'какая-то строка, длинной больше 40 символов'
const string1 = 'lololo'
const string2 = 'rere'



console.log(truncateString(anyString, 40))

console.log(firstCharacterUppercase(anyString2))

console.log(testingIncludedStrings(string2, string1))