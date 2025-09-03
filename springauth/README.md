# SpringAuth - JWT Authentication System

A comprehensive Spring Boot application implementing JWT-based authentication and authorization with role-based access control.

## 🏗️ Project Structure

```
springauth/
├── 📄 .gitattributes                              # Git line ending configuration
├── 📄 .gitignore                                  # Git ignore patterns
├── 📁 .idea/                                      # IntelliJ IDEA configuration
│   ├── 📄 .gitignore                             # IDE-specific git ignore
│   ├── 📄 compiler.xml                          # Compiler settings
│   ├── 📄 copilotDiffState.xml                  # GitHub Copilot state
│   ├── 📁 dataSources/                          # Database connection configs
│   ├── 📄 dataSources.local.xml                 # Local database settings
│   ├── 📄 dataSources.xml                       # Database source definitions
│   ├── 📄 encodings.xml                         # File encoding settings
│   ├── 📄 jarRepositories.xml                   # Maven repository configs
│   ├── 📄 jpa.xml                               # JPA configuration
│   ├── 📄 material_theme_project_new.xml        # IDE theme settings
│   ├── 📄 misc.xml                              # Miscellaneous project settings
│   ├── 📄 modules.xml                           # Project module configuration
│   ├── 📄 sqldialects.xml                       # SQL dialect settings
│   └── 📄 workspace.xml                         # Workspace configuration
├── 📁 .mvn/                                      # Maven wrapper configuration
├── 📄 HELP.md                                    # Project documentation
├── 📄 init.sql                                   # Database initialization script
├── 📄 mvnw                                       # Maven wrapper (Unix/Linux)
├── 📄 mvnw.cmd                                   # Maven wrapper (Windows)
├── 📄 pom.xml                                    # Maven dependencies & build config
├── 📄 springauth.iml                             # IntelliJ IDEA module file
├── 📄 README.md                                  # Project documentation
│
├── 📁 src/                                       # Source code directory
│   ├── 📁 main/                                  # Main application source
│   │   ├── 📁 java/com/SpringAuth/springauth/    # Java source packages
│   │   │   ├── 🚀 SpringauthApplication.java     # Main Spring Boot application
│   │   │   │
│   │   │   ├── 📁 Constants/                     # Application constants
│   │   │   │   └── 🔐 JwtConstants.java          # JWT configuration constants
│   │   │   │
│   │   │   ├── 📁 Controller/                    # REST API controllers
│   │   │   │   └── 🎮 AuthController.java        # Authentication endpoints
│   │   │   │                                     # • POST /api/v1/auth/login
│   │   │   │                                     # • POST /api/v1/auth/register
│   │   │   │
│   │   │   ├── 📁 DTO/                          # Data Transfer Objects
│   │   │   │   ├── 📝 LoginRequestDTO.java       # Login request payload
│   │   │   │   ├── 📝 LoginResponseDTO.java      # Login response with JWT
│   │   │   │   ├── 📝 RegisterRequestDTO.java    # User registration payload
│   │   │   │   └── 📝 UserDTO.java               # User data transfer object
│   │   │   │
│   │   │   ├── 📁 Entity/                       # JPA Database entities
│   │   │   │   ├── 🏗️ BaseEntity.java            # Base entity with audit fields
│   │   │   │   ├── 👤 Role.java                  # User roles (ADMIN, USER, etc.)
│   │   │   │   └── 👥 User.java                  # User entity with credentials
│   │   │   │
│   │   │   ├── 📁 Repository/                   # Data access layer
│   │   │   │   └── 🗄️ UserRepository.java        # User CRUD operations & queries
│   │   │   │
│   │   │   ├── 📁 Security/                     # Spring Security configuration
│   │   │   │   ├── 🛡️ JwtFilterToken.java        # JWT token validation filter
│   │   │   │   ├── 🌐 PublicPaths.java           # Public endpoint definitions
│   │   │   │   ├── ⚙️ SecurityConfigurationForSpringAuth.java  # Security config
│   │   │   │   └── 🔒 UsernameAndPasswordAuth.java  # Custom auth provider
│   │   │   │
│   │   │   ├── 📁 Service/                      # Business logic layer
│   │   │   │   ├── 🔧 AuthService.java           # Authentication business logic
│   │   │   │   ├── 📋 ICustomerService.java      # Customer service interface
│   │   │   │   └── 📁 Implementation/            # Service implementations
│   │   │   │       ├── 📊 AuditAwareImplementation.java     # JPA auditing
│   │   │   │       └── 🔧 CustomerServiceImplementation.java # Customer operations
│   │   │   │
│   │   │   └── 📁 Utill/                        # Utility classes
│   │   │       └── 🔑 JwtUtill.java              # JWT token generation & validation
│   │   │
│   │   └── 📁 resources/                        # Application resources
│   │       ├── ⚙️ application.properties         # Spring Boot configuration
│   │       │                                    # • Database connection (MySQL)
│   │       │                                    # • JPA/Hibernate settings
│   │       │                                    # • JWT configuration
│   │       └── 📁 sql/                          # Database scripts
│   │           ├── 📄 data.sql                   # Sample/initial data
│   │           └── 📄 schema.sql                 # Database table definitions
│   │
│   └── 📁 test/                                 # Test source code
│       └── 📁 java/com/SpringAuth/springauth/
│           └── 🧪 SpringauthApplicationTests.java  # Application integration tests
│
└── 📁 target/                                   # Compiled output (Maven generated)
    ├── 📁 classes/                              # Compiled Java classes & resources
    │   ├── ⚙️ application.properties            # Compiled configuration
    │   ├── 📁 com/SpringAuth/springauth/        # Compiled Java packages
    │   │   ├── SpringauthApplication.class
    │   │   ├── 📁 Constants/
    │   │   ├── 📁 Controller/
    │   │   ├── 📁 DTO/
    │   │   ├── 📁 Entity/
    │   │   ├── 📁 Repository/
    │   │   ├── 📁 Security/
    │   │   ├── 📁 Service/
    │   │   └── 📁 Utill/
    │   └── 📁 sql/                              # Compiled SQL scripts
    └── 📁 generated-sources/
        └── 📁 annotations/                      # Generated annotation files
```

## 🏛️ Architecture Overview

This Spring Boot application follows a **layered architecture pattern**:

### 🎯 Core Layers

| Layer | Purpose | Components |
|-------|---------|------------|
| **🎮 Controller** | HTTP request handling | `AuthController` - REST endpoints |
| **🔧 Service** | Business logic | `AuthService`, `ICustomerService` + implementations |
| **🗄️ Repository** | Data access | `UserRepository` - JPA operations |
| **👥 Entity** | Data models | `User`, `Role`, `BaseEntity` |
| **📝 DTO** | Data transfer | Request/Response objects |

### 🛡️ Security Components

| Component | Responsibility |
|-----------|----------------|
| **🔑 JWT Utilities** | Token generation, validation, parsing |
| **🛡️ JWT Filter** | Request authentication via JWT tokens |
| **🔒 Auth Provider** | Username/password authentication |
| **⚙️ Security Config** | Spring Security configuration |
| **🌐 Public Paths** | Endpoint access control |

### 📋 Key Features

- **🔐 JWT Authentication** - Stateless token-based auth
- **👤 User Registration** - New user signup with validation
- **🔑 User Login** - Credential verification with JWT response
- **🛡️ Role-based Access** - Authorization based on user roles
- **🔒 Password Security** - Compromised password checking
- **📊 JPA Auditing** - Automatic entity tracking
- **🗄️ MySQL Integration** - Persistent data storage
- **🧪 Testing** - Unit and integration tests

### 🔧 Technology Stack

- **☕ Java 21** - Programming language
- **🚀 Spring Boot 3.5.5** - Framework
- **🛡️ Spring Security** - Authentication & authorization
- **🗄️ Spring Data JPA** - Data persistence
- **🔑 JJWT 0.11.5** - JWT implementation
- **🐬 MySQL** - Database
- **🔧 Lombok** - Code generation
- **📦 Maven** - Build tool

### 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/v1/auth/register` | User registration | ❌ |
| `POST` | `/api/v1/auth/login` | User authentication | ❌ |

## 🚀 Quick Start

1. **Clone the repository**
2. **Configure database** in `application.properties`
3. **Run the application**: `./mvnw spring-boot:run`
4. **Access endpoints** at `http://localhost:8080/api/v1/auth/`

---

> **Note**: This is a production-ready JWT authentication system with comprehensive security measures and clean architecture design.
