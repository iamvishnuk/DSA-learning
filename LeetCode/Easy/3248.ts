// 3248. Snake in Matrix
/*
 * Array
 * String
 * Simulation
 */

function finalPositionOfSnake(n: number, commands: string[]): number {
  let row: number = 0;
  let col: number = 0;

  for (let command of commands) {
    if (command === 'RIGHT') {
      col++;
    } else if (command === 'LEFT') {
      col--;
    } else if (command === 'DOWN') {
      row++;
    } else if (command === 'UP') {
      row--;
    }
  }

  return n * row + col;
}

console.log(finalPositionOfSnake(2, ['RIGHT', 'DOWN']));
console.log(finalPositionOfSnake(3, ['DOWN', 'RIGHT', 'UP']));
