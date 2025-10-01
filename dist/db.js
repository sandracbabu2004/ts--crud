import mysql from 'mysql2';
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
    port: 3306
});
// db.connect((err)=>{
//     if (err)throw err;
//     console.log('Connected to MySQL database');
// });
//# sourceMappingURL=db.js.map