import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";
import { useHistory } from "react-router";
import { useTable, usePagination } from "react-table";

type TableItemProps = {
  columns: any[];
  data: any[];
  pageNumber: number;
  totalPage: number;
};

const TableItem: React.FC<TableItemProps> = ({
  columns,
  data,
  pageNumber = 0,
  totalPage,
}) => {
  const history = useHistory();
  const nextPage = () => {
    history.push({
      search: `?page=${pageNumber + 1}`,
    });
  };

  const previousPage = () => {
    history.push({
      search: `?page=${pageNumber - 1}`,
    });
  };

  const gotoPage = (pageNumber: number) => {
    history.push({
      search: `?page=${pageNumber}`,
    });
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      {totalPage === 0 ? (
        <Text>Data is empty</Text>
      ) : (
        <>
          <Table {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      {...column.getHeaderProps()}
                      fontSize="16px"
                      color="black"
                    >
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          <Box my="20px">
            <Button
              size="sm"
              onClick={() => gotoPage(0)}
              disabled={pageNumber === 0}
            >
              {"<<"}
            </Button>{" "}
            <Button
              size="sm"
              onClick={() => previousPage()}
              disabled={pageNumber === 0}
            >
              {"<"}
            </Button>{" "}
            <Button
              size="sm"
              onClick={() => nextPage()}
              disabled={pageNumber === totalPage - 1}
            >
              {">"}
            </Button>{" "}
            <Button
              size="sm"
              onClick={() => gotoPage(totalPage - 1)}
              disabled={pageNumber === totalPage - 1}
            >
              {">>"}
            </Button>{" "}
            <Box as="span">
              Page{" "}
              <strong>
                {pageNumber + 1} of {totalPage}
              </strong>{" "}
            </Box>
            <Box as="span">
              | Go to page:{" "}
              <Input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  if (page < 0 || page > totalPage - 1) {
                    return;
                  }
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </Box>{" "}
          </Box>
        </>
      )}
    </>
  );
};

export default TableItem;
