SOUNDS = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
}

def convert(number):
  

  rain = ""

  for (key, value) in SOUNDS.items():
    if number % key == 0:
      rain += value

  return rain or str(number)
