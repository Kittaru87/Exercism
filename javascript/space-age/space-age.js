const ORBIT_IN_EARTH_YEARS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_YEAR_IN_SECONDS = 315576 * Math.pow(10, 2);

const roundNumber = (number) => {
  return Math.round(number * 100) / 100
} 

export const age = (planet, ageInSeconds) => {
  const earthSeconds = ageInSeconds / EARTH_YEAR_IN_SECONDS;

  const earthAge = roundNumber(earthSeconds / ORBIT_IN_EARTH_YEARS[planet]);

  return earthAge;
};
