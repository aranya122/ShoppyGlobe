import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

// Lazy loading the components
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const ProductList = lazy(() => import("./Components/ProductList"));
const Cart = lazy(() => import("./Components/cart"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Checkout = lazy(() => import("./Components/Checkout"));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" 
          element={<About />} />
          <Route path="/contact" 
          element={<Contact />} />
          <Route path="/product" 
          element={<ProductList />} />
          <Route path="/products/:id" 
          element={<ProductDetail />} />
          <Route path="/"
           element={<ProductList />} />
          <Route path="/cart" 
          element={<Cart />} />
          <Route path="/browse" 
          element={<ProductList />} />
          <Route path="/checkout" 
          element={<Checkout />} />
          <Route path="*" 
          element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;