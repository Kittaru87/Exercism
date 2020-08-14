//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { strict } from "assert";

const RAIN = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
};

export const convert = (n) => {
  let rain = "";

  for (const [key, value] of Object.entries(RAIN)) {
    if (n % key === 0) {
      rain += value;
    }
  }

  return rain || n.toString();
};
