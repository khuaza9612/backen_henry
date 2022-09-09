const { Review } = require("../models/Review.js");
const Product = require("../models/Product.js");
const User = require("../models/User.js");


const postReview = async (req, res) => {
    try {
      const { rating, comment, userId, productId } = req.body;
      const parsedScore = parseInt(rating);
      const product = await Product.findByPk(id);
      // const user = await User.findByPk(id)
  
      if (!parsedScore  || parsedScore < 1 || parsedScore > 5)
        return res
          .status(500)
          .send({ Error: "El puntaje debe ser un número del 1 al 5." });
  
        if(product) {
            const rate = await Review.create({
              rating: parsedScore,
              comment,
              userId,
              productId
            });
            await rate.save();
        } else res
        .status(400)
        .send({ Error: "No hay un usuario o producto asosciado" });
  
      res.status(200).send(rate);
    } catch (error) {
      res.status(404).send(error);
    };
};


module.exports = { postReview };