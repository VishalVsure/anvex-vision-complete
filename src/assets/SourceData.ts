import Source from "@/interfaces/SourceInterface";

let sources: Source[] = [
    {
      protocol: "rtsp",
      cam_id: "CAM001",
      url: "rtsp://192.168.1.101:554/stream1",
      note: "Main Entrance Camera",
    },
    {
      protocol: "rtsp",
      cam_id: "CAM002",
      url: "rtsp://192.168.1.102:554/stream2",
      note: "Backyard Surveillance Camera",
    },
    {
      protocol: "mtp",
      cam_id: "CAM003",
      url: "mtp://192.168.1.103:5000/video_feed",
      note: "Garden Area Motion Detection",
    },
  ];
  
export default sources;