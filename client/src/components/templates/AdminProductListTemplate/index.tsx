import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import queryString from "query-string";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { useLocation } from "react-router";
import useDeleteProduct from "../../../hooks/Product/useDeleteProduct";
import useProductShopPagination from "../../../hooks/Shop/useProductShopPagination";
import { ProductData } from "../../../types/ProductType";
import AlertMessage from "../../atoms/AlertMessage";
import Loading from "../../atoms/Loading";
import TableItem from "../../atoms/TableItem";
import { Link } from "react-router-dom";

const AdminProductListTemplate = () => {
  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const pageNumber = parseInt((page as string) || "0");

  const toast = useToast();

  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useProductShopPagination(pageNumber);

  const { isLoading: isDeleteProductLoading, mutateAsync } = useDeleteProduct();

  const onDeleteProduct = React.useCallback(
    async (shopId: string) => {
      await mutateAsync(shopId, {
        onSuccess: (success) => {
          toast({
            title: "Delete Successfully",
            description: success?.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        onError: (error) => {
          const appError: any = error;
          toast({
            title: "Error",
            description: appError?.response?.data?.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      });
    },
    [mutateAsync, toast]
  );

  const columns: any = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },

      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    return products?.results?.map((product: ProductData) => {
      return {
        name: (
          <Flex alignItems="center">
            <Image
              src={product.images[0]}
              width="40px"
              height="40px"
              mr="15px"
              rounded="full"
            />
            <Text>{product.name}</Text>
          </Flex>
        ),
        price: `$${product.price}`,
        quantity: product.quantity,
        action: (
          <>
            <Button
              bgColor="yellow.500"
              as={Link}
              to={`/products/create/${product.id}?edit=true`}
              leftIcon={<BsPencilSquare />}
              isLoading={isDeleteProductLoading}
            >
              Update
            </Button>
            <Button
              bgColor="red.500"
              ml="10px"
              leftIcon={<RiDeleteBin6Fill />}
              onClick={() => onDeleteProduct(product.id)}
              isLoading={isDeleteProductLoading}
            >
              Delete
            </Button>
          </>
        ),
      };
    });
  }, [isDeleteProductLoading, onDeleteProduct, products?.results]);

  if (isLoading) {
    return <Loading />;
  }

  const customError: any = error;
  const appError = customError?.response?.data?.message;

  return (
    <Flex>
      <Box mr="20px">
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create App
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
        <Button display="block" mt="20px">
          Create APp
        </Button>
      </Box>
      <Box flexGrow={1}>
        <Box mt="20px">
          <Flex alignItems="center" my="30px">
            <Text fontSize="28px" fontWeight="bold">
              Product List
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
              pageNumber={pageNumber}
              totalPage={products.totalPages}
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminProductListTemplate;
