//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
