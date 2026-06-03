// 1. AGE TO DAYS CONVERTER:

// let age = parseFloat(prompt("Enter your age: "));
// let ageResult = age * 365.25;
// console.log(`You are ${Math.floor(ageResult)} days old.`);

// <<<---========================================================================================--->>>

// 2. HOURS TO SECONDS CONVERTER:

// let hours = parseInt(prompt("Enter your hours: "));
// let hoursResult = hours * 3600;
// console.log(`${hoursResult} seconds in ${hours} hours`);

// <<<---========================================================================================--->>>
// 3. FIND THE NUMBER NEXT TO A CERTAIN NUMBER:
// SCENARIOS :
// 1.
// let arr = [1, 10, 30, 45, 54];
// let arrNum = parseInt(prompt('Enter a number: '))
// function nextNumFunction(num) {
//     let index = arr.indexOf(num)
//     if(index === -1 || index === arr.length - 1){
//         return "Num is not in arr"
//     }
//     let nextNum = arr[index + 1]
//     console.log(nextNum);
//     // return nextNum;
// }
// nextNumFunction(arrNum);    
// // console.log(num);

// 2.
// let userNUm = parseFloat(prompt("Enter your number: "))
// function nextNumFunction2(num) {   
//     if (Number.isInteger(userNUm)) {
//         return num + 1
//     }else if(!Number.isInteger(userNUm)){
//         return Math.ceil(userNUm);
//     }
//     return 'Invalid number!'
// }
// let num = nextNumFunction2(userNUm)
// console.log(num);

// <<<---========================================================================================--->>>

// 4. CAPITALISE FIRST ALPHABET:

// let userName = prompt('Enter your name: ').toLowerCase();
// console.log(userName);
// let capital = userName[0].toUpperCase()
// let remaining = userName.slice(1)
// console.log(`User name is ${capital}${remaining}`);

// <<<---========================================================================================--->>>

// 5. CALCULATE BMI:
// let weight = parseFloat(prompt("Enter your weight: ie.60 (kg)"));
// let height = parseFloat(prompt("Enter your height: ie.1.7 (meters)"));

// const calculateWeight = (weight, height) => {
//     if (isNaN(weight) || isNaN(height) || height <= 0) {
//         alert("Invalid or empty Input!");
//         return
//     }
//     height = height * height
//     let BMI = weight / height;

//     if (BMI < 18.5) {
//         alert("You are Underweight");
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//         alert("Your weight is normal");
//     } else if (BMI >= 25 && BMI <= 29.9) {
//         alert("You are overweight");
//     } else {
//         alert("You are Obese");
//     }
//     console.log(`Your BMI is ${BMI.toFixed(2)}`);
// }
// calculateWeight(weight, height);

// <<<---========================================================================================--->>>

// 6. RANDOMLY GENERATE AN ARRAY AND PICK 1ST AND LAST ELEMENT :
// let arr = []
// for (let i = 0; i < 5 + Math.floor(Math.random() * 10); i++) {
//     // console.log(i);  
//     arr.push(Math.floor(Math.random() * 100));
// }
// console.log(`Random arr is: ${arr}`);
// const takeFirstLastElem = () =>{
//     console.log(`first element of array is : ${arr[0]}`); 
//     console.log(`Last element of array is : ${arr[arr.length - 1]}`); 
// }
// takeFirstLastElem();

// <<<---========================================================================================--->>>

// 7.USE EVENT HANDLING CONCEPT:
let input1 = document.querySelector('#input-1');
let input2 = document.querySelector('#input-2');
let input3 = document.querySelector('#input-3');

const calculations = () => {
    if (input1.value === "" && input2.value === "") {
        input3.value = "";
        return;
    }
    let input1Val = parseFloat(input1.value);
    let input2Val = parseFloat(input2.value);
    let result = input1Val + input2Val;
    // console.log(result);
    let finalResult = input3.value = result;
    // console.log(finalResult);
    return finalResult;
}
input1.addEventListener('input', (result) => {
    calculations();
    // console.log(result.data);
})
input2.addEventListener('input', (result) => {
    calculations();
    // console.log(result.data);
})