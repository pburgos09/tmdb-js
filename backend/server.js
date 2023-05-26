const express = require("express");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const routes = require("./routes");
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(volleyball);

app.use("/api", routes);

app.use((error, req, res, next) => {
  res.sendStatus(error.status || 500);
  res.send({
    message: error.message,
  });
});

(async () => {
  try {
    await db.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Unable to conect: ${error.message}`);
  }
})();
