import React from 'react';
import style from'../trangchu/AdminLayout.module.css'; 

// LƯU Ý BOOTSTRAP: Vẫn phải import file icon trong public/index.html
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

function AdminLayout() {
    return (
        <>
            {/* 1. SỬA TÊN: từ 'ben_trai' -> 'sidebar' (để khớp với CSS) */}
            <div className={style.sidebar}> 
                <div className={style.logo}>PARADISE</div>

                <div className={style.menu}>
                    
                    <a href="#" className={style.item}>
                        <i className="bi bi-folder-fill"></i>
                        <span>Quản lý sách</span>
                    </a>

                    <a href="#" className={style.item}>
                        <i className="bi bi-coin"></i>
                        <span>Quản lý tài chính</span>
                    </a>

                    <a href="#" className={style.item}>
                        <i className="bi bi-people"></i>
                        <span>Quản lý khách hàng</span>
                    </a>

                    <a href="#" className={style.item}>
                        <i className="bi bi-fire"></i>
                        <span>Quản lý ưu đãi</span>
                    </a>

                    <a href="#" className={style.item}>
                        <i className="bi bi-envelope-open"></i>
                        <span>Thông báo & Hỗ trợ</span>
                    </a>
                </div>
            </div>

            <div className={style.ben_phai}>
                <div className={style.dau}>
                    <p className={style.left}>Hệ thống quản lý Paradise E-Book</p>
                    <p className={style.right}>0397409029<i className="bi bi-exclamation"></i>Admin<i className="bi bi-person"></i></p>
                    
                    <hr />
                </div>
            </div>
        </>
    );
}

export default AdminLayout;