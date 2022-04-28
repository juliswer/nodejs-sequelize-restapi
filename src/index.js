import app from "./app.js";
import { sequelize } from "./database/database.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
