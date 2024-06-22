function reverse(str) {
  return str
    .split(" ")
    .map((word, index) =>
      index % 2 !== 0 ? word.split("").reverse("").join("") : word
    )
    .join("")
    .trim();
}
console.log(reverse("Reverse this string, please!"));
