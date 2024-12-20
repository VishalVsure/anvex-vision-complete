// user_id (primary key)
// username
// name
// password_hash
// email
// role (e.g., 'admin', 'user', 'operator')
// created_at
// updated_at

import users from "@/assets/UserData";
import AccessTable from "@/components/AccessTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardLayout from "@/layout/DashboardLayout";

const Management = () => {
  return (
    <>
      <DashboardLayout>
        {/* Management Header */}
        <div className="p-4">
          <div className="flex gap-4 justify-between items-center align-middle pb-8">
            <p className="text-2xl font-semibold">User Management</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Add User</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add User</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Amitabh Bachan"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="ab90"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="username"
                      placeholder="ab@gmail.com"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Password
                    </Label>
                    <Input id="username" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 min-w-full">
                    <Label htmlFor="role" className="text-right">
                      Role
                    </Label>

                    <Select>
                      <SelectTrigger id="role" className="col-span-3">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="operator">Operator</SelectItem>
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
          </div>
          <AccessTable users={users} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Management;
