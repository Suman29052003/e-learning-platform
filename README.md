# EduQuest - E-Learning Platform

EduQuest is a full-featured e-learning platform built using the MERN stack. This platform offers a wide range of courses and online degrees, enabling users to enhance their skills and knowledge. The platform integrates with Razorpay for secure payments and features JWT authentication for user security.

## Features

### 1. User Authentication
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Login and Registration**: Users can sign up and log in securely.
- **Protected Routes**: Only authenticated users can access certain routes.

### 2. Course Management
- **Course Listing**: Browse a variety of courses, each with detailed information.
- **Course Details**: View detailed information about each course, including title, description, instructor, level, language, duration, rating, reviews, and enrollment options.
- **Enroll in Courses**: Users can enroll in courses through a secure payment gateway (Razorpay).
- **Course Categorization**: Courses are categorized into different sections, including certificates and degrees.

### 3. Online Degree Programs
- **Degree Listings**: Display a selection of online degree programs.
- **Filter Degrees**: Users can filter degrees by various criteria.
- **Enroll in Degrees**: Similar to courses, users can enroll in degree programs via Razorpay.

### 4. Payment Integration
- **Razorpay Integration**: Secure payment gateway integration for course and degree enrollment.
- **Post-Payment Success Page**: A professional and beautiful success page that confirms payment.
- **Error Handling**: Appropriate error handling for payment failures.

## Packages Used
- **React**: JavaScript library for building user interfaces.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing course and user data.
- **Razorpay**: Payment gateway for processing payments.
- **Axios**: HTTP client for making requests to the backend.
- **MUI (Material-UI)**: React UI framework for components.
- **React Router DOM**: Routing library for React applications.

## Known Issues
Due to time management constraints, some buttons and footer links are not functional.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Suman29052003/e-learning-platform
   ```
2. **Navigate to the project directory**:
   ```bash
   cd e-learning-platform
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

