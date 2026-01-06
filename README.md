# 🎬 Prathamflix  
*A Netflix-inspired full-stack streaming web application*

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-purple?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%7C%20Firestore-orange?logo=firebase)
![TMDB](https://img.shields.io/badge/TMDB-API-green)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 🚀 Live Demo
🔗 **https://prathamflix.vercel.app**

---

## 📌 About the Project

**Prathamflix** is a modern Netflix-style streaming platform built to demonstrate **real-world frontend engineering skills**, including authentication, protected routing, API integration, custom content management, and responsive UI design.

The project blends:
- **API-driven content (TMDB trailers)**
- **Custom movie & series library**
- **Internet Archive embeds**
- **Firebase authentication & data handling**

Designed with scalability and clean architecture in mind.

---

## ✨ Key Features

### 🔐 Authentication & Security
- Firebase email/password login & signup
- Auth-protected routes
- Auto redirect based on user session
- Logout handling

### 🎥 Streaming Experience
- TMDB movie trailers (YouTube embed)
- Public-domain movies via Internet Archive
- Dedicated Player page with fallback handling

### 📚 Custom Content Library
- Movies
- Anime & Cartoons
- TV Series
- Episode-based navigation
- Custom thumbnails & descriptions
- No external API dependency for library content

### 🔍 Smart Search (Custom)
- Instant search across **your own movie library**
- No external API dependency
- Click-to-play behavior

### 👤 User Experience
- Changeable profile photo (local persistence)
- Responsive UI (mobile + desktop)
- Horizontal scrolling rows
- Netflix-inspired UI/UX

### 🌐 Navigation & Layout
- Home page with categorized rows
- Dedicated Movies page
- Navbar shortcuts (TV Shows, Movies, My List, etc.)
- Footer with external social links

---

## 🛠 Tech Stack

| Area | Technology |
|----|----|
| Frontend | React, React Router |
| Build Tool | Vite |
| Authentication | Firebase Auth |
| Database | Firebase Firestore |
| APIs | TMDB, Internet Archive |
| Styling | Custom CSS |
| Deployment | Vercel |

---

## 📂 Project Structure

src/
├── assets/
├── components/
│ ├── Navbar/
│ ├── Footer/
│ ├── TitleCards/
├── pages/
│ ├── Home/
│ ├── Login/
│ ├── Movies/
│ ├── Player/
├── data/
│ └── library.js
├── firebase.js
├── App.jsx
├── main.jsx


---

## 🔑 Environment Setup

Create a `.env` file:

```env
VITE_TMDB_TOKEN=your_tmdb_bearer_token
```
---
🧪 Run Locally
```
git clone https://github.com/prathamkun/netflix-clone.git
cd netflix-clone
npm install
npm run dev
```
---
## 📈 What This Project Demonstrates 

✔ Real-world React architecture
✔ Auth-based routing & state handling
✔ API consumption & error handling
✔ Custom search logic
✔ Responsive UI design
✔ Deployment-ready codebase
✔ Clean component separation
---
## 🔗 Socials

🐦 Twitter / X → https://x.com/prathamiscoding

📸 Instagram → https://www.instagram.com/pratham.huh/
---
## 📜 Disclaimer

This project is created for educational & portfolio purposes only.
All videos are embedded from public sources or official APIs.
No copyrighted media is hosted.

---
### 👨‍💻 Author

Pratham Kun
Frontend Developer | React | Firebase | UI Engineering

⭐ If you like this project, consider starring the repo!

