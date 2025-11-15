import icon from '../img/icon.jpg';
import trangchu from '../img/trangchu.jpg';
import './Thongtincanhan.css';
import Thongtinncanhan from './Thongtincanhan';
import { useEffect, useState } from 'react';
import * as customerService from '../../service/CustomerService';


export function Fomchinhsua() {
    const [customer, setCustomer] = useState({
        customerName: '',
        gender: '',
        birthday: '',
        phoneNumber: '',
        address: '',
        email: ''
    });

    const getAllCustomer = async () => {
        let temp = await customerService.getCurrentCustomer();
        setCustomer(temp);
    }
    useEffect(() => {
        getAllCustomer();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({
            ...customer,
            [name]: value
        });
    }

    const handleSubmit = async () => {
        try {
            console.log('Trước khi chỉnh sửa:', customer);
            const response = await customerService.editCustomer(customer);
            console.log('Phản hồi từ API:', response);
            alert('Chỉnh sửa thành công!');
        } catch (error) {
            console.error('Lỗi chỉnh sửa thông tin:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!');
        }
        console.log('Sau khi chỉnh sửa:', customer);

    }
    const formatGender = (gender) => {
        return gender ? "Nam" : "Nữ";
    };



    const formatDate = (date) => {
        if (!date) return 'N/A';
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) return 'N/A';
        const year = parsedDate.getFullYear();
        const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const day = String(parsedDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formatPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return 'N/A';
        return phoneNumber.startsWith('0') ? phoneNumber : '0' + phoneNumber;
    };

    return (


        <> <div className="wrapper">
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
            <div className="color-body main-content">
                <div className="title">
                    <span>Chỉnh sửa thông tin cá nhân</span>
                    <hr />
                </div>
                <div className="containerSecond">
                    <div className="vertical">
                        <button className="info">🤯 Thông tin cá nhân</button>
                        <button className="pass">🤯 Đổi mật khẩu</button>
                    </div>
                    <div className="form-edit">
                        <div className="horizontalttcn">
                            <div className="horizontal-left">
                                <span>Tên: <input type="text" name="customerName" value={customer.customerName} onChange={handleChange} /></span> <br />
                                <span>Giới tính:
                                    <label>
                                        <input type="radio" name="gender" value="Nam" checked={formatGender(customer.gender) === 'Nam'} onChange={handleChange} /> Nam
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="Nữ" checked={formatGender(customer.gender) === 'Nữ'} onChange={handleChange} /> Nữ
                                    </label>
                                </span> <br />
                                <span>Ngày sinh: <input type="date" name="birthday" value={formatDate(customer.birthday)} onChange={handleChange} /></span><br />
                                <span>Số điện thoại: <input type="number" name="phoneNumber" value={formatPhoneNumber(customer.phoneNumber)} onChange={handleChange} /></span>
                            </div>
                            <div className="horizontal-right">
                                <span>Địa chỉ: <input type="text" name="address" value={customer.address} onChange={handleChange} /></span> <br />
                                <span>Sách đã thuê: <input type="number" placeholder="100" disabled /></span> <br />
                                <span>Gmail: <input type="text" name="email" value={customer.email} onChange={handleChange} /></span> <br />
                                <span>&ensp;</span><br />
                            </div>
                        </div>
                        <div className="edit">
                            <button onClick={handleSubmit}> Chỉnh Sửa</button>
                            <a href='/Thongtincanhan'><button> Hủy </button></a>
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
    )
}
export default Fomchinhsua;