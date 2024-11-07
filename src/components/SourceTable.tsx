import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Source from "@/interfaces/SourceInterface";
import { FC } from "react";

interface SourceTableProps {
    sources: Source[];
  }

const SourceTable: FC<SourceTableProps> = ({ sources }) => {
  return (
    <Table>
        <TableHeader>
          
            <TableHead>Camera ID</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Protocol</TableHead>
            <TableHead>Channel Status</TableHead>
            <TableHead>URL</TableHead>
         
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
  )
}

export default SourceTable