import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


//1. 전체 상품 페이지 / 로그인 페이지 / 상품 상세 페이지
//1-1 네이게이션바 만들기
//2. 전체상품 페이지 > 전체 상품
//3. 로그인 버튼 클릭 > 로그인 페이지
//4. 상품 디테일 클릭 > 로그인이 안되어 있을 경우 > 로그인 페이지
//5. 상품 디테일 클릭 > 로그인이 되어 있을 경우 > 상품 디테일 페이지
//6. 상품디테일 화면에서 로그아웃 버튼 클릭 > 로그아웃 > 다시 로그인 페이지로 이동
//7. 로그아웃일 때 > 로그인 버튼 / 로그인일 때 > 로그아웃 버튼 
//8. 상품 검색 가능


function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login/>} />
        <Route path="product/:id" element={<PrivateRoute/>} />
      </Routes>
    </div>
  );
}

export default App;
