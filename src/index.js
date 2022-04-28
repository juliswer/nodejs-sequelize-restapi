import app from "./app.js";
import {config} from 'dotenv'
config()

const PORT = process.env.PORT

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
