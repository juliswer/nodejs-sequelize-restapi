import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";

// ? Starting the app

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
