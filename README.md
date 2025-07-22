# 🏋️‍♂️ Royal Gym - MERN Stack Gym Website

Welcome to **Royal Gym**, a fully functional and responsive gym website built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

This site features:

* Animated modern UI 💻
* Login/Register system 🔐
* Responsive layout for all devices 📱
* "Join Us" form stored in MongoDB 💾
* Admin-ready structure for scaling 🔧

---

## 🚀 Features

* ✅ Fully Responsive Design (Mobile / Tablet / Desktop)
* ✅ Home section with animated typewriter text
* ✅ Scroll-based animations using AOS
* ✅ Join Us modal form with MongoDB storage
* ✅ Protected routes after login
* ✅ Custom animated navbar toggle
* ✅ Clean, modern styling using CSS variables

---

## 🛠️ Tech Stack

* **Frontend**: React, HTML, CSS, AOS, Boxicons
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas
* **Authentication**: Basic session login (extensible)

---

## 📁 Project Structure

```
root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── App.css
│   │   
│
├── README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/vishalgupta22035/Royal-Gym.git
cd Royal-Gym
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Connect to MongoDB

* Create a MongoDB Atlas cluster
* Add your connection string to `backend/server.js`:

```js
mongoose.connect("YOUR_MONGO_URI", {...})
```

### 4. Start Backend Server

```bash
node server.js
```

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Start React Frontend

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 📦 Environment Variables (Optional)

If you use `.env`, configure:

```
MONGO_URI=your-mongo-url
PORT=5000
```

---

## 🧩 Future Suggestions

* Admin dashboard to view Join requests
* Payment integration with Razorpay/Stripe
* JWT-based authentication
* Chat or chatbot integration
* Deployment (Vercel + Render)

---

## 🙏 Credits

Built by Vishal Gupta using MERN stack & custom design.

