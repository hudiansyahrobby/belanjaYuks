import { Redirect, Route } from "react-router-dom";

const SellerRoute = ({ component: Component, ...rest }: any) => {
  const user = localStorage.getItem("user");
  let role = "";
  if (user) {
    const _user = JSON.parse(user);
    role = _user.role;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (role === "seller") {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default SellerRoute;
