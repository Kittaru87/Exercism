//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  
  const COLOR_ARRAY = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  
  return Number(array.slice(0, 2).map(color => COLOR_ARRAY.indexOf(color)).join(""))
  
};
