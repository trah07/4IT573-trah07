const wait = () => {
    return new Promise((resolve, reject) => {
        reject("chyba")

        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

//výjimky pomocí throw

try {
    return
} catch (err) {
    console.error(err)
} finally {
    console.log("finally")
}

//finally se hlavně používá, když je v "try" return