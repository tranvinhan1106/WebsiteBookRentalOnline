import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import trangchu from '../img/trangchu.jpg';

const axiosSessionInstance = axios.create({
    baseURL : "http://localhost:8080",
    withCredentials : true
})

export function Header() {

    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
        try{
            await axiosSessionInstance.post("/logout");
            localStorage.removeItem("role");
            navigate("/");
        }catch(error) {
            console.error("Logout failed:", error);
            localStorage.removeItem("role");
            navigate("/");
        }
    }
    return (
              <header>
                <div className="container">
                    <div>
                        <img src={trangchu} alt="Lỗi" className="logo" />
                    </div>
                    <nav>
                        <ul>
                            <li className="active"><a href="/trangchu"><i className="bi bi-shop"></i> Trang chủ</a></li>
                            <li><a href="/thongtincanhan"><i className="bi bi-file-lock"></i> Thông tin cá nhân</a></li>
                            <li><a href="/tusachcanhan"><i className="bi bi-inboxes"></i> Tủ sách cá nhân</a></li>
                            <li><a href="/goiuudai"><i className="bi bi-stars"></i> Gói ưu đãi</a></li>
                            <li><a href="/giohang"><i className="bi bi-cart2"></i> Giỏ sách</a></li>
                            <li><a href="#" onClick={handleLogout}><i className="bi bi-box-arrow-right"></i> Đăng xuất</a></li>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
    )
};
export default Header;