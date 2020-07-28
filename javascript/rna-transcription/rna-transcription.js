export const toRna = (letter) => {
  const RNA = {
    C: "G",
    G: "C",
    T: "A",
    A: "U",
  };

  const rnaArray = letter.split("").map((char) => RNA[char]);

  return rnaArray.join("");
};
