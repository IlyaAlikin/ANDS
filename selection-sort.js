const arr = [1, 3, 5, 1, 6, 2, 7, 2, 8, 9, 0, 8, 3, 76, 9,5765, 345, 86, 36, 63, 42]

const selectionSort = (arr) => {
    let start = 0
    let end = arr.length - 1
    let swap
    let minEl
    let leftArr
    let idx
    while (start <= end) {
        leftArr = arr.slice(start, end + 1)
        minEl = Math.min(...leftArr)
        idx = leftArr.indexOf(minEl) + start
        swap = arr[start]
        arr[start] = arr[idx]
        arr[idx] = swap

        console.log(arr)
        start++
    }
}

selectionSort(arr)