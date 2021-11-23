export default function arrayShuffle<T>(array: T[]): T[]  {
  let index = array.length;
  let temp;
  let swap;
  
  // While there remain elements to shuffle…
  while (index) {

    // Pick a remaining element…
    swap = Math.floor(Math.random() * index--);

    // And swap it with the current element.
    temp = array[index];
    array[index] = array[swap];
    array[swap] = temp;
  }

  return array;
}
