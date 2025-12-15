<div align="center">

<img src="./assets/logo-esprit-club.jpg" alt="ESPRIT Clubs Logo" width="300"/>

# ESPRIT Clubs 🎓

### Plateforme de Gestion des Clubs Étudiants

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Groupe : Webfive** | **Encadré par : Mme Imen El Hakim**

</div>

---

## 📖 À Propos

**ESPRIT Clubs** est une plateforme web interactive et moderne conçue pour faciliter la gestion et la communication au sein des clubs étudiants d'ESPRIT. Cette application centralisée offre une expérience utilisateur fluide et intuitive pour tous les membres de la communauté estudiantine.

### ✨ Fonctionnalités Principales

| Module | Fonctionnalités |
|--------|----------------|
| 📊 **Dashboard** | Vue d'ensemble des activités, statistiques en temps réel, notifications |
| 📅 **Événements** | Découverte, inscription et gestion des événements des clubs |
| 💬 **Communication** | Discussions publiques et chats privés entre membres |
| 🗳️ **Sondages** | Création, participation et consultation des résultats |
| ⭐ **Favoris** | Suivi personnalisé des clubs et événements préférés |
| 🎯 **Réalisations** | Portfolio des participations et accomplissements |
| 📆 **Calendrier** | Planning interactif de tous les événements |

### 🎯 Objectifs

- ✅ Centraliser toutes les informations relatives à la vie associative
- ✅ Faciliter la communication entre étudiants et clubs
- ✅ Augmenter l'engagement et la participation étudiante
- ✅ Offrir une interface moderne et responsive
- ✅ Simplifier la gestion administrative des clubs

---

## 🛠️ Technologies & Stack Technique

<div align="center">

| Technologie | Usage | Version |
|-------------|-------|---------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure & Sémantique | HTML5 |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Framework CSS Utility-First | 3.x |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactivité Client | ES6+ |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white) | Environnement de Développement | 18+ |
| ![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white) | Contrôle de Version | Latest |

</div>

---

## 📁 Architecture du Projet

```
ESPRIT-Clubs/
│
├── 📄 index.html                       # Page d'accueil - Dashboard principal
├── 📄 README.md                        # Documentation du projet
├── 📄 package.json                     # Dépendances et scripts
├── 📄 tailwind.config.js               # Configuration Tailwind CSS
│
├── 📂 src/                             # Code source
│   ├── 📂 manque_communication/        # Module Communication
│   │   ├── chat-prive.html            # Interface de chat privé
│   │   └── liste-evenement.html       # Liste et filtres d'événements
│   │
│   ├── 📂 participation/               # Module Participation
│   │   ├── calendar.html              # Calendrier interactif
│   │   ├── event-details.html         # Détails complets d'un événement
│   │   ├── favorites.html             # Gestion des favoris
│   │   ├── realization.html           # Portfolio de réalisations
│   │   ├── sondage.html               # Interface de création de sondage
│   │   └── sondage-result.html        # Affichage des résultats
│   │
│   └── 📄 input.css                    # Fichier CSS source (Tailwind)
│
├── 📂 assets/                          # Ressources statiques
│   ├── logo-esprit-club.jpg           # Logo principal
│   ├── event1.jpg                     # Images d'événements
│   ├── event2.jpg
│   └── event3.webp
│
├── 📂 dist/                            # Fichiers compilés
│   └── output.css                     # CSS compilé par Tailwind
│
└── 📂 scripts/                         # Scripts utilitaires
    └── serve.mjs                      # Serveur de développement local
```

---

## 🚀 Installation & Démarrage

### Prérequis

Assurez-vous d'avoir installé :
- **Node.js** version 18 ou supérieure
- **npm** (inclus avec Node.js)

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/Rahmaa-aa/integrationweb.git

# 2. Accéder au dossier du projet
cd integrationweb

# 3. Installer les dépendances
npm install
```

### Commandes Disponibles

```bash
# Compiler le CSS Tailwind (production)
npm run build

# Mode Watch - Recompilation automatique lors des modifications
npm run watch

# Lancer le serveur de développement
npm run start
```

### 🌐 Accès à l'Application

Une fois le serveur lancé, ouvrez votre navigateur à l'adresse :
```
http://127.0.0.1:5173
```

> **💡 Note :** Si le port `5173` est occupé, le serveur utilisera automatiquement le port suivant disponible (`5174`, `5175`, etc.). Vérifiez l'URL affichée dans le terminal.

---

## 👥 Équipe - Groupe Webfive

<div align="center">

| Rôle | Nom | Module |
|------|-----|--------|
| 👨‍💼 **Encadrante** | **Mme Imen El Hakim** | Supervision du projet |
| 👩‍💻 **Développeuse** | Rahma | Module Participation |
| 👨‍💻 **Développeur** | Smail | Module Communication |
| 👩‍💻 **Développeuse** | Sirine | Module Participation |

</div>

---

## 📝 Modules du Projet

### 🔷 Module Manque Communication (Smail)
- **Chat Privé** : Messagerie instantanée entre membres
- **Liste Événements** : Catalogue complet avec système de filtres

### 🔷 Module Participation (Rahma & Sirine)
- **Calendrier** : Vue mensuelle des événements
- **Détails Événement** : Informations complètes et inscription
- **Favoris** : Gestion personnalisée des centres d'intérêt
- **Réalisations** : Historique et portfolio des participations
- **Sondages** : Création et consultation des résultats

---

## 📄 License

Ce projet est développé dans un cadre académique à **ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies**.

---

<div align="center">

**Développé avec ❤️ par le Groupe Webfive**

*ESPRIT - 2025*

</div>
