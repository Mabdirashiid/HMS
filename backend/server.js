"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_js_1 = __importDefault(require("./config/db.js"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
dotenv_1.default.config();
(0, db_js_1.default)();
const app = (0, express_1.default)();
// ✅ CORS setup for credentials
app.use((0, cors_1.default)({
    origin: 'http://localhost:5174',
    credentials: true,
}));
app.use(express_1.default.json());
// ✅ Route registration
app.use('/api/users', userRoutes_js_1.default);
app.use('/api/auth', auth_js_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
