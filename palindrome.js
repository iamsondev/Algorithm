const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join();

  if (reversed === normalized) {
    return true;
  }
  return false;
};

// console.log(isPalindrome("LeveL"));

//  two pointer palindrome
const isPalindromeTwoPointer = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;
  while (left < right) {
    if (normalized[left] != normalized[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));
