
const anyString = 'some string, the length, of which should not be more than 40 characters'

const firstCharacterUppercase = (str) => {
    return str.replace(/\w/, str[0].toUpperCase()) 
}

console.log(firstCharacterUppercase(anyString))
