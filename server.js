const next = require("next");
const express = require("express");
const mongoose = require("mongoose");
// const cookieSession = require("cookie-session");

const keys = require("./api/config/keys");
const dev = process.env.NODE_ENV !== "production";

//==== IMPORT MODELS ====
require("./api/models/User");

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());

    mongoose.connect(keys.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    // ---- PASSPORT SETUP ----
    // server.use(
    //   cookieSession({
    //     maxAge: 30 * 24 * 60 * 60 * 1000,
    //     keys: [keys.cookieKey],
    //   })
    // );

    //==== PASSPORT ====
    // require("./api/services/passport");

    // server.use(passport.initialize());
    // server.use(passport.session());

    //==== ROUTES ====
    // require("./api/routes/authRoutes")(server);
    
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("server ready!!");
    });
  })
  .catch((er) => {
    console.error(er.stack);
    process.exit(1);
  });
