import Fruits from "../model/fruits.js";

// @desc    Get all fruits
// @route   GET /api/fruits

const getFruits = async (req, res) => {
  try {
    var fruits = await Fruits.find();
    //console.log(fruits)

    return res.json({
      fruits,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Get fruit by ID
// @route   GET /api/fruit/:id

const getFruit = async (req, res) => {
  try {
    var objectId = req.params._id;
    var fruit = await Fruits.findOne({
      _id: objectId,
    });
    if (fruit) {
      return res.json(fruit);
    } else {
      return res.json({
        message: `No fruit with the ${objectId} ID is present in the database`,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Create new fruit
// @route   POST /api/fruit

const postFruit = async (req, res) => {
  try {
    var name = req.body.name;
    if (name) {
      var fruit = new Fruits({
        name: name,
      });
      fruit.save();
      return res.json({ message: `Added ${name} to the DB` });
    } else {
      return res.json({ message: "Enter the name of the fruit in the body" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Update fruit
// @route   PUT /api/fruit/:id

const putFruit = async (req, res) => {
  try {
    var objectId = req.params._id;
    var name = req.body.name;
    if (objectId && name) {
      await Fruits.findByIdAndUpdate(
        {
          _id: objectId,
        },
        req.body
      );
      return res.json({
        status: "Successully updated",
      });
    } else {
      res.json({ message: "Check your inputs!!" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Delete fruit
// @route   DELETE /api/fruit/:id

const deleteFruit = async (req, res) => {
  try {
    var objectId = req.params._id;
    if (
      await Fruits.findOne({
        _id: objectId,
      })
    ) {
      await Fruits.findByIdAndDelete({
        _id: objectId,
      });
      return res.json({
        status: "Successfully deleted",
      });
    } else {
      return res.json({
        message: `No fruit with ${objectId} ID exists in the database`,
      });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export { getFruits, getFruit, postFruit, putFruit, deleteFruit };
