// 1333. Filter Restaurants by Veg-Friendly, Price and Distance.
/*
 * Array
 * Sorting
 */

function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  const output = restaurants.filter(
    (restaurant) =>
      (veganFriendly === 0 || restaurant[2] === veganFriendly) &&
      restaurant[3] <= maxPrice &&
      restaurant[4] <= maxDistance
  );

  output.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return b[0] - a[0];
  });

  return output.map((r) => r[0]);
}

const restaurants = [
  [1, 4, 1, 40, 10],
  [2, 8, 0, 50, 5],
  [3, 8, 1, 30, 4],
  [4, 10, 0, 10, 3],
  [5, 1, 1, 15, 1]
];

console.log(filterRestaurants(restaurants, 1, 50, 10));
