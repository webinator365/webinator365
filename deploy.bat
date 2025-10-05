@echo off
echo ============================================
echo WEBINATOR365 - DEPLOY RAPIDO
echo ============================================
echo.

echo [Step 1/3] Aggiungo modifiche a Git...
git add .
if errorlevel 1 (
    echo ERRORE: Git add fallito!
    pause
    exit /b 1
)

echo.
echo [Step 2/3] Creo commit...
set /p message="Inserisci messaggio commit (o premi ENTER per default): "
if "%message%"=="" set message=Update: improved responsive design and animations

git commit -m "%message%"
if errorlevel 1 (
    echo ERRORE: Git commit fallito!
    pause
    exit /b 1
)

echo.
echo [Step 3/3] Push su GitHub...
git push
if errorlevel 1 (
    echo ERRORE: Git push fallito!
    pause
    exit /b 1
)

echo.
echo ============================================
echo DEPLOY COMPLETATO CON SUCCESSO!
echo ============================================
echo.
echo Vercel sta facendo il deploy automaticamente...
echo Vai su https://vercel.com per vedere il progresso!
echo.
echo Il sito sara aggiornato in 2-3 minuti.
echo.
pause
