import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp",
});

app.post("/server", (req, res) => {
  // var sql = "INSERT INTO todos (name, description) VALUES (?, ?)";
  // db.query(sql, [req.body.name, req.body.description], (error) => {
  //   db.end();
  //   if (error) {
  //     return res.send(`Error making todo : ${error}`);
  //   } else {
  //     return res.send(`Data inserted !`);
  //   }
  // });
});

app.post("/addTask", (req, res) => {
  var schedule =
    req.body.year +
    "-" +
    (req.body.month <= 9 ? "0" + req.body.month : req.body.month) +
    "-" +
    (req.body.day <= 9 ? "0" + req.body.day : req.body.day);
  var sql =
    "INSERT INTO todos (name, description, category, schedule, status) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [req.body.title, req.body.description, req.body.category, schedule, 1, sql],
    (error) => {
      if (error) {
        return res.send(error);
      } else {
        return res.send(`Data inserted !`);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
