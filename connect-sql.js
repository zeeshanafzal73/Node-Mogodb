const mySql = require('mysql')

const connection = mySql.createConnection({
  host: 'localhost',
  user: "user-name",
  password: "password",
  database: 'db name'
})

connection.connect(err => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`)
});
module.exports=connection;