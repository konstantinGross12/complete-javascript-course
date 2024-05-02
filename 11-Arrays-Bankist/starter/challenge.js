const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  const dogs = [...dogsJuliaCopy, ...dogsKate];
  dogs.forEach((dog, i) => {
    const message =
      dog >= 3
        ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(message);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
