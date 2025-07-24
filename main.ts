function printId(id: string | number) { 
    console.log(`Your ID is: ${id}`)
}

printId(101)
printId('salom')
// printId(true)x

const mixedArray: (string | number | boolean )[] = []

mixedArray.push('hello')
mixedArray.push(32)


console.log(mixedArray)

