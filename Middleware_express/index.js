// Kita akan mempelajari

// Aplication-level Middleware
// Router-level Middleware
// Built-in Middleware
// Third-party Middleware
// Error-handling Middleware

const express = require("express");
const router = express.Router();

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Const logger

// This is for aplication-level middleware

const LoggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- Request [${req.method}] [${req.url}] `);
  next();
};

app.use(LoggerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Router-level Middleware
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
  const authStatus = true; // Simulasi status autentikasi
  if (authStatus) {
    next();
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};

const getUsers = (req, res) => {
  res.send({ message: "Get all users" });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.send({ message: "Create new user" });
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  try {
    console.error(err.stack);
    res.status(500).send({ message: "Something broke!" });
  } catch (error) {
    next(error);
  }
};
