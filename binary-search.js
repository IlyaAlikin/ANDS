const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const binarySearch = (list, num) => {
    let left = 0

    let right = list.length
    let mid
    let found = false
    while(left <= right && found === false ) {
        mid = Math.floor((left + right) / 2)

        if(list[mid] === num) {
            found = true
            return mid
        }
        if(list[mid] <= num) {
            left = mid + 1

        }
        else{
            right = mid - 1
        }
        console.log(mid, left, right)

    }

    return 0
}

let num = 12
console.log(`Искомый элемент под индексом:,  ${num} -   ${binarySearch(list, num)}`)