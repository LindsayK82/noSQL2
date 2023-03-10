const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./thought');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    const users = [];
  
    for (let i = 0; i < 20; i++) {
      const thoughts = getRandomThoughts(10);

      const fullName = getRandomName();
      const first = fullName.split(' ')[0];
      const last = fullName.split(' ')[1];
  
      users.push({
        first,
        last,
        age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
        thoughts,
      });
    }
  
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

});


console.info('Seeding complete! 🌱');
process.exit(0);

