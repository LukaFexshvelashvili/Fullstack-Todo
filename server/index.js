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
  // db.query(sql, [req.body.name, req.body.description], (error, results) => {
  //   if (error) {
  //     return res.send(`Error making todo : ${error}`);
  //   } else {
  //     return res.send(`Data inserted !`);
  //   }
  //   db.end();
  // });
});

app.get("/todos", (req, res) => {
  // var sql = "SELECT * FROM todos";
  // db.query(sql, (error, results) => {
  //   if (error) {
  //     return res.send(`Error making todo : ${error}`);
  //   } else {
  //     return res.json(results);
  //   }
  //   db.end();
  // });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
