import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';

export function Buttons() {
  return (
    <div className="button">
      <h2>Buttons</h2>
      <div className="buttons">
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
              Circle Buttons
            </Typography>
            <Divider style={{ width: "100%" }} />

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Use Font Awesome Icons (included with this theme package) along
              with the circle buttons as shown in the examples below!
            </Typography>
            <Typography color="#e74a3b">.btn-circle</Typography>
            <Typography>
              <IconButton color="primary">
                <FacebookIcon style={{ fontSize: "2rem" }} />
              </IconButton>
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
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
              Brand Buttons
            </Typography>
            <Divider style={{ width: "100%" }} />

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Google and Facebook buttons are available featuring each company's
              respective brand color. They are used on the user login and
              registration pages. You can create more custom buttons by adding a
              new color variable in the _variables.scss file and then using the
              Bootstrap button variant mixin to create a new style, as
              demonstrated in the _buttons.scss file.
            </Typography>
            <Button variant="contained" color="error"><GoogleIcon />.btn-google</Button>
            <br/>
            <Button variant="contained" color="primary"><FacebookIcon/>.btn-facebook</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
