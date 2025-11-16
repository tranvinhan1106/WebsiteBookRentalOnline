import React, { useState } from 'react';
import axios from 'axios';
import Popup from "../popup/popup";
import style from '../dangki/dangki.module.css';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
});

function RegisterPage() {
    const navigate = useNavigate();
    const [popup, setPopup] = React.useState({
        message: "",
        type: "error",
    });
    const [userName, setUserName] = useState('');
    const [hoTen, setHoTen] = useState('');
    const [email, setEmail] = useState('');
    const [gioiTinh, setGioiTinh] = useState('Nam');
    const [diaChi, setDiaChi] = useState('');
    const [sdt, setSdt] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState('');
    const [dongYDieuKhoan, setDongYDieuKhoan] = useState(false);



    const handleSubmit = async (e) => {
        await e.preventDefault();

        if (matKhau !== nhapLaiMatKhau) {
            setPopup({ message: "Mật khẩu nhập lại không khớp!", type: "error" });
            return;
        }
        if (!dongYDieuKhoan) {
            setPopup({ message: "Bạn phải đồng ý với điều khoản dịch vụ!", type: "error" });
            return;
        }



        const gioiTinhBool = gioiTinh === 'Nam';

        const formData = {
            userName,
            hoTen,
            email,
            gioiTinh: gioiTinhBool,
            diaChi,
            sdt,
            ngaySinh,
            matKhau
        };
        console.log("Dữ liệu Đăng ký:", formData);
        console.log("Dữ liệu đang gửi lên (handleSubmit):", formData);


        try {
            await axiosInstance.post('/api/auth/register', formData)
            setPopup({ message: "Đăng ký thành công! Chuyển hướng đến trang đăng nhập...", type: "success" });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            let errorMessage = "Đăng ký thất bại. Vui lòng thử lại.";
            if (error.response && error.response.data) {
                errorMessage = error.response.data;
            }
            setPopup({ message: errorMessage, type: "error" });
            console.error("Lỗi đăng ký:", error);
        }
    };

    const handlePopupClose = () => {
        setPopup(prev => ({ ...prev, message: "" }));
    }

    return (
        <div className={`${style.background} ${style.pageFadeIn}`}>
            <Popup message={popup.message} type={popup.type} onClose={handlePopupClose} />
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <h2>Đăng Ký</h2>
                <label>Tên tài khoản</label>
                <input
                    type="text"
                    placeholder="Nhập Tên tài khoản (để đăng nhập)"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <label>Họ và tên</label>
                <input
                    type="text"
                    placeholder="Nhập Họ và tên"
                    value={hoTen}
                    onChange={(e) => setHoTen(e.target.value)}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Nhập Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className={style.gender}>
                    <label>Giới tính:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Nam"
                        checked={gioiTinh === 'Nam'}
                        onChange={(e) => setGioiTinh(e.target.value)}
                    /> Nam
                    <input
                        type="radio"
                        name="gender"
                        value="Nữ"
                        checked={gioiTinh === 'Nữ'}
                        onChange={(e) => setGioiTinh(e.target.value)}
                    /> Nữ
                </div>

                <label>Địa chỉ</label>
                <input
                    type="text"
                    placeholder="Nhập Địa chỉ"
                    value={diaChi}
                    onChange={(e) => setDiaChi(e.target.value)}
                    required
                />

                <label>Số điện thoại</label>
                <input
                    type="text"
                    placeholder="Nhập SĐT"
                    value={sdt}
                    onChange={(e) => setSdt(e.target.value)}
                    required
                />

                <label>Ngày sinh</label>
                <input
                    type="date"
                    value={ngaySinh}
                    onChange={(e) => setNgaySinh(e.target.value)}
                    required
                />

                <label>Mật khẩu</label>
                <input
                    type="password"
                    placeholder="Nhập Mật khẩu"
                    value={matKhau}
                    onChange={(e) => setMatKhau(e.target.value)}
                    required
                />

                <label>Nhập lại mật khẩu</label>
                <input
                    type="password"
                    placeholder="Nhập lại Mật khẩu"
                    value={nhapLaiMatKhau}
                    onChange={(e) => setNhapLaiMatKhau(e.target.value)}
                    required
                />

                <div className={style.terms}>
                    <input
                        type="checkbox"
                        checked={dongYDieuKhoan}
                        onChange={(e) => setDongYDieuKhoan(e.target.checked)}
                    /> Đồng ý với Điều khoản dịch vụ và Chính sách
                    bảo mật
                </div>

                <button className={style.btn}>Đăng kí</button>

                <div className={style['login-link']}>
                    <p>Bạn đã có tài khoản ? <button onClick={() => navigate("/")}>Đăng nhập</button></p>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;