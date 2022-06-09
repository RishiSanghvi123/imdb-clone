import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";

function App() {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        {/* <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
