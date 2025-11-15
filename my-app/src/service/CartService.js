import axios from 'axios';

// Thêm sản phẩm vào giỏ hàng 

export const addBookToCart = async (bookId) => {
    try {
        let temp = await axios.post("http://localhost:8080/api/home/cart/add", null, {
            params: {
                bookId: bookId
            },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true 
        });
        console.log(temp);
        return temp.data;
    } catch (error) {
        if (error.response) {
            // Lỗi từ phản hồi của server (status code không phải là 2xx)
            console.error('Server responded with an error:', error.response.status);
        } else if (error.request) {
            // Yêu cầu được gửi đi nhưng không nhận được phản hồi
            console.error('No response received:', error.request);
        } else {
            // Lỗi khác
            console.error('Error:', error.message);
        }
    }
};

// Hiển thị giỏ hàng

export const fetchBooksFromCart = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/home/cart");
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }

};


// Xóa sách khỏi giỏ hàng 

export const deleteBookFromCart = async (containId) => {
    try {
        await axios.delete('http://localhost:8080/api/home/cart/delete', {
            params: { cartId: containId }
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};
