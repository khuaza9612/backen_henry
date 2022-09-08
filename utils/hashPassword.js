const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  return password;
};

const comparePassword = async (comparePassword, userPassword) => {
  return await bcrypt.compare(comparePassword, userPassword);
};

module.exports = { hashPassword, comparePassword };
