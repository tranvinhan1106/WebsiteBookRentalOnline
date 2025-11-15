import icon from '../img/icon.jpg';
import trangchu from '../img/trangchu.jpg';
import './Thongtincanhan.css';
import * as customerService from '../../service/CustomerService';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThongTinCaNhanSkeleton } from '../skeletonUI/ThongTinCaNhanSkeleton';
export function Thongtinncanhan() {

    const [customer, setCustomer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const data = await customerService.getCurrentCustomer();
                if (data) {
                    setCustomer(data);
                } else {
                    console.error('Không tìm thấy dữ liệu khách hàng');
                    navigate('/');
                }
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('Chuyển hướng đến trang đăng nhập do lỗi xác thực');
                    navigate('/');
                } else {
                    console.error('Lỗi khi lấy thông tin khách hàng:', error);
                    setCustomer(null);
                }
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
            }
        };
        fetchCustomer();
    }, [navigate]);


    // if (isLoading) {
    //     return <div className="flex items-center justify-center h-screen bg-gray-100">
    //         <div className="text-xl text-gray-700"> <ThongTinCaNhanSkeleton />
    //         </div>
    //     </div>
    // }

    if (!customer) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-xl text-red-500">Không thể tải thông tin. Vui lòng đăng nhập lại.</div>
                setTimeout(() => {
                    navigate('/')
                },3000)
            </div>
        );
    }

    const formatGender = (gender) => {
        return gender ? "Nam" : "Nữ";
    };

    const formatDate = (date) => {
        if (!date) return 'N/A';
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) return 'N/A';
        return parsedDate.toLocaleDateString('vi-VN');
    };

    const formatPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return 'N/A';
        return phoneNumber.startsWith('0') ? phoneNumber : '0' + phoneNumber;
    };

    console.log('Customer data:', customer);

    return (
        <>
            <div className="wrapper">
                <header>
                    <div className="container">
                        <div>
                            <img src={trangchu} alt="Lỗi" className="logo" />
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/trangchu"><i className="bi bi-shop"></i> Trang chủ</a></li>
                                <li className="active"><a href="/thongtincanhan"><i className="bi bi-file-lock"></i> Thông tin cá nhân</a></li>
                                <li><a href="/tusachcanhan"><i className="bi bi-inboxes"></i> Tủ sách cá nhân</a></li>
                                <li><a href="/goiuudai"><i className="bi bi-stars"></i> Gói ưu đãi</a></li>
                                <li><a href="/giohang"><i className="bi bi-cart2"></i> Giỏ sách</a></li>
                                <li><a href="#"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a></li>
                            </ul>
                        </nav>
                    </div>
                    <hr />
                </header>
                {isLoading ? (
                    <div className="color-body main-content">
                        <ThongTinCaNhanSkeleton />
                    </div>
                ) : (
                    
                <div className="color-body main-content">
                    <div className="title">
                        <span>Thông tin cá nhân</span>
                        <hr />
                    </div>
                    <div className="containerSecond">
                        <div className="vertical">
                            <button className="info1">🤯 Thông tin cá nhân</button>
                            <a href='/doimatkhau'> <button className="pass">🤯 Đổi mật khẩu</button></a>
                        </div>
                        <div className="form-edit">
                            <div className="horizontalttcn">
                                <div className="horizontal-left">
                                    <span>Tên: {customer.customerName}</span> <br />
                                    <span>Giới tính: {formatGender(customer.gender)}</span> <br />
                                    <span>Ngày sinh: {formatDate(customer.birthday)}</span> <br />
                                    <span>Số điện thoại: {formatPhoneNumber(customer.phoneNumber)}</span>
                                </div>
                                <div className="horizontal-right">
                                    <span>Địa chỉ: {customer.address}</span> <br />
                                    <span>Số lượng sách đã thuê: 100</span> <br />
                                    <span>Gmail: {customer.email}</span> <br />
                                </div>
                            </div>
                            <div className="edit">
                                <a href='/formchinhsua'><button>Chỉnh Sửa</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                )}
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
    )
}
export default Thongtinncanhan;