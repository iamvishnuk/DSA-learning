// 2126. Destroying Asteroids
/*
 * Array
 * Greedy
 * Sorting
 */

function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids.sort((a, b) => a - b);
  let currentMass: number = mass;

  for (const asteroid of asteroids) {
    if (currentMass < asteroid) {
      return false;
    }
    currentMass += asteroid;
  }

  return true;
}
