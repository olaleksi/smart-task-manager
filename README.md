# 🧠 Smart Task Manager (MERN Stack)

A simple yet production-quality **Task Management Application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.

This app allows users to create, update, delete, and manage tasks with a clean UI and scalable backend architecture.

---

## 🚀 Features

* ✅ Create, read, update, and delete tasks (CRUD)
* ✅ RESTful API design
* ✅ MongoDB database integration
* ✅ Clean and modular folder structure
* ✅ Error handling & validation
* ✅ Loading and error states in UI
* ✅ ES6 Modules support
* ✅ Scalable architecture (ready for upgrades)

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS (basic styling)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* dotenv
* CORS

---

## 📁 Project Structure

```
smart-task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smart-task-manager.git
cd smart-task-manager
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Base URL

```
http://localhost:5000/api/tasks
```

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /        | Get all tasks   |
| POST   | /        | Create new task |
| PUT    | /:id     | Update task     |
| DELETE | /:id     | Delete task     |

---

## 🧪 Testing the API

You can test endpoints using:

* Postman
* Insomnia

Example request:

```json
POST /api/tasks

{
  "title": "Learn MERN",
  "description": "Build full stack apps"
}
```

---

## 🐛 Common Issues & Fixes

| Issue                  | Cause                  | Fix                     |
| ---------------------- | ---------------------- | ----------------------- |
| MongoDB not connecting | Wrong URI              | Check `.env` file       |
| CORS error             | Backend not configured | Ensure `cors()` is used |
| `req.body` undefined   | Missing middleware     | Add `express.json()`    |
| Module not found       | ES module path         | Include `.js` extension |

---

## 🧠 Debugging Tips

* Use `console.log()` to inspect data
* Check browser **Network tab**
* Verify API responses and status codes
* Use tools like Postman to isolate backend issues

---

## 🔥 Future Improvements

* 🔐 Authentication (JWT)
* 📅 Task deadlines & reminders
* 🔍 Search & filtering
* 📊 Dashboard analytics
* 🎨 UI upgrade (Tailwind CSS)
* 🌙 Dark mode
* ☁️ Deployment (Vercel + Render)

---

## 🌍 Deployment Guide (Suggested)

* **Frontend** → Vercel / Netlify
* **Backend** → Render / Railway
* **Database** → MongoDB Atlas

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---


---

## 👨‍💻 Author

Built by **Olalekan Olajide**
---


