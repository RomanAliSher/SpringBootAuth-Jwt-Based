package com.SpringAuth.springauth.Controller;


import com.SpringAuth.springauth.DTO.LoginRequestDTO;
import com.SpringAuth.springauth.DTO.LoginResponseDTO;
import com.SpringAuth.springauth.DTO.RegisterRequestDTO;
import com.SpringAuth.springauth.DTO.UserDTO;
import com.SpringAuth.springauth.Entity.User;
import com.SpringAuth.springauth.Repository.UserRepository;
import com.SpringAuth.springauth.Service.ICustomerService;
import com.SpringAuth.springauth.Utill.JwtUtill;
import lombok.AllArgsConstructor;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.password.CompromisedPasswordChecker;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {
    private AuthenticationManager authenticationManager;
    private ICustomerService customerService;
    private JwtUtill jwtUtill;
    private CompromisedPasswordChecker compromisedPasswordChecker;
    private UserRepository userRepository;
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequestDTO ) {
        try{
            var authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDTO.email(), loginRequestDTO.password()));
            var user = new UserDTO();
            user.setRoles(authentication.getAuthorities().stream().map(
                    GrantedAuthority::getAuthority).collect(Collectors.joining(",")));
            var loggedInUser = (User) authentication.getPrincipal();
            BeanUtils.copyProperties(loggedInUser,user);
            String token = jwtUtill.getJwtToken(authentication);
            return ResponseEntity.ok(new LoginResponseDTO("Login successful", user, token));

        } catch (UsernameNotFoundException e) {
            return buildErrorResponse(HttpStatus.NOT_FOUND,
                    "User not found");
        }
        catch (BadCredentialsException e) {
            return buildErrorResponse(HttpStatus.UNAUTHORIZED,
                    "Invalid username or password");
        } catch (AuthenticationException e) {
            return buildErrorResponse(HttpStatus.UNAUTHORIZED,
                    "Authentication failed");
        } catch (Exception e) {
            return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,
                    "An unexpected error occurred");
        }
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@Validated @RequestBody RegisterRequestDTO registerRequestDTO) {
        var decisionPass = compromisedPasswordChecker.check(registerRequestDTO.getPassword());
        if(decisionPass.isCompromised()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("password","Password is compromised, please choose a different password"));
        }
        Optional<User> existingCustomer= userRepository.findByEmailOrMobileNumber(registerRequestDTO.getEmail(), registerRequestDTO.getMobileNumber());
        if(existingCustomer.isPresent()){
            Map<String,String> error=new HashMap<>();
            if(existingCustomer.get().getEmail().equals(registerRequestDTO.getEmail())){
                error.put("email","Email already exists");
            }
            if(existingCustomer.get().getMobileNumber().equals(registerRequestDTO.getMobileNumber())){
                error.put("mobileNumber","Mobile Number already exists");

            }
            return ResponseEntity.badRequest().body(error);
        }
        customerService.register(registerRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Customer created successfully");
    }
    private ResponseEntity<LoginResponseDTO> buildErrorResponse(HttpStatus status,String message){
        return ResponseEntity.status(status)
                .body(new LoginResponseDTO(message, null, null));
    }
}
