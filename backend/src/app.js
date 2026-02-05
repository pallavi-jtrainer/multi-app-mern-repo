const express = require("express");
const app = express();
const cors = require("cors");

const appResolver = require("./middleware/appResolver");

//cors config
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type", "Authorization", "X-APP-ID"
    ]
}));

app.use(express.json());
app.use(appResolver);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/admin/users", require("./routes/adminUserRoutes"));

module.exports = app;
