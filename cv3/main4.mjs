const myPromise = {
    then: (resolve) => {
        setTimeout(() => {
            resolve('test')
        }, 1000)
    }
}

const result = await myPromise

console.log(result)