package com.SpringAuth.springauth.Service;

import com.SpringAuth.springauth.DTO.RegisterRequestDTO;
import org.springframework.http.ResponseEntity;

public interface ICustomerService {
    ResponseEntity<String> register(RegisterRequestDTO registerRequestDTO);
}
