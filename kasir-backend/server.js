const express = require(`express`);
const cors = require(`cors`);

require("dotenv").config();

const cookieParser = require(`cookie-parser`);
const middleware = require("./middleware/verify");

const app = express();
const PORT = process.env.APP_PORT;
app.use(cors());
app.use(cookieParser());

const userRoute = require(`./routes/user.route`);
const mejaRoute = require("./routes/meja.route");
const menuRoute = require("./routes/menu.route");
const authRoute = require("./routes/auth.route");

app.use(`/auth`, authRoute);
app.use(middleware.verifyAuth);
app.use(`/user`, userRoute);
app.use(`/meja`, mejaRoute);
app.use(`/menu`, menuRoute);

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server kasir app running on port
    ${PORT}`);
});
