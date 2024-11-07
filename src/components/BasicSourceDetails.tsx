import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import sources from "@/assets/SourceData";

const BasicSourceDetails = () => {
  return (
    <>
      <p className="text-xl font-semibold pb-2">Basic Camera Details</p>
      <div className="w-full px-4 py-4 grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="Source ID">Source ID</Label>
          <Input
            id="source_id"
            type="text"
            placeholder="Lobby Camera"
            required
          />
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
    </>
  );
};

export default BasicSourceDetails;
