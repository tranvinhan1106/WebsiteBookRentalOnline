import React, { useState } from 'react';
// 1. IMPORT CSS MODULE
import style from '../dangki/dangki.module.css'; 
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const [hoTen, setHoTen] = useState('');
    const [email, setEmail] = useState('');
    const [gioiTinh, setGioiTinh] = useState('Nam');
    const [diaChi, setDiaChi] = useState('');
    const [sdt, setSdt] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState('');
    const [dongYDieuKhoan, setDongYDieuKhoan] = useState(false);

    // 3. Hàm xử lý Submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn form gửi đi
        
        if (matKhau !== nhapLaiMatKhau) {
            alert("Mật khẩu nhập lại không khớp!");
            return;
        }
        if (!dongYDieuKhoan) {
            alert("Bạn phải đồng ý với điều khoản dịch vụ!");
            return;
        }

        const formData = {
            hoTen,
            email,
            gioiTinh,
            diaChi,
            sdt,
            ngaySinh,
            matKhau
        };

        console.log("Dữ liệu Đăng ký:", formData);
        // TODO: Gọi API đăng ký ở đây
        // GỌI API xong thì:
        // alert("Đăng ký thành công!");
        // navigate('/dangnhap');
    };
    
    return (
        <div className={`${style.background} ${style.pageFadeIn}`}>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <h2>Đăng Ký</h2>

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
                    <p>Bạn đã có tài khoản ? <button onClick={()=>navigate("/")}>Đăng nhập</button></p>
                </div>
            </form> 
        </div>
    );
}

export default RegisterPage;