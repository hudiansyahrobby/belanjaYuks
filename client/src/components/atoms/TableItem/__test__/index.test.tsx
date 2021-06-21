import { render, screen } from "@testing-library/react";
import React from "react";
import TableItem from "..";

const columns: any = [
  {
    Header: "No",
    accessor: "no",
  },
  {
    Header: "ID",
    accessor: "id",
  },
];

const data = [1, 2, 3, 4, 5, 6, 7, 8].map((data: any, index: number) => {
  return {
    no: index + 1,
    id: data,
  };
});

test("Render table correctly", () => {
  render(
    <TableItem columns={columns} data={data} pageNumber={0} totalPage={1} />
  );
  expect(screen.getByRole("table", { hidden: true })).toBeInTheDocument();
});
