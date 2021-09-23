function swapCase(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
      result += str[i].toLowerCase();
    } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// "Luke, I Am Your Father"  --> "lUKE, i aM yOUR fATHER"

console.log(swapCase("Luke, I Am Your Father"));
