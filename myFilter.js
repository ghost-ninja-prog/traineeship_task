
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myFilter(array, callback) {
    let resultArr = []
    array.forEach(element => {
        if(callback(element)) {
            resultArr.push(element)
        }
    });
    return resultArr
}

console.log('только четные числа', myFilter(numbers, (el) => el % 2 === 0))
console.log('только числа больше "3"', myFilter(numbers, (el) => el > 3))
