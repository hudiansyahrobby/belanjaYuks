import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import queryString from "query-string";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useLocation } from "react-router";
import useDeleteShopById from "../../../hooks/Shop/useDeleteShopById";
import useShopsPagination from "../../../hooks/Shop/useShopsPagination";
import { ShopData } from "../../../types/ShopType";
import AlertMessage from "../../atoms/AlertMessage";
import Loading from "../../atoms/Loading";
import TableItem from "../../atoms/TableItem";

const AdminShopListTemplate = () => {
  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const pageNumber = parseInt((page as string) || "0");

  const toast = useToast();
  const { isLoading, isError, error, data: shops } = useShopsPagination(
    pageNumber
  );

  const { isLoading: isDeleteShopLoading, mutateAsync } = useDeleteShopById();

  const onDeleteShop = React.useCallback(
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
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    return shops?.results?.map((shop: ShopData) => {
      return {
        name: (
          <Flex alignItems="center">
            <Image
              src={shop.images}
              width="40px"
              height="40px"
              mr="15px"
              rounded="full"
            />
            <Text>{shop.name}</Text>
          </Flex>
        ),
        location: shop.location,
        action: (
          <Button
            bgColor="red.500"
            leftIcon={<RiDeleteBin6Fill />}
            onClick={() => onDeleteShop(shop.id)}
            isLoading={isDeleteShopLoading}
          >
            Delete
          </Button>
        ),
      };
    });
  }, [isDeleteShopLoading, onDeleteShop, shops?.results]);

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
              Shop List
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
              totalPage={shops.totalPages}
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminShopListTemplate;
