# 🎯 THE BIG DAY — Guide d'Installation Complet

## Phase 1: Préparation (5-10 min)

### 1.1 Créer un compte Supabase

1. Aller sur https://supabase.com
2. S'inscrire avec email ou GitHub
3. Créer un nouveau projet
   - **Organization**: créer ou choisir
   - **Project name**: `thebigday`
   - **Database password**: générer un fort mot de passe (garder précieusement)
   - **Region**: choisir la plus proche (ex: Europe - eu-west-1)
4. Attendre le déploiement (~2 min)

### 1.2 Récupérer les credentials

Une fois le projet créé:

1. Aller dans **Settings** → **API**
2. Copier:
   - `NEXT_PUBLIC_SUPABASE_URL`: URL du projet
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: clé anon publique
   - `SUPABASE_SERVICE_ROLE_KEY**: clé service (privée, la garder secrète!)

## Phase 2: Installation du Projet (5-10 min)

### 2.1 Clone ou crée localement

```bash
# Depuis le workspace OpenClaw
cd /data/.openclaw/workspace/thebigday

# Ou si c'est un nouveau projet
git clone <repo-url> thebigday
cd thebigday
```

### 2.2 Installer les dépendances

```bash
npm install
# ou yarn install
```

### 2.3 Configurer les variables d'environnement

```bash
# Copier le template
cp .env.example .env.local

# Éditer .env.local avec tes credentials Supabase
nano .env.local  # ou utiliser ton éditeur préféré
```

Remplir avec tes valeurs:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxx...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Phase 3: Setup Supabase (10-15 min)

### 3.1 Créer les tables

1. Aller dans Supabase Console → **SQL Editor**
2. Créer une nouvelle query
3. Copier tout le contenu de `supabase/schema.sql`
4. Coller dans l'éditeur
5. Cliquer **Run** (triangle play)

✅ Attendre que tout s'exécute (devrait dire "Success")

### 3.2 Vérifier la structure

1. Aller dans **Table Editor**
2. Tu dois voir:
   - `agencies` (avec 1 ligne: The Big Day Corsica)
   - `event_types` (avec 7 types d'événements)
   - `profiles`
   - `events`
   - `portfolios`
   - `testimonials`
   - `bookings`
   - `contact_messages`
   - `team_members`

Si tout est là ✅, c'est bon!

## Phase 4: Test Local (5 min)

### 4.1 Démarrer le serveur

```bash
npm run dev
```

Devrait afficher:
```
> next dev
  ▲ Next.js 16.2.6
  - Local:        http://localhost:3000
```

### 4.2 Ouvrir dans le navigateur

- http://localhost:3000

Tu dois voir:
- ✅ Navbar avec logo
- ✅ Hero section
- ✅ Sections "The Big Day" et "The Gathering"
- ✅ Footer

### 4.3 Tester le formulaire contact

1. Clique sur **Contact** dans la navbar
2. Remplis le formulaire
3. Clique **Planifier mon projet**
4. Devrait afficher "Merci! Nous vous répondrons très bientôt."

Puis vérifie dans Supabase:
- Table **bookings** → une nouvelle ligne doit apparaître ✅

## Phase 5: Personnalisation (En cours)

### 5.1 Ajouter du contenu

**Testimonials**:
```sql
INSERT INTO testimonials (agency_id, author_name, author_role, content, rating, published)
SELECT 
  id,
  'Marie & Antoine',
  'Mariés 2024',
  'The Big Day a créé un mariage magique!',
  5,
  true
FROM agencies WHERE slug = 'thebigday';
```

**Events**:
Via le dashboard (à créer) ou directement SQL.

### 5.2 Ajouter des photos

Pour la galerie et les événements, uploader les images:

**Option 1**: Supabase Storage (recommandé)
```sql
-- Créer un bucket pour les photos
-- Puis utiliser l'upload API
```

**Option 2**: URLs externes (Cloudinary, etc.)
- Ajouter directement les URLs dans la BD

### 5.3 Éditer les textes

Les textes hardcodés sont dans:
- `src/app/page.tsx` (accueil)
- `src/app/the-big-day/page.tsx`
- `src/app/the-gathering/page.tsx`
- `src/app/contact/page.tsx`

Cherche et remplace les textes de démo.

## Phase 6: Deployment (Vercel)

### 6.1 Créer un repo GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/user/thebigday.git
git push -u origin main
```

### 6.2 Déployer sur Vercel

1. Aller sur https://vercel.com
2. S'inscrire
3. **Import Project** → Choisis ton repo GitHub
4. **Environment Variables** → Ajoute tes 3 variables Supabase
5. Cliquer **Deploy**

Vercel va:
- Builder le projet
- Déployer sur une URL (thebigday-xxxx.vercel.app)
- Créer un domaine personnalisé

### 6.3 Domaine personnalisé

1. Aller dans Vercel → **Settings** → **Domains**
2. Ajouter `thebigday.fr`
3. Suivre les instructions DNS

## 🎯 Prochaines Étapes

- [ ] Admin dashboard (pour gérer le contenu)
- [ ] Upload de photos (Supabase Storage ou externe)
- [ ] Email notifications (Resend API)
- [ ] Blog/actualités
- [ ] Formulaires avancés (multi-step booking)
- [ ] Analytics (Vercel Analytics ou custom)
- [ ] SEO optimization
- [ ] Tests automatisés

## 🆘 Troubleshooting

### Erreur: "NEXT_PUBLIC_SUPABASE_URL is not set"

**Solution**: Vérifier que `.env.local` existe et a les bonnes valeurs. Redémarrer le serveur.

### Erreur: "Can't reach Supabase"

**Solution**:
1. Vérifier que l'URL Supabase est correcte
2. Vérifier que la clé anon est correcte
3. Vérifier la connexion internet
4. Vérifier que le projet Supabase est "Active"

### Formulaire ne sauvegarde rien

**Solution**:
1. Ouvrir la console browser (F12)
2. Voir s'il y a une erreur
3. Vérifier que la table `bookings` existe
4. Vérifier que `agencies.id` est correct

### Tailwind CSS ne charge pas

**Solution**:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 📞 Support

Pour questions:
- Lire le README.md
- Checker les logs du serveur
- Vérifier Supabase logs

---

**Tu es prêt! 🚀**
