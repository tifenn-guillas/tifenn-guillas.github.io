# Migration Jekyll → Astro

## Décisions d'architecture
- **Stack** : Astro + TypeScript + Tailwind CSS
- **Données** : Content Collections Astro (validation TypeScript des YAML)
- **Stratégie design** : migration à l'identique d'abord (Epic 3), redesign ensuite (Epic 5)
- **Dark mode** : inclus dans l'Epic redesign (Epic 5)
- **Branche de travail** : `feat/astro-migration`

---

## Epic 1 — Socle

- [x] **E1-S1** — Initialiser le projet Astro (TypeScript strict, structure de dossiers)
- [x] **E1-S2** — Intégrer Tailwind CSS (intégration officielle `@astrojs/tailwind`)
- [x] **E1-S3** — Configurer GitHub Actions pour le déploiement GitHub Pages
- [x] **E1-S4** — Mettre en place le routing i18n (`/fr/`, `/en/`, redirect depuis `/`)
- [x] **E1-S5** — Créer le layout de base (équivalent de `_layouts/default.html`)

## Epic 2 — Couche de données

- [x] **E2-S1** — Définir les interfaces TypeScript pour toutes les données (Option C : fichiers `.ts` dans `src/data/`)
- [x] **E2-S2** — Migrer `about.yml`, `header.yml`, `layout.yml`, `navbar.yml`
- [ ] **E2-S3** — Migrer `skills.yml`, `formation.yml`
- [ ] **E2-S4** — Migrer `resume.yml`
- [ ] **E2-S5** — Migrer `portfolio.yml`
- [ ] **E2-S6** — Migrer `goals.yml`, `hobbies.yml`, `contact.yml`, `footer.yml`, `socials.yml`, `sections.yml`

## Epic 3 — Composants (migration à l'identique)

- [ ] **E3-S1** — Atomes : `Loader`, `BlockName`, `Card`
- [ ] **E3-S2** — `Navbar` + `Footer`
- [ ] **E3-S3** — Section `Header` (hero)
- [ ] **E3-S4** — Section `About`
- [ ] **E3-S5** — Section `Links`
- [ ] **E3-S6** — Section `Skills`
- [ ] **E3-S7** — Section `Formation`
- [ ] **E3-S8** — Section `Hobbies`
- [ ] **E3-S9** — Section `Goals`
- [ ] **E3-S10** — Section `Contact`
- [ ] **E3-S11** — Section `Resume`
- [ ] **E3-S12** — Section `Portfolio` (la plus complexe : carousel + modal)
- [ ] **E3-S13** — Recette d'intégration : page complète fonctionnelle en FR et EN

## Epic 4 — SEO & Performance

- [ ] **E4-S1** — Self-host la police Roboto (supprimer le CDN Google Fonts)
- [ ] **E4-S2** — Corriger la meta description et affiner les keywords
- [ ] **E4-S3** — Nettoyer et compléter Open Graph + Twitter cards
- [ ] **E4-S4** — Générer un sitemap.xml (`@astrojs/sitemap`)
- [ ] **E4-S5** — Ajouter `robots.txt`
- [ ] **E4-S6** — Corriger le JSON-LD (structured data)
- [ ] **E4-S7** — Audit Lighthouse baseline + quick wins

## Epic 5 — Redesign + Dark mode

- [ ] **E5-S1** — Définir le design system (palette, typographie, espacements, tokens dark mode)
- [ ] **E5-S2** — Implémenter le dark mode (config Tailwind + composant toggle)
- [ ] **E5-S3** — Refonte header hero
- [ ] **E5-S4** — Passe globale typographie et espacements
- [ ] **E5-S5** — Animations et micro-interactions
- [ ] **E5-S6** — Revue mobile / responsive
- [ ] **E5-S7** — QA design finale

## Epic 6 — Release

- [ ] **E6-S1** — Tests cross-browser
- [ ] **E6-S2** — Vérification du contenu FR et EN
- [ ] **E6-S3** — Vérification domaine custom (CNAME) et DNS
- [ ] **E6-S4** — Audit Lighthouse final (objectif : 90+ sur toutes les catégories)
- [ ] **E6-S5** — Merge sur `main` + surveillance du déploiement
