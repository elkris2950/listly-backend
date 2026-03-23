require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use("/billing/webhook", express.raw({ type: "application/json" }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, time: new Date() }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Listly running on port ${PORT}`));