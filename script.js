function fibonacci(num) {
 //0 1 1 2 3 5
 if(num == 1) return 0;
 if(num == 2) return 1;
 
 let a = 0;
 let b = 1;
 
 let c ;
    for(let i= 3; i <= num; i++) {
        c = a +b ;
        a = b;
        b = c;
    }
 return c;
}

console.log(fibonacci(5));

module.exports = fibonacci;
