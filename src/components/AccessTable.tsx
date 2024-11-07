import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import User from "@/interfaces/UserInterface";
import { FC } from "react";

interface AccessTableProps {
    users: User[];
  }

const AccessTable: FC<AccessTableProps> = ({ users }) => {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>created_at</TableHead>
            <TableHead>updated_at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell className="font-medium">{user.uid}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell className="font-medium">{user.role}</TableCell>
              <TableCell className="font-medium">{user.created_at}</TableCell>
              <TableCell className="font-medium">{user.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default AccessTable