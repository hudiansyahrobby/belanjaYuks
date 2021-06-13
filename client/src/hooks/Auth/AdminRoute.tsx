import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }: any) => {
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
        if (role === "admin") {
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

export default AdminRoute;
