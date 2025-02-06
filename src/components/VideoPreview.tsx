import { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Card } from "./ui/card";

// Define types for ChartCard props
interface ChartCardProps {
  title: string;
  chartType: "bar" | "line";
  data: any; // Refine based on your chart data structure
  options: any; // Refine based on your chart options
}

// ChartCard Component
const ChartCard = ({ title, chartType, data, options }: ChartCardProps) => (
  <Card className="p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    {chartType === "bar" && <Bar data={data} options={options} />}
    {chartType === "line" && (
      <Line data={data} options={options} className="w-1/2" />
    )}
  </Card>
);

// Define types for VideoFeedCard props
interface VideoFeedCardProps {
  videoSrc: string; // Video or image source
  chartType: "bar" | "line";
  ChartData: any; // Refine `any` based on your data structure
  ChartOptions: any; // Refine `any` based on your options structure
}

// VideoFeedCard Component
const VideoFeedCard = ({
  videoSrc,
  chartType,
  ChartData,
  ChartOptions,
}: VideoFeedCardProps) => (
  <div className="flex flex-row w-full mb-4">
    {/* Media Section */}
    <Card className="p-2">
      <div className="h-full">
        {videoSrc.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover aspect-4/3 rounded-l-lg"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={videoSrc}
            alt="Thumbnail"
            className="h-full w-full object-cover rounded-l-lg aspect-4/3"
          />
        )}
      </div>
    </Card>

    {/* Chart Section */}
    <div className="flex w-1/2 h-full p-4">
      <ChartCard
        title={
          chartType === "bar"
            ? "Detection Stats Overview"
            : "Detection Category Distribution"
        }
        chartType={chartType}
        data={ChartData}
        options={ChartOptions}
      />
    </div>
  </div>
);

// Define types for the main VideoPreviewWithCharts component
interface VideoPreviewWithChartsProps {
  videos: string[]; // Array of video or image sources
  ChartData: any[]; // Array of chart data
  ChartOptions: any[]; // Array of chart options
}

// Main Dashboard Component
const VideoPreviewWithCharts = ({
  videos,
  ChartData,
  ChartOptions,
}: VideoPreviewWithChartsProps) => {
  useEffect(() => {
    const initialize = () => {
      fetch("http://localhost:5000/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cam_id: 0,
          detection_type: "person_detection",
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    };
    initialize();
  }, []);

  return (
    <div className="p-4 space-y-4">
      {videos.map((video, index) => {
        const chartType = index === 1 ? "line" : "bar";
        return (
          <VideoFeedCard
            key={index}
            videoSrc={video}
            chartType={chartType}
            ChartData={ChartData[index]}
            ChartOptions={ChartOptions[index]}
          />
        );
      })}
    </div>
  );
};

export default VideoPreviewWithCharts;
