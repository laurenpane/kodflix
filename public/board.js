//Intermediate
function filter(fruits) {
  return fruits.filter((fruit) => fruit == fruit.split("").reverse().join(""))
    .length;
}

console.log(filter(["apple", "hannah", "apple", "banana"]));
