import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import fruits from "./data/fruits.js";
import Fruit from "./model/fruits.js";

import connectDB from "./config/config.js";

dotenv.config();

connectDB();

const shiramwo = async () => {
  try {
    await Fruit.deleteMany();

    await Fruit.insertMany(fruits);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const futa = async () => {
  try {
    await Fruit.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  futa();
} else {
  shiramwo();
}
