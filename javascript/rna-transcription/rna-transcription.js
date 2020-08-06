const RNA = {
  C: "G",
  G: "C",
  T: "A",
  A: "U",
};

export const toRna = (letter) => {

  const dnaArray = letter.split("")
  const rnaArray = dnaArray.map((char) => RNA[char]);
  const rnaStrand = rnaArray.join("");
  
  return rnaStrand
};
