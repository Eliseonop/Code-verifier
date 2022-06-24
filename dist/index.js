"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configure dotenv
dotenv_1.default.config();
//Create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Configure express app
app.use(express_1.default.json());
// configure routes
app.get('/', (req, res) => {
    res.send('Hello World amigos!');
});
app.get('/hello', (req, res) => {
    res.send('soy la ruta hello!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map