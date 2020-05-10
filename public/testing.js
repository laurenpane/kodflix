function doStuff(list) {
  return list
    .split("o")
    .map((item) => item.toUpperCase())
    .join('e');
}

console.log(doStuff("hello everyone"));
