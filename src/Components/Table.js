import * as React from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function TableData({ users, setUsers }) {
  const navigate = useNavigate();

  const deleteuser = (id) => setUsers(users.filter((user) => user.id !== id));
  return (
    <div className="tables">
      <h2>Table</h2>

      <Typography
        style={{ fontSize: "1rem" }}
        variant="caption"
        color="text.secondary"
        gutterBottom
      >
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables
      </Typography>
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/tables/create-user");
        }}
      >
        Add Users
      </Button>

      <div className="table-data">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
               
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Office</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({ id, name, position,office,age,salary }, index) => {
                return (
                  <TableRow key={index}>
                    
                    <TableCell>{name}</TableCell>
                    <TableCell>{position}</TableCell>
                    <TableCell>{office}</TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{salary}</TableCell>

                    <TableCell className="row-actions">
                      <IconButton
                        onClick={() => navigate(`/tables/edit-user/${index}`)}
                        color="warning"
                        aria-label="aboutUsers"
                        title="Edit User"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteuser(id)}
                        color="error"
                        aria-label="deleteUser"
                        title="Delete User"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
