export const resultsTableItems = [
  [ 1, 'Time'],
  [ 2, 'Summary'],
  [ 3, 'Icon'],
  [ 4, 'Nearest Storm Distance'],
  [ 5, 'Precip Intensity'],
  [ 6, 'Precip Intensity Error'],
  [ 7, 'Precip Probability'],
  [ 8, 'Precip Type'],
  [ 9, 'Temperature'],
  [ 10, 'Apparent Temperature'],
  [ 11, 'Dew Point'],
  [ 12, 'Humidity'],
  [ 13, 'Pressure'],
  [ 14, 'Wind Speed'],
];

export const invalidData = [
  ['invalid address', 'HD4 6LB', 435, 'Invalid Address'],
  ['invalid format', 'shaunswales', 435, 'Invalid Address'],
  ['valid postcode, invalid format', 'W6ONW', 435, 'Invalid Address'],
  [
    'unable to find address',
    'F6 6ZZ',
    433,
    'Problem with Geocode API: Unable to find that address.',
  ],
  [
    'unable to find address, invalid format',
    'B999AA',
    433,
    'Problem with Geocode API: Unable to find that address.',
  ],
];

export const validData = [
  ['lowercase postcode', 'w6 0nw', 200],
  ['UPPERCASE postcode', 'W6 0NW', 200],
];
