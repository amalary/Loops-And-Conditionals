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
   4b. If a number is divisible by 5 log "Buzz" instead of the number.
   4c. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz". */

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

//  5 Getting to Know You

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"]; 

// 5a
let kennyArray =kenny.splice(0,1,"Gameboy"); 

console.log(kenny); 
// 5b
let jimClark2 = jimClark.splice(1,1,187); 

console.log(jimClark); 
// 5c
let ryanArray = ryan.splice(2,1,"Gotham City"); 

console.log(ryan); 

// 5d

let reubens = reuben.pop(); 

let reubansHome = reuben.push('Chicago'); 

console.log(reuben); 

// 5e 

let jimHaffCity = jimHaff.splice(2,1,"Los Angeles","Dallas","New York City"); 

let jimHaffRemovedCity = jimHaff.splice(2,1); 

console.log(jimHaff);
// 6 

let TMNT = ['Donatello', 'Leonardo', ' Raphael', 'Michaelangelo']; 

for(let i = 0; i < 4; i++){
    console.log(TMNT[i].toLocaleUpperCase()); 
}