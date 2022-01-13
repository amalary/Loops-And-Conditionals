// 1. Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i < 21; i++){
    console.log(i); 
} 

// 2. Write a for loop that will log only the even numbers in 0 through 200.

for(let i =0; i< 201; i++){
    if (i % 2===0 ){
        console.log(i);
}};

/*  3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
    3a.For every even number in your loop, log "...human...why you taking pictures of
    me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
*/ 
let catcPhrases = ["...human...why you taking pictures of me?...","...the catnip made me do it...", "...why does the red dot always get away..."]; 

let meow = 0;
for(let i = 1; i < 21; i++){
    if(i %2 ===0){

        meow = Math.floor(Math.random() * 3);
        console.log(catcPhrases[meow]);
    } 
    else {
        console.log(i);
    }

}; 

// 4. Write a javascript application that logs all numbers from 1 - 100 AND:
/* 4a. If a number is divisible by 3 log "Fizz" instead of the number.
   4b. If a number is divisible by 5 log "Buzz" instead of the number. */

for(let i = 1; i< 101; i++){
    if (i % 3=== 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }
    else if (i % 3===0){
        console.log('Fizz');
    }
    else if (i % 5 ===0){
        console.log('Buzz');
    }
    else{
        console.log(i); 
    }
    
}; 