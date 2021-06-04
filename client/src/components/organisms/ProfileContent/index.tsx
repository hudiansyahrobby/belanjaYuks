import React from "react";
import CartProductList from "../CartProductList";
import FavoriteProductList from "../FavoriteProductList";

const ProfileContent = () => {
  return (
    <>
      <CartProductList />
      <FavoriteProductList />
    </>
  );
};

export default ProfileContent;
