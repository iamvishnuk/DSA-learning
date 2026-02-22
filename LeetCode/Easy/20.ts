// 20. Valid Parentheses
/*
 * String
 * Stack
*/

function isValid(s: string): boolean {
  const stack: string[] = []

  for (let char of s) {

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (
        !stack.length ||
        (char === ')' && stack[stack.length - 1] !== '(') ||
        (char === '}' && stack[stack.length - 1] !== '{') ||
        (char === ']' && stack[stack.length - 1] !== '[')
      ) {
        return false
      }

      stack.pop()
    }

  }

  return !stack.length

};
