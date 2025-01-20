
const anyString = 'some String the length, of which should not be more than 40 characters'
const anyString2 = 'какая-то строка, длинной больше 40 символов'

const firstCharacterUppercase = (str) => {
    if(!str) return str

    return str.charAt(0).toUpperCase() + str.slice(1); 
}

console.log(firstCharacterUppercase(anyString2))

const truncateString = (str, quantity) => {
    if (str.length > quantity) {
        const regexp = /[a-zа-яё0-9-]+[^\s]/ig
        const arrWords = str.match(regexp)
        let newStr = ''
        for(let i = 0; newStr.length <= quantity; i++) {
            if(`${newStr} ${arrWords[i]}`.length > quantity) {
                return `${newStr}...`
            }
            newStr = newStr.length === 0 ? `${arrWords[i]}` : `${newStr} ${arrWords[i]}`
        }
    } else {
        return str
    }
}

// console.log(truncateString(anyString2, 40))

const testingIncludedStrings = (str1, str2) => {
    if(str1.includes(str2)) {
        return true
    } else if(str2.includes(str1)) {
        return true
    } else {
        return false
    }
}

const string1 = 'lololo'
const string2 = 'rere'

// console.log(testingIncludedStrings(string2, string1))