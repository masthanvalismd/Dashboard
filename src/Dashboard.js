import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";

export function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-card">
        <div className="card">
          <Card
            sx={{ minWidth: 275 }}
            style={{ borderLeft: "5px solid #4e73df" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                style={{ fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                EARNINGS(MONTHLY)
              </Typography>
              <Typography
                className="text"
                variant="h5"
                style={{ fontWeight: "bold" }}
                component="div"
              >
                $40,000
                <CalendarTodayIcon
                  color="disabled"
                  style={{ fontSize: "3rem" }}
                />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card">
          <Card
            sx={{ minWidth: 275 }}
            style={{ borderLeft: "5px solid #1cc88a" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                style={{ fontWeight: "bold" }}
                color="#1cc88a"
                gutterBottom
              >
                EARNINGS(ANNUALY)
              </Typography>
              <Typography
                className="text"
                variant="h5"
                style={{ fontWeight: "bold" }}
                component="div"
              >
                $215,000
                <AttachMoneySharpIcon
                  color="disabled"
                  style={{ fontSize: "3rem" }}
                />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card">
          <Card
            sx={{ minWidth: 275 }}
            style={{ borderLeft: "5px solid #36b9cc" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                style={{ fontWeight: "bold" }}
                color="#36b9cc"
                gutterBottom
              >
                TASKS
              </Typography>
              <Typography
                className="text"
                variant="h5"
                style={{ fontWeight: "bold" }}
                component="div"
              >
                50%
                <AssignmentSharpIcon
                  color="disabled"
                  style={{ fontSize: "3rem" }}
                />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card">
          <Card
            sx={{ minWidth: 275 }}
            style={{ borderLeft: "5px solid #f6c23e" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                style={{ fontWeight: "bold" }}
                color="#f6c23e"
                gutterBottom
              >
                PENDING REQUESTS
              </Typography>
              <Typography
                className="text"
                variant="h5"
                style={{ fontWeight: "bold" }}
                component="div"
              >
                18
                <ForumSharpIcon color="disabled" style={{ fontSize: "3rem" }} />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="card-charts">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
              Revenue Scores
            </Typography>
            <LineChart/>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
              Revenue Scores
            </Typography>
            <DoughnutChart />
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



