# 🚀 GUIDA RAPIDA AL DEPLOY

## Prima di iniziare
Assicurati di avere:
- [ ] Node.js installato (v18 o superiore)
- [ ] Account GitHub
- [ ] Account Vercel (gratuito)
- [ ] Dominio acquistato su Namecheap

---

## STEP 1: Testa in locale

```bash
# Apri il terminale nella cartella del progetto
cd C:\Users\Gessa_Alex\Desktop\Webinator365

# Installa dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri http://localhost:3000 per vedere il sito

---

## STEP 2: Pubblica su GitHub

```bash
# Inizializza Git
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit - Webinator365 website"

# Crea un nuovo repository su GitHub chiamato "webinator365"
# Poi esegui:
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/webinator365.git
git push -u origin main
```

---

## STEP 3: Deploy su Vercel

### Opzione A: Tramite Dashboard (FACILE!)

1. Vai su **https://vercel.com**
2. Fai **Login con GitHub**
3. Clicca **"Add New"** → **"Project"**
4. Seleziona il repository **webinator365**
5. Clicca **"Deploy"**
6. Attendi 2-3 minuti... FATTO! 🎉

Vercel ti darà un URL tipo: `webinator365.vercel.app`

### Opzione B: Tramite CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy in produzione
vercel --prod
```

---

## STEP 4: Collega il dominio Namecheap

### Su Namecheap:

1. Vai su **Domain List** → seleziona il tuo dominio
2. Clicca **"Manage"**
3. Vai su **"Advanced DNS"**
4. Aggiungi questi 2 record:

**Record 1 (Per dominio principale):**
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**Record 2 (Per www):**
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. **RIMUOVI** eventuali record A o CNAME esistenti per @ e www
6. Clicca **"Save All Changes"**

### Su Vercel:

1. Vai al tuo progetto su Vercel
2. Clicca **"Settings"** → **"Domains"**
3. Inserisci il tuo dominio (es. `webinator365.com`)
4. Clicca **"Add"**
5. Vercel verificherà automaticamente la configurazione DNS

⏱️ **Attendi 5-30 minuti** per la propagazione DNS

---

## STEP 5: Configura HTTPS e WWW

Su Vercel, il dominio viene configurato automaticamente con:
- ✅ HTTPS/SSL (certificato gratuito Let's Encrypt)
- ✅ Redirect automatico da http a https
- ✅ Redirect da www a dominio principale (o viceversa)

---

## ✅ CHECKLIST FINALE

- [ ] Sito funziona su localhost
- [ ] Codice pushato su GitHub
- [ ] Deploy su Vercel completato
- [ ] Dominio Namecheap configurato
- [ ] DNS propagato (test su https://dnschecker.org)
- [ ] HTTPS attivo
- [ ] Form contatti funzionante

---

## 🔧 TROUBLESHOOTING

### Il sito non si carica
- Aspetta 15-30 minuti per la propagazione DNS
- Verifica i record DNS su Namecheap
- Controlla lo stato su Vercel Dashboard

### Errore 404
- Verifica che il build sia completato con successo su Vercel
- Controlla i logs in Vercel Dashboard → Deployments

### Build fallito
```bash
# Prova a buildare in locale
npm run build

# Se ci sono errori, risolvili prima di pushare
```

---

## 📧 NEXT STEPS

### 1. Configura Email per Form Contatti

**Opzione semplice - EmailJS (GRATIS):**
```bash
npm install @emailjs/browser
```

Registrati su https://www.emailjs.com e segui la guida.

**Opzione professionale - Resend:**
```bash
npm install resend
```

### 2. Aggiungi Analytics

**Vercel Analytics (GRATIS):**
- Vai su Vercel Dashboard → tuo progetto → Analytics
- Clicca "Enable"

**Google Analytics:**
- Crea proprietà su https://analytics.google.com
- Aggiungi il tracking code in `layout.tsx`

### 3. Ottimizza SEO

Aggiungi in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://webinator365.com'),
  openGraph: {
    title: 'Webinator365 | Software Solutions',
    description: 'Sviluppo software professionale',
    images: ['/og-image.jpg'],
  },
}
```

### 4. Aggiungi Favicon

Metti `favicon.ico` in `src/app/` o `public/`

---

## 🎉 CONGRATULAZIONI!

Il tuo sito è LIVE! 🚀

**URL del sito:** https://webinator365.com

Per aggiornamenti futuri:
```bash
# Fai le modifiche
git add .
git commit -m "Descrizione modifiche"
git push

# Vercel farà il deploy automaticamente!
```

---

**Domande?** Controlla il README.md completo o la documentazione ufficiale:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs
