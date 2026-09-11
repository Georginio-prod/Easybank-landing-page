# Easybank — Landing page (Frontend Mentor)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3)

🔗 **Démo en ligne** : <https://easybank-landing-page-beta-rosy.vercel.app> · GitHub Pages : <https://georginio-prod.github.io/Easybank-landing-page/>
📦 **Code source** : <https://github.com/Georginio-prod/Easybank-landing-page>
🎯 **Défi** : [Easybank landing page](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN) (niveau *Intermediate*)

---

## 📌 Présentation

Landing page d'une **banque en ligne fictive** : héros avec illustration de téléphones,
section « Why choose Easybank? » (4 avantages), derniers articles du blog et footer complet.
L'exercice porte sur le **positionnement d'images débordantes**, les dégradés et un
**menu mobile** animé.

## ✨ Fonctionnalités

- Héros avec image de fond en débordement (`intro` desktop / mobile).
- Menu de navigation **responsive** avec ouverture / fermeture sur mobile (overlay).
- Grille des 4 avantages (Online Banking, Simple Budgeting, Fast Onboarding, Open API).
- Section « Latest Articles » en cartes.
- Bouton « Request Invite » avec dégradé et état *hover*.
- Layout adapté aux breakpoints mobile (375px) et desktop (1440px).

## 🛠️ Stack

Vue 3 · Vite 5 · Tailwind CSS 3 · PostCSS.

## 📁 Structure

```
Easybank-landing-page/
├── src/
│   ├── App.vue · main.js · style.css
│   └── components/
│       ├── navbar.vue      # Navigation + menu mobile
│       ├── page.vue        # Héros, avantages, articles
│       └── ft.vue          # Footer
├── public/                 # Images et icônes de la maquette
└── tailwind.config.js · vite.config.js
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/Easybank-landing-page.git
cd Easybank-landing-page
npm install
npm run dev          # http://localhost:5173
```

`npm run build` → `dist/` · `npm run preview`.

## 🌐 Déploiement

Déployé sur **Vercel** et sur **GitHub Pages** (workflow `gh-page.yml`). Aucune configuration nécessaire.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
