const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
// console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
//   }`
// );

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood);
const ownersEatTooLittle = dogs.filter(
  dog => dog.curFood < dog.recommendedFood
);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch[0].owners.join(' and ')}'s dogs eat too much!`);
console.log(
  `${ownersEatTooLittle[0].owners.join(' and ')}'s dogs eat too little!`
);
