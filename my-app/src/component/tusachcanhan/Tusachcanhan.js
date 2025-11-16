import icon from '../img/icon.jpg';
import trangchu from '../img/trangchu.jpg';
import meo from '../img/Meo.jpg';
import '../tusachcanhan/Tusachcanhan.css';
import baybuoc from '../img/BayBuocToiMuaHe.jpg'
import nentusach from '../img/anh.webp';
import lamban from '../img/LamBanVoiBauTroi.jpg';
import hocdaihoc from '../img/ToiHocDaiHoc.jpg';
import nhagiakim from '../img/Nhà_giả_kim_(sách).jpg'


export function Tusachcanhan() {
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <img src={trangchu} alt="Lỗi" className="logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/trangchu"><i className="bi bi-shop"></i> Trang chủ</a></li>
                            <li><a href="/thongtincanhan"><i className="bi bi-file-lock"></i> Thông tin cá nhân</a></li>
                            <li className="active"><a href="/tusachcanhan"><i className="bi bi-inboxes"></i> Tủ sách cá nhân</a></li>
                            <li><a href="/goiuudai"><i className="bi bi-stars"></i> Gói ưu đãi</a></li>
                            <li><a href="/giohang"><i className="bi bi-cart2"></i> Giỏ sách</a></li>
                            <li><a href="#"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a></li>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
            <div className="than">
                <div className="tren">
                    <img src={nentusach} alt="Image" />
                </div>
                <div className="lineHr">
                    <h5>Sách Đang Thuê</h5>
                    <hr />
                    <br />
                </div>

                <div className="giua">
                    <div className="bentrai">
                        <ul>
                            <li><button className="buttondangthue2"><a href="/sachdangthue">Sách đang thuê</a></button></li>
                            <li><button className="buttondathue1" ><a href="/sachdathue">Sách đã thuê</a></button> </li>
                        </ul>
                    </div>

                    <div className="benphai">
                        <div className="book-container">
                            <div className="grid-container3">
                                {/* Sách 1 */}
                                <div className="card">
                                    <img src={meo} className="card-img-top" alt="Có hai con mèo ngồi bên cửa sổ" />
                                    <div className="card-body">
                                        <h6 className="card-title">Có Hai Con Mèo Ngồi Bên Cửa Sổ</h6>
                                        <p className="text-muted">Nguyễn Nhật Ánh</p>
                                        <p className="text-warning">★★★★★ <span className="inter">|Đã thuê : 2200</span></p>
                                        <div className="hello">
                                            <input type="button" value="Đọc" />
                                            <input type="button" value="Trả sách" />
                                        </div>
                                    </div>
                                </div>

                                {/* Sách 2 */}
                                <div className="card">
                                    <img src={baybuoc} className="card-img-top" alt="Bảy Bước tới mùa hè" />
                                    <div className="card-body">
                                        <h6 className="card-title">Bảy Bước Tới Mùa Hè</h6>
                                        <p className="text-muted">Nguyễn Nhật Ánh</p>
                                        <p className="text-warning">★★★★★ <span className="inter">|Đã thuê : 1120</span></p>
                                        <div className="hello">
                                            <input type="button" value="Đọc" />
                                            <input type="button" value="Trả sách" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src={lamban} className="card-img-top" alt="Làm bạn với bầu trời" />
                                    <div className="card-body">
                                        <h6 className="card-title">Làm Bạn Với Bầu Trời</h6>
                                        <p className="text-muted">Nguyễn Nhật Ánh</p>
                                        <p className="text-warning">★★★★★ <span className="inter">|Đã thuê : 1320</span></p>
                                        <div className="hello">
                                            <input type="button" value="Đọc" />
                                            <input type="button" value="Trả sách" />
                                        </div>
                                    </div>
                                </div>

                                {/* Sách 4 */}
                                <div className="card">
                                    <img src={hocdaihoc} className="card-img-top" alt="Tôi học Đại Học" />
                                    <div className="card-body">
                                        <h6 className="card-title">Tôi Học Đại Đại Đại Học</h6>
                                        <p className="text-muted">Nguyễn Ngọc Ký</p>
                                        <p className="text-warning">★★★★☆ <span className="inter">|Đã thuê : 1120</span></p>
                                        <div className="hello">
                                            <input type="button" value="Đọc" />
                                            <input type="button" value="Trả sách" />
                                        </div>
                                    </div>
                                </div>

                                {/* Sách 5 */}
                                <div className="card">
                                    <img src={nhagiakim} className="card-img-top" alt="Nhà Giả Kim" />
                                    <div className="card-body">
                                        <h6 className="card-title">Nhà Giả Kim</h6>
                                        <p className="text-muted">PauLo Coelh</p>
                                        <p className="text-warning">★★★★☆ <span className="inter">|Đã thuê : 1560</span></p>
                                        <div className="hello">
                                            <input type="button" value="Đọc" />
                                            <input type="button" value="Trả sách" />
                                        </div>
                                    </div>
                                </div>


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

        </>
    )
}
export default Tusachcanhan;