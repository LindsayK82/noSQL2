const thoughts = [
    'The Winds of Winter is forthcoming!',
    'Will Jon Snow be alive?',
    'Maybe Daenerys will sail!',
];

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThought = () =>
  `${getRandomArrItem(thoughts)} ${getRandomArrItem(thoughts)}`;

module.exports = { getRandomThought };
