import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const ManageAlarms = () => {
  return (
    <>
      <div>Alarm Management</div>
      <Table>
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Rule</TableHead>
          <TableHead>Video Source</TableHead>
          <TableHead>Alarm Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Alarm Url</TableHead>
          <TableHead>Reason</TableHead>
        </TableHeader>
        <TableBody>
          {sources.map((source) => (
            <TableRow>
              <TableCell className="font-medium">{source.cam_id}</TableCell>
              <TableCell className="font-medium">{source.note}</TableCell>
              <TableCell className="font-medium">{source.protocol}</TableCell>
              <TableCell className="font-medium">Connected</TableCell>
              <TableCell className="font-medium">{source.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ManageAlarms;
