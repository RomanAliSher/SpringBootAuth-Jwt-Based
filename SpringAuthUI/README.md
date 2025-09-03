# 🔐 SpringBootAuth-JwtBased 

<div align="center">
  <h3> Retro-Style Authentication Frontend with Modern Security</h3>
  <p>A sleek React frontend for JWT-based authentication with Spring Boot backend integration</p>
  
  ![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0+-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
  ![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
  ![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
  ![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
  ![JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
</div>

---

## 🚀 Features

### 🎨 **8-Bit Retro Design**
- **Golden-Black Theme**: Eye-catching retro gaming aesthetics
- **Pixel-Perfect UI**: Clean, modern components with vintage flair
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Animated Elements**: Smooth transitions and hover effects

### 🔒 **Security Features**                                              
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Route-level access control
- **Automatic Token Management**: Seamless token refresh and storage
- **Session Persistence**: Maintains login state across browser sessions

### ⚡ **Modern Tech Stack**
- **Frontend**: React 19+ with hooks and context
- **Backend**: Spring Boot 3.0+ with Spring Security
- **Database**: MySQL 8.0+ for persistent data storage
- **Authentication**: JWT-based stateless authentication
- **ORM**: Spring Data JPA with Hibernate
- **Routing**: React Router DOM with form actions
- **HTTP Client**: Axios with interceptors for API calls
- **Styling**: TailwindCSS utility-first framework
- **Build Tool**: Vite for lightning-fast development

### 🛡️ **User Experience**
- **Toast Notifications**: Real-time feedback for user actions
- **Error Handling**: Graceful error management and user feedback
- **Loading States**: Visual feedback during API operations
- **Form Validation**: Client-side and server-side validation

---

## 📸 Screenshots

<div align="center">

### 🏠 **Home Page (Logged Out)**
![Home - Logged Out](./public/loggedouthome.png)
*Welcome screen with authentication prompts and retro gaming aesthetics*

### 🔐 **Sign In Page**
![Sign In](./public/signin.png)
*Clean login form with 8-bit retro styling and validation*

### 📝 **Registration Page**
![Register](./public/register.png)
*User registration form with comprehensive field validation*

### 🏠 **Home Page (Logged In)**
![Home - Logged In](./public/loggedinhome.png)
*Personalized dashboard showing user information and system status*

</div>

---

## 🏗️ Backend Structure (Spring Boot)

<div align="center">

### 📁 **Backend Project Structure - Part 1**
![Backend Structure - First](./public/first.png)
*Spring Boot project organization with main packages and configuration*
![Backend Structure - Second](./public/second.png)


</div>

---

## 🏗️ Frontend Structure (React + Vite)

```
SpringAuthUI/
├── public/
│   ├── first.png               # Backend structure screenshots
│   ├── second.png              # Backend structure screenshots
│   ├── loggedinhome.png        # App screenshots
│   ├── loggedouthome.png       # App screenshots
│   ├── register.png            # App screenshots
│   ├── signin.png              # App screenshots
│   └── vite.svg                # Vite logo
├── src/
│   ├── api/
│   │   └── apiCall.js          # Axios configuration & interceptors
│   ├── components/
│   │   ├── store/
│   │   │   ├── Auth-Context.jsx    # Authentication state management
│   │   │   └── Toast-Context.jsx   # Toast notification system
│   │   ├── ErrorBoundary.jsx       # Error boundary component
│   │   ├── Footer.jsx              # Application footer
│   │   ├── Header.jsx              # Navigation header
│   │   ├── Home.jsx                # Dashboard/home page
│   │   ├── Login.jsx               # Login form with action
│   │   ├── PageHeading.jsx         # Reusable page header
│   │   ├── Signup.jsx              # Registration form
│   │   └── Toast.jsx               # Toast container component
│   ├── utils/
│   │   └── healthCheck.js          # Backend health monitoring
│   ├── App.jsx                     # Main application component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Application entry point
├── .env                            # Environment variables
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Spring Boot Backend** running on `http://localhost:8080`

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd SpringAuthUI
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:5173`

---

## 🌐 Backend Integration

### API Endpoints
The frontend expects the following Spring Boot endpoints:

#### Authentication Endpoints
- **POST** `/api/v1/auth/login`
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **POST** `/api/v1/auth/register`
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Expected Response Format

#### Login Success Response
```json
{
  "message": "Login successful",
  "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "roles": ["USER"]
  }
}
```

#### Registration Success Response
```json
{
  "message": "User registered successfully"
}
```

### JWT Token Management
- **Storage**: Tokens are stored in `localStorage`
- **Headers**: Automatically added to requests as `Authorization: Bearer <token>`
- **Expiration**: Handled gracefully with user-friendly error messages

---

## 🎯 Key Components

### 🔐 **Authentication System**
- **Login Component**: React Router Form with action functions
- **Signup Component**: Registration with validation
- **Auth Context**: Global authentication state management
- **Protected Routes**: Automatic redirection for unauthorized access

### 🍞 **Toast Notification System**
- **Success Messages**: Login/signup confirmations
- **Error Handling**: API error display
- **Auto-dismiss**: Automatic removal after 4 seconds
- **Duplicate Prevention**: Prevents multiple identical messages

### 🎨 **UI Components**
- **Retro Styling**: 8-bit inspired design elements
- **Responsive Layout**: Mobile-first approach
- **Animated Elements**: Smooth transitions and effects
- **Consistent Theme**: Golden-black color scheme throughout

---

## 🚦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

---

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom 8-bit retro styling
    }
  },
  plugins: []
}
```

---

## 🔒 Security Features

### Frontend Security
- **Input Validation**: Client-side form validation
- **XSS Protection**: Proper data sanitization
- **CSRF Protection**: Token-based state management
- **Secure Storage**: Appropriate use of localStorage

### Backend Integration Security
- **JWT Tokens**: Secure authentication tokens
- **HTTPS Ready**: Production-ready HTTPS configuration
- **Error Handling**: Secure error message handling
- **Token Expiration**: Automatic logout on token expiry

---

## 🎨 Design System

### Color Palette
- **Primary**: Golden Yellow (`#FCD34D`)
- **Secondary**: Emerald Green (`#10B981`)
- **Background**: Deep Black (`#000000`)
- **Text**: Various shades of yellow and green
- **Accents**: Blue (`#3B82F6`) and Red (`#EF4444`)

### Typography
- **Headers**: Bold, uppercase, tracking-wide
- **Body**: Monospace for retro feel
- **Interactive**: Hover effects and transitions

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **Backend Connection Issues**
```bash
Error: Cannot connect to server
```
**Solution**: Ensure Spring Boot backend is running on `http://localhost:8080`

#### 2. **CORS Issues**
```bash
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Configure CORS in your Spring Boot application

#### 3. **Token Issues**
```bash
401 Unauthorized
```
**Solution**: Check JWT token validity and backend authentication

#### 4. **Build Issues**
```bash
Module not found
```
**Solution**: Run `npm install` to ensure all dependencies are installed

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the lightning-fast build tool
- **Spring Boot** community for backend integration patterns

---

<div align="center">
  <p>Made with ❤️ for the retro gaming community</p>
  <p><strong>Happy Coding! 🎮</strong></p>
</div>
