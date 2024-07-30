import mysql2 from 'mysql2/promise';
let pool;

try {
    pool = mysql2.createPool({
        host: 'b9didq1lt0irkujv5o9w-mysql.services.clever-cloud.com',
        user: 'ur1waygynondsbx1',
        database: 'b9didq1lt0irkujv5o9w',
        port: 3306,
        password: 'GewWC9o4hZLyFVpIAMTu',
      })

    console.log('data base conected');
} catch (err) {
    console.log(err);
}

export { pool };