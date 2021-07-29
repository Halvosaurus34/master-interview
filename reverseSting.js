function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Uh Oh!");
    return "Uh Oh!";
  }
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

reverseString("1");
