import Source from "@/interfaces/SourceInterface";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const sources: Source[] = [
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

const BasicSourceDetails = () => {
  return (
    <div className="w-full px-4 py-4 grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="Source ID">Source ID</Label>
        <Input id="source_id" type="text" placeholder="Lobby Camera" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="source_desc">Source Description</Label>
        <Input
          id="source_desc"
          type="source_desc"
          placeholder="Camera Overlooking entrance lobby"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="video_source">Video Source</Label>
        <Select>
          <SelectTrigger id="role" className="col-span-3">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            {sources.map((source) => (
              <SelectItem value={source.cam_id}>
                {source.cam_id} - {source.url}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Alarm Listener URL</Label>
        <Input id="url" type="url" placeholder="youtube.com" required />
      </div>
    </div>
  );
};

export default BasicSourceDetails;
