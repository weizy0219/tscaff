import {HelloWorld} from '../index'

// test("this will test hello world",()=>{
//     expect(HelloWorld()).toBe('Hello World!');
// })

describe("The HelloWorld test",()=>{
    it('should return Hello World! string',()=>{
        expect(HelloWorld()).toBe('Hello World!');
    })
})