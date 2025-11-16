import React from "react";
// 1. Import CSS Module (Đã đúng)
import style from "../dangnhap/dangnhap.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/popup";

const axiosSessionInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true
});


function LoginPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [popup, setPopup] = React.useState({
        message: "",
        type: "error",
    });
    const navigate = useNavigate();

    // ... (Hàm handleLogin và handlePopupClose của bạn đã đúng, giữ nguyên) ...
    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        try {
            let response = await axiosSessionInstance.post("/login", formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            try {
                const userResponse = await axiosSessionInstance.get("/api/auth/me");
                const role = userResponse.data.role;
                localStorage.setItem("role", role);
                setPopup({
                    message: "Đăng nhập thành công!",
                    type: "success"
                });
                console.log(role);
                setTimeout(() => {
                    if (role === "ADMIN") {
                        navigate("/admin");
                    } else if (role === "USER") {
                        navigate("/trangchu");
                    }
                }, 3000)

            } catch (userError) {
                setPopup({ message: "Lỗi khi lấy thông tin người dùng. Vui lòng thử lại sau.", type: "error" });
                console.error("Lỗi khi lấy thông tin người dùng:", userError);
            }
        } catch (error) {
            setPopup({
                message: "Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.",
                type: "error"
            });
            console.error("Lỗi đăng nhập:", error);
        }
    }
    const handlePopupClose = () => {
        setPopup(prev => ({ ...prev, message: "" }));
    };

    return (
        <div className={`${style.background} ${style.pageFadeIn}`}>
            <Popup message={popup.message} type={popup.type} onClose={handlePopupClose}></Popup>
            <div className={style['login-container']}>
                <form className={style['login-box']}>
                    <h2>Đăng Nhập</h2>

                    <div className={style.labelVSTextBox}>
                        <label className={style.labelLogin} htmlFor="username">Tên tài khoản hoặc Email</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Nhập tài khoản"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            className={style.inputLogin}

                        />

                        <label className={style.labelLogin} htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className={style.inputLogin}

                        />
                    </div>

                    <button type="submit" className={style['btn-login']} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <a href="#" className={style.forgot}>
                        Quên mật khẩu?
                    </a>

                    <div className={style['social-login']}>
                        <button type="button" className={style.google} title="Đăng nhập bằng Google">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                alt="Google"
                            />
                        </button>
                        <button
                            type="button"
                            className={style.facebook}
                            title="Đăng nhập bằng Facebook"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                                alt="Facebook"
                            />
                        </button>
                    </div>

                    <hr id="hr" />

                    <p>Bạn chưa có tài khoản?</p>
                    <button
                        type="button"
                        className={style['btn-register']}
                        onClick={() => navigate('/dangki')} // Dùng navigate
                    >
                        Đăng kí
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;