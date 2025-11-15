import icon from '../img/icon.jpg';
import trangchu from '../img/trangchu.jpg';
import meo from '../img/Meo.jpg';
import '../tusachcanhan/Sachdathue.css';
import baybuoc from '../img/BayBuocToiMuaHe.jpg'
import nentusach from '../img/anh.webp';
import lamban from '../img/LamBanVoiBauTroi.jpg';
import toithay from '../img/ToiThayHoaVangTrenCoXanh.jpg';
import nhagiakim from '../img/Nhà_giả_kim_(sách).jpg';

export function Sachdathue() {
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
                    <img src={nentusach} alt="Bìa sách" />
                </div>
                <div className="lineHr">
                    <h5>Sách Đã Thuê</h5>
                    <hr />
                    <br />
                </div>

                <div className="giua">
                    <div className="bentrai">
                        <ul>
                            <li><button className="buttondangthue"><a href="/tusachcanhan">Sách đang thuê</a></button></li>
                            <li><button className="buttondathue" ><a href="/sachdathue">Sách đã thuê</a></button> </li>
                        </ul>
                    </div>

                    <div className="benphai">
                        <div className="sach">

                            {/* Sách 1 */}
                            <div className="book-card">
                                <img src={baybuoc} alt="Bìa sách" />
                                <div className="book-info">
                                    <div className="book-title">Bảy Bước Tới Mùa Hè</div>
                                    <div className="book-author">
                                        <p>Tác giả: Nguyễn Nhật Ánh<br />Thể loại: Thiếu Nhi<br />Nhà Xuất Bản Trẻ</p>
                                    </div>
                                    <hr />
                                    <div className="hello">
                                        <p>Giá 10.000vnd |</p>
                                        <input type="button" value="Thuê Lại" />
                                        <input type="button" value="Đánh giá" />
                                    </div>
                                </div>
                            </div>

                            {/* Sách 2 */}
                            <div className="book-card">
                                <img src={meo} alt="Bìa sách" />
                                <div className="book-info">
                                    <div className="book-title">Có Hai Con Mèo Bên Cửa Sổ</div>
                                    <div className="book-author">
                                        <p>Tác giả: Nguyễn Nhật Ánh<br />Thể loại: Thiếu Nhi<br />Nhà Xuất Bản Trẻ</p>
                                    </div>
                                    <hr />
                                    <div className="hello">
                                        <p>Giá 10.000vnd |</p>
                                        <input type="button" value="Thuê Lại" />
                                        <input type="button" value="Đánh giá" />
                                    </div>
                                </div>
                            </div>

                            {/* Sách 3 */}
                            <div className="book-card">
                                <img src={lamban} alt="Bìa sách" />
                                <div className="book-info">
                                    <div className="book-title">Làm Bạn Với Bầu Trời</div>
                                    <div className="book-author">
                                        <p>Tác giả: Nguyễn Nhật Ánh<br />Thể loại: Thiếu Nhi<br />Nhà Xuất Bản Trẻ</p>
                                    </div>
                                    <hr />
                                    <div className="hello">
                                        <p>Giá 10.000vnd |</p>
                                        <input type="button" value="Thuê Lại" />
                                        <input type="button" value="Đánh giá" />
                                    </div>
                                </div>
                            </div>

                            {/* Sách 4 */}
                            <div className="book-card">
                                <img src={nhagiakim} alt="Bìa sách" />
                                <div className="book-info">
                                    <div className="book-title">Nhà giả kim</div>
                                    <div className="book-author">
                                        <p>Tác giả: Paolo<br />Thể loại: Tiểu thuyết<br />Nhà Xuất Bản Trẻ</p>
                                    </div>
                                    <hr />
                                    <div className="hello">
                                        <p>Giá 10.000vnd |</p>
                                        <input type="button" value="Thuê Lại" />
                                        <input type="button" value="Đánh giá" />
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
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
export default Sachdathue;