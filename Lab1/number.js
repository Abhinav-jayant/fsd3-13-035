// const numberToWord = (num) => {
//     if (num === 0) return "Zero";
//     else if (num === 1) return "One";
//     else if (num === 2) return "Two";
//     else if (num === 3) return "Three";
//     else if (num === 4) return "Four";
//     else if (num === 5) return "Five";
//     else if (num === 6) return "Six";
//     else if (num === 7) return "Seven";
//     else if (num === 8) return "Eight";
//     else if (num === 9) return "Nine";
//     else return "Invalid Number";
// };


// console.log(numberToWord(4));
// console.log(numberToWord(9)); 

const toWords = (digit) => {
    switch (digit) {
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        case 0:
            return "Zero";
    }
};




const rollNum = "2503201000035";
const digits = String(rollNum).split("");
console.log(digits);
let inWords="";
digits.forEach((d)=>{
    inWords += " " + toWords(Number(d));
   
});
 console.log(inWords);
