require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./config/database");

const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");
const searchRouter = require("./routes/search.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Middleware for handling CORS POLICY
// Option 1: Default Configuration for CORS (Allow All Origins with Default of cors(*))
// {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }

// Option 2: Allow Custom Origins
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

// app.use(path, handler)

app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);
app.use("/api/search", searchRouter);

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
