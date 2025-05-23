# 🚌 RedBus Clone - MERN Stack Project

A full-stack RedBus clone built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can sign up, log in, search for buses, select seats, enter passenger details, and confirm bookings with a downloadable ticket.

## 🚀 Features

- ✅ User Authentication (Signup/Login/Logout)
- 🎫 Seat Selection with Local & DB Support
- 📅 Bus Route, Date & Time Display
- 🧑 Passenger Details Form
- 💾 MongoDB Integration to Save Bookings
- 🖨️ Downloadable/Printable Ticket
- 🔒 AuthContext for Global State Management
- 🌐 Responsive UI with Bootstrap

## 🛠️ Tech Stack

**Frontend**  
- React.js (Vite)
- React Router
- Bootstrap 5
- AuthContext API

**Backend**  
- Node.js
- Express.js
- MongoDB with Mongoose
- Bcrypt for password hashing
- CORS for secure API calls

## 📁 Project Structure

```bash
redbus-clone/
│
├── backend/                  # Express backend for API & MongoDB
│   ├── models/               # Mongoose schemas (e.g., User.js, Booking.js)
│   ├── routes/               # Route handlers (e.g., auth.js, bookings.js)
│   └── server.js             # Backend entry point and server setup
│
├── src/                      # React frontend
│   ├── components/           # Reusable UI components (Header, SeatSelector, etc.)
│   ├── context/              # Global state using AuthContext
│   ├── pages/                # Page components (Login, Signup, BookingConfirmation)
│   ├── data/                 # Static data (e.g., busData.js)
│   └── App.jsx               # Root component with routing logic
│
├── .env                      # Environment variables (e.g., MongoDB URI)
├── package.json              # NPM project configuration (frontend or full monorepo)
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration for frontend
```

## 🌐 Running the App Locally

### 🔧 Backend

```bash
cd backend
npm install
# Add .env file with your MongoDB URI
MONGO_URI=your_mongo_uri
node server.js
```
 ### 💻 Frontend
 ```bash
 cd redbus-clone
npm install
npm run dev
```
App runs at: http://localhost:5000 (Vite frontend)
API runs at: http://localhost:5001 or your backend port

### 📸 Screenshots
![alt text](<Screenshot 2025-05-23 150509.png>)
![alt text](<Screenshot 2025-05-23 150520.png>)
![alt text](<Screenshot 2025-05-23 150616.png>)
![alt text](<Screenshot 2025-05-23 150629.png>)
![alt text](image.png)

### 📌 Future Enhancements
- Payment gateway integration

- Admin panel for adding buses

- OTP/email verification

- Filter by time, price, rating

### 🙌 Author
Made with ❤️ by Bethu Dilip Chandu

