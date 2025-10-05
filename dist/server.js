import express from 'express';
import patientsRoutes from './routes/patientsRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import { setupSwagger } from './swagger.js';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    console.log('Body:', req.body);
    next();
});
setupSwagger(app);
app.use('/api/patients', patientsRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello TS + Express");
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
    console.log(`swagger docs available at http://localhost:${PORT}/api-docs`);
});
//# sourceMappingURL=server.js.map