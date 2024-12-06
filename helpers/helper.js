console.log('_____________helper.js___________')

console.log(__dirname)
console.log(__filename)

const foo = () => {
    console.log('this is here')
}


// це експорт цього функції foo
module.exports = {foo}