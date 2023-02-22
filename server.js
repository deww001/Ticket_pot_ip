
require('dotenv').config();
const mysql = require('mysql2');
const {APP_PORT,MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_HOSTNAME,MYSQL_PORT,MYSQL_DB} = process.env;

const dbConnectionString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`
const db = mysql.createConnection(dbConnectionString);
/*
const connection =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'BuKeMod',
    database: 'dataip',
    port: '3306'
})
*/
db.connect((err) => {
    if (err) {
        console.log('Error connectting to my sql db = ', err)
        return;
    }
    console.log('mysql success connect!');
})

const connection = db;
module.exports = connection;
//ใส่ฐานข้อมูลในไฟล env...