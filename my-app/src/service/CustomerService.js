import axiosInstance from "./AxiosInstance";

const handleError = (error) => {
    if (error.response) {
        // Kiểm tra lỗi xác thực 401 (Unauthorized) hoặc 403 (Forbidden)
        if (error.response.status === 401 || error.response.status === 403) {
            console.error("LỖI XÁC THỰC: Người dùng chưa đăng nhập hoặc Session đã hết hạn. Đang chuyển hướng đến trang đăng nhập...");
            // CHUYỂN HƯỚNG BẮT BUỘC KHI CẦN XÁC THỰC
            window.location.href = '/';
            return; 
        }
        
        console.error("Server responded with an error:", error.response.status, error.response.data);
        // Ném lỗi để các hàm gọi (như getCurrentCustomer) có thể bắt và xử lý tiếp
        throw new Error(error.response.data?.message || `Lỗi HTTP: ${error.response.status}`); 

    } else if (error.request) {
        console.error("No response received:", error.request);
        throw new Error("Không nhận được phản hồi từ Server.");
    } else {
        console.error("Error:", error.message);
        throw new Error("Lỗi trong quá trình thiết lập yêu cầu.");
    }
};

export const getCurrentCustomer = async () => {
    try {
        const response = await axiosInstance.get("/api/home/customer");
        return response.data;
    } catch (error) {
        handleError(error);
        return null; // Trả về null nếu có lỗi (và không phải lỗi 401/403 đã chuyển hướng)
    }
};

export const editCustomer = async (customerDetails) => {
    try {
        const response = await axiosInstance.put("/api/home/customer/edit", customerDetails);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

export const changePassword = async (oldPassword, newPassword) => {
    try {
        const response = await axiosInstance.put("/api/home/customer/changePassword", null, {
            params: { oldPassword, newPassword }
        });
        
        // Đã xóa alert(). Thay bằng console.log hoặc trả về status cho component xử lý.
        if (response.status === 200) {
            console.log("Đổi mật khẩu thành công!");
        }
        return response.data;
    } catch (error) {
        // Đã xóa alert("Mật khẩu cũ không đúng!").
        console.error("Đổi mật khẩu thất bại (kiểm tra mật khẩu cũ):", error.response?.data);
        handleError(error);
        return null; 
    }
};