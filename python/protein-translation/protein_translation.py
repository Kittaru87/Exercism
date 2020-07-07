import textwrap

def proteins(strand):
  
  PROTEINS = {
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "AUG": "Methionine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan"
  }

  translation = []

  divided_strand = [strand[start:start+3] for start in range(0, len(strand), 3)]

  for s in divided_strand:
    try:
      if PROTEINS[s]:
        translation.append(PROTEINS[s])
    except KeyError:
      return translation

  return translation
  