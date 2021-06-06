const useAuthenticated = () => {
  const isAuthenticated = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  let role;
  let shopId;
  if (user) {
    const _user = JSON.parse(user);
    role = _user.role;
    shopId = _user?.myShop?.id;
  }

  return { isAuthenticated, role, shopId };
};

export default useAuthenticated;
