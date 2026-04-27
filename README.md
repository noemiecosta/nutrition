# 🌿 NutriGlow – Application Nutrition

Programme nutrition personnalisé pour Noémie.  
**SOPK · Perte de poids douce · Course à pied × 3/semaine**

---

## 📱 Ce que contient l'app

- **🏠 Accueil** – Anneau de calories en temps réel, repas du jour, hydratation, conseil du jour
- **🥗 Programme** – 7 jours de repas complets avec portions (1 650 kcal/j), navigation par jour, alternatives alimentaires
- **📝 Journal** – Log alimentaire quotidien avec macros, bilan de la semaine
- **🛒 Courses** – Liste de courses complète pour 1 semaine, avec filtres et cases à cocher
- **🏃‍♀️ Sport** – Plan de course x3/semaine, nutrition avant/après course, suivi du poids

---

## 🔢 Données nutritionnelles

| Objectif | Valeur |
|----------|--------|
| Calories | 1 650 kcal/jour |
| Protéines | 120g/jour |
| Glucides | 160g/jour (index glycémique bas) |
| Lipides | 55g/jour (bons gras) |

Calculé pour : **87 kg · 1m73 · 21 ans · Course x3/sem · SOPK**  
Déficit calorique doux de ~400 kcal/j → perte de poids de 0,3-0,5 kg/semaine

---

## 🚀 Déploiement sur GitHub Pages

### 1. Créer un repo GitHub

```bash
# Dans le dossier nutrition-app
git init
git add .
git commit -m "🌿 Initial NutriGlow app"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/nutriglow.git
git push -u origin main
```

### 2. Activer GitHub Pages

1. Va dans **Settings** du repo
2. Scroll jusqu'à **Pages**
3. Source : **Deploy from a branch** → `main` → `/ (root)`
4. Clique **Save**

Ton app sera disponible à : `https://TON_USERNAME.github.io/nutriglow/`

### 3. Ajouter sur l'écran d'accueil (iPhone)

1. Ouvre l'URL dans **Safari**
2. Appuie sur le bouton **Partager** (carré avec flèche)
3. Sélectionne **"Sur l'écran d'accueil"**
4. Appuie **Ajouter**

→ L'app s'ouvre en plein écran comme une vraie app ! ✨

### 4. Ajouter sur l'écran d'accueil (Android)

1. Ouvre l'URL dans **Chrome**
2. Menu (3 points) → **"Ajouter à l'écran d'accueil"**
3. Confirme

---

## ⚠️ Générer les icônes PNG (requis pour iOS)

Le fichier `assets/icon.svg` est fourni. Tu peux générer les PNG avec :

**Option A – En ligne :** [realfavicongenerator.net](https://realfavicongenerator.net)  
**Option B – macOS Terminal :**
```bash
# Si tu as ImageMagick installé
convert assets/icon.svg -resize 192x192 assets/icon-192.png
convert assets/icon.svg -resize 512x512 assets/icon-512.png
```
**Option C :** Utilise n'importe quel outil de conversion SVG→PNG

---

## 📁 Structure des fichiers

```
nutrition-app/
├── index.html       # Structure principale
├── style.css        # Tout le design
├── app.js           # Données + logique
├── manifest.json    # Config PWA
├── sw.js            # Service worker (offline)
├── assets/
│   ├── icon.svg     # Icône source
│   ├── icon-192.png # Icône iOS/Android
│   └── icon-512.png # Icône splash
└── README.md        # Ce fichier
```

---

## 🌿 Conseils SOPK

- 🍂 **Cannelle** tous les jours (½ c. à café min.)
- 🫙 **Vinaigre de cidre** dilué avant les repas glucidiques
- 🐟 **Oméga-3** (saumon, sardines, noix) 4x/semaine min.
- 🫐 **Fruits rouges et antioxydants** chaque jour
- ⏰ **Fenêtre alimentaire** 8-10h pour réguler l'insuline
- 💧 8 verres d'eau minimum par jour

---

*Made with 💚 – NutriGlow v1.0*
