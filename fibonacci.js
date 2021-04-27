
function fibonacci(num) {
    
    if (num < 2) {
        return num
    }
    else {
        return fibonacci(num - 1) + fibonacci(num-2)
    }

}

const terminal = require('readline');

const Console = terminal.createInterface({
    input: process.stdin,
    output: process.stdout
});


Console.question("\nEnter a number ", (number) => {

       console.log("F("+number+") = " + fibonacci(number))
        Console.close();
    });


