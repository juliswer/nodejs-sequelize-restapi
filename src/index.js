import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";
import "./models/Project.js";
import "./models/Task.js";

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
