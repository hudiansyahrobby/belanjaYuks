import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProductShopCard from "../../molecules/ProductShopCard";

type ShopContentProps = {
  description: string;
};
const ShopContent: React.FC<ShopContentProps> = ({ description }) => {
  return (
    <>
      <Tabs mt="30px">
        <TabList>
          <Tab
            _selected={{
              color: "gray.800",
              borderBottomColor: "gray.800",
            }}
          >
            About
          </Tab>
          <Tab
            _selected={{
              color: "gray.800",
              borderBottomColor: "gray.800",
            }}
          >
            Products
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontSize="15px">{description}</Text>
          </TabPanel>
          <TabPanel>
            <ProductShopCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ShopContent;
