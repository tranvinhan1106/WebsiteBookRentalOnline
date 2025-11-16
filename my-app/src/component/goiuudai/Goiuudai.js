import icon from './img/icon.jpg';
import trangchu from './img/trangchu.jpg';
import '../goiuudai/Goiuudai.css'
import voucher1 from './img/10.png';
import voucher2 from './img/15.png';
import voucher3 from './img/25.png';
import voucher4 from './img/bigoffer.png';
import voucher5 from './img/bigofferspecial.png';
import sach1 from './img/TuyenTapNgoTatTO.jpg';
import sach2 from './img/TuyenTapNguyenNhatAnh.jpg';
import sach3 from './img/HocKhonNgoanLamKhongGianNan.jpg';
import sach4 from './img/SuKyTrungHoa.jpg';
import sach5 from './img/BiMatGiauCo.jpg';
import sach6 from './img/TuDuy&KienThuc.jpg';
import nenuudai from './img/NenUuDai.png';
import React from 'react';

export function Goiuudai() {
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
                                <li><a href="/thongtincanhan"><i className="bi bi-file-lock"></i> Thông tin cá nhân</a></li>
                                <li ><a href="/tusachcanhan"><i className="bi bi-inboxes"></i> Tủ sách cá nhân</a></li>
                                <li className="active"><a href="#"><i className="bi bi-stars"></i> Gói ưu đãi</a></li>
                                <li><a href="/giohang"><i className="bi bi-cart2"></i> Giỏ sách</a></li>
                                <li><a href="#"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a></li>
                            </ul>
                        </nav>
                    </div>
                    <hr />
                </header>

                <div className="imgHome">
                    <img src={nenuudai} alt="Chưa có" />
                </div>
                <div className="GiaoDienNgoai">
                    <br />
                    <div className="GiaoDien">
                        <div className="lineHr">
                            <br />
                            <h5>Gói Ưu Đãi</h5>
                            <hr />
                        </div>
                        <div className="offer-container">
                            <div className="offer-card">
                                <div className="offer-title">Gói 30 Ngày</div>
                                <div className="offer-price">299.000 đ</div>
                                <div className="offer-details">
                                    <p>- 15 ngày dùng thử</p>
                                    <p>- 30 ngày thuê sách</p>
                                    <p>- Giảm 10% cho lần thuê tiếp theo</p>
                                    <p>&nbsp;</p>
                                </div>
                                <button className="offer-button">Tham gia ngay</button>
                            </div>
                            <div className="offer-card">
                                <div className="offer-title">Gói 60 Ngày</div>
                                <div className="offer-price">399.000 đ</div>
                                <div className="offer-details">
                                    <p>- 30 ngày dùng thử</p>
                                    <p>- 60 ngày thuê sách</p>
                                    <p>- Giảm 15% cho lần thuê tiếp theo</p>
                                    <p>- Không giới hạn sách</p>
                                </div>
                                <button className="offer-button">Tham gia ngay</button>
                            </div>
                            <div className="offer-card">
                                <div className="offer-title">Gói 90 Ngày</div>
                                <div className="offer-price">499.000 đ</div>
                                <div className="offer-details">
                                    <p>- 60 ngày dùng thử</p>
                                    <p>- 90 ngày thuê sách</p>
                                    <p>- Giảm 20% cho lần thuê tiếp theo</p>
                                    <p>- Không giới hạn sách</p>
                                </div>
                                <button className="offer-button">Tham gia ngay</button>
                            </div>
                        </div>
                        <div>
                            <div className="lineHr">
                                <hr />
                                <br />
                                <h5>Gói Sách Ưu Đãi</h5>
                                <br />
                            </div>

                            {/* List sách */}
                            <div className="book-container">
                                <div className="grid-container2">
                                    {/* Sách 1 */}
                                    <div className="card">
                                        <img src={sach1} className="card-img-top" alt="Tuyển tập Ngô Tất Tố" />
                                        <div className="card-body">
                                            <h6 className="card-title">Tuyển tập Ngô Tất Tố</h6>
                                            <p className="text-muted">Cao Đắc Điểm - Ngô Thị Thanh Lịch</p>
                                            <p className="text-warning">★★★★ <span className="inter">|Đã thuê : 300</span></p>
                                            <p className="fw-bold text-danger">400.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                    {/* Sách 2 */}
                                    <div className="card">
                                        <img src={sach2} className="card-img-top" alt="Tuyển Tập Nguyễn Nhật Ánh" />
                                        <div className="card-body">
                                            <h6 className="card-title">Full Tuyển Tập Nguyễn Nhật Ánh</h6>
                                            <p className="text-muted">Chủ Nghĩa Hiện Thực Hiền Diệu</p>
                                            <p className="text-warning">★★★★★ <span className="inter">|Đã thuê : 85</span></p>
                                            <p className="fw-bold text-danger">599.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                    {/* Sách 3 */}
                                    <div className="card">
                                        <img src={sach3} className="card-img-top" alt="Học không ngoan làm không Gian Nan" />
                                        <div className="card-body">
                                            <h6 className="card-title">Học không ngoan làm không Gian Nam</h6>
                                            <p className="text-muted">&nbsp;</p>
                                            <p className="text-warning">★★★★☆ <span className="inter">|Đã thuê : 118</span></p>
                                            <p className="fw-bold text-danger">249.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                    {/* Sách 4 */}
                                    <div className="card">
                                        <img src={sach4} className="card-img-top" alt="Sử Ký Trung Hoa" />
                                        <div className="card-body">
                                            <h6 className="card-title">Sử Ký Trung Hoa</h6>
                                            <p className="text-muted">Dòng chảy Thịnh Vượng 5000 năm</p>
                                            <p className="text-warning">★★★★★<span className="inter">|Đã thuê : 93</span></p>
                                            <p className="fw-bold text-danger">315.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                    {/* Sách 5 */}
                                    <div className="card">
                                        <img src={sach5} className="card-img-top" alt="Full bí mật để đại được sự giàu có bền vững" />
                                        <div className="card-body">
                                            <h6 className="card-title">Full bí mật để đại được sự giàu có bền vững</h6>
                                            <p className="text-muted">Khoa Học Làm Giàu</p>
                                            <p className="text-warning">★★★★<span className="inter">|Đã thuê : 300</span></p>
                                            <p className="fw-bold text-danger">418.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                    {/* Sách 6 */}
                                    <div className="card">
                                        <img src={sach6} className="card-img-top" alt="Full trọn bộ Tư Duy - Kiến Thức" />
                                        <div className="card-body">
                                            <h6 className="card-title">Tư Duy Làm Giàu</h6>
                                            <p>&nbsp;</p>
                                            <p className="text-muted">Tô Hoài</p>
                                            <p className="text-warning">★★★★ <span className="inter">|Đã thuê : 900</span></p>
                                            <p className="fw-bold text-danger">339.000₫ <i className="bi bi-heart"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="lineHr">
                                <hr />
                                <br />
                                <h5>Thuê Càng Nhiều, Giá Càng Yêu</h5>
                            </div>
                            <div className="promotion-container">
                                <div className="promotion-card">
                                    <img src={voucher1} alt="10% Off" />
                                    <p className="promotion-text">Khách hàng cũ, ưu đãi mới - Giảm ngay 10% cho lần thuê kế tiếp!</p>
                                </div>
                                <div className="promotion-card">
                                    <img src={voucher2} alt="15% Off" />
                                    <p className="promotion-text">Hóa đơn từ 300K, giảm ngay 15%, đừng bỏ lỡ!</p>
                                </div>
                                <div className="promotion-card">
                                    <img src={voucher3} alt="25% Off" />
                                    <p className="promotion-text">Hóa đơn từ 700K, giảm ngay 25% - Mua nhiều lợi nhiều!</p>
                                </div>
                                <div className="promotion-card">
                                    <img src={voucher4} alt="20% Voucher" />
                                    <p className="promotion-text">
                                        Chỉ hôm nay (03/03) - Giảm ngay 20% với voucher đặc biệt! <br /><br /> Thời gian: 03/03/2025
                                    </p>
                                </div>
                                <div className="promotion-card">
                                    <img src={voucher5} alt="Referral Offer" />
                                    <p className="promotion-text">
                                        Bạn mua, bạn bè cũng được giảm! <br /> <br /> Ưu đãi: Giới thiệu bạn bè, cả hai cùng nhận voucher 10%.
                                    </p>
                                </div>
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
export default Goiuudai;