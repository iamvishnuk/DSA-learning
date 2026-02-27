// 1700. Number of Students Unable to Eat Lunch
/*
 * Array
 * Stack
 * Queue
 * Simulation
 */

function countStudents(students: number[], sandwiches: number[]): number {
  let rotation: number = 0;

  while (students.length > 0 && rotation < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      rotation = 0;
    } else {
      students.push(students.shift()!);
      rotation++;
    }
  }

  return students.length;
}
