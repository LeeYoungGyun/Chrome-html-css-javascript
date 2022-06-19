function sayHello(nameOfPerson, age) {
    // console.log("Hello my name is ");
    console.log("Hello my name is" + nameOfPerson + " and I'm " +  age);
}

sayHello("nico", 25);
sayHello("dal", 11);
sayHello("lynn", 12);






function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function devide(a, b){
    console.log(a / b);
}

plus(60, 2);
devide(10, 2);


const player = {
    name: "nico",
    sayHello: function (otherPersonName){
        console.log("hello " + otherPersonName + "nice to meet you");
    }
};

console.log(player.name);
console.log(player.sayHello("younggyun"));
console.log(player.sayHello("lynn"));
