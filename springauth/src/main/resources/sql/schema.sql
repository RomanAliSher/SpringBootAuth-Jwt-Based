CREATE TABLE users
(
    id         BIGINT AUTO_INCREMENT NOT NULL,
    created_at datetime              NOT NULL,
    created_by VARCHAR(255)          NOT NULL,
    updated_at datetime              NULL,
    updated_by VARCHAR(255)          NULL,
    username   VARCHAR(100)          NOT NULL,
    password   VARCHAR(200)          NOT NULL,
    email      VARCHAR(100)          NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS roles (
                                     role_id     BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     id BIGINT NOT NULL,
                                     name        VARCHAR(50) NOT NULL,
                                     created_at TIMESTAMP   DEFAULT CURRENT_TIMESTAMP NOT NULL,
                                     created_by VARCHAR(20) NOT NULL,
                                     updated_at TIMESTAMP   DEFAULT NULL,
                                     updated_by VARCHAR(20) DEFAULT NULL,
                                     FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
);