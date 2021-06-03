import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Loading from "./components/atoms/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));
const Products = React.lazy(() => import("./pages/Products"));
const Favorite = React.lazy(() => import("./pages/Favorite"));
const MyCart = React.lazy(() => import("./pages/MyCart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/forgot-password" component={ForgetPassword} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Route path="/favorites" exact component={Favorite} />
            <Route path="/carts" exact component={MyCart} />
            <Route path="/me" exact component={MyProfile} />
            <Route path="/admin" exact component={AdminDashboard} />
          </Suspense>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
