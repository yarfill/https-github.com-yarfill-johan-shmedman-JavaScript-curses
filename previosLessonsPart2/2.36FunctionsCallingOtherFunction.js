const cutFruitPieces = function (fruit) { 
  return fruit * 4; // because we have on second function apple-2 and oranges-3 (became from fruitProcessor) we need to multiply by * 4.
}

// const cutFruitPieces = function (mystery){
// return mystery + 2;
// }

function fruitProcessor(apples, oranges) { //Inside, it calls cutFruitPieces(apples) and cutFruitPieces(oranges) to calculate the pieces of each fruit.
  const applePieces = cutFruitPieces(apples); //cutFruitPieces(2) → returns 8 (2 × 4); 
  const orangePieces = cutFruitPieces(oranges); //cutFruitPieces(3) → returns 12 (3 × 4);

  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} oranges pieces.`;
  return juice; // KEYWORD used in functions to specify the value. 
 }

 console.log(fruitProcessor(2, 3));// The function is called with 2 apples and 3 oranges as arguments.