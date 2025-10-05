# 🔥 COMANDI GIT ESSENZIALI

## Setup iniziale (una volta sola)

```bash
# Configura il tuo nome
git config --global user.name "Il Tuo Nome"

# Configura la tua email
git config --global user.email "tua-email@example.com"

# Inizializza repository
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit"

# Collega a GitHub
git remote add origin https://github.com/TUO-USERNAME/webinator365.git

# Pusha online
git branch -M main
git push -u origin main
```

---

## Comandi quotidiani

### Vedere cosa è cambiato
```bash
git status
```

### Aggiungere modifiche
```bash
# Aggiungi tutto
git add .

# O aggiungi file specifici
git add src/components/Hero.tsx
```

### Salvare modifiche (commit)
```bash
git commit -m "Descrizione delle modifiche"
```

Esempi di messaggi commit:
- `"Fix: corretto bug nel form contatti"`
- `"Update: migliorato design Hero section"`
- `"Add: aggiunta sezione testimonials"`
- `"Remove: rimossa sezione non utilizzata"`

### Inviare online (push)
```bash
git push
```

### Scaricare aggiornamenti (pull)
```bash
git pull
```

---

## Workflow completo per aggiornamenti

```bash
# 1. Vedi cosa hai modificato
git status

# 2. Aggiungi le modifiche
git add .

# 3. Salva con un messaggio
git commit -m "Update: testo homepage modificato"

# 4. Invia online
git push
```

**✨ Vercel farà il deploy automaticamente!**

---

## Comandi utili

### Vedere la cronologia
```bash
git log --oneline
```

### Annullare modifiche non salvate
```bash
# Attenzione: questo cancella le modifiche!
git checkout .
```

### Creare un nuovo branch
```bash
git checkout -b feature/nuova-funzionalita
```

### Tornare al branch main
```bash
git checkout main
```

### Vedere i file modificati
```bash
git diff
```

---

## 🆘 Situazioni di emergenza

### Ho fatto casino, voglio tornare indietro!
```bash
# Torna all'ultimo commit (ATTENZIONE: perdi le modifiche)
git reset --hard HEAD

# Oppure torna a un commit specifico
git reset --hard CODICE_COMMIT
```

### Ho committato troppo presto
```bash
# Annulla l'ultimo commit (mantieni le modifiche)
git reset --soft HEAD~1
```

### Conflitto durante il pull
```bash
# 1. Apri i file in conflitto
# 2. Risolvi manualmente i conflitti
# 3. Aggiungi i file risolti
git add .
# 4. Completa il merge
git commit -m "Risolto conflitto"
```

---

## 📝 Best Practices

### ✅ FARE:
- Commit frequenti con messaggi chiari
- Pull prima di iniziare a lavorare
- Push alla fine della giornata
- Testare prima di pushare

### ❌ NON FARE:
- Commit di file grandi (>100MB)
- Commit di password o chiavi API
- Modificare la cronologia già pushata
- Ignorare i conflitti

---

## 🔐 File da NON committare

Questi file sono già nel .gitignore:
- `node_modules/` (dipendenze)
- `.env.local` (variabili d'ambiente)
- `.next/` (build)
- `*.log` (file di log)

Se hai committato per errore file sensibili:
```bash
# Rimuovi dal tracking (file rimane in locale)
git rm --cached .env.local
git commit -m "Remove sensitive file"
git push
```

---

## 🎯 Cheat Sheet rapida

```bash
git status          # Cosa è cambiato?
git add .           # Aggiungi tutto
git commit -m "msg" # Salva con messaggio
git push            # Invia online
git pull            # Scarica aggiornamenti
git log             # Cronologia
```

---

## 📚 Risorse utili

- Guida Git ufficiale: https://git-scm.com/doc
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
- Imparare Git interattivo: https://learngitbranching.js.org/

---

**Ricorda:** Git tiene traccia di TUTTO, quindi non aver paura di sperimentare! 
Puoi sempre tornare indietro. 🚀
