import { useState, useEffect } from "react";
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
import DashboardLayout from "@/layout/DashboardLayout";

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
  const [webhookData, setWebhookData] = useState({
    total_person_count: 0,
    person_entered: 0,
    person_exited: 0,
    male_count: 0,
    female_count: 0,
  });

  const [barChartData, setBarChartData] = useState({
    labels: [
      "Total Person Count",
      "Entry Person Count",
      "Exit Person Count",
      "Total Male Count",
      "Total Female Count",
    ],
    datasets: [
      {
        label: "Detection Stats",
        data: [
          webhookData.total_person_count,
          webhookData.person_entered,
          webhookData.person_exited,
          webhookData.male_count,
          webhookData.female_count,
        ],
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
      "Entry Person Count",
      "Exit Person Count",
      "Total Male Count",
      "Total Female Count",
    ],
    datasets: [
      {
        label: "Categories",
        data: [
          webhookData.total_person_count,
          webhookData.person_entered,
          webhookData.person_exited,
          webhookData.male_count,
          webhookData.female_count,
        ],
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
      person_entered: 0,
      person_exited: 0,
      male_count: 0,
      female_count: 0,
    },
  ]);

  useEffect(() => {
    // Connect to the socket.io server
    const socket = io("https://vision-webhook.onrender.com", {
      withCredentials: true,
      transports: ["websocket"],
    });

    // Listen for 'webhookData' event
    socket.on("webhookData", (webhookData) => {
      console.log("Received webhook data:", webhookData);
      setWebhookData(webhookData); // Update your state with the data

      // Update chart and table data
      setBarChartData({
        labels: [
          "Total Person Count",
          "Entry Person Count",
          "Exit Person Count",
          "Total Male Count",
          "Total Female Count",
        ],
        datasets: [
          {
            label: "Detection Stats",
            data: [
              webhookData.total_person_count,
              webhookData.person_entered,
              webhookData.person_exited,
              webhookData.male_count,
              webhookData.female_count,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      });

      setPieChartData({
        labels: [
          "Total Person Count",
          "Entry Person Count",
          "Exit Person Count",
          "Total Male Count",
          "Total Female Count",
        ],
        datasets: [
          {
            label: "Categories",
            data: [
              webhookData.total_person_count,
              webhookData.person_entered,
              webhookData.person_exited,
              webhookData.male_count,
              webhookData.female_count,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      });

      setTableData([
        {
          total_person_count: webhookData.total_person_count,
          person_entered: webhookData.person_entered,
          person_exited: webhookData.person_exited,
          male_count: webhookData.male_count,
          female_count: webhookData.female_count,
        },
      ]);
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    return () => {
      socket.disconnect();
    };
  }, []); // Only run once, on mount and unmount

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
      <DashboardLayout>
        <div className="p-4">
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
                        Entry Person Count
                      </TableHead>
                      <TableHead className="font-semibold text-gray-600">
                        Exit Person Count
                      </TableHead>
                      <TableHead className="font-semibold text-gray-600">
                        Total Male Count
                      </TableHead>
                      <TableHead className="font-semibold text-gray-600">
                        Total Female Count
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.total_person_count}</TableCell>
                        <TableCell>{row.person_entered}</TableCell>
                        <TableCell>{row.person_exited}</TableCell>
                        <TableCell>{row.male_count}</TableCell>
                        <TableCell>{row.female_count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
