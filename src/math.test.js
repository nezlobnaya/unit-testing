const math = require('./math')

// const actual = math.sum (2 ,3)
// const expected = 5

// if(actual !==expected) {
//     throw new ErrorEvent(`Expected ${expected}, but got ${actual}!`)
// }

// console.log("All tests have passed!")

// test('Adds numbers together with sum()', () => {
//     expect(math.sum(2,3)).toBe(5)
// })   
describe('Unit tests for our math function', () =>{
    it('Adds numbers together with sum()', () => {
        expect(math.sum(2,3)).toBe(5)
    })   
})