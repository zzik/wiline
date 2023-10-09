import express, { Request, Response, request } from "express";
import { User } from "./interface";
import { database } from "./db";
import cors from "cors";

const app = express();
const PORT = 5500;
app.use(cors());
app.use(express.json());

// fetch all users
app.get("/users", (req: Request, res: Response) => {
  let thisQuery = "SELECT * from user";
  console.log(req.query);
  database.query(thisQuery, (err: Error, result: User[]) => {
    if (err) {
      console.error(err);
    }
    res.send(result);
  });
});

// create user
app.post("/users", (req, res) => {
  const _id = req.body._id;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  database.query("INSERT INTO user (_id, email, phoneNumber, firstName, lastName) VALUES (?,?,?,?,?)",
    [_id, email, phoneNumber, firstName, lastName],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      return { _id, email, phoneNumber, firstName, lastName };
    }
  );
});

// get user with id
app.get("/users/:_id", (req, res) => {
  const _id = req.params._id;
  database.query("SELECT * FROM user WHERE _id = ?", _id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// update user
app.post("/users/:_id", (req, res) => {
  const _id = req.params._id;
  database.query(
    "UPDATE user SET lastName = 'hidden' WHERE _id = ?",
    _id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      // not tested, wrapped in a try catch block
      try {
        return result;
      } catch {
        null
      }
    }
  );
});

// delete user
app.delete("/users/:_id", (req, res) => {
  const _id = req.params._id;
  database.query("DELETE FROM user WHERE _id= ?", _id, (err, result) => {
    return err ? false : true;
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
