require('dotenv').config();

module.exports = () => {
  return {
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      MONGODB_URI: process.env.MONGODB_URI,
      DB_NAME: process.env.DB_NAME,
    },
  };
};
