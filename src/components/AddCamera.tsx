import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const AddCamera = () => {
  return (
    <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Source</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add Camera</DialogTitle>
              <DialogDescription>
                Enter Source Details
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cam_id" className="text-right">
                  Camera ID
                </Label>
                <Input
                  id="cam_id"
                  placeholder="CAM001"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Note
                </Label>
                <Input
                  id="cam_note"
                  placeholder="Lobby Camera 1"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="url" className="text-right">
                  Source URL
                </Label>
                <Input
                  id="url"
                  placeholder="rtsp://192.168.1.102:554/stream2"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 min-w-full">
                <Label htmlFor="role" className="text-right">
                  Protocol
                </Label>

                <Select>
                  <SelectTrigger id="protocol" className="col-span-3">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">RTSP</SelectItem>
                    <SelectItem value="user">MTP</SelectItem>
                    {/* <SelectItem value="operator">Operator</SelectItem> */}
                    {/* <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
  )
}

export default AddCamera