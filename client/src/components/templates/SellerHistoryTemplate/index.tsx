import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import { numberWithCommas } from "../../../helpers/numberWithCommas";
import { sumTotalPrice } from "../../../helpers/sumTotalPrice";
import useShopHistory from "../../../hooks/Checkout/useShopHistory";
import { HistoryData } from "../../../types/HistoryType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import TableItem from "../../atoms/TableItem";

const SellerHistoryTemplate = () => {
  // const { search } = useLocation();
  // const { page } = queryString.parse(search);
  // const pageNumber = parseInt((page as string) || "0");

  const { isLoading, isError, error, data: histories } = useShopHistory();

  const columns: any = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
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
    return histories?.map((history: HistoryData, index: number) => {
      return {
        no: index + 1,
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
                    {capitalizeEachWord(product.name)} - {product.checkout.qty}{" "}
                    pcs
                  </LinkNavigation>
                </Flex>
              );
            })}
          </>
        ),
        price: "$" + numberWithCommas(sumTotalPrice(history.products)),
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
        <Box mt="20px" mx="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              All Checkout Histories
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

export default SellerHistoryTemplate;
