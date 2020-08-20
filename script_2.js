let number = prompt("What number's factorial do you want to know ?")

function factorial(number) {
    let f = 1;
    for (let i = 1; i <= number; i++) {
        f = f *= i;
    }
    return f;
}

console.log("le résultat est: " + factorial(number));