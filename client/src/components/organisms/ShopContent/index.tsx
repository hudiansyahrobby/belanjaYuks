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
import ProductsCard from "../../molecules/ProductsCard";

const ShopContent = () => {
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
            <Text fontSize="15px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              corrupti ipsa, molestiae sunt minima quibusdam qui, reiciendis ad,
              perferendis numquam voluptatem odio veritatis? Vero voluptatem
              nesciunt doloribus praesentium consequatur nobis provident eos
              possimus voluptatibus ducimus accusantium delectus recusandae
              optio deleniti aliquid, iste ut unde laboriosam nam, asperiores
              fugit eligendi. Deserunt, expedita! Totam dolor voluptas aliquam
              architecto deserunt voluptatum enim repudiandae quaerat veniam
              soluta sunt ratione velit, earum facilis dolorem corporis non vel?
              Corrupti iste accusamus ex dignissimos. Aperiam voluptas quibusdam
              deserunt veritatis, ea repellendus reiciendis nisi quas expedita
              ad, necessitatibus ipsam rem id illum. Cumque, quod hic laudantium
              nisi doloremque suscipit illum animi inventore commodi ad! At, ex
              provident dicta accusantium temporibus itaque quod. Fugit at nobis
              blanditiis. Quasi, aspernatur. Illo ipsa iure maxime hic quo
              ratione magni nisi, repellendus fugiat obcaecati facilis culpa
              fuga earum. Quidem labore quae nihil assumenda ipsam facere porro
              vel ea, corrupti officiis esse debitis?
            </Text>
          </TabPanel>
          <TabPanel>
            <ProductsCard />
            <Button
              variant="outline"
              mx="auto"
              display="block"
              my="40px"
              colorScheme="telegram"
            >
              Load More
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ShopContent;
