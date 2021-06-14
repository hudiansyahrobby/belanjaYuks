import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ChartData } from "chart.js";
import { format } from "date-fns";
import React from "react";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import { numberWithCommas } from "../../../helpers/numberWithCommas";
import { sumTotalPrice } from "../../../helpers/sumTotalPrice";
import useShopHistory from "../../../hooks/Checkout/useShopHistory";
import useProductShopPagination from "../../../hooks/Shop/useProductShopPagination";
import { HistoryData } from "../../../types/HistoryType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import StackedBar from "../../atoms/StackedBar";
import StatCard from "../../atoms/StatCard";
import TableItem from "../../atoms/TableItem";
import SellerButtonMenu from "../../molecules/SellerButtonMenu";

const SellerDashboardTemplate = () => {
  const {
    isLoading: isHistoriesLoading,
    isError: isHistoriesError,
    error: errorHistories,
    data: histories,
  } = useShopHistory();

  const {
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: errorProducts,
    data: products,
  } = useProductShopPagination();

  const historyError = (errorHistories as any)?.response?.data?.message;
  const productError = (errorProducts as any)?.response?.data?.message;

  const getTotalPrice = React.useCallback(() => {
    return histories
      ?.map((history: HistoryData) => sumTotalPrice(history.products))
      .reduce((acc: number, currentValue: number) => acc + currentValue, 0);
  }, [histories]);

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

  const totalPrice = React.useMemo(() => getTotalPrice(), [getTotalPrice]);

  const data = React.useMemo(() => {
    return histories?.slice(0, 8).map((history: HistoryData, index: number) => {
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

  const chartData: ChartData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Total Checkouts",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Total Transactions",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  if (isProductsLoading || isHistoriesLoading) {
    return <Loading />;
  }
  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} mx={{ base: "20px" }}>
      <SellerButtonMenu />
      <Box flexGrow={1}>
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing="10px">
          <StatCard
            label="Total Transactions"
            total={`$${numberWithCommas(totalPrice)}`}
            information="From Beginning"
            isError={isHistoriesError}
            error={historyError}
          />
          <StatCard
            label="Total Checkouts"
            total={histories?.length}
            information="From Beginning"
            isError={isHistoriesError}
            error={historyError}
          />
          {/* <StatCard
            label="Total Shops"
            total={shops?.pages[0].totalItems}
            information="Shops"
            isError={isShopsError}
            error={shopError}
          /> */}
          <StatCard
            label="Total Products"
            total={products.totalItems}
            information="Products"
            isError={isProductsError}
            error={productError}
          />
        </SimpleGrid>

        <Box mt="20px">
          <StackedBar data={chartData} />
        </Box>

        <Box mt="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              History
            </Text>
            <LinkNavigation to="/seller/histories" ml="20px">
              See Others
            </LinkNavigation>
          </Flex>
          {isHistoriesError ? (
            <AlertMessage
              title="Something Went Wrong"
              description={historyError}
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

export default SellerDashboardTemplate;
