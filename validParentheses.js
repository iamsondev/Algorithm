import { Stack } from "./stack.js";

const bracketChecker = (str) => {
  const stack = new Stack();

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }
      const expected = bracketMap[char];
      const got = stack.pop();
      console.log("Expected:", expected, "Got:", got);
      if (got != expected) {
        return false;
      }
    }
  }

  return stack.isEmpty();
};

console.log(bracketChecker("({[]})"));
