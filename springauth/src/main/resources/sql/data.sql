ALTER TABLE users
    ADD COLUMN mobile_number VARCHAR(15) NOT NULL;
INSERT INTO users (username, password, mobile_number, email)
VALUES ('testuser', 'dummyPassword123', '03001234567', 'testuser@gmail.com', CURRENT_TIMESTAMP, 'admin', NULL, NULL);
