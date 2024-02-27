import fs from 'fs'

fs.readFile('hello.txt', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data.toString())
    }
})

const readFileAndPrintToConsole = () => {
    fs.readFile('count.txt',(err, data) => {
        if (err) {
            console.err(err.message)
        } else {
            console.log(data.toString())
        }
    })
}