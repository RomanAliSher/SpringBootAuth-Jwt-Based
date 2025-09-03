package com.SpringAuth.springauth.DTO;

public record LoginResponseDTO(String message,UserDTO user, String token) {
}