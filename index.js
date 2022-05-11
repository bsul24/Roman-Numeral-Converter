function convertToRoman(num) {
    let key = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    let roman = "";
    while (num > 0) {
      for (let i = 0; i < key.length; i++) {
        if (num >= key[i][0]) {
          roman += key[i][1];
          num -= key[i][0];
          break;
        }
      }
    }
   return roman;
  }