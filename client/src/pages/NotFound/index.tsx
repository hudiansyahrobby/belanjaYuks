import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { ReactComponent as NotFoundImage } from "../../assets/images/not_found.svg";
import Layout from "../../components/atoms/Layout";
import LinkNavigation from "../../components/atoms/LinkNavigation";
import Title from "../../components/atoms/typography/Title";

const NotFound = () => {
  const Image = chakra(NotFoundImage);
  return (
    <Layout>
      <Box
        mt={28}
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Title mb="10">Page Not Found</Title>
        <Image height="80" width="md" />
        <LinkNavigation mt="10" to="/">
          Back To Home
        </LinkNavigation>
      </Box>
    </Layout>
  );
};
export default NotFound;
