# UNO Web App 🎮

A full-stack UNO card game implementation built with modern web technologies.

![Platform](https://img.shields.io/badge/Platform-Web-black)
![Stack](https://img.shields.io/badge/Stack-Full--Stack-lightgreen)
![License](https://img.shields.io/badge/License-MIT-silver)

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **VS Code** (recommended)

### Installation & Setup

1. **Clone and Open Project**
   ```bash
   git clone <your-repo-url>
   cd UNO-APP
   code .  # Opens VS Code
   ```

2. **Configure PowerShell Execution Policy**
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
   ```
   > ✅ This allows npm scripts to run securely in VS Code's terminal

3. **Start the Backend Server**
   ```bash
   cd server
   npm install
   npm start
   ```
   *Keep this terminal running*

4. **Start the Frontend Client** 
   *(Open new terminal tab in VS Code)*
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. **Play the Game!**
   - Open: http://localhost:5173
   - Enjoy your UNO game! 🎉

## 📁 Project Structure
```
UNO-APP/
├── frontend/          # React/Vite client
│   ├── src/
│   ├── package.json
│   └── ...
├── server/            # Node.js/Express backend
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and dev server
- **Modern CSS** - Styling and animations

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.io** - Real-time communication

## ⚙️ Development Setup

### VS Code Configuration

#### Step 1 — Open Project
- Launch VS Code
- Click `File → Open Folder...`
- Select your UNO project folder (containing `frontend` and `server`)

#### Step 2 — Open Integrated Terminal
- Press `Ctrl + `` (backtick) or
- Go to `View → Terminal`
- Terminal opens at bottom (default: PowerShell)

#### Step 3 — Fix PowerShell Execution Policy
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
When prompted: Type `Y` and hit `Enter`

> 🔒 **Security Note**: This safely allows local scripts (like npm) to run

#### Step 4 — Verify Installation
```bash
npm -v
```
Should display version number (e.g., `10.5.0`)

## 🎯 Running the Application

### Development Mode

#### Backend (Server)
```bash
cd server
npm install
npm start
```
*Server starts - keep this terminal running*

#### Frontend (Client)
Open new terminal tab in VS Code (click `➕` at top-right of terminal)
```bash
cd frontend
npm install
npm run dev
```

You'll see output similar to:
```
Local:    http://localhost:5173/
```

Open the provided link in your browser to play! 🎮

## 🔧 Troubleshooting

### Common Issues

**npm not working in PowerShell:**
```powershell
# Fix execution policy
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned

# Verify npm works
npm -v
```

**Port already in use:**
- Close other terminal sessions
- Kill processes on ports 5173 (frontend) and your backend port

**Dependencies issues:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

## 📖 Development Notes

This project was created out of curiosity to explore:
- Real-time multiplayer game development
- Full-stack JavaScript/TypeScript applications
- WebSocket communication patterns
- Modern React patterns and state management

## 🔒 Security (Optional)

To revert execution policy after development:
```powershell
Set-ExecutionPolicy -Scope CurrentUser Restricted
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎊 Acknowledgments

- Inspired by the classic UNO card game
- Built with modern web technologies
- Perfect for learning full-stack development

