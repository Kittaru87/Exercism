//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (letter) => {
  
  const RNA = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  }
  
  let rnaArray = []

  let splitLetters = letter.split("")

  splitLetters.map(function(char){
    if (Object.keys(RNA).includes(char)) {
      rnaArray.push(RNA[char])
    }
    return ''
    }
  )

  return rnaArray.join("")
};
