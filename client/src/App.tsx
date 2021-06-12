import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Loading from "./components/atoms/Loading";
import AdminRoute from "./hooks/Auth/AdminRoute";

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
const MyHistory = React.lazy(() => import("./pages/MyHistory"));
const AdminHistory = React.lazy(() => import("./pages/AdminHistory"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
            <Route path="/histories" exact component={MyHistory} />
            <AdminRoute
              path="/admin/histories"
              exact
              component={AdminHistory}
            />
            <AdminRoute path="/admin/shops" exact component={AdminShopList} />
            <AdminRoute path="/admin" exact component={AdminDashboard} />
            <Route path="/me" exact component={MyProfile} />
            <Route path="/seller" exact component={AdminDashboard} />
            <Route path="/seller/products" exact component={AdminProductList} />
            <Route
              path="/seller/products/create"
              exact
              component={CreateProduct}
            />
            <Route path="/shops" exact component={Shops} />
            <Route path="/shops/create" component={CreateShop} />
            <Route path="/shops/:shopId" component={ShopDetail} />
            <Route path="/unauthorized" exact component={Unauthorized} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
