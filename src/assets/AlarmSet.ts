import Alarm from "@/interfaces/AlarmObj";

const alarms: Alarm[] = [
  {
    alarmId: 1,
    task: "heat",
    videoSource: "CAM001",
    alarmDate: new Date("2024-11-08 14:30:45"),
    status: "Not Resolved",
    alarmUrl: "",
    reason: "User",
    alarmScreenShot: "",
    protocol: "rtsp",
    cam_id: "CAM001",
    url: "rtsp://192.168.1.101:554/stream1",
    note: "Main Entrance Camera",
  },
  {
    alarmId: 2,
    task: "heat",
    videoSource: "CAM002",
    alarmDate: new Date("2024-11-08 14:30:48"),
    status: "Not Resolved",
    alarmUrl: "",
    reason: "User",
    alarmScreenShot: "",
    protocol: "rtsp",
    cam_id: "CAM002",
    url: "rtsp://192.168.1.102:554/stream2",
    note: "Backyard Surveillance Camera",
  },
  {
    alarmId: 3,
    task: "heat",
    videoSource: "CAM003",
    alarmDate: new Date("2024-11-08 14:35:45"),
    status: "Not Resolved",
    alarmUrl: "",
    reason: "User",
    alarmScreenShot: "",
    protocol: "mtp",
    cam_id: "CAM003",
    url: "mtp://192.168.1.103:5000/video_feed",
    note: "Garden Area Motion Detection",
  },
];

export default alarms;
