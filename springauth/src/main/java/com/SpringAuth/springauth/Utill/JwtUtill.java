package com.SpringAuth.springauth.Utill;

import com.SpringAuth.springauth.Constants.JwtConstants;
import com.SpringAuth.springauth.Entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class JwtUtill {
    public final Environment env;

    public String getJwtToken(Authentication authentication) {
        var userDetails = (User) authentication.getPrincipal();


        String secret =env.getProperty(JwtConstants.SECRET_KEY,JwtConstants.SECRET_KEY_VALUE);
        SecretKey secretKey= Keys.hmacShaKeyFor(secret != null ? secret.getBytes(StandardCharsets.UTF_8) : null);
        String jwt=Jwts.builder()
                .setIssuer("StickersRizz")
                .setSubject("JwtToken")
                .claim("name", userDetails.getUsername())
                .claim("email", userDetails.getEmail())
                .claim("mobileNumber", userDetails.getMobileNumber())
                .claim("roles", authentication.getAuthorities().stream().map(
                        GrantedAuthority::getAuthority).collect(Collectors.joining(",")))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
                .signWith(secretKey)
                .compact();
        return jwt;
    }
}

