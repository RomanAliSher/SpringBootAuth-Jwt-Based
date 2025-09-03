package com.SpringAuth.springauth.Service;

import com.SpringAuth.springauth.DTO.*;
import com.SpringAuth.springauth.Entity.Role;
import com.SpringAuth.springauth.Entity.User;
import com.SpringAuth.springauth.Repository.UserRepository;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@AllArgsConstructor
public class AuthService implements ICustomerService {

    private UserRepository userRepository;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public ResponseEntity<String> register(RegisterRequestDTO request) {

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setMobileNumber(request.getMobileNumber());
        user.setPassword(passwordEncoder().encode(request.getPassword()));
        Role role = new Role();
        role.setName("ROLE_USER");
        user.setRoles(Set.of(role));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

}