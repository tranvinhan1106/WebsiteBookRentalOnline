package com.example.e_book.controller;

import com.example.e_book.dto.LoginReponse;
import com.example.e_book.dto.LoginRequest;
import com.example.e_book.dto.RegisterRequest;
import com.example.e_book.entity.Account;
import com.example.e_book.repository.AccountRepository;
import com.example.e_book.service.account.CustomUserDetails;
import com.example.e_book.service.auth.AuthService;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    @Lazy
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AuthService authService;

    @GetMapping("/me")
    public ResponseEntity<?> getMyInfo(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())){
              return new ResponseEntity<>("User not authenticated" , HttpStatus.UNAUTHORIZED);
        }
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        // lay role
        String role = userDetails.getAuthorities().stream()
                .findFirst()
                .map(GrantedAuthority::getAuthority)
                .orElse("USER");
        if (role.startsWith("ROLE_")){
            role = role.substring(5);
        }
        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("username", userDetails.getUsername());
        userInfo.put("role", role);
        userInfo.put("accountId", userDetails.getAccount().getAccountId());
        return  ResponseEntity.ok(userInfo);
    }

    @GetMapping("/encode")
    public String encodePassword(@RequestParam String raw) {
        return new BCryptPasswordEncoder().encode(raw);
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Account account = accountRepository.findByUserName(request.getUsername()).orElseThrow();

        return ResponseEntity.ok().body(
                new LoginReponse("fake-jwt-token" , account.getRole().name())
        );
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest){
        try {
            authService.register(registerRequest);
            return new ResponseEntity<>("Dang ki thanh cong !",HttpStatus.CREATED);

        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
