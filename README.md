# Digital Campus Dz — École d'e-learning algérienne

Site web officiel de **Digital Campus Dz (D.C.D)**, une plateforme d'enseignement en ligne qui propose des cours de programmation via Google Meet à destination des étudiants algériens.

---

## Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS** (mobile-first)
- **Framer Motion** (animations)
- **React Hook Form** (formulaires)
- **TypeScript**

---

## Lancer le projet

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Nace121/campus1.git
cd campus1

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

---

## Structure du projet

```
src/
├── app/                        # Pages (App Router Next.js 14)
│   ├── layout.tsx              # Layout global (Header + Footer)
│   ├── page.tsx                # Accueil
│   ├── formations/page.tsx     # Liste des formations
│   ├── comment-ca-marche/      # Fonctionnement
│   ├── inscription/page.tsx    # Formulaire d'inscription
│   └── contact/page.tsx        # Contact & réseaux sociaux
│
├── components/
│   ├── layout/                 # Header, Footer
│   ├── home/                   # HeroSection (terminal), Piliers, Stats
│   ├── formations/             # CourseCard
│   ├── forms/                  # InscriptionForm, ContactForm
│   └── ui/                     # DCDLogo, Button, SectionTitle
│
└── data/
    └── formations.ts           # Données des cours
```

---

## Ajouter le logo

Place ton fichier logo dans :

```
public/images/logo.png
```

Il sera automatiquement utilisé dans le header et comme favicon.

---

## Pages du site

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero avec terminal typewriter animé |
| Formations | `/formations` | Liste de toutes les formations |
| Comment ça marche | `/comment-ca-marche` | Processus d'inscription et cours |
| Inscription | `/inscription` | Formulaire d'inscription |
| Contact | `/contact` | Formulaire + réseaux sociaux |

---

## Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Google Blue | `#4285F4` | D, accents principaux |
| Google Red | `#EA4335` | C, accents secondaires |
| Google Green | `#34A853` | D, validation, succès |
| Google Yellow | `#FBBC05` | Accents tertiaires |

---

## Personnalisation

Pour mettre à jour les formations, modifie le fichier [`src/data/formations.ts`](src/data/formations.ts).

Pour mettre à jour les liens réseaux sociaux, modifie [`src/app/contact/page.tsx`](src/app/contact/page.tsx) et [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx).

---

**Digital Campus Dz** — *Apprendre en ligne, depuis l'Algérie* 🇩🇿
