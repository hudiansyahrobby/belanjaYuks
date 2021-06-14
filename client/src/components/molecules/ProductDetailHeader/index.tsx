import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { useHistory } from "react-router";
import StarRatings from "react-star-ratings";
import { capitalizeEachWord } from "../../../helpers/capitalizeEachWord";
import useAuthenticated from "../../../hooks/Auth/useAuthenticated";
import useAddToCart from "../../../hooks/Cart/useAddToCart";
import useFavorites from "../../../hooks/Favorite/useFavorites";
import useToggleFavorite from "../../../hooks/Favorite/useToggleFavorite";
import { ProductData } from "../../../types/ProductType";
import LinkNavigation from "../../atoms/LinkNavigation";
import Loading from "../../atoms/Loading";
import Price from "../../atoms/typography/Price";

interface ProductDetailHeaderProps {
  product: ProductData;
}

const ProductDetailHeader: React.FC<ProductDetailHeaderProps> = ({
  product,
}) => {
  const { mutateAsync } = useToggleFavorite();
  const { isAuthenticated } = useAuthenticated();
  const { data: favorites, isLoading, refetch } = useFavorites(
    !!isAuthenticated
  );
  const { mutateAsync: addToCart } = useAddToCart();

  const toast = useToast();
  const history = useHistory();

  const onToggleFavorite = async () => {
    await mutateAsync(product.id, {
      onSuccess: (success) => {
        toast({
          title: "Success",
          description: success?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        refetch();
      },
      onError: (error) => {
        const appError: any = error;
        if (appError?.response?.status === 403) {
          history.push("/login");
        } else {
          toast({
            title: "Error",
            description: appError?.response?.data?.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
    });
  };

  const [quantity, setQuantity] = React.useState<number>(1);

  const onAddToCart = async () => {
    await addToCart(product.id, {
      onSuccess: (success) => {
        console.log(success);
        toast({
          title: "Success",
          description: success?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error) => {
        const appError: any = error;
        if (appError?.response?.status === 403) {
          history.push("/login");
        } else {
          toast({
            title: "Error",
            description: appError?.response?.data?.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  const isFavorited = favorites?.products?.some((favorite: ProductData) => {
    return favorite.id === product.id;
  });

  return (
    <VStack spacing="8px" align="flex-start">
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Heading as="h1" fontSize={{ base: "24px", md: "27px" }}>
          {capitalizeEachWord(product.name)}
        </Heading>
        <Icon
          as={GoHeart}
          color={isFavorited ? "red.500" : "black"}
          onClick={onToggleFavorite}
          fontSize="27px"
          _hover={{
            color: isFavorited ? "black" : "red.500",
            cursor: "pointer",
          }}
        />
      </Flex>
      <Flex alignItems="flex-end">
        <Box>
          <StarRatings
            rating={5}
            starRatedColor="#FBBF24"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            name="rating"
          />
        </Box>

        <Text color="gray.400" ml="10px" lineHeight="20px">
          (4.5) 5 reviews
        </Text>
      </Flex>

      <Price price={product.price} />
      <Divider />
      <Flex alignItems="center">
        <AiOutlineShop />{" "}
        <LinkNavigation ml="8px" to={`/shop/${product.seller.id}`}>
          {product.seller.name}
        </LinkNavigation>
      </Flex>

      <Flex alignItems="center">
        <GiBoxUnpacking />{" "}
        <Text ml="8px" fontSize="15px">
          Delivered From {product.seller.location}
        </Text>
      </Flex>

      <Flex alignItems="center">
        <FaBoxOpen />{" "}
        <Text ml="8px" fontSize="15px">
          Quantity {product.quantity}
        </Text>
      </Flex>
      {/* <Flex py="15px" alignItems="center">
        <ChangeQuantityButton
          quantity={quantity}
          setQuantity={setQuantity}
          maxQuantity={product.quantity}
        />
        <Text
          color="gray.500"
          ml="20px"
          fontSize={{ base: "12px", sm: "16px" }}
        >
          Max Quantity : {product.quantity}
        </Text>
      </Flex> */}
      <Button width={{ base: "full", sm: "max-content" }} onClick={onAddToCart}>
        Add To Cart
      </Button>
    </VStack>
  );
};

export default ProductDetailHeader;
