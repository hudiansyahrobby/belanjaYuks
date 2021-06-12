import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import useUserHistory from "../../../hooks/Checkout/useUserHistory";
import { HistoryData } from "../../../types/HistoryType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import TableItem from "../../atoms/TableItem";

const MyHistoryTemplate = () => {
  // const { search } = useLocation();
  // const { page } = queryString.parse(search);
  // const pageNumber = parseInt((page as string) || "0");

  const { isLoading, isError, error, data: histories } = useUserHistory();

  const columns: any = React.useMemo(
    () => [
      {
        Header: "Checkout ID",
        accessor: "id",
      },
      {
        Header: "Products",
        accessor: "products",
      },

      {
        Header: "Total price",
        accessor: "price",
      },
      {
        Header: "Checkout Date",
        accessor: "checkout",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    return histories?.map((history: HistoryData) => {
      return {
        id: history.id,
        products: (
          <>
            {history.products?.map((product) => {
              return (
                <Flex alignItems="center" py="5px">
                  <Image
                    src={product.images[0]}
                    width="40px"
                    height="40px"
                    mr="15px"
                    rounded="full"
                  />
                  <LinkNavigation to={`/products/${product.id}`}>
                    {capitalizeEachWord(product.name)}
                  </LinkNavigation>
                </Flex>
              );
            })}
          </>
        ),
        price:
          "$" +
          history.products.reduce(
            (accumulator, currentValue) =>
              accumulator + +currentValue.totalPrice,
            0
          ),
        checkout: format(new Date(history.createdAt), "do 'of' MMMM yyyy"),
      };
    });
  }, [histories]);

  if (isLoading) {
    return <Loading />;
  }

  const customError: any = error;
  const appError = customError?.response?.data?.message;

  return (
    <Flex>
      <Box flexGrow={1}>
        <Box mt="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              My Checkout History
            </Text>
          </Flex>

          {isError ? (
            <AlertMessage
              title="Something Went Wrong"
              description={appError}
              status="error"
            />
          ) : (
            <TableItem
              columns={columns}
              data={data}
              pageNumber={0}
              totalPage={1}
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default MyHistoryTemplate;
