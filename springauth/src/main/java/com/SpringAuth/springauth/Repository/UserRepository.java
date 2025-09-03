package com.SpringAuth.springauth.Repository;

import com.SpringAuth.springauth.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    Optional<User> findByEmailOrMobileNumber(String email, String mobileNumber);
}
