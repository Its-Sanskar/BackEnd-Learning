import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`app is running on port${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log("MONGOBD CONNECTION FALILD !!!", error);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
