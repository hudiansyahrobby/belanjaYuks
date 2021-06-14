import { Image } from "@chakra-ui/image";
import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCarts from "../../../hooks/Cart/useCarts";
import useDeleteFromCart from "../../../hooks/Cart/useDeleteFromCart";
import CircleButton from "../../atoms/CircleButton";
import LinkNavigation from "../../atoms/LinkNavigation";
import ChangeQuantityButton from "../ChangeQuantityButton";

interface CartCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  maxQuantity: number;
  defaultQuantity: number;
}

const CartCard: React.FC<CartCardProps> = ({
  id,
  image,
  title,
  price,
  maxQuantity,
  defaultQuantity,
}) => {
  const [quantity, setQuantity] = React.useState<number>(defaultQuantity);
  const { mutateAsync } = useDeleteFromCart();
  const { refetch } = useCarts();
  const toast = useToast();

  const onDeleteCart = async () => {
    await mutateAsync(id, {
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
  };
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} maxWidth="500px" mt="30px">
      <Image
        borderRadius="3xl"
        width="full"
        src={image}
        alt={title}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <VStack ml="20px" spacing="8px" align="left" mt={{ base: "10px", lg: 0 }}>
        <LinkNavigation
          to={`products/${id}`}
          fontWeight="extrabold"
          fontSize="20px"
        >
          {title}
        </LinkNavigation>
        <Text fontWeight="semibold" fontSize="17px" color="gray.800" mb="10px">
          ${price}
        </Text>
        <Flex justifyContent="space-between">
          <ChangeQuantityButton
            quantity={quantity}
            setQuantity={setQuantity}
            maxQuantity={maxQuantity}
          />
          <CircleButton
            icon={<RiDeleteBin6Line />}
            onClick={onDeleteCart}
            variant="outline"
            backgroundColor="gray.200"
          />
        </Flex>
      </VStack>
    </SimpleGrid>
  );
};

export default CartCard;
