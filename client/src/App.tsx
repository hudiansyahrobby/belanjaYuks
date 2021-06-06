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
const AdminProductList = React.lazy(() => import("./pages/AdminProductList"));
const AdminShopList = React.lazy(() => import("./pages/AdminShopList"));
const CreateShop = React.lazy(() => import("./pages/CreateShop"));
const CreateProduct = React.lazy(() => import("./pages/CreateProduct"));
const Shops = React.lazy(() => import("./pages/Shops"));
const ShopDetail = React.lazy(() => import("./pages/ShopDetail"));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Register} />
            <Route path="/forgot-password" exact component={ForgetPassword} />
            <Route path="/change-password" exact component={ChangePassword} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/favorites" exact component={Favorite} />
            <Route path="/carts" exact component={MyCart} />
            <Route path="/me" exact component={MyProfile} />
            <Route path="/admin/shops" exact component={AdminShopList} />
            <Route path="/admin" exact component={AdminDashboard} />
            <Route path="/admin/products" exact component={AdminProductList} />
            <Route
              path="/admin/products/create"
              exact
              component={CreateProduct}
            />
            <Route path="/shops" exact component={Shops} />
            <Route path="/shops/create" component={CreateShop} />
            <Route path="/shops/:shopId" component={ShopDetail} />
          </Switch>
        </Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
