import axios from "axios";


export const getAll = async () => {
    try {
        let temp = await axios.get("http://localhost:8080/api/home");
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
