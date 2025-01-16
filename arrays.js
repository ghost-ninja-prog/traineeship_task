
arr = [2, 3, 1, , , 4, 6, 3, 8, 12, , , 34, 2]

const mySlice = (arr, start = 0, end = null) => {
    end === null || end > arr.length ? end = arr.length : end

    if(start < 0 && end === arr.length) {
        return arr.filter((_, index) => index >= arr.length - (start * -1))
    } else if (start > arr.length) {
        return []
    } else if (start >= 0 && end < 0) {
        return arr.filter((_, index) => index >= start && index < arr.length - (end * -1))
    }
    else {
        return arr.filter((_, index) => index >= start && index < end)
    }
}

console.log(`mySlice result: [${mySlice(arr, 3, -1)}]`)