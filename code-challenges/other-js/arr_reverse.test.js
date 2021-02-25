'use strict';


const reverse_array= (arr)=>{

    let length = arr.length
    let iteration = Math.floor(length / 2)
    for(let i = 0; i < iteration; i ++){
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp
    }
    return arr;
}

describe('Testing Reverse Array Challenge', ()=>{
    test('It should reverse an array in place', ()=>{
        expect(reverse_array([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
    });
});
