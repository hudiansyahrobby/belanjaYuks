import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ChartData, ChartOptions } from "chart.js";
import { format } from "date-fns";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import { numberWithCommas } from "../../../helpers/numberWithCommas";
import { sumTotalPrice } from "../../../helpers/sumTotalPrice";
import useAllHistories from "../../../hooks/Checkout/useAllHistories";
import useProducts from "../../../hooks/Product/useProducts";
import useShops from "../../../hooks/Shop/useShops";
import { HistoryData } from "../../../types/HistoryType";
import AlertMessage from "../../atoms/AlertMessage";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import StackedBar from "../../atoms/StackedBar";
import StatCard from "../../atoms/StatCard";
import TableItem from "../../atoms/TableItem";
import AdminButtonMenu from "../../molecules/AdminButtonMenu";

const AdminDashboardTemplate = () => {
  const {
    isLoading: isHistoriesLoading,
    isError: isHistoriesError,
    error: errorHistories,
    data: histories,
  } = useAllHistories();

  const {
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: errorProducts,
    data: products,
  } = useProducts();

  const {
    isLoading: isShopsLoading,
    isError: isShopsError,
    error: errorShops,
    data: shops,
  } = useShops();

  const historyCustomError: any = errorHistories;
  const historyError = historyCustomError?.response?.data?.message;

  const productCustomError: any = errorProducts;
  const productError = productCustomError?.response?.data?.message;

  const shopCustomError: any = errorShops;
  const shopError = shopCustomError?.response?.data?.message;

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

  if (isHistoriesLoading || isShopsLoading || isProductsLoading) {
    return <Loading />;
  }
  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} mx={{ base: "20px" }}>
      <AdminButtonMenu />
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
          <StatCard
            label="Total Shops"
            total={shops?.pages[0].totalItems}
            information="Shops"
            isError={isShopsError}
            error={shopError}
          />
          <StatCard
            label="Total Products"
            total={products?.pages[0].totalItems}
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
            <LinkNavigation to="/admin/histories" ml="20px">
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

export default AdminDashboardTemplate;
