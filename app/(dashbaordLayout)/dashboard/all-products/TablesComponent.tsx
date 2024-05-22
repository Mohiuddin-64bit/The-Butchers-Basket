"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const columns = [
  {
    key: "_id",
    label: "ID",
  },
  {
    key: "category",
    label: "CATEGORY",
  },
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "price",
    label: "PRICE",
  },
  {
    key: "description",
    label: "DESCRIPTION",
  },
  {
    key: "rating",
    label: "RATING",
  },
  {
    key: "isFlashSale",
    label: "FLASH SALE",
  },
];

const TablesComponent = ({ data } : {data: React.ReactNode}) => {
  return (
    <Table className="" isStriped aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No rows to display."} items={data as any}>
        {(item) => (
          <TableRow key={(item as any)?._id}>
            {(columnKey) => (
              <TableCell>{(item as any)?.[columnKey]}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TablesComponent;