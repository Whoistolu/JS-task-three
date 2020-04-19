//an array to contain numbers from 1 to specified range,the arguement inclussive
let integerCal=[];
let integerRange;
//function to insert numbers from 1 to a given number specified as a parameter
const printArrayOfNumbers=(num)=>{
    for (integerRange=1; integerRange<=num; integerRange++){
        integerCal.push(integerRange);      
    }
}
//calling the function to print array of numbers from 1 to 20
printArrayOfNumbers(20);

//strings to replace elements in the array based on given conditions
let yu="yu", gi="gi", oh="oh";

let integerArray=integerCal.map(i=>{
    if(i%2==0 && i%3==0) {
        return (yu + "-" + gi);
    }
    else if(i%2==0 && i%5==0) {
        return (yu + "-" + oh);
    }
    else if(i%3==0 && i%5==0) {
        return (gi + "-" + oh);
    }
    else if(i%2==0) {
        return yu; 
    }
    else if (i%3==0) {
        return gi;
    }
    else if(i%5==0) {
        return oh;
    } else {
       return i;
   }
});

//console.log the integerArray
console.log(integerArray);