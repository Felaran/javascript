var x1 = 5; 
console.log( x1++ );  //Ответ 5

var y1 = [ ] + false - null + true;
console.log(y1);      // Ответ NaN

var z = 1; let x = z = 2;
console.log(x);       // Answer is 2

var a = [ ] + 1 + 2;
console.log(a);     // Answer is 12

console.log( "1"[0] );  // Answer is 1

console.log(2 && 1 && null && 0 && undefined);  // Answer is null

console.log( null || 2 && 3 || 4 );  // Answer is 3

console.log( +"Infinity" );   // Answer is infinity

console.log(0 || "" || 2 || undefined || true || falsе);