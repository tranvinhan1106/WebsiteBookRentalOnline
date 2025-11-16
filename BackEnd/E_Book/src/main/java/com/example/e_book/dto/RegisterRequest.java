package com.example.e_book.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class RegisterRequest {
    private String userName;
    private String hoTen ;
    private String email;
    private boolean gioiTinh;
    private String diaChi ;
    private String sdt;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date ngaySinh;
    private String matKhau ;
}
