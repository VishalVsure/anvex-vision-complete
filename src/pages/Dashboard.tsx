import { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, // Register PointElement
  LineElement, // Register LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
} from "chart.js";
import VideoPreviewWithCharts from "@/components/VideoPreview";
import DashboardLayout from "@/layout/DashboardLayout";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, // Register PointElement
  LineElement, // Register LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement
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
  const [lineChartData] = useState({
    labels: [
      "January", // Example labels for months or time periods
      "February",
      "March",
      "April",
      "May",
    ],
    datasets: [
      {
        label: "Person Count Over Time", // Customize the label
        data: [100, 200, 150, 175, 250], // Static data for the line chart
        fill: true, // Disable fill
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        tension: 0.1, // Line smoothing
      },
    ],
  });

  // 2nd Bar Chart Data
  const sampleBarChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Crowd Detection Stats",
        data: [50, 30, 20, 25, 25], // Example numbers
        backgroundColor: [
          // Assign colors dynamically based on data values
          "rgba(255, 99, 132, 0.6)", // Example for "Total Person Count"
          "rgba(54, 162, 235, 0.6)", // Example for "Entry Person Count"
          "rgba(255, 206, 86, 0.6)", // Example for "Exit Person Count"
          "rgba(75, 192, 192, 0.6)", // Example for "Male Count"
          "rgba(153, 102, 255, 0.6)", // Example for "Female Count"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
  console.log(tableData);
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

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  const sampleBarChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "rgb(75, 85, 99)", // Tailwind gray-600
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      title: {
        display: false,
        text: "Crowd Detection Statistics",
        color: "rgb(31, 41, 55)", // Tailwind gray-800
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "white",
        bodyColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(209, 213, 219, 0.5)", // Tailwind gray-300
        },
        ticks: {
          color: "rgb(75, 85, 99)", // Tailwind gray-600
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(209, 213, 219, 0.5)", // Tailwind gray-300
        },
        ticks: {
          color: "rgb(75, 85, 99)", // Tailwind gray-600
        },
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <VideoPreviewWithCharts
          videos={[
            "http://localhost:5000/video_feed/0",
            "fire_detection_.mp4",
            "Object_Detection.mp4",
          ]}
          ChartData={[barChartData, lineChartData, sampleBarChartData]}
          ChartOptions={[barChartOptions, lineOptions, sampleBarChartOptions]}
        />
      </div>
    </DashboardLayout>
  );
}
