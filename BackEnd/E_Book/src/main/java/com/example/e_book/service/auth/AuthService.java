package com.example.e_book.service.auth;

import com.example.e_book.dto.RegisterRequest;
import com.example.e_book.entity.Account;
import com.example.e_book.entity.Customer;
import com.example.e_book.enums.Role;
import com.example.e_book.repository.AccountRepository;
import com.example.e_book.repository.CustomerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;





    private String genarateNextCustomerId(){
        String lastId = customerRepository.findLastCustomer();
        int newNumber = 1 ;
        if (lastId != null && !lastId.isEmpty()){
            try{
                int lastNumber = Integer.parseInt(lastId.substring(1));
                newNumber = lastNumber + 1;
            }catch (NumberFormatException e){
                System.err.println("Loi dinh dang id khach hang !"  + lastId);
            }
        }
        return String.format("C%02d",newNumber);
    }

    @Transactional
    public void register(RegisterRequest request){
        if (accountRepository.findByUserName(request.getUserName()).isPresent()){
            throw new RuntimeException("Ten tai khoan da duoc su dung !");
        }
        Account account = new Account();
        account.setUserName(request.getUserName());
        account.setPassword(passwordEncoder.encode(request.getMatKhau()));

        account.setRole(Role.USER);
        Account saveAccount  = accountRepository.save(account);

        Customer customer = new Customer();
        customer.setCustomerId(genarateNextCustomerId());
        customer.setAccount(saveAccount);
        customer.setCustomerName(request.getHoTen());
        customer.setEmail(request.getEmail());
        customer.setAddress(request.getDiaChi());
        customer.setPhoneNumber(request.getSdt());
        customer.setGender(request.isGioiTinh());
        customer.setBirthday(request.getNgaySinh());

        customerRepository.save(customer);
    }
}
