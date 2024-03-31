const initializer = () => {
    console.log("hello")
    return 0
}

const increment = i => {
    console.log(`Incrementing i from ${i} to ${i + 1}`)
    return i + 1
}

for (let i = initializer(); Math.random() < 0.9; i = increment(i)) {
    console.log(i)
}
