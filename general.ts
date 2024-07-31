let myfn: (a: number, b: number) => number = (a,b) => a / b

let myFn2: <T extends number, U extends number>(a: T, b: U) => number = (a,b) => a + b  

console.log(myFn2(1, 2)) 


