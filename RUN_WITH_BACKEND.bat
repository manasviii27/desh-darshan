@echo off
echo ===========================================
echo   DeshDarshan Travel Website
echo ===========================================
echo.
echo Starting server...
cd /d "%~dp0backend"
start cmd /k "java Server"
timeout /t 3 /nobreak >nul
start http://localhost:5000
echo.
echo If browser did not open, go to: http://localhost:5000
echo.
pause
