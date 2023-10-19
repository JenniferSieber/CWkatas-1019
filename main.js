// www.codewars.com
// KATA 1 7kyu
const XO  = str => {
  let xCt = 0
  let oCt = 0
  const strArr = str.toLowerCase().split('')
  strArr.forEach(letter => {
    if (letter === 'x') {
      xCt++
    } 
    if (letter === 'o') {
      oCt++
    }
  })
  return (xCt === oCt || xCt === 0 && oCt === 0) ? true : false; 
}

console.log(XO('xxZoo'));
console.log(XO('ooXxZ'));
console.log(XO('oXxxZ'));
console.log(XO('oOOXxx'));

// KATA 2 7kyu
const oddOrEven = arr => arr.reduce((ttl, cv )=> ttl + cv, 0 ) % 2 === 0 ? 'even' : 'odd';


console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));

// KATA 3 6kyu
const persistence = num => {
  let count = 0;
   num = num.toString();
   while (num.length > 1) {
     count++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));



//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript