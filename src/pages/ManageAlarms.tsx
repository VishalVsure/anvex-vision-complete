import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/layout/DashboardLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageAlarms = () => {
  const getRandomDate = (start: Date, end: Date) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toLocaleDateString(); // Format the date as desired
  };

  // const [selectedImage, setSelectedImage] = useState("");

  const sources = [
    {
      cam_id: "CAM001",
      note: "Main Entrance Camera",
      protocol: "rtsp",
      url: "rtsp://192.168.1.101:554/stream1",
      incident_ss: "/Fire_detection_Inci_ss.png",
    },
    {
      cam_id: "CAM002",
      note: "Construction Site Entrance Camera 1",
      protocol: "rtsp",
      url: "rtsp://192.168.1.101:554/stream2",
      incident_ss: "/PPE_KIT_2.png",
    },
    {
      cam_id: "CAM003",
      note: "Construction Site Camera",
      protocol: "rtsp",
      url: "rtsp://192.168.1.101:554/stream3",
      incident_ss: "/PPE_kit_incident_ss.png",
    },
    {
      cam_id: "CAM004",
      note: "Vehicle Detection Camera",
      protocol: "rtsp",
      url: "rtsp://192.168.1.101:554/stream4",
      incident_ss: "/Vehicle_Incident_ss.png",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="p-4">
          <p className="text-2xl font-semibold">Alarm Management</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Rule</TableHead>
                <TableHead>Video Source</TableHead>
                <TableHead>Alarm Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Alarm Url</TableHead>
                <TableHead>Screenshot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sources.map((source) => (
                <TableRow key={source.cam_id}>
                  <TableCell className="font-medium">{source.cam_id}</TableCell>
                  <TableCell className="font-medium">{source.note}</TableCell>
                  <TableCell className="font-medium">
                    {source.protocol}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getRandomDate(new Date(2023, 0, 1), new Date())}
                  </TableCell>
                  <TableCell className="font-medium">Connected</TableCell>
                  <TableCell className="font-medium">{source.url}</TableCell>
                  <TableCell className="font-medium">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-black hover:text-gray-700">
                          <i className="fas fa-eye"></i>{" "}
                          {/* Font Awesome eye icon */}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Incident Screenshot</DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-center py-4">
                          <img
                            src={source.incident_ss}
                            alt="Preview"
                            className="rounded-md"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "400px",
                              objectFit: "contain",
                              aspectRatio: "16/9",
                            }}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ManageAlarms;
