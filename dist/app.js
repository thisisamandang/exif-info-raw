"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exifRoutes_1 = __importDefault(require("./routes/exifRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", exifRoutes_1.default);
const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb://localhost:27017/filterpixel";
mongoose_1.default
    .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("DB Connection Sucessful");
})
    .catch((err) => {
    console.log(err.message);
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
