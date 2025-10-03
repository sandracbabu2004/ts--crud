import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import type {Application} from 'express';

const options:swaggerJSDoc.Options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Patient CRUD API',
            version:'1.0.0',
            description:'API documentation for patient CRUD operations',
        },
        servers:[
            {
                url:'http://localhost:4000',
                
            },
        ],
    },
    apis:['./src/routes/*.ts',],

};
// const specs=swaggerJSDoc(options);
const swaggerSpec = swaggerJSDoc(options);
export const setupSwagger =(app:Application)=>{
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
};