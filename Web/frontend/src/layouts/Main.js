import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "../Pages/product/Detail";
import Profile from "../Pages/profile/Profile";
import Orders from "../Pages/profile/Orders";
import Cart from "../Pages/cart/Cart";
import Address from "../Pages/profile/Address";
import Wishlist from "../Pages/profile/Wishlist";
import Seller from "../Pages/profile/Seller";
import Setting from "../Pages/profile/Setting";
import AllCategory from "../Pages/profile/Allcategory";
import CategoryGridView from "../Pages/profile/CategoryGridView";
import CategoryListView from "../Pages/profile/CategoryListView";
import Content from "../Pages/Content";
import Login from "../Pages/user/Login";
import Register from "../Pages/user/Register";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<Detail />} />
      <Route path="/page-profile-main" element={<Profile />} />
      <Route path="/page-profile-orders" element={<Orders />} />
      <Route path="/page-shopping-cart" element={<Cart />} />
      <Route path="/page-profile-address" element={<Address />} />
      <Route path="/page-profile-wishlist" element={<Wishlist />} />
      <Route path="/page-profile-seller" element={<Seller />} />
      <Route path="/page-profile-setting" element={<Setting />} />
      <Route path="/page-category" element={<AllCategory />} />
      <Route path="/page-listing-grid" element={<CategoryGridView />} />
      <Route path="/page-listing-list" element={<CategoryListView />} />
      <Route path="/page-content" element={<Content />} />
      <Route path="/page-user-login" element={<Login />} />
      <Route path="/page-user-register" element={<Register />} />
    </Routes>
  </main>
);
export default Main;
