//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(strand) {

    if (strand.search(/[BDEFHIJKLMNOPQRSUVWXYZ]/) !== -1){
      throw 'Invalid nucleotide in strand'
    }
 
    let A = (strand.match(/A/g)  || []).length
    let C = (strand.match(/C/g)  || []).length
    let G = (strand.match(/G/g)  || []).length
    let T = (strand.match(/T/g)  || []).length

    return `${A} ${C} ${G} ${T}`

  }
}
