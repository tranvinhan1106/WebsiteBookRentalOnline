import React from 'react';  
import icon from '../img/icon.jpg';

function footer() {
return (
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
)

}
export default footer;