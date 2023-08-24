import Footer from "layout/footer/Footer";
import { AuthProvider } from "layout/navigation/AuthConText";
import Header from "layout/navigation/Header";
import LoginPage from "oauth/LoginPage";
import MainPage from "page/MainPage";
import MyPage from "page/user/myPage/MyPage";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackBar from "layout/snackBar/SnackBar";
import MyPageUpdate from "page/user/myPage/MyPageUpdate";
import WithdrawalPage from "page/user/withdrawal/WithdrawalPage";
import WithdrawalComplete from "page/user/withdrawal/WithdrawalComplete";
import ProductRegisterPage from "page/product/productAdmin/ProductRegisterPage";
import ProductPage from "page/product/productAdmin/ProductPage";

const App: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <AuthProvider>
      <BrowserRouter>
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/updateInfo" element={<MyPageUpdate />} />
          <Route path="/withdrawal" element={<WithdrawalPage />} />
          <Route path="/exit" element={<WithdrawalComplete />} />
          <Route
            path="/productPage"
            element={<ProductPage setShowHeader={setShowHeader} setShowFooter={setShowFooter} />}
          />
          <Route path="/productRegister" element={<ProductRegisterPage />} />
        </Routes>
        {showFooter && <Footer />}
      </BrowserRouter>
      <SnackBar />
    </AuthProvider>
  );
};
export default App;
