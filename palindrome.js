/*
kayak +
Madam, I’m Adam +
Mr. Owl ate my metal worm. +
*/

const strings = [
  "kayak",
  "Madam, I’m Adam",
  "Mr. Owl ate my metal worm",
];

function findPalindrome(arr){
  arr.forEach((item) => {
    const regExpTemplate = /[a-zA-Z]+/g;
    let original = item.match(regExpTemplate).join('').toLocaleLowerCase()
    let reversed = [...original].reverse().join('')
    console.log((original == reversed) ? true : false)
  });
}

findPalindrome(strings);