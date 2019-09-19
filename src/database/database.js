const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "than",
  database: "myDB"
});
app.use(cors());

// add new user
app.get('/adduser', (req, res) => {
  const {name} = req.query;
  var sql = "INSERT INTO Users (uname) VALUES ('" + name + "');";
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    else {
      console.log(results);
      return res.json({data: results});
    }
  });
});

// get just inserted user
app.get('/getuser', (req, res) => {
  const {name} = req.query;
  var sql = "SELECT MAX(uid) FROM Users WHERE uname = '" + name + "';";
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    else {
      console.log(results);
      return res.json({data: results});
    }
  });
});

// add exercise
app.get('/addexercise', (req, res) => {
  console.log(req.query)
  const {userId, ename, mins, cals, sets, reps, visitdate} = req.query;
  var sql = "INSERT INTO Exercise (euid, ename, mins, cals, sets, reps, edate) VALUES (" + userId + ", '" + ename + "', " 
  + mins + ", " + cals + ", " + sets + ", " + reps + ", '" + visitdate + "');";
  console.log(sql)
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    else {
      console.log(results);
      return res.json({data: results});
    }
  });
})

// get user gym history
app.get('/usergymhistory', (req, res) => {
  const {userID} = req.query;
  var sql = "SELECT * FROM Exercise WHERE Exercise.euid = " + userID + ";";
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    else {
      console.log(results);
      return res.json({data: results});
    }
  })
})

app.listen(4000, () => {
  console.log("listening on port 4000")
});

