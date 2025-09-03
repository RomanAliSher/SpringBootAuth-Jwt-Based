package com.SpringAuth.springauth.Security;

import com.SpringAuth.springauth.Constants.JwtConstants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RequiredArgsConstructor
public class JwtFilterToken extends OncePerRequestFilter {
    private final   List<String> publicPath;
    private AntPathMatcher pathMatcher = new AntPathMatcher();

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader(JwtConstants.JWT_HEADER);
        if (null != authHeader) {
            try {
                String jwt = authHeader.substring(7); // Remove 'Bearer ' prefix
                String secret = JwtConstants.SECRET_KEY_VALUE;
                SecretKey secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
                if (null != secretKey) {
                    Claims claims = Jwts.parserBuilder().setSigningKey(secretKey)
                            .build().parseClaimsJws(jwt).getBody();
                    String username = String.valueOf(claims.get("email"));
                    String roles= String.valueOf(claims.get("roles"));

                    Authentication authentication = new UsernamePasswordAuthenticationToken(username,
                            null, AuthorityUtils.commaSeparatedStringToAuthorityList(roles));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }

            } catch (Exception exception) {
                throw new BadCredentialsException("Invalid Token received!");
            }
        }
        filterChain.doFilter(request, response);

    }

    @Override
    public boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return publicPath.stream().anyMatch(publicPath -> pathMatcher.match(publicPath, path));
    }
}
