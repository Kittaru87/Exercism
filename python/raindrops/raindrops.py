def convert(number):
  rain = []
  
  if number % 3 == 0:
    rain.append("Pling")
  if number % 5 == 0:
    rain.append("Plang")
  if number % 7 == 0:
    rain.append("Plong")
  if len(rain) == 0:
    rain.append(str(number))

  return ''.join(rain)