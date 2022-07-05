const age = 96;
function calculateKrAge(ageOfForeigner) {
    // ageOfForeigner + 2;
    // return "hello";
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {

    add: function (a, b){
        console.log("hello");
        return a + b;
        console.log("bye bye"); // 리턴 하는 순간,function이 종료되기 때문에 작동하지 않음
    },
    minus: function (a, b){
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b;
    },

    devide: function (p, q) {
        return p / q;
    },
    square: function (m, n) {
        return m**n;
    }
};

const plustResult = calculator.add(2, 7);  // 2 + 3 = 9

const minusResult = calculator.minus(plustResult, 3); // 9 - 3 = 6

const multiResult = calculator.multiplication(10, minusResult); // 10 * 6 = 60

const divideResult = calculator.devide(multiResult, 6); // 60 / 6 = 10

const squareResult = calculator.square(divideResult, minusResult); // 10 ** 6 = 1000000


console.log(plustResult);
console.log(minusResult);
console.log(multiResult);
console.log(divideResult);
console.log(squareResult);

