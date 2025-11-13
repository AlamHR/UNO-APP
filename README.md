# UNO-APP
Hi This has been created out of curiosity and just to see how it works
Step-by-step Fix in VS Code
Step 1 — Open your project in VS Code


Open VS Code.


Click File → Open Folder... and select your UNO project folder (the one with frontend and server).



Step 2 — Open an integrated terminal
In VS Code:


Press Ctrl + ` (backtick) or


Go to View → Terminal


You’ll see a terminal open at the bottom.
By default, it’s PowerShell — that’s what’s blocking npm.ps1.

Step 3 — Allow local scripts (safe fix)
In the VS Code terminal, run this command:
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned



When prompted: Type “Y” and hit Enter.
This tells PowerShell: “Allow locally created scripts (like npm) to run safely.”



Step 4 — Verify it works
Now try:
npm -v

If it prints a version number (like 10.5.0), npm is working fine again.

🚀 Step 5 — Run your UNO app
Now you can start your servers directly from VS Code:
Backend (Server):
cd server
npm install
npm start

Keep that terminal running.
Then open a new terminal tab in VS Code (click the ➕ at the top-right of the terminal).
Frontend (Client):
cd frontend
npm install
npm run dev

You’ll see a link like:
Local: http://localhost:5173/

Open that in your browser — your UNO web app should load 🎮
(Optional) Step 6 — Revert execution policy later
If you want to disable script execution again for security:
Set-ExecutionPolicy -Scope CurrentUser Restricted
