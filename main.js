// require - це import file helpers.js
// require - записуємо в const і витягуємо функцію foo
// const {foo} = require('./helpers/helper')
//
// console.log('_____________main.js___________')
//
// console.log(__dirname)
// console.log(__filename)
//
// // вказує в якій директорії знаходиться на момент запуску
// console.log(process.cwd())
//
// // тут викликаємо імпортовану функцію foo
// foo()


// це модуль, який задає питання, потім на відповідь він відповідає
const readline = require('node:readline')

const bar = async () => {
const rlInstance = readline.createInterface({
    input:process.stdin,
    output:process.stdin,

})
    rlInstance.question('What is your name?', (name) => {
        console.log(`Hello ${name}`);
        rlInstance.close()
    })
}
void bar()







