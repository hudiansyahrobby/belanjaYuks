import React from "react";
import HomeTemplate from "../../components/templates/HomeTemplate";
import { Helmet } from "react-helmet";
import { TITLE } from "../../constants/item";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <link
          rel="icon"
          type="image/png"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
          sizes="16x16"
        />
      </Helmet>
      <HomeTemplate />
    </>
  );
};

export default Home;
