import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
} from "chart.js";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VideoPreview from "@/components/VideoPreview";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [barChartData, setBarChartData] = useState({
    labels: [
      "Males",
      "Females",
      "Entered",
      "Exited",
      "Unique Faces",
      "Detected Objects",
    ],
    datasets: [
      {
        label: "Detection Stats",
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  });
  const [pieChartData, setPieChartData] = useState({
    labels: [
      "Unique Persons",
      "Total Persons",
      "Person Entered",
      "Person Exited",
      "Number of males",
      "Number of females",
      "Total average attention time",
    ],
    datasets: [
      {
        label: "Categories",
        data: [40, 60, 10, 20, 30, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  });

  // Table data
  const [tableData, setTableData] = useState([
    {
      uniquePersons: 0,
      totalPersons: 0,
      entered: 0,
      exited: 0,
      number_males: 0,
      number_females: 0,
      average_time: 0,
    },
    {
      uniquePersons: 0,
      totalPersons: 0,
      entered: 0,
      exited: 0,
      number_males: 0,
      number_females: 0,
      average_time: 0,
    },
  ]);

  // Function to simulate data update (can replace with actual API or live data)
  const getRandomData = () => {
    return {
      barChart: {
        labels: [
          "Males",
          "Females",
          "Entered",
          "Exited",
          "Unique Faces",
          "Detected Objects",
        ],
        datasets: [
          {
            label: "Detection Stats",
            data: Array.from({ length: 6 }, () =>
              Math.floor(Math.random() * 10)
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderWidth: 1,
          },
        ],
      },
      pieChart: {
        labels: [
          "Males",
          "Females",
          "Entered",
          "Exited",
          "Unique Faces",
          "Detected Objects",
        ],
        datasets: [
          {
            label: "Detection Stats",
            data: Array.from({ length: 6 }, () =>
              Math.floor(Math.random() * 10)
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderWidth: 1,
          },
        ],
      },
      tableData: [
        {
          uniquePersons: Math.floor(Math.random() * 10),
          totalPersons: Math.floor(Math.random() * 10),
          entered: Math.floor(Math.random() * 10),
          exited: Math.floor(Math.random() * 10),
          number_males: Math.floor(Math.random() * 10),
          number_females: Math.floor(Math.random() * 10),
          average_time: Math.floor(Math.random() * 10),
        },
        {
          uniquePersons: Math.floor(Math.random() * 10),
          totalPersons: Math.floor(Math.random() * 10),
          entered: Math.floor(Math.random() * 10),
          exited: Math.floor(Math.random() * 10),
          number_males: Math.floor(Math.random() * 10),
          number_females: Math.floor(Math.random() * 10),
          average_time: Math.floor(Math.random() * 10),
        },
      ],
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = getRandomData(); // Simulate fetching new data
      setBarChartData(newData.barChart);
      setPieChartData(newData.pieChart);
      setTableData(newData.tableData); // Update table data along with charts
    }, 1000); // Update every 5 seconds (5000ms)

    return () => clearInterval(interval);
  }, []);

  const barChartOptions = {
    plugins: {
      legend: {
        display: true, // Ensure the legend is enabled
        labels: {
          generateLabels: () => {
            return [
              { text: "Males", fillStyle: "rgba(255, 99, 132, 0.6)" },
              { text: "Females", fillStyle: "rgba(54, 162, 235, 0.6)" },
              { text: "Entered", fillStyle: "rgba(255, 206, 86, 0.6)" },
              { text: "Exited", fillStyle: "rgba(75, 192, 192, 0.6)" },
              { text: "Unique Faces", fillStyle: "rgba(153, 102, 255, 0.6)" },
              {
                text: "Detected Objects",
                fillStyle: "rgba(255, 159, 64, 0.6)",
              },
            ];
          },
        },
      },
    },
  };

  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="mb-8">
        <VideoPreview />
      </div>
      <div className="w-full px-4">
        <div className="flex w-full justify-between gap-4 mb-8">
          <Card className="w-1/2 p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Detection Stats Overview
            </h2>
            <Bar
              data={barChartData}
              options={barChartOptions}
              width={600}
              height={400}
            />
          </Card>
          <Card className="w-1/2 p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Detection Category Distribution
            </h2>
            <Pie data={pieChartData} options={pieOptions} />
          </Card>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Table 1 */}
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Person Detection
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-600">
                    Unique Persons
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Total Persons
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Person Entered
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Person Exited
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.uniquePersons}</TableCell>
                    <TableCell>{row.totalPersons}</TableCell>
                    <TableCell>{row.entered}</TableCell>
                    <TableCell>{row.exited}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Table 2 */}
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Object Detection
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-600">
                    Number of Males
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Number of Females
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.number_males}</TableCell>{" "}
                    {/* Display unique objects in this table */}
                    <TableCell>{row.number_females}</TableCell>{" "}
                    {/* Display detected objects */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Table 3 */}
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Object Detection
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-600">
                    Total average attention time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.average_time}</TableCell>{" "}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
