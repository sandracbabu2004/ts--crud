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
        components:{
            schemas:{
                Patient:{
                    type:"object",
                    required:["name","age","medicines","address"],
                    properties:{
                        name:{
                            type:"string",
                            description:"Patient's name",
                        },
                        age:{
                            type:"integer",
                            description:"Patient's age",
                        },
                        medicines:{
                            type:"string",
                            description:"Patient's medicines",
                        },
                        address:{
                            type:"string",
                            description:"Patient's address"
                        },
                    },
                },
            },
        },
    },
    apis:['./dist/**/*.js'],

};

const swaggerSpec = swaggerJSDoc(options);
export const setupSwagger =(app:Application)=>{
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
};