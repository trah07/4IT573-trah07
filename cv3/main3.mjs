import fs from 'fs/promises'

// vytvořím asynchronní funkci pomocí async
// async a await

const main = async () => {
    const dataA = await fs.readFile('a.txt')
    const dataB = await fs.readFile('b.txt')

    console.log(dataA.toString() + dataB.toString())
}

main()