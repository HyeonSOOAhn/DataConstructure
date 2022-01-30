import Stack from "../src/stack"

describe('stack test',() => {

    test('stack push test', () =>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        expect(stack.size()).toBe(5);
    })

    test('stack pop test', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.size()).toBe(2);
    })

    test('stack time test', () => {

        const stackStartDate = new Date();
        const stack = new Stack();

        for(let i=0; i<1000000; i++){
            stack.push(i);
        }

        for(let i=0; i<1000000; i++){
            stack.pop();
        }

        const stackTime = new Date() - stackStartDate;

        const arrayStartDate = new Date();
        const array = [];

        for(let i=0; i<1000000; i++){
            array.push(i);
        }

        for(let i=0; i<1000000; i++){
            array.pop();
        }
        
        const arrayTime = new Date() - arrayStartDate;

        expect(stackTime).toBeGreaterThan(arrayTime);

    })

    test('stack time test2', () => {

        const stackStartDate = new Date();
        const stack = new Stack();

        for(let i=0; i< 10000000; i++){
            stack.push(i);
        }

        for (let i = 10000000; i < 20000000; i++) {
            stack.push(i);
            stack.pop();
        }

        const stackTime = new Date() - stackStartDate;

        const arrayStartDate = new Date();
        const array = [];

        for(let i=0; i< 10000000; i++){
            array.push(i);
        }

        for (let i = 10000000; i < 20000000; i++) {
            array.push(i);
            array.pop();
        }

        const arrayTime = new Date() - arrayStartDate;

        expect(stackTime).toBeGreaterThan(arrayTime);
    })




})