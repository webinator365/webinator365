# Webinator365 Website

Sito web ufficiale di Webinator365 - Software Solutions That Never Stop

## 🚀 Tecnologie Utilizzate

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling moderno e responsive
- **React 18** - UI library

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy su Vercel

### Opzione 1: Deploy tramite GitHub (Consigliato)

1. **Inizializza Git e pusha su GitHub:**
   ```bash
   cd C:\Users\Gessa_Alex\Desktop\Webinator365
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/webinator365.git
   git push -u origin main
   ```

2. **Collega Vercel a GitHub:**
   - Vai su [vercel.com](https://vercel.com)
   - Fai login con GitHub
   - Clicca "Add New" → "Project"
   - Seleziona il repository `webinator365`
   - Vercel rileverà automaticamente Next.js
   - Clicca "Deploy"

### Opzione 2: Deploy tramite Vercel CLI

```bash
# Installa Vercel CLI globalmente
npm i -g vercel

# Deploy
cd C:\Users\Gessa_Alex\Desktop\Webinator365
vercel

# Per production
vercel --prod
```

## 🔧 Configurazione Dominio Namecheap

### Passo 1: Acquista il dominio su Namecheap
1. Vai su [namecheap.com](https://www.namecheap.com)
2. Cerca e acquista `webinator365.com` (o la variante che preferisci)

### Passo 2: Connetti il dominio a Vercel

**Su Vercel:**
1. Vai al tuo progetto su Vercel
2. Vai su "Settings" → "Domains"
3. Inserisci il tuo dominio (es. `webinator365.com`)
4. Vercel ti fornirà i record DNS da configurare

**Su Namecheap:**
1. Vai su "Domain List" → seleziona il tuo dominio
2. Clicca su "Manage"
3. Vai su "Advanced DNS"
4. Aggiungi i seguenti record:

   **Per dominio apex (webinator365.com):**
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **Per www (www.webinator365.com):**
   ```
   Type: CNAME Record
   Host: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

5. Salva le modifiche

### Passo 3: Verifica su Vercel
1. Torna su Vercel → "Domains"
2. Aspetta qualche minuto (propagazione DNS può richiedere fino a 48h, ma di solito 5-10 minuti)
3. Vercel verificherà automaticamente il dominio
4. Una volta verificato, il sito sarà live!

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.js`:
- **Primary**: #0066CC (blu)
- **Secondary**: #FF6B35 (arancione)
- **Dark**: #1a1a1a (nero)

### Contenuti
- **Hero**: `src/components/Hero.tsx`
- **Servizi**: `src/components/Services.tsx`
- **Perché noi**: `src/components/WhyUs.tsx`
- **Contatti**: `src/components/Contact.tsx`
- **Footer**: `src/components/Footer.tsx`

## 📧 Configurazione Form Contatti

Il form attualmente mostra un alert. Per collegarlo a un servizio email:

### Opzione 1: Vercel Web3 Forms (Gratuito)
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  // gestisci risposta
}
```

### Opzione 2: EmailJS (Gratuito, semplice)
1. Registrati su [emailjs.com](https://www.emailjs.com)
2. Installa: `npm install @emailjs/browser`
3. Configura il servizio nel componente Contact

### Opzione 3: SendGrid, Resend, o simili

## 📝 TODO Post-Deploy

- [ ] Configura analytics (Google Analytics, Vercel Analytics)
- [ ] Aggiungi favicon personalizzata in `public/`
- [ ] Configura email per form contatti
- [ ] Aggiungi Open Graph images per social sharing
- [ ] Configura sitemap e robots.txt
- [ ] Setup Google Search Console

## 🔒 Variabili d'Ambiente

Crea un file `.env.local` per variabili sensibili:
```env
NEXT_PUBLIC_SITE_URL=https://webinator365.com
# Aggiungi altre variabili necessarie
```

## 📞 Supporto

Per qualsiasi problema:
- Email: info@webinator365.com
- La documentazione Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- La documentazione Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Fatto con ❤️ da Webinator365**
