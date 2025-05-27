const list = [1, 5, 6, 7, 2, 8, 100, 22, 19, 4, 21]


const num = 100

const findIndex = (n) => {
    for(let j = 0; j < list.length; j++) {
        if(list[j] === n) {
            return `('Индекс искомого элемента:', ${j})`
        }
    }
    return 'Элемент не был найден'
}

console.log(findIndex(num))

