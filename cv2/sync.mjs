import fs from 'fs'

// tohle ne

const data = fs.readFileSync('count.txt').toString()

console.log(data)

fs.writeFileSync('count.txt', String(Number(data) + 1))