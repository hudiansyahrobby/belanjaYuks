import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import useShop from "../../../hooks/Shop/useShop";
import { ShopData } from "../../../types/ShopType";
import AlertMessage from "../../atoms/AlertMessage";
import Layout from "../../atoms/Layout";
import Loading from "../../atoms/Loading";
import ShopContent from "../../organisms/ShopContent";
import ShopHeader from "../../organisms/ShopHeader";

const ShopDetailTemplate = () => {
  const params: any = useParams();
  const { shopId } = params;

  const {
    isLoading: isShopLoading,
    isError: isShopError,
    data,
    error,
  } = useShop(shopId);

  if (isShopLoading) {
    return <Loading />;
  }

  const shop: ShopData = data;

  const customError: any = error;
  const appError = customError?.response?.data?.message;

  return (
    <Layout>
      <Box mt="120px" mx={{ base: "20px", lg: "auto" }} maxWidth="container.lg">
        {isShopError ? (
          <AlertMessage
            title="Something Went Wrong"
            description={appError}
            status="error"
          />
        ) : (
          <>
            <ShopHeader
              name={shop.name}
              subtitle={shop.location}
              image={shop.images}
            />

            <ShopContent description={shop.description} />
          </>
        )}
      </Box>
    </Layout>
  );
};

export default ShopDetailTemplate;
