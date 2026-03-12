// 1678. Goal Parser Interpretation
/*
 * String
 */

function interpret(command: string): string {
  let ans: string = '';

  for (let i = 0; i < command.length; i++) {
    if (command[i] === '(' && command[i + 1] === ')') {
      ans += 'o';
    } else if (command[i] !== '(' && command[i] !== ')') {
      ans += command[i];
    }
  }

  return ans;
}
