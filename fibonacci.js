
function fibonacci(num) {
    
    if (num < 2) {
        return 2
    }
    else {
        return fibonacci(num - 1) + fibonacci(num-2)
    }

}


console.log(fibonacci(5))