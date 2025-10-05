import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
        },
        components: {},
    }
};
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Patient CRUD API',
            version: '1.0.0',
            description: 'API documentation for patient CRUD operations',
        },
        servers: [
            {
                url: 'http://localhost:4000',
            },
        ],
        components: {
            schemas: {
                Patient: {
                    type: "object",
                    required: ["name", "age", "medicines", "address"],
                    properties: {
                        name: {
                            type: "string",
                            description: "Patient's name",
                        },
                        age: {
                            type: "integer",
                            description: "Patient's age",
                        },
                        medicines: {
                            type: "string",
                            description: "Patient's medicines",
                        },
                        address: {
                            type: "string",
                            description: "Patient's address"
                        },
                    },
                },
                User: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: {
                            type: 'string',
                            description: "User's name",
                        },
                        email: {
                            type: 'string',
                            description: "User's email address",
                        },
                        password: {
                            type: 'string',
                            description: "User's password (will be hashed in DB)",
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Date and time of user creation',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/**/*.{js,ts}'],
};
const swaggerSpec = swaggerJSDoc(options);
export const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
//# sourceMappingURL=swagger.js.map