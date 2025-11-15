import React from 'react';
import '../trangchu/Home.css';
import './HF.css';
import ReactPaginate from 'react-paginate'
import Meo from '../img/Meo.jpg';
import BayBuocToiMuaHe from '../img/BayBuocToiMuaHe.jpg';
import TuyenTapNgoTatTo from '../img/TuyenTapNgoTatTo.jpg';
import nentrangchu from '../img/nenTrangChu.jpg';
import icon from '../img/icon.jpg';
import { useEffect, useState } from 'react';
import * as bookService from '../../service/HomeService';
import * as cartService from '../../service/CartService';
import Header from '../header&footer/Header';

export function Home() {

    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const getAllBook = async () => {
        let temp = await bookService.getAll();
        console.log(temp);
        setBooks(temp);
    }
    useEffect(() => {
        getAllBook();
    }, []);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        if (books.length > 0) {
            const cards = document.querySelectorAll('.grid-container .card');
            cards.forEach(card => {
                card.classList.remove('enter');
            });

            setTimeout(() => {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('enter');
                    }, index * 100);
                });
            }, 50);
        }
    }, [books, currentPage]);


    useEffect(() => {
        const cards = document.querySelectorAll('.grid-container .card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('enter');
            }, index * 100);
        });
    }, []);



    const addToCart = async (bookId) => {
        try {
            const booksInCart = await cartService.fetchBooksFromCart();
            if (booksInCart.some(book => book.book.bookId === bookId)) {
                alert("Sách đã có trong giỏ hàng!");
                return;
            }
            await cartService.addBookToCart(bookId);
            alert("Thêm sách vào giỏ hàng thành công!");
        } catch (error) {
            console.error('Error adding book to cart:', error);
            alert("Thêm sách thất bại!");
        }
    };

    // const toggleCartStatus = async (bookId, inCart) => {
    //     if (inCart) {
    //         const bookToDelete = books.find(book => book.book.bookId === bookId);
    //         if (bookToDelete) {
    //             await cartService.deleteBookFromCart(bookToDelete.containId);
    //         }
    //     } else {
    //         await addToCart(bookId);
    //     }
    // };

    const displayBooks = books.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const pageCount = Math.ceil(books.length / itemsPerPage);
    return (
        <>
            <Header/>
            <div className="imgHome">
                <p>Hành trình tri thức bắt đầu từ việc đọc sách</p>
                <img src={nentrangchu} alt="Chưa có" />
            </div>
            <hr id="hr-header" />
            <div className="second">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-grid-fill"></i> Danh Mục
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Truyện ngắn n</a></li>
                        <li><a className="dropdown-item" href="#">Tiểu thuyết</a></li>
                    </ul>
                </div>
                <div className="search">
                    <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Tìm kiếm ..." aria-label="Search" />
                        <button><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="color-body">
                <div className="lineHr">
                    <h5>Thiên Đường Tri Thức</h5>
                    <hr />
                    <br />
                </div>
                <div className="book-container">
                    <div className="grid-container">
                        {displayBooks.map((book, index) => (
                            <div className="card" key={index}>
                                <img src={book.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h6 className="card-title">{book.bookName}</h6>
                                    <p className="text-muted">{book.author}</p>
                                    <p className="text-warning">
                                        <span className="inter">| Đã thuê: 2000</span>
                                    </p>
                                    <p className="fw-bold text-danger">{book.rent}₫ <button
                                        onClick={() => addToCart(book.bookId)}
                                        className="btn-heart"
                                    >
                                        <i className="bi bi-heart"></i>
                                    </button></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                </div>
                <div className="page">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
                <div className="text-rating">
                    <span>Bảng xếp hạng
                        <hr />
                    </span>
                </div>
                <div className="rating">
                    <div className="rating-button">
                        <button className="button-select">Lượt đọc nhiều</button>
                        <button>Đánh giá cao</button>
                    </div>
                    <div className="rating-book">
                        <div className="book1">
                            <img src={TuyenTapNgoTatTo} /><br />
                            <hr />
                            <span>2000 +</span>
                        </div>
                        <div className="book2">
                            <img src={Meo} /><br />
                            <hr />
                            <span>5000 +</span>
                        </div>
                        <div className="book3">
                            <img src={BayBuocToiMuaHe} /><br />
                            <hr />
                            <span>3000 +</span>
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
    );
}
export default Home;