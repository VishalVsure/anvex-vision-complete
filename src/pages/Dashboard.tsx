import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import io from "socket.io-client";
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
  const [webhookData, setWebhookData] = useState(null);

  useEffect(() => {
    // Connect to the socket.io server
    const socket = io("http://localhost:3000", {
      withCredentials: true,
      transports: ["websocket"],
    });

    // Listen for 'webhookData' event
    socket.on("webhookData", (webhookData) => {
      console.log("Received webhook data:", webhookData);
      setWebhookData(webhookData); // Update your state with the data
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const [barChartData, setBarChartData] = useState({
    labels: [
      "Total Person Count",
      "Total Male Count",
      "Total Female Count",
      "Entry Person Count",
      "Exit Person Count",
      ,
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
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
        ],
        borderWidth: 1,
      },
    ],
  });
  const [pieChartData, setPieChartData] = useState({
    labels: [
      "Total Person Count",
      "Total Male Count",
      "Total Female Count",
      "Entry Person Count",
      "Exit Person Count",
    ],
    datasets: [
      {
        label: "Categories",
        data: [40, 60, 10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
        ],
        borderWidth: 1,
      },
    ],
  });

  // Table data
  const [tableData, setTableData] = useState([
    {
      total_person_count: 0,
      total_male_count: 0,
      total_female_count: 0,
      enter_person_count: 0,
      exit_person_count: 0,
    },
    {
      total_person_count: 0,
      total_male_count: 0,
      total_female_count: 0,
      enter_person_count: 0,
      exit_person_count: 0,
    },
  ]);

  // Function to simulate data update (can replace with actual API or live data)
  const getRandomData = () => {
    return {
      barChart: {
        labels: [
          "Total Person Count",
          "Total Male Count",
          "Total Female Count",
          "Entry Person Count",
          "Exit Person Count",
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
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
            ],
            borderWidth: 1,
          },
        ],
      },
      pieChart: {
        labels: [
          "Total Person Count",
          "Total Male Count",
          "Total Female Count",
          "Entry Person Count",
          "Exit Person Count",
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
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
            ],
            borderWidth: 1,
          },
        ],
      },
      tableData: [
        {
          total_person_count: Math.floor(Math.random() * 10),
          total_male_count: Math.floor(Math.random() * 10),
          total_female_count: Math.floor(Math.random() * 10),
          enter_person_count: Math.floor(Math.random() * 10),
          exit_person_count: Math.floor(Math.random() * 10),
        },
        {
          total_person_count: Math.floor(Math.random() * 10),
          total_male_count: Math.floor(Math.random() * 10),
          total_female_count: Math.floor(Math.random() * 10),
          enter_person_count: Math.floor(Math.random() * 10),
          exit_person_count: Math.floor(Math.random() * 10),
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
              {
                text: "Total Person Count",
                fillStyle: "rgba(255, 99, 132, 0.6)",
              },
              {
                text: "Total Male Count",
                fillStyle: "rgba(54, 162, 235, 0.6)",
              },
              {
                text: "Total Female Count",
                fillStyle: "rgba(255, 206, 86, 0.6)",
              },
              {
                text: "Entry Person Count",
                fillStyle: "rgba(75, 192, 192, 0.6)",
              },
              {
                text: "Exit Person Count",
                fillStyle: "rgba(75, 192, 192, 0.6)",
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
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Table 1 */}
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Person Detection
            </h3>
            <Table className="w-full">
              {" "}
              {/* Added w-full here to make the table take full width */}
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-600">
                    Total Person Count
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Total Male Count
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Total Female Count
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Entry Person Count
                  </TableHead>
                  <TableHead className="font-semibold text-gray-600">
                    Exit Person Count
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.total_person_count}</TableCell>
                    <TableCell>{row.total_male_count}</TableCell>
                    <TableCell>{row.total_female_count}</TableCell>
                    <TableCell>{row.enter_person_count}</TableCell>
                    <TableCell>{row.exit_person_count}</TableCell>
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
