
const anyString = 'some String, the! length, of which should not be more than 40 characters'
const anyString2 = 'какая-то строка длинной больше 40 символов'

const firstCharacterUppercase = (str) => {
    return str.replace(/\w/, str[0].toUpperCase()) 
}

// console.log(firstCharacterUppercase(anyString))

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

console.log(truncateString(anyString2, 40))