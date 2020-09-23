const PLANETS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const SECS_IN_YEAR = 31557600

const twoDecimalPlaces = (number) => {
  return Math.round(number * 100) / 100
}

export const age = (planet, seconds) => {
  const earthSeconds = seconds / SECS_IN_YEAR;

  const earthAge = twoDecimalPlaces(earthSeconds / PLANETS[planet]);

  return Number(earthAge);
};
