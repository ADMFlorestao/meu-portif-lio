@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo ERRO: Node.js nao foi encontrado.
  echo Instale o Node.js 22 ou mais recente e tente novamente.
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo ERRO: npm nao foi encontrado.
  echo Reinstale o Node.js com o npm e tente novamente.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Instalando dependencias do portfolio...
  call npm ci
  if errorlevel 1 (
    echo ERRO: nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
)

set "PORT=3000"
set "LOCAL_URL=http://127.0.0.1:%PORT%"

echo Iniciando o portfolio em %LOCAL_URL%...
start "Portfolio Local - Servidor" cmd /k "cd /d ""%~dp0"" && npm run dev -- --hostname 127.0.0.1 --port %PORT%"

timeout /t 5 /nobreak >nul
start "" "%LOCAL_URL%"

endlocal
