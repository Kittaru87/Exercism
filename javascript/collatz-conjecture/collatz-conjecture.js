//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (Math.sign(n) !== 1) throw Error("Only positive numbers are allowed")
  if (n === 1) return 0

  let steps = 0
  while (n > 1) {
    (n % 2 === 0) ? n = (n / 2) : n = (3 * n) + 1
    steps ++
  }
  return steps
}