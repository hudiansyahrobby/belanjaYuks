import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { ReactComponent as UnauthorizedImage } from "../../assets/images/unauthorized.svg";
import Layout from "../../components/atoms/Layout";
import LinkNavigation from "../../components/atoms/LinkNavigation";
import Title from "../../components/atoms/typography/Title";

const Unauthorized = () => {
  const Image = chakra(UnauthorizedImage);
  return (
    <Layout>
      <Box
        mt={28}
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Title mb="10">Unauthorized</Title>
        <Image height="80" width="md" />
        <LinkNavigation mt="10" to="/">
          Back To Home
        </LinkNavigation>
      </Box>
    </Layout>
  );
};
export default Unauthorized;
