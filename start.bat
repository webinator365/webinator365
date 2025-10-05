@echo off
echo ============================================
echo WEBINATOR365 - Setup e Avvio
echo ============================================
echo.

echo [1/3] Installazione dipendenze...
call npm install
if errorlevel 1 (
    echo.
    echo ERRORE: Installazione fallita!
    echo Assicurati di avere Node.js installato.
    echo Scaricalo da: https://nodejs.org
    pause
    exit /b 1
)

echo.
echo [2/3] Verifica build...
call npm run build
if errorlevel 1 (
    echo.
    echo ERRORE: Build fallita!
    echo Controlla gli errori sopra.
    pause
    exit /b 1
)

echo.
echo [3/3] Avvio server di sviluppo...
echo.
echo ============================================
echo SITO DISPONIBILE SU: http://localhost:3000
echo ============================================
echo.
echo Premi CTRL+C per fermare il server
echo.

call npm run dev
