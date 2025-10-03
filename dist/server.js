import express from 'express';
import patientsRoutes from './routes/patientsRoutes.js';
import { setupSwagger } from './swagger.js';
const app = express();
app.use(express.json());
const PORT = 4000;
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    console.log('Body:', req.body);
    next();
});
app.use('/api/patients', patientsRoutes);
setupSwagger(app);
app.get("/", (req, res) => {
    res.send("Hello TS + Express");
});
app.listen(4000, () => {
    console.log(`server running on http://localhost:4000`);
    const newLocal = `swagger docs available at http://localhost:4000/api-docs`;
    console.log(newLocal);
});
//# sourceMappingURL=server.js.map