const useAuthenticated = () => {
  const isAuthenticated = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  let role;
  let shopId;
  let userId;
  if (user) {
    const _user = JSON.parse(user);
    role = _user.role;
    shopId = _user?.myShop?.id;
    userId = _user?.id;
  }

  return { isAuthenticated, role, shopId, userId };
};

export default useAuthenticated;
