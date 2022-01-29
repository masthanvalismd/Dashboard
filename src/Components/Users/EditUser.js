import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";

export function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users[id];
  console.log(users);
  const [name, setName] = useState(user.name);
  const [position, setPosition] = useState(user.position);
  const [office, setOffice] = useState(user.office);
  const [age, setAge] = useState(user.age);
  const [salary, setSalary] = useState(user.salary);
  const navigate = useNavigate();

  const saveEditedValues = () => {
    const usersCopy = [...users];

    let filtered = usersCopy[id];
    filtered.name = name;
    filtered.position = position;
    filtered.office = office;
    filtered.age = age;
    filtered.salary = salary;

    console.log("after edit", usersCopy);
    setUsers(usersCopy);
    navigate("/users");
  };
  const editName = (e) => {
    setName(e.target.value);
  };
  const editPosition = (event) => {
    setPosition(event.target.value);
  };
  const editOffice = (event) => {
    setOffice(event.target.value);
  };
  const editAge= (event) => {
    setAge(event.target.value);
  };
  const editSalary = (event) => {
    setSalary(event.target.value);
  };

  return (
    <div className="textField-edit">
      
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={editName}
      />
      <br />
      <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={position}
        onChange={editPosition}
      />
      <br />
      <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={office}
        onChange={editOffice}
      />
      <br />
      <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={editAge}
      />
      <br />

       <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={salary}
        onChange={editSalary}
      />
      <br />

      <div className="edit-btn">
        <Button
          style={{
            backgroundColor: "crimson",
            color: "#FFFFFF",
            marginRight: "20px",
          }}
          onClick={() => navigate("/tables")}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "green",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            event.preventDefault();
            saveEditedValues();
            navigate("/tables");
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
