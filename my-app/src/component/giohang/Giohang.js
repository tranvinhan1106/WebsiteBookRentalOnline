import icon from '../img/icon.jpg';
import trangchu from '../img/trangchu.jpg';
import './Giohang.css';
import * as cartService from '../../service/CartService'
import { useEffect, useState } from 'react';


function Giohang() {

  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const booksData = await cartService.fetchBooksFromCart();
      console.log('Books data:', booksData); // Kiểm tra dữ liệu được trả về
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (containId) => {
    try {
      await cartService.deleteBookFromCart(containId);
      alert("Xóa sách khỏi giỏ hàng thành công !")
      fetchBooks();
    } catch (error) {
      alert("Xóa thất bại !")
    }
  }

  const handleCheckboxChange = (bookId) => {
    setSelectedBooks(prevSelectedBooks => {
      if (prevSelectedBooks.includes(bookId)) {
        return prevSelectedBooks.filter(id => id !== bookId);
      } else {
        return [...prevSelectedBooks, bookId];
      }
    });
  };

  const calculateTotal = (books, selectedBooks) => {
    return books
      .filter(book => selectedBooks.includes(book.containId))
      .reduce((total, book) => total + book.total, 0);
  };

  const total = calculateTotal(books, selectedBooks);

  return (
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
              <li><a href="/tusachcanhan"><i className="bi bi-inboxes"></i> Tủ sách cá nhân</a></li>
              <li><a href="/goiuudai"><i className="bi bi-stars"></i> Gói ưu đãi</a></li>
              <li className="active"><a href="/giohang"><i className="bi bi-cart2"></i> Giỏ sách</a></li>
              <li><a href="#"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a></li>
            </ul>
          </nav>
        </div>
        <hr />
      </header>
      <div className="body-container main-content">
        <br />
        <h2>Giỏ Hàng</h2>
        <hr id="hr" />
        <div className="cart-container">
          <div className="filter-container">
            <h3 id="TL">Thể loại</h3>
            <label><input type="checkbox" /> Nhật ký</label>
            <label><input type="checkbox" /> Tiểu thuyết</label>
            <label><input type="checkbox" /> Trinh thám</label>
            <label><input type="checkbox" /> Tùy bút</label>
          </div>
          <div className="book-list">
            {books.map(book => (
              <div className="book-item" key={book.containId}>
                <button className="delete-button" onClick={() => deleteBook(book.containId)}>X</button>
                <img id="img" src={book.book.img} alt="Book" />
                <div className="book-details">
                  <div className="text">
                    <p><strong>{book.book.title}</strong></p>
                    <p>Tên sách : {book.book.bookName}</p>
                    <p>Tác giả: {book.book.author}</p>
                    <p>Thời gian : <input type="date"></input></p>
                    <p>Thành tiền: {book.total} đ</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedBooks.includes(book.containId)}
                  onChange={() => handleCheckboxChange(book.containId)}
                />
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="checkout">
          <p>Tổng tiền: {total} đ</p>
          <p>Gói ưu đãi: +|</p>
          <button>Thanh Toán</button>
        </div>
        <br />
      </div>
      <footer className="footer">
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
      </footer>
    </div>
  );
}

export default Giohang;