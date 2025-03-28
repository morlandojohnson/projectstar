import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
