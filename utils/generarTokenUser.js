const generarTokenID = () => {
    const randomNum = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
  
    return randomNum + date;
  };
  
  module.exports = generarTokenID;
  