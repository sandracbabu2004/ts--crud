import mysql  from 'mysql2';
import type {Connection} from 'mysql2'
export const db:Connection =mysql.createConnection({
    host:'localhost',
    user:'root',
password:'',
database:'testdb',
port:3306
});
// db.connect((err)=>{
//     if (err)throw err;
//     console.log('Connected to MySQL database');
// });