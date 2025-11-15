import React, { useState } from 'react';
// 1. SỬA LẠI IMPORT
import style from '../doimatkhau/Doimatkhau.module.css';
import * as customerService from '../../service/CustomerService';
import { useNavigate } from 'react-router-dom';
import icon from '../img/icon.jpg';
import Header from '../header&footer/Header'; // (Giả sử đường dẫn này đúng)
import Popup from '../popup/popup';

function Doimatkhau() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // 3. THÊM STATE CHO POPUP (thay thế alert)
    const [popup, setPopup] = React.useState({
        message: "",
        type: "error",
    });
    const navigate = useNavigate();

    const handleSubmit = async () => {
        // 4. SỬA LẠI LOGIC VALIDATION (dùng setPopup thay vì alert)
        if (!oldPassword || !newPassword || !confirmPassword) {
            setPopup({ message: "Vui lòng nhập đầy đủ các trường!", type: "error" });
            return;
        }
        if (newPassword !== confirmPassword) {
            setPopup({ message: "Mật khẩu mới không khớp!", type: "error" });
            return;
        }

        try {
            // Gọi service (đã đúng)
            await customerService.changePassword(oldPassword, newPassword);

            // Thành công
            setPopup({ message: "Đổi mật khẩu thành công!", type: "success" });

            // Reset form
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');

            // Chờ 2 giây rồi chuyển về trang thông tin cá nhân
            setTimeout(() => {
                navigate('/thongtincanhan');
            }, 2000);

        } catch (error) {
            // 4. SỬA LẠI LOGIC LỖI (dùng setPopup thay vì alert)
            // Giả sử service trả về lỗi 400 nếu sai mật khẩu cũ
            if (error.response && error.response.status === 400) {
                setPopup({ message: "Mật khẩu cũ không đúng!", type: "error" });
            } else {
                setPopup({ message: "Có lỗi xảy ra, vui lòng thử lại!", type: "error" });
            }
            console.error(error);
        }
    };

    // Hàm reset popup (bắt buộc)
    const handlePopupClose = () => {
        setPopup(prev => ({ ...prev, message: "" }));
    };

    // Hàm reset form
    const handleCancel = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            {/* 5. THÊM COMPONENT POPUP */}
            <Popup message={popup.message} type={popup.type} onClose={handlePopupClose} />

            {/* 6. SỬA TẤT CẢ CLASSNAME SANG CSS MODULES */}
            <div className={style.wrapper}>

                {/* 7. SỬ DỤNG COMPONENT HEADER (thay vì code lặp) */}
                <Header />

                {/* (Xóa bỏ <header>...</header> cũ) */}

                <div className={`${style['color-body']} ${style['main-content']}`}>
                    <div className={style.title}>
                        <span>Đổi mật khẩu</span>
                        <hr />
                    </div>

                    <div className={style.containerSecond}>
                        <div className={style.vertical}>
                            {/* (Giả sử file module có class 'info' và 'passedit') */}
                            <a href='/thongtincanhan'><button className={style.info}>🤯 Thông tin cá nhân</button></a>
                            <a href='/doimatkhau'> <button className={style.passedit}>🤯 Đổi mật khẩu</button></a>
                        </div>

                        <div className={style['form-edit']}>
                            <div className={style.horizontalpass}>
                                <br />
                                <br />
                                <p>Nhập mật khẩu cũ : 
                                    <input type={showPassword ? "text" : "password"} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} /></p>
                                <br />
                                <br />
                                <p>Nhập mật khẩu mới :
                                    <input type={showPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /></p>
                                <br />
                                <br />
                                <p>Xác nhận mật khẩu mới :
                                    <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></p>

                            </div>
                            <div className={style.edit}>
                                <button type="button" onClick={handleSubmit}>Cập nhập</button>
                                <button type="reset" onClick={handleCancel}>Hủy bỏ</button>
                                <label>
                                    <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} /> Hiển thị mật khẩu
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer">
                        <div className="slogan">
                            <p style={{ fontSize: '20px' }}>Tri thức là đích đến của mọi hành trình</p>
                        </div>
                        <hr />
                        <div className="contact-container">
                            <div className="contact">
                                <p>Hotline: 0397409029</p>
                                <p>Email: Thienduongsachdientu@gmail.com</p>
                                <p>Địa chỉ văn phòng: 120 Hoàng Minh Thảo, Hòa Khánh Nam, Quận Liên Chiểu, Tp Đà Nẵng</p>
                            </div>
                            <div className="contactSecond">
                                <p>Theo dõi chúng tôi trên các nền tảng:</p>
                                <p><i className="bi bi-facebook"></i> Tương lai mới</p>
                                <p><i className="bi bi-youtube"></i> Thiên đường sách điện tử</p>
                            </div>
                            <div className="icon">
                                <img src={icon} alt="Không có" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Doimatkhau;