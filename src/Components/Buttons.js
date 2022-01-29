import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function Buttons() {
  return (
    <div className="button">
      <h2>Buttons</h2>
      <div className="buttons">
        <Card>
          <Card.Header className="text-primary">Circle Buttons</Card.Header>
          <Card.Body>
            <Card.Text>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </Typography>
              <Typography color="#e74a3b">.btn-circle</Typography>
              <Typography>
                <Button color="primary" className="btn btn-primary btn-circle">
                  <FacebookIcon  />
                </Button>
                <IconButton color="success">
                  <DoneIcon style={{ fontSize: "2rem" }} />
                </IconButton>
                <IconButton color="secondary">
                  <InfoIcon style={{ fontSize: "2rem" }} />
                </IconButton>
                <IconButton color="warning">
                  <WarningIcon style={{ fontSize: "2rem" }} />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon style={{ fontSize: "2rem" }} />
                </IconButton>
              </Typography>
              <Typography color="#e74a3b">.btn-circle .btn-sm</Typography>
              <Typography>
                <IconButton color="primary">
                  <FacebookIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton color="success">
                  <DoneIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton color="secondary">
                  <InfoIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton color="warning">
                  <WarningIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Typography>
              <Typography color="#e74a3b">.btn-circle .btn-lg</Typography>
              <Typography>
                <IconButton color="primary">
                  <FacebookIcon style={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton color="success">
                  <DoneIcon style={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton color="secondary">
                  <InfoIcon style={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton color="warning">
                  <WarningIcon style={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon style={{ fontSize: "3rem" }} />
                </IconButton>
              </Typography>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="text-primary">Brand Buttons</Card.Header>
          <Card.Body>
            <Card.Text>
              <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                Brand Buttons
              </Typography>
              <Divider style={{ width: "100%" }} />

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages. You can create more custom buttons
                by adding a new color variable in the _variables.scss file and
                then using the Bootstrap button variant mixin to create a new
                style, as demonstrated in the _buttons.scss file.
              </Typography>
              <div className="d-grid gap-2">
                <Button variant="danger" size="lg">
                <GoogleIcon />.btn-google
                </Button>
                <Button variant="primary" size="lg">
                <FacebookIcon/>.btn-facebook
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
