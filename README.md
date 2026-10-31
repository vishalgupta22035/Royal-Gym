# 🏋️ Royal Gym – Gym Website

Royal Gym is a fully functional and responsive gym website built using **React.js, Java Spring Boot, and MongoDB**. It provides an interactive experience for users to explore gym plans, read reviews, register or log in, and submit membership requests.

## 🚀 Features

- Fully responsive design for mobile, tablet, and desktop
- Modern UI with animated typewriter text
- Scroll-based animations using AOS
- User registration and login with JWT authentication
- Password encryption using BCrypt
- Dynamic gym plans and customer reviews
- Join Us modal form with data stored in MongoDB
- Custom animated navigation bar
- RESTful APIs built using Spring Boot
- Cross-origin support for frontend-backend communication

## 🛠️ Tech Stack

**Frontend**
- React.js
- HTML5
- CSS3
- Axios
- AOS
- Boxicons

**Backend**
- Java
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Spring Security
- JWT (JSON Web Token)

**Database**
- MongoDB

**Tools**
- IntelliJ IDEA
- Postman
- Maven

## 📁 Project Structure

```text
Royal-Gym/
│
├── backend-java/
│   └── src/
│       └── main/
│           ├── java/com/royalgym/
│           │   ├── config/
│           │   ├── controller/
│           │   ├── dto/
│           │   ├── model/
│           │   ├── repository/
│           │   ├── security/
│           │   ├── service/
│           │   └── RoyalgymApplication.java
│           │
│           └── resources/
│               └── application.properties
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── App.css
│
└── README.md
```

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/vishalgupta22035/Royal-Gym.git
cd Royal-Gym
```

### 2. Start MongoDB

Make sure MongoDB is installed and running locally on port `27017`.

The application uses the `royal_gym` database.

### 3. Configure the Backend

Navigate to the backend directory:

```bash
cd backend-java
```

Configure `src/main/resources/application.properties`:

```properties
spring.application.name=royalgym
server.port=5000
spring.data.mongodb.uri=mongodb://localhost:27017/royal_gym
jwt.secret=${JWT_SECRET}
```

Set the `JWT_SECRET` environment variable to a secure Base64-encoded secret before starting the application. Do not commit your actual secret to GitHub.

### 4. Run the Spring Boot Backend

Using Maven:

```bash
mvn spring-boot:run
```

The backend will start at:

`http://localhost:5000`

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Start the React Frontend

```bash
npm start
```

If the project uses Vite, use:

```bash
npm run dev
```

Open the frontend URL displayed in your terminal.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Authenticate a user and generate a JWT |
| GET | `/api/plans` | Retrieve gym plans |
| GET | `/api/reviews` | Retrieve customer reviews |
| POST | `/api/join` | Submit a gym membership request |

## 🔐 Authentication

- User passwords are hashed using BCrypt before being stored in MongoDB.
- Successful login generates a JWT token.
- The token has a validity of 7 days.
- API endpoints currently remain publicly accessible, matching the original backend's route behavior.

## 💡 Future Enhancements

- Admin dashboard to manage users and membership requests
- Online payment integration using Razorpay or Stripe
- JWT-based protected API endpoints
- Membership tracking and management
- Chatbot integration
- Cloud deployment

## 🙏 Credits

Built by **Vishal Gupta** using React.js, Java Spring Boot, and MongoDB.