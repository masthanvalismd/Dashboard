import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chart() {
  return (
    <div className="chart">
     
      <div className="card-charts">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
              Revenue Scores
            </Typography>
            <Bar options={options} data={data} />
          </CardContent>
        </Card>
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
        </Card>'
    
    </div>
    </div>
  )
  }