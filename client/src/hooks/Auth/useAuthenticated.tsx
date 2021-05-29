const useAuthenticated = () => {
  const isAuthenticated = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  let role;
  if (user) {
    const _user = JSON.parse(user);
    role = _user.role;
  }

  return { isAuthenticated, role };
};

export default useAuthenticated;
