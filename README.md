# 🎯 InterviewIQ – AI Mock Interview Platform

InterviewIQ is a full-stack AI-powered mock interview platform that helps users prepare for technical and HR interviews through realistic AI-generated questions, resume-based interviews, detailed performance analysis, and downloadable reports.

Built with the MERN stack, the platform provides an interactive interview experience along with analytics to help users improve their communication and interview skills.

---

## 🚀 Features

- 🤖 AI-powered mock interviews
- 📄 Resume-based interview generation
- 💼 Technical & HR interview modes
- 📊 Detailed interview performance reports
- 📈 Interview history and analytics
- 📥 Download interview report as PDF
- 🔐 Secure Authentication using JWT
- 💳 Razorpay payment integration
- 📱 Responsive modern UI
- ⚡ Fast frontend built with React + Vite

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Framer Motion (Motion)
- Firebase Authentication
- jsPDF
- Recharts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Razorpay
- Cookie Parser
- CORS

---

## 📂 Project Structure

```
InterviewIQ
│
├── client/
│   ├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── redux/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   └── config/
│
└── README.md
```

---

## ✨ Main Modules

### Authentication

- User Signup/Login
- JWT Authentication
- Protected Routes

### AI Interview

- Technical Interviews
- HR Interviews
- AI-generated follow-up questions
- Adaptive interview flow

### Resume Interview

- Upload Resume
- AI analyzes resume
- Personalized interview questions

### Reports

- Interview score
- Performance evaluation
- Strengths & weaknesses
- AI feedback
- Downloadable PDF

### Dashboard

- Previous interview history
- Performance tracking
- Analytics & insights

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/interviewIQ.git

cd interviewIQ
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Server (.env)

```env
PORT=

MONGO_URI=

JWT_SECRET=

OPENROUTER_API_KEY=

RAZORPAY_KEY_ID=

RAZORPAY_KEY_SECRET=

FRONTEND_URL=
```

### Client (.env)

```env

VITE_FIREBASE_APP_ID=

VITE_RAZORPAY_KEY_ID=
```

---


---

## 🌟 Future Improvements

- Coding interview mode
- Company-specific interview preparation
- Leaderboard
- Interview sharing
- Multi-language support


---

## 📄 License

This project is developed for educational and portfolio purposes.
