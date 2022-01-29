import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  
  const navigate = useNavigate();
  return (
    <div className="textField-add">
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Position"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <br />

      <TextField
        label="Enter Office"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={office}
        onChange={(event) => setOffice(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Age"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />

      <TextField
        label="Enter Salary"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />
      <br />
      
      <br />
      <br />

      <div className="btn">
        <Button
          style={{
            backgroundColor: "crimson",
            color: "#FFFFFF",
            marginRight: "40px",
          }}
          onClick={() => navigate("/tables")}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "blue",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={() => {
            const newUser = {
              id: users.length + 1,
              name,
              position,
              office,
              age,
              salary,
              
            };
            // console.log(newUser);
            setUsers([...users, newUser]);
            setName("");
            navigate("/tables");
          }}
        >
          Add User
        </Button>
      </div>
    </div>
  );
}
