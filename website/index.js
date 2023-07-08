// const arr = [
//     {
//         id: 1,
//         name: 'ali',
//         age: 12
//     }, 
//     {
//         id: 2,
//         name: 'khali',
//         age: 23
//     },
//     {
//         id: 3,
//         name: 'addali',
//         age: 22
//     }
// ]

// //pop
// const test = arr.pop();

// console.log(test, "pop");
// console.log(arr, "remaining array");

// const test2 = arr.pop();
// console.log(test2, "pop array second time");
// console.log(arr, "remaining array second time");


// //push 
// const addItem = arr.push({id: 4, name: 'adnan', age: 22});

// console.log(addItem, "addItem");
// console.log(arr, "all array after ading new |Item");

// //shift 

// const shiftArr = arr.shift();
// console.log(shiftArr, "shiftArr");
// console.log(arr, "all array after shiftArr Item");

// // unShift
// const unhiftArr = arr.unshift({id: 14, name: "ayaz", age : 15});
// console.log(unhiftArr, "added Shift array");
// console.log(arr, "all array items after unshift");



//Praacticessssssss


//pop
//shift ]
//unshift
//push



const num = [1,2,3,4,5,6,7];
num.pop();
console.log(num);


let fruity = [2,223,4,234,233334];
fruity.pop();
console.log(fruity);

const mamcr = ['df','df','dfd','hhj'];
mamcr.pop();
console.log(mamcr);


let heloo = ['this is a ','message'];
heloo.pop();
console.log(heloo);


let message = ['hi','this','is','s'];
message.shift('hi');
console.log(message);
//pop removes the last item from an array;
let hello12 = ['this','is','all','destiny'];
hello12.pop();
console.log(hello12);

//shift removes  the first item from an  array 

let time = ['all','of','it','is','destiny'];
time.unshift('lio');
console.log(time);

//unshift adds items to beggining
let meme = ['this','is','s'];
meme.unshift(11);
console.log(meme);

//shift removes the first item from an array and pop removes the last item from an array




const arr1 = [{id: 1, name: "ali"}]
const arr2 = [{id: 2, name: "ayaz"}, {id: 3,name: "khan"}];
const ids = [1, 2];

//  itertate throught array 2
// then push items of array 2 to array 1

//shift removes from first
//unshfit adds to first
//pop removes from last
//push add to last

arr2.forEach(item => {
    console.log(item,'arr2')
    arr1.push(item);
});



console.log(arr1);


const cup = ["array", "ahshdha"];  //array of strings
const nums = [1, 2];  //array of numbers
const arrofobject = [{id: 1, name: "ali", age: 12}, {id: 2, name: 'test', age: 22} ];  //array of object
const objectofarray = {names: ["sajid", "ali", "khan"], age: [1, 2, 3]} // object of array 

const object = {name: 'asds'};//key value  name is key and 

const thisisaobj = object.name

console.log(thisisaobj);
//foreach method is used to


let fruits = ['aplles','mangos','pineapple'];
fruits.forEach((item)=> {
    console.log(item, "arrow function");
});

fruits.forEach(function(item){
    console.log(item, "simple Function")
})
console.log(fruits);


const mern = ['stack','over','flow'];

mern.push('hedje');
console.log(mern);


const stack = ['go','where','you','find','yourself'];
stack.pop();
console.log(stack);

const lerf = ['sentec','flow','stack','git','github'];
lerf.push('gitlens');
console.log(lerf);

let git = [12,122,123,124,125,126,127];
git.shift();
console.log(122224);

let si = ['go','to','office','workload'];
si.unshift('fr')
console.log(si);

//unshift add an item to the start of an array
//shift remove an item from the start
//pop is used to remove the last item from an array
//push is used to add an item to last of the array




//a call back function runs after another function

//nullish operator : undefined value/ app crash  example: user?.name  

// if else / shorthand ? if  : else

//function
let a = 10  // global variable which is declared at the top of file/ compoenent / function

function Getname(){  // function declaration
    const b = 20;
    console.log(b);
 console.log(a);
}

Getname();  // calling function


function AddNumber(a, b){  // function with two paramaters 
    const sum = a + b;
    console.log(sum, "sum within function")
    return sum;
}

const sum = AddNumber(12, 7);
console.log(sum, "outside function");


//arrow function 
const getUser = () => {
    const b = 20;
    console.log(b);
 console.log(a);
}

getUser();


const ArrowADDNumber = (a, b) => {
    const sum = a + b;
    return sum;
}

const useNum = ArrowADDNumber(10, 30);

console.log(useNum, "useNum")


const Ali = (a, b) => a + b;

const abc = Ali(10, 40);

console.log(abc);


/// Immedaiately Invoked Function / self invoked







let z = 1;
let y = 2;
console.log("sum of z and y is", 1 + (z+y)/2) ;
console.log("sum of z and y is", 1 + (z+y)/2) ;
console.log("sum of z and y is", 1 + (z+y)/2) ;
console.log("sum of z and y is", 1 + (z+y)/2) ;



function oneplusavg (){

}