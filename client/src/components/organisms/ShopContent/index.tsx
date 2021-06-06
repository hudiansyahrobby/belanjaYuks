import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import ReactHtmlParser from "react-html-parser";
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
            <Box fontSize="15px">{ReactHtmlParser(description)}</Box>
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
