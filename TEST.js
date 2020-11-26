
// let string1 = 'abcd'
// let string2 = 'cd'


// let solution = (str, ending) => {return ending == str.slice(str.length - ending.length) ? true : false}

// console.log(solution(string1, string2));
    

//--------------------------------------------------
//--------------------------------------------------





// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//let arraycito = [':)', ';(', ';}', ':-D'];
//let arraycito = [';D', ':-(', ':-)', ';~)'];
//let arraycito = [';]', ':[', ';*', ':$', ';-D'];
//let arraycito = [];

// let countSmileys = (array) => {
//     let counter = 0;
//     array.forEach(element => {
//         element.length == 2 && (element[0] == ":" || element[0] == ";") && (element[1] == ")" || element[1] == "D") ? counter++ : counter
//         element.length == 3 && (element[0] == ":" || element[0] == ";") && (element[1] == "-" || element[1] == "~") && (element[2] == ")" || element[2] == "D") ? counter++ : counter        
//     })
//     return counter
// }
// console.log(countSmileys(arraycito))



//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------



// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers;
//     target will always be the sum of two different items from that array).

// let numbers = [ 1, 2, 3, 4, 5]
// let targ = 4

// function twoSum(nums, target) {
//     let answer = []
//     for (let i = nums.length -1 ; i >= 0; i--) {
//         const element = nums[i];

//         nums.forEach(elemento => {
//             //console.log(element)
//             if (element + elemento == target) {
//                 //console.log(element, elemento)
//                 answer.push([element, elemento])
//             }
//         })
        
//     }
//     return answer
    
//   }
//  console.log(twoSum(numbers, targ));
//twoSum(numbers, targ)

  //twoSum [1, 2, 3] 4 === (0, 2)







//   TEST FOR VIDEO FULLSCREEN





