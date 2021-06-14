import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Loading from "./components/atoms/Loading";
import AdminRoute from "./hooks/Auth/AdminRoute";
import SellerRoute from "./hooks/Auth/SellerRoute";
import PrivateRoute from "./hooks/Auth/PrivateRoute";

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
const SellerHistory = React.lazy(() => import("./pages/SellerHistory"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SellerDashboard = React.lazy(() => import("./pages/SellerDashboard"));

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
            <PrivateRoute path="/favorites" exact component={Favorite} />
            <PrivateRoute path="/carts" exact component={MyCart} />
            <PrivateRoute path="/histories" exact component={MyHistory} />
            <PrivateRoute path="/me" exact component={MyProfile} />
            <AdminRoute
              path="/admin/histories"
              exact
              component={AdminHistory}
            />
            <AdminRoute path="/admin/shops" exact component={AdminShopList} />
            <AdminRoute path="/admin" exact component={AdminDashboard} />
            <SellerRoute path="/seller" exact component={SellerDashboard} />
            <SellerRoute
              path="/seller/histories"
              exact
              component={SellerHistory}
            />
            <SellerRoute
              path="/seller/products"
              exact
              component={AdminProductList}
            />
            <SellerRoute
              path="/seller/products/create"
              exact
              component={CreateProduct}
            />
            <SellerRoute path="/shops/create" component={CreateShop} />
            <Route path="/shops" exact component={Shops} />
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
