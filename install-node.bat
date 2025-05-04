@echo off
echo Installing Node.js...
powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi -OutFile node-installer.msi"
echo Running installer...
start /wait msiexec /i node-installer.msi /qn
echo Installation complete. Please restart your terminal to use npm.
pause
