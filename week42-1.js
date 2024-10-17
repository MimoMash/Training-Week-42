/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function createListNumbers(n, m) {

    let list = [];

    for (let i = n; i < m; i++) {
        list.push(i);
    }
    
    return list;
}

console.log(createListNumbers(5, 10));

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

let list1 = createListNumbers(5, 11);
let list2 = createListNumbers(8, 23);

function combineLists(a, b) {

    let list = [];
    let max = 0;
    let min = a[0];

    if (a[0] > b[0])
        min = b[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i] > max) {
            max = b[i];
        }
    }
    for (let i = min; i <= max; i++) {
        list.push(i);
    }

    return list;
}

console.log(combineLists(list1, list2));

function combineLists2(a, b) {

    let list = [];

    for (let i = 0; i < a.length; i++) {
        list.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        if (!list.includes(b[i])) {
            list.push(b[i]);
        }
    }

    return list;
}

console.log(combineLists2(list1, list2));

//I don't know if two solutions is shunned upon, but i thougth of these two ways of doing it, so i felt like including them both, please don't fail me

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const message = "ckrr jutk";
let shift = 6;

function decryption(message, alphabet, shift) {

    let key = [];
    let decryptdedMessage = [];
    let space = " ";

    for (let i = 0; i < alphabet.length; i++) {
        key.push(alphabet[(i + shift) % alphabet.length]);
    }
    
    for (let i = 0; i < message.length; i++) {
        if (message[i] == space) {
            decryptdedMessage.push(space);
        }
        for (let j = 0; j < key.length; j++) {
            if (message[i] == key[j]) {
                decryptdedMessage.push(alphabet[j]);
            }
        }
    }

    decryptdedMessage = decryptdedMessage.join("")
    return decryptdedMessage;
}

console.log(decryption(message, ALPHABET, shift));

/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function sum(list, target) {

    let solutions = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = (i + 1); j < list.length; j++) {
            if (list[i] + list[j] == target) {
                solutions.push([list[i], list[j]]);
            }
        }
    }

    if (solutions.length > 1) {
        return solutions;
    } else if (solutions.length == 1) {
        return solutions[0];
    } else
        console.log("No two numbers added sums up to target");

}

console.log(sum(numbers, target));

/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function howManyDigitsIn(number) {

    number = number.toString();
    let digits = number.split("");
    digits = digits.length;

    return digits;
}

console.log(howManyDigitsIn(12345));
