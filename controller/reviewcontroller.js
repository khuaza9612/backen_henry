const { Review, Product } = require("../db");


const postReview = async (req, res) => {
  try {
    
    const { rating, comment,  userId } = req.body;
    const parsedScore = parseInt(rating);
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!parsedScore  || parsedScore < 1 || parsedScore > 5)
    return res
    .status(500)
    .send({ Error: "El puntaje debe ser un número del 1 al 5." });

    const user = await Review.findAll({
      where: { userId: userId, productId: req.params.id },
    });

    if (user.length > 0)
      return res
        .status(400)
        .send({ Error: "El Usuario ya realizo una Reseña" });
    
    const newRate = await Review.create({
      rating,
      comment,
      productId: product.dataValues.id,
      userId
    });

    res.status(200).send('created')
  } catch (error) {
    res.status(404).send(error);
  };
};

  const getReview=async(req,res)=>{
    const user = await Review.findAll();
    res.json(user);
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findAll({
      where: { productId: id },
    });
    if (!id || !review) return res.status(400).json({ msg: "No reviews found" });
    return res.status(200).json(review);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { postReview,getReview,getReviewById };