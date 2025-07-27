# Excel Analytics Platform

A powerful platform for uploading any Excel file (.xls or .xlsx), analyzing the data, and generating
interactive 2D and 3D charts. Users can select X and Y axes from the column headers of the Excel file,
choose chart types, and generate downloadable graphs. Each user's history of uploads and analysis is saved
and visible on their dashboard. Admin can manage users and data usage. The platform will optionally
integrate AI APIs to provide smart insights or summary reports from the uploaded data.


# 📊 Excel Analytics Platform

A full-stack MERN application that allows users to upload Excel files, visualize dynamic 2D/3D charts, and manage their upload history — all with user authentication and optional AI-powered summaries.

---

## 🚀 Features

- 🔐 **JWT-based Authentication** (User & Admin)
- 📁 **Excel Upload & Parsing** (using SheetJS)
- 📊 **Dynamic Chart Rendering** (Bar, Line, Pie, 3D Column)
- 🧭 **X/Y Axis Selection**
- 📥 **Downloadable Charts** (PNG / PDF)
- 🕓 **User Dashboard** with Upload History
- 🤖 **AI Tools API Integration** *(Optional)*
- 🧼 **Modern UI** with Tailwind CSS
- ☁️ **MongoDB** for persistent upload history

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Redux Toolkit
- Vite
- Chart.js
- Three.js
- Tailwind CSS

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Multer (File Upload)
- SheetJS / xlsx
- JWT (Authentication)

---

## 📂 Folder Structure

ExcelAnalyticsPlatform/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ ├── public/
│ └── vite.config.js


---

## 📷 Screenshots

> *(Add screenshots of your dashboard, upload, and charts here)*

---

## 🧪 API Endpoints

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| POST   | `/api/auth/login`      | Login User               |
| POST   | `/api/files/upload`    | Upload Excel File        |
| GET    | `/api/files/history`   | Get Upload History       |
| GET    | `/api/chart/generate`  | Generate Chart Data      |

---

## 🧠 Optional AI Integration

You can plug in the OpenAI API to generate smart summaries from Excel data. Configure this using your :


🧾 Installation
🖥 Backend
cd backend
npm install
npm run dev

💻 Frontend
cd frontend
npm install
npm run dev


🙋‍♂️ Author
Sujal Charpe

GitHub: sujal6704








 
