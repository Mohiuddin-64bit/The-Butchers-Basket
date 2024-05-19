"use client"

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

const rows = [
  {
    sl: "1",
    key: "1",
    item: "Tony Reichert",
    category: "CEO",
    productId: "Active",
    price: "$ 20",
  },
];
const columns = [
  {
    key: "sl",
    label: "SL",
  },
  {
    key: "item",
    label: "ITEM",
  },
  {
    key: "category",
    label: "CATEGORY",
  },
  {
    key: "productId",
    label: "PRODUCT ID",
  },
  {
    key: "price",
    label: "PRICE",
  },
];

const AllProducts = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-12">All Products</h1>
      <div>
        <Table isStriped  aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody  emptyContent={"No rows to display."} items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllProducts;
