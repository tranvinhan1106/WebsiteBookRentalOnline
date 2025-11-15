import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/trangchu/Home";
import Thongtinncanhan from './component/thongtincanhan/Thongtincanhan';
import Doimatkhau from './component/doimatkhau/Doimatkhau';
import Fomchinhsua from './component/thongtincanhan/Formchinhsua';
import Giohang from './component/giohang/Giohang';
import Tusachcanhan from './component/tusachcanhan/Tusachcanhan';
import Goiuudai from './component/goiuudai/Goiuudai';
import Sachdathue from './component/tusachcanhan/Sachdathue';
import LoginPage from './component/dangnhap/Dangnhap';
import AdminLayout from './component/admin/trangchu/AdminLayout';
import RegisterPage from './component/dangki/DangKi';
function App() {
  return (
    // <Home></Home>
    // <Thongtinncanhan></Thongtinncanhan>
    // <Fomchinhsua></Fomchinhsua>
    // <Doimatkhau></Doimatkhau>
    // <Tusachcanhan></Tusachcanhan>
    // <Sachdathue></Sachdathue>
    // <Goiuudai></Goiuudai>
    
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path='/dangki' element={<RegisterPage />} />
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/trangchu" element={<Home />} />
      <Route path="/thongtincanhan" element={<Thongtinncanhan />} />
      <Route path="/formchinhsua" element={<Fomchinhsua />} />
      <Route path="/doimatkhau" element={<Doimatkhau />} />
      <Route path="/giohang" element={<Giohang />} />
      <Route path='/goiuudai' element={<Goiuudai />} />
      <Route path='/sachdathue' element={<Sachdathue />} />
      <Route path='/tusachcanhan' element={<Tusachcanhan />} />
    </Routes>
  )
}

export default App;
