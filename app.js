/* 

Filter out all the 'FAIL' elements in an array

*/



/*let arr = [ 1, 5, 10, 3]



let newArray = arr.map((dollars) => dollars * 100)

console.log (newArray);

*/

let dollars = [ 0, 10, 20]

let cents = [];

for (let i = 0; i < dollars.length; ++i) {
    cents.push (dollars[i] * 100)
    
}
    
    console.log (cents)
    