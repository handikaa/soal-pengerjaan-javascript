/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(string) {
  const permutations = [];
  const seen = {};
  function permute(string, left, right) {
    if (left == right) {
      if (seen[string] !== true) {
        seen[string] = true;
        permutations.push(string);
      }
    } else {
      for (let i = left; i <= right; i++) {
        string = swap(string, left, i);
        permute(string, left + 1, right);
        string = swap(string, left, i);
      }
    }
  }
  function swap(a, i, j) {
    const charArray = a.split("");
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  }
  permute(string, 0, string.length - 1);
  return permutations;
}

// TEST CASE
console.log(cariKataKombinasi("abc"));
console.log(cariKataKombinasi("zzz"));
console.log(cariKataKombinasi("wow"));
console.log(cariKataKombinasi("cool"));
