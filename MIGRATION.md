# Migration Jekyll → Astro

## Décisions d'architecture
- **Stack** : Astro + TypeScript + Tailwind CSS
- **Données** : Fichiers TypeScript dans `src/data/` + interfaces dans `src/types/` (Option C — pas de Content Collections)
- **Stratégie design** : migration à l'identique d'abord (Epic 3), redesign ensuite (Epic 5)
- **Dark mode** : inclus dans l'Epic redesign (Epic 5)
- **Branche de travail** : `feat/astro-migration`

---

## Epic 1 — Socle

- [x] **1.1** — Initialiser le projet Astro (TypeScript strict, structure de dossiers)
- [x] **1.2** — Intégrer Tailwind CSS v4 (`@tailwindcss/vite` — `@astrojs/tailwind` déprécié sur Astro 6)
- [x] **1.3** — Configurer GitHub Actions pour le déploiement GitHub Pages
- [x] **1.4** — Mettre en place le routing i18n (`/fr/`, `/en/`, redirect depuis `/`)
- [x] **1.5** — Créer le layout de base (équivalent de `_layouts/default.html`)

## Epic 2 — Couche de données

- [x] **2.1** — Définir les interfaces TypeScript pour toutes les données (Option C : fichiers `.ts` dans `src/data/`)
- [x] **2.2** — Migrer `about.yml`, `header.yml`, `layout.yml`, `navbar.yml`
- [x] **2.3** — Migrer `skills.yml`, `formation.yml`
- [x] **2.4** — Migrer `resume.yml`
- [x] **2.5** — Migrer `portfolio.yml`
- [x] **2.6** — Migrer `goals.yml`, `hobbies.yml`, `contact.yml`, `footer.yml`, `socials.yml`, `sections.yml`

## Epic 3 — Composants (migration à l'identique)

- [x] **3.1** — Atomes : `Loader`, `BlockName`, `Card`
- [x] **3.2** — `Navbar` + `Footer`
- [x] **3.3** — Section `Header` (hero)
- [x] **3.4** — Section `About`
- [x] **3.5** — Section `Links`
- [x] **3.6** — Section `Skills`
- [x] **3.7** — Section `Formation`
- [ ] **3.8** — Section `Hobbies`
- [ ] **3.9** — Section `Goals`
- [ ] **3.10** — Section `Contact`
- [ ] **3.11** — Section `Resume`
- [ ] **3.12** — Section `Portfolio` (la plus complexe : carousel + modal)
- [ ] **3.13** — Recette d'intégration : page complète fonctionnelle en FR et EN

## Epic 4 — SEO & Performance

- [ ] **4.1** — Self-host la police Roboto (supprimer le CDN Google Fonts)
- [ ] **4.2** — Self-host FontAwesome (supprimer le CDN cdnjs)
- [ ] **4.3** — Corriger la meta description et affiner les keywords
- [ ] **4.4** — Nettoyer et compléter Open Graph + Twitter cards
- [ ] **4.5** — Générer un sitemap.xml (`@astrojs/sitemap`)
- [ ] **4.6** — Ajouter `robots.txt`
- [ ] **4.7** — Corriger le JSON-LD (structured data)
- [ ] **4.8** — Audit Lighthouse baseline + quick wins

## Epic 5 — Redesign + Dark mode

- [ ] **5.1** — Définir le design system (palette, typographie, espacements, tokens dark mode)
- [ ] **5.2** — Implémenter le dark mode (config Tailwind + composant toggle)
- [ ] **5.3** — Refonte header hero
- [ ] **5.4** — Passe globale typographie et espacements
- [ ] **5.5** — Animations et micro-interactions (remplacer jQuery + WoW.js par solution Astro native)
- [ ] **5.6** — Revue mobile / responsive
- [ ] **5.7** — QA design finale

## Epic 6 — Release

- [ ] **6.0** — Supprimer les pages de dev (`src/pages/dev/`)
- [ ] **6.1** — Tests cross-browser
- [ ] **6.2** — Vérification du contenu FR et EN
- [ ] **6.3** — Vérification domaine custom (CNAME) et DNS
- [ ] **6.4** — Audit Lighthouse final (objectif : 90+ sur toutes les catégories)
- [ ] **6.5** — Merge sur `main` + surveillance du déploiement
