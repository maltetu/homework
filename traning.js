const FirstObj = {
    name: "Adam",
    age: 18
};

const SecondObj = { 
    name: "Dimon",
    age: 20
};
/*сделать функцию , которая получает в качестве аргумента 2 объекта, а на выходе дает новый с 2 исходными объктами внутри*/

function HomeWork (FirstObj, SecondObj) {
let thirdObj = { 
one: FirstObj,
Two: SecondObj
};
for  (let key in thirdObj) {
alert (key);
alert (thirdObj [key]);
}
};
console.log(thirdObj);
//console.log (HomeWork (thirdObj));