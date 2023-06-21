const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const db = require("./models");
const studentRoute = require('./routes/student.routes');
const authRoute = require("./routes/auth.routes");
const paymentRoute = require("./routes/payment.routes");

var corsOptions = {
    origin: "http://localhost:3000"
};

var options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Student API",
};

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());


db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to node application." });
});
// app.get("/", (req, res) => res.render("home"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

app.use("/api/auth",authRoute);
app.use('/api/students',studentRoute);
app.use("/api/payment",paymentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});