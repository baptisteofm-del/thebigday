# 🎯 The Big Day Corsica — Website

Website refonte pour l'agence événementielle The Big Day Corsica, spécialisée dans les mariages et événements privés en Corse.

## 🏗️ Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Type Safety**: TypeScript
- **UI Components**: Radix UI (optionnel)
- **Notifications**: React Hot Toast

## 📁 Structure du Projet

```
thebigday/
├── src/
│   ├── app/                    # Pages Next.js
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Accueil
│   │   ├── the-big-day/        # Section mariages
│   │   ├── the-gathering/      # Section événements privés
│   │   ├── galerie/            # Portfolio
│   │   └── contact/            # Contact
│   ├── components/             # Composants réutilisables
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── supabase/           # Clients Supabase
│   │   │   ├── client.ts       # Client-side
│   │   │   └── server.ts       # Server-side
│   │   ├── api.ts              # Fonctions API (fetch data)
│   │   └── utils.ts            # Utilitaires
│   ├── styles/
│   │   └── globals.css         # Styles globaux
│   └── types/
│       └── index.ts            # Types TypeScript
├── supabase/
│   └── schema.sql              # Migrations SQL
├── public/                     # Assets statiques
├── .env.example                # Template env vars
├── tailwind.config.ts          # Config Tailwind
└── next.config.ts              # Config Next.js
```

## 🚀 Installation & Setup

### 1. Prerequisites

- Node.js 18+
- npm ou yarn
- Compte Supabase

### 2. Installation

```bash
cd thebigday
npm install
# ou
yarn install
```

### 3. Configuration Supabase

**a) Créer un projet Supabase**
- Aller sur https://supabase.com
- Créer un nouveau projet
- Copier l'URL et la clé anon

**b) Exécuter les migrations**
- Aller dans SQL Editor de Supabase
- Copier le contenu de `supabase/schema.sql`
- Exécuter

**c) Variables d'environnement**
```bash
cp .env.example .env.local
# Remplir avec tes credentials Supabase
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Démarrer le développement

```bash
npm run dev
```

Ouvre http://localhost:3000

## 📊 Schéma Base de Données

### Tables principales

- **agencies**: Infos agence
- **profiles**: Utilisateurs/équipe
- **event_types**: Catégories d'événements
- **events**: Mariages & événements
- **portfolios**: Photos galerie
- **testimonials**: Témoignages clients
- **bookings**: Demandes de réservation
- **contact_messages**: Messages contact
- **team_members**: Prestataires & équipe

Voir `supabase/schema.sql` pour détails.

## 🎨 Palette de Couleurs

- **Cream**: `#faf8f5`
- **Ivory**: `#f5f3f0`
- **Sand**: `#e8dcc8`
- **Taupe**: `#8b9b8f`
- **Dark**: `#3d332a`
- **Gold**: `#d4af8a`

## 🔤 Typographies

- **Sérif**: Cormorant Garamond (titres)
- **Sans**: Inter (textes)

Importées depuis Google Fonts dans `src/styles/globals.css`

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Accueil |
| `/the-big-day` | Section mariages |
| `/the-gathering` | Section événements privés |
| `/galerie` | Portfolio photos |
| `/contact` | Formulaire contact |

## 🔧 Fonctionnalités Principales

- ✅ Affichage dynamique depuis Supabase
- ✅ Formulaire contact avec sauvegarde en BD
- ✅ Galerie photos responsive
- ✅ Témoignages clients
- ✅ Mobile-first design
- ✅ Type-safe avec TypeScript
- ✅ SEO-friendly

## 📈 À Venir

- [ ] Admin dashboard
- [ ] Authentification utilisateur
- [ ] Gestion des photos (upload)
- [ ] Email notifications
- [ ] Blog/News
- [ ] Formulaires avancés
- [ ] Analytics

## 🚢 Deployment

### Vercel (recommandé)

```bash
vercel
```

### Autres options

- Netlify
- Railway
- Heroku
- Self-hosted avec Docker

## 📝 Notes de Développement

### Client-side vs Server-side

Les pages utilisent **Server Components** par défaut (plus rapide, plus sûr). Pour du state/interactivité, utilise `'use client'`.

### Fetch Data

```typescript
// Server Component
import { getEvents } from '@/lib/api'

const events = await getEvents()

// Client Component
'use client'
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
const { data } = await supabase.from('events').select()
```

### Styling

Utilise Tailwind CSS avec les classes custom définis dans `tailwind.config.ts`:

```tsx
// Couleurs prédéfinies
<div className="bg-gold text-dark">...</div>

// Composants custom
<button className="btn btn-primary">Cliquer</button>
```

## 🤝 Contribution

Pour améliorer le site:

1. Créer une branche
2. Faire tes changements
3. Tester localement
4. Faire un PR

## 📞 Support

Pour questions ou bugs: contact@thebigday.fr

---

**Créé avec ❤️ pour The Big Day Corsica**
