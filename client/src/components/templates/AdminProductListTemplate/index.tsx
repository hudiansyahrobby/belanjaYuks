import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
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
import ModalItem from "../../atoms/Modal";
import { MdCheckCircle } from "react-icons/md";

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
    isFetching,
    refetch,
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
          refetch();
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
    [mutateAsync, refetch, toast]
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
              fit="cover"
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
              _hover={{ bgColor: "yellow.700" }}
              as={Link}
              to={`/seller/products/create?productId=${product.id}&edit=true`}
              leftIcon={<BsPencilSquare />}
            >
              Update
            </Button>
            <ModalItem
              leftIcon={<RiDeleteBin6Fill />}
              bgColor="red.500"
              _hover={{ bgColor: "red.700" }}
              ml="10px"
              buttonTitle="Delete"
              modalTitle="Delete Product"
              onClick={() => onDeleteProduct(product.id)}
              isLoading={isDeleteProductLoading}
            >
              <Text mb="10px">
                Are you sure do you want to delete this product ?
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Name : <Text as="strong">{product.name}</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Price : <Text as="strong">${product.price}</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Quantity : <Text as="strong">{product.quantity}</Text>
                </ListItem>
              </List>
            </ModalItem>
          </>
        ),
      };
    });
  }, [isDeleteProductLoading, onDeleteProduct, products?.results]);

  if (isLoading || isFetching) {
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
        <Box mt="-20px">
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
