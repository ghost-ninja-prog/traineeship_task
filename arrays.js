
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

const myIndexOf = (arr, searchElement, from = 0) => {
    if (from >= arr.length) {
        return -1
    }
    if (from < 0) {
        from = arr.length - (from * -1)
        from < 0 ? from = 0 : from
    }
    for (let i = from; i < arr.length; i++) {
        if(arr[i] === searchElement) {
            return i
        }
    }
    return -1
}

console.log(`muIndexOf result: ${myIndexOf(arr, 3, -12)}`)


const myIncludes = (arr, searchElement, from = 0) => {
    if (from >= arr.length) {
        return false
    }
    if (from < 0) {
        from = arr.length + (from)
        from < 0 ? from = 0 : from
    }
    for (let i = from; i < arr.length; i++) {
        if (typeof searchElement === "number" && typeof arr[i] === "number") {
            if (searchElement === arr[i] || (searchElement !== searchElement && arr[i] !== arr[i])) {
                return true
            }
        } else {
            if (searchElement === arr[i])  {
                return true
            }  
        }
    }
    return false
}

console.log(`myIncludes result: ${myIncludes(arr, 4, 2)}`)