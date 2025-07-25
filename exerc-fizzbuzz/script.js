//se o numero for divisível por 3 = Fizz
//se o numero for divisível por 5 = Buzz
//se o numero for divisível por 3 e 5 = FizzBuzz

function fizzBuzz(x) {
    if (typeof x !== 'number') return x;
        if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
        if (x % 3 === 0) return "Fizz";
        if (x % 5 === 0) return "Buzz";
        return x;
}
for (let x = 0; x <= 100; x++) {
    console.log(fizzBuzz(x));
}
