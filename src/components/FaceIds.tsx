import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import User from "@/interfaces/UserInterface";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FC } from "react";

interface AccessTableProps {
  users: User[];
}

const FaceIds: FC<AccessTableProps> = ({ users }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Photo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell className="font-medium">{user.uid}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell className="font-medium">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-black hover:text-gray-700">
                    <i className="fas fa-eye"></i> {/* Font Awesome eye icon */}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>User Image</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center py-4">
                    <img
                      src={user.image}
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
  );
};

export default FaceIds;
