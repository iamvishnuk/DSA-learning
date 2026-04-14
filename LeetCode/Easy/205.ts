// 205. Isomorphic Strings
/*
 * Hash Table
 * String
 */

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) map1.set(s[i], i);
    if (!map2.has(t[i])) map2.set(t[i], i);

    if (map1.get(s[i]) !== map2.get(t[i])) return false;
  }

  return true;
}
