/* ============================================================
   NUTRIGLOW – app.js
   Programme nutrition SOPK · Perte de poids douce
   Objectif : 1650 kcal/j · 120g protéines · 160g glucides · 55g lipides
   ============================================================ */

// ─── DONNÉES NUTRITIONNELLES ──────────────────────────────────

const PROGRAMME = [
  {
    jour: "Lundi",
    sport: true,
    repas: [
      {
        nom: "Petit-déjeuner", icon: "☀️", kcal: 380,
        items: [
          { nom: "Flocons d'avoine (50g cru)", kcal: 185, p: 6, g: 33, l: 3 },
          { nom: "Lait végétal non sucré (200ml)", kcal: 30, p: 1, g: 2, l: 1 },
          { nom: "Yaourt grec 0% (150g)", kcal: 85, p: 15, g: 5, l: 0 },
          { nom: "Fruits rouges (80g)", kcal: 40, p: 1, g: 9, l: 0 },
          { nom: "Graines de chia (1 c. à soupe)", kcal: 40, p: 2, g: 2, l: 2 },
        ]
      },
      {
        nom: "Déjeuner", icon: "🥗", kcal: 520,
        items: [
          { nom: "Poulet grillé (150g)", kcal: 230, p: 35, g: 0, l: 5 },
          { nom: "Quinoa cuit (100g cru → 250g cuit)", kcal: 150, p: 6, g: 27, l: 2 },
          { nom: "Légumes rôtis au four (200g – courgette, poivron, oignon)", kcal: 70, p: 2, g: 14, l: 0 },
          { nom: "Huile d'olive (1 c. à soupe)", kcal: 70, p: 0, g: 0, l: 7 },
        ]
      },
      {
        nom: "Collation", icon: "🍎", kcal: 180,
        items: [
          { nom: "Amandes (20g ≈ 15 amandes)", kcal: 120, p: 4, g: 3, l: 10 },
          { nom: "Pomme (1 moyenne)", kcal: 60, p: 0, g: 15, l: 0 },
        ]
      },
      {
        nom: "Dîner", icon: "🌙", kcal: 570,
        items: [
          { nom: "Saumon (150g)", kcal: 280, p: 32, g: 0, l: 16 },
          { nom: "Patate douce cuite (180g)", kcal: 145, p: 2, g: 33, l: 0 },
          { nom: "Haricots verts (200g)", kcal: 50, p: 2, g: 9, l: 0 },
          { nom: "Citron + herbes fraîches", kcal: 5, p: 0, g: 1, l: 0 },
          { nom: "Huile d'olive (1 c. à café)", kcal: 40, p: 0, g: 0, l: 4 },
        ]
      }
    ]
  },
  {
    jour: "Mardi",
    sport: false,
    repas: [
      {
        nom: "Petit-déjeuner", icon: "☀️", kcal: 350,
        items: [
          { nom: "Œufs brouillés (2 œufs)", kcal: 155, p: 13, g: 1, l: 11 },
          { nom: "Pain de seigle (1 tranche)", kcal: 70, p: 2, g: 14, l: 1 },
          { nom: "Avocat (½)", kcal: 80, p: 1, g: 2, l: 7 },
          { nom: "Tomates cerises (100g)", kcal: 25, p: 1, g: 5, l: 0 },
          { nom: "Café sans sucre ou thé vert", kcal: 5, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Déjeuner", icon: "🥗", kcal: 530,
        items: [
          { nom: "Lentilles corail (80g sec)", kcal: 260, p: 19, g: 43, l: 1 },
          { nom: "Légumes mijotés (tomate, carotte, oignon)", kcal: 80, p: 2, g: 17, l: 0 },
          { nom: "Feta émiettée (30g)", kcal: 75, p: 4, g: 0, l: 6 },
          { nom: "Salade verte + vinaigrette légère", kcal: 40, p: 1, g: 3, l: 2 },
          { nom: "Pain complet (1 tranche)", kcal: 75, p: 3, g: 14, l: 1 },
        ]
      },
      {
        nom: "Collation", icon: "🍌", kcal: 170,
        items: [
          { nom: "Fromage blanc 0% (150g)", kcal: 80, p: 12, g: 6, l: 0 },
          { nom: "Banane (½ petite)", kcal: 50, p: 0, g: 12, l: 0 },
          { nom: "Cannelle (poudre) – anti-inflammatoire SOPK", kcal: 5, p: 0, g: 1, l: 0 },
          { nom: "Noix (10g)", kcal: 65, p: 1, g: 1, l: 6 },
        ]
      },
      {
        nom: "Dîner", icon: "🌙", kcal: 520,
        items: [
          { nom: "Steak de bœuf 5% MG (130g)", kcal: 195, p: 29, g: 0, l: 7 },
          { nom: "Riz basmati cuit (150g cuit)", kcal: 175, p: 3, g: 38, l: 0 },
          { nom: "Épinards sautés à l'ail (150g)", kcal: 40, p: 4, g: 3, l: 1 },
          { nom: "Huile d'olive (1 c. à café)", kcal: 40, p: 0, g: 0, l: 4 },
        ]
      }
    ]
  },
  {
    jour: "Mercredi",
    sport: true,
    repas: [
      {
        nom: "Petit-déjeuner", icon: "☀️", kcal: 400,
        items: [
          { nom: "Smoothie bowl : banane (1) + myrtilles (80g)", kcal: 120, p: 2, g: 28, l: 0 },
          { nom: "Yaourt grec entier (100g)", kcal: 90, p: 10, g: 4, l: 4 },
          { nom: "Granola maison sans sucre (30g)", kcal: 130, p: 4, g: 18, l: 5 },
          { nom: "Graines de lin moulues (1 c. à café)", kcal: 40, p: 1, g: 2, l: 3 },
        ]
      },
      {
        nom: "Déjeuner", icon: "🥗", kcal: 540,
        items: [
          { nom: "Dinde sautée (150g)", kcal: 185, p: 34, g: 0, l: 3 },
          { nom: "Pâtes complètes cuites (150g cuit)", kcal: 210, p: 7, g: 42, l: 1 },
          { nom: "Sauce tomate maison (150g)", kcal: 60, p: 2, g: 11, l: 1 },
          { nom: "Parmesan râpé (10g)", kcal: 40, p: 3, g: 0, l: 3 },
        ]
      },
      {
        nom: "Collation pré-course", icon: "⚡", kcal: 150,
        items: [
          { nom: "Banane (1 petite)", kcal: 80, p: 1, g: 19, l: 0 },
          { nom: "Beurre d'amande (1 c. à café)", kcal: 50, p: 2, g: 2, l: 4 },
          { nom: "Café ou thé (énergie avant run)", kcal: 5, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Dîner post-course", icon: "🌙", kcal: 560,
        items: [
          { nom: "Œufs durs (3 œufs)", kcal: 230, p: 20, g: 1, l: 15 },
          { nom: "Pois chiches rôtis (80g cuit)", kcal: 130, p: 7, g: 19, l: 3 },
          { nom: "Salade de quinoa + légumes (150g)", kcal: 130, p: 5, g: 22, l: 3 },
          { nom: "Fromage frais léger (50g)", kcal: 60, p: 6, g: 2, l: 3 },
        ]
      }
    ]
  },
  {
    jour: "Jeudi",
    sport: false,
    repas: [
      {
        nom: "Petit-déjeuner", icon: "☀️", kcal: 370,
        items: [
          { nom: "Porridge avoine + eau ou lait végétal (50g avoine)", kcal: 190, p: 6, g: 33, l: 4 },
          { nom: "Poire (1 petite)", kcal: 50, p: 0, g: 12, l: 0 },
          { nom: "Fromage blanc 0% (150g)", kcal: 80, p: 12, g: 6, l: 0 },
          { nom: "Miel (½ c. à café)", kcal: 20, p: 0, g: 5, l: 0 },
          { nom: "Thé vert (anti-oxydant)", kcal: 2, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Déjeuner", icon: "🥗", kcal: 510,
        items: [
          { nom: "Sardines en conserve (120g égoutté)", kcal: 175, p: 22, g: 0, l: 10 },
          { nom: "Salade composée (salade, tomate, concombre, oignon rouge)", kcal: 50, p: 2, g: 9, l: 0 },
          { nom: "Lentilles vertes cuites (100g)", kcal: 120, p: 9, g: 20, l: 0 },
          { nom: "Vinaigrette citron-moutarde (1 c. à soupe)", kcal: 60, p: 0, g: 1, l: 6 },
          { nom: "Crackers de seigle (2 pièces)", kcal: 70, p: 2, g: 13, l: 1 },
        ]
      },
      {
        nom: "Collation", icon: "🥜", kcal: 200,
        items: [
          { nom: "Hummus (50g)", kcal: 110, p: 4, g: 8, l: 7 },
          { nom: "Carottes et concombre (100g)", kcal: 30, p: 1, g: 7, l: 0 },
          { nom: "Noisettes (15g)", kcal: 90, p: 2, g: 2, l: 9 },
        ]
      },
      {
        nom: "Dîner", icon: "🌙", kcal: 510,
        items: [
          { nom: "Crevettes sautées (180g)", kcal: 155, p: 30, g: 2, l: 2 },
          { nom: "Nouilles soba cuites (120g cuit)", kcal: 165, p: 6, g: 33, l: 1 },
          { nom: "Légumes wok (brocoli, carotte, poivron – 200g)", kcal: 80, p: 3, g: 14, l: 0 },
          { nom: "Sauce soja + gingembre + sésame (1 c. à soupe)", kcal: 50, p: 1, g: 4, l: 3 },
        ]
      }
    ]
  },
  {
    jour: "Vendredi",
    sport: true,
    repas: [
      {
        nom: "Petit-déjeuner", icon: "☀️", kcal: 420,
        items: [
          { nom: "Pancakes protéinés (50g farine avoine + 2 blancs d'œuf + 1 œuf)", kcal: 270, p: 22, g: 30, l: 7 },
          { nom: "Sirop d'érable (½ c. à café)", kcal: 20, p: 0, g: 5, l: 0 },
          { nom: "Fraises (100g)", kcal: 32, p: 0, g: 8, l: 0 },
          { nom: "Café", kcal: 5, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Déjeuner", icon: "🥗", kcal: 520,
        items: [
          { nom: "Wraps poulet-légumes (1 tortilla complète)", kcal: 150, p: 5, g: 28, l: 2 },
          { nom: "Poulet rôti effiloché (120g)", kcal: 175, p: 28, g: 0, l: 4 },
          { nom: "Avocat (½) + tomate + salade + concombre", kcal: 120, p: 2, g: 6, l: 9 },
          { nom: "Fromage frais (30g)", kcal: 45, p: 3, g: 1, l: 3 },
        ]
      },
      {
        nom: "Collation pré-course", icon: "⚡", kcal: 130,
        items: [
          { nom: "Dattes (2 pièces)", kcal: 70, p: 0, g: 18, l: 0 },
          { nom: "Yaourt grec 0% (100g)", kcal: 55, p: 9, g: 4, l: 0 },
        ]
      },
      {
        nom: "Dîner post-course", icon: "🌙", kcal: 530,
        items: [
          { nom: "Filet de cabillaud (180g)", kcal: 145, p: 33, g: 0, l: 1 },
          { nom: "Légumes vapeur + sauce vierge (tomate, câpres, herbes)", kcal: 80, p: 2, g: 12, l: 2 },
          { nom: "Semoule complète cuite (150g)", kcal: 190, p: 6, g: 40, l: 1 },
          { nom: "Huile d'olive (1 c. à café)", kcal: 40, p: 0, g: 0, l: 4 },
        ]
      }
    ]
  },
  {
    jour: "Samedi",
    sport: false,
    repas: [
      {
        nom: "Brunch", icon: "🍳", kcal: 600,
        items: [
          { nom: "Omelette aux champignons (3 œufs)", kcal: 230, p: 22, g: 3, l: 15 },
          { nom: "Champignons sautés (150g)", kcal: 35, p: 4, g: 4, l: 0 },
          { nom: "Pain de seigle grillé (2 tranches)", kcal: 145, p: 5, g: 28, l: 1 },
          { nom: "Ricotta légère (50g)", kcal: 70, p: 4, g: 2, l: 5 },
          { nom: "Saumon fumé (50g)", kcal: 80, p: 10, g: 0, l: 4 },
          { nom: "Café ou jus de citron eau chaude", kcal: 5, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Collation", icon: "🍫", kcal: 180,
        items: [
          { nom: "Carré de chocolat noir 85% (2 carrés = 20g)", kcal: 120, p: 2, g: 7, l: 10 },
          { nom: "Mandarine (1 pièce)", kcal: 35, p: 0, g: 9, l: 0 },
          { nom: "Thé ou tisane", kcal: 2, p: 0, g: 0, l: 0 },
        ]
      },
      {
        nom: "Dîner convivial", icon: "🌙", kcal: 650,
        items: [
          { nom: "Côtelettes d'agneau (120g net)", kcal: 250, p: 25, g: 0, l: 16 },
          { nom: "Ratatouille maison (250g)", kcal: 100, p: 3, g: 17, l: 3 },
          { nom: "Pomme de terre vapeur (150g)", kcal: 115, p: 3, g: 26, l: 0 },
          { nom: "Un verre de vin rouge (facultatif)", kcal: 85, p: 0, g: 3, l: 0 },
        ]
      }
    ]
  },
  {
    jour: "Dimanche",
    sport: false,
    repas: [
      {
        nom: "Petit-déjeuner douceur", icon: "☀️", kcal: 440,
        items: [
          { nom: "Toast avocat-œuf (pain complet 2 tranches)", kcal: 155, p: 7, g: 28, l: 2 },
          { nom: "Avocat (½) + jus de citron", kcal: 80, p: 1, g: 2, l: 7 },
          { nom: "Œuf poché (1)", kcal: 70, p: 6, g: 0, l: 5 },
          { nom: "Smoothie maison : épinard, kiwi, gingembre, eau de coco (300ml)", kcal: 110, p: 3, g: 22, l: 1 },
        ]
      },
      {
        nom: "Déjeuner en famille", icon: "🥗", kcal: 620,
        items: [
          { nom: "Poulet rôti (1 cuisse, ~180g)", kcal: 285, p: 33, g: 0, l: 16 },
          { nom: "Haricots verts + carottes vapeur (200g)", kcal: 70, p: 3, g: 13, l: 0 },
          { nom: "Purée de chou-fleur légère (150g)", kcal: 90, p: 5, g: 12, l: 3 },
          { nom: "Pain complet (1 tranche)", kcal: 75, p: 3, g: 14, l: 1 },
        ]
      },
      {
        nom: "Goûter", icon: "🍮", kcal: 200,
        items: [
          { nom: "Chia pudding (graines + lait d'amande + vanille)", kcal: 155, p: 5, g: 10, l: 9 },
          { nom: "Kiwi (1 pièce)", kcal: 45, p: 1, g: 11, l: 0 },
        ]
      },
      {
        nom: "Dîner léger", icon: "🌙", kcal: 390,
        items: [
          { nom: "Soupe de légumes maison (tomate, poireau, courgette – 350ml)", kcal: 100, p: 4, g: 18, l: 1 },
          { nom: "Tartines au fromage de chèvre (2 tranches pain + 40g chèvre)", kcal: 230, p: 11, g: 28, l: 8 },
          { nom: "Salade verte simple", kcal: 20, p: 1, g: 3, l: 0 },
        ]
      }
    ]
  }
];

const ALTERNATIVES = [
  {
    titre: "Protéines animales",
    items: [
      { base: "Poulet (150g)", swaps: ["Dinde (150g)", "Thon en conserve (120g)", "Crevettes (180g)", "Tofu ferme (180g)"] },
      { base: "Saumon (150g)", swaps: ["Maquereau (150g)", "Truite (150g)", "Sardines (120g)", "Thon frais (150g)"] },
      { base: "Bœuf (130g)", swaps: ["Veau (130g)", "Agneau (100g)", "Lapin (150g)"] },
    ]
  },
  {
    titre: "Féculents & glucides",
    items: [
      { base: "Riz basmati (150g cuit)", swaps: ["Quinoa (130g cuit)", "Boulgour (130g cuit)", "Patate douce (180g)", "Semoule (130g cuit)"] },
      { base: "Pâtes complètes (150g cuit)", swaps: ["Nouilles soba (150g cuit)", "Riz complet (150g cuit)", "Pâtes lentilles (130g cuit)"] },
      { base: "Pain de seigle (1 tranche)", swaps: ["Pain complet (1 tranche)", "Crackers de seigle (2 pièces)", "Galette de riz (2 pièces)"] },
    ]
  },
  {
    titre: "Légumineuses",
    items: [
      { base: "Lentilles corail (80g sec)", swaps: ["Pois chiches (80g sec)", "Lentilles vertes (80g sec)", "Haricots rouges (80g sec)", "Edamame (150g cuit)"] },
    ]
  },
  {
    titre: "Lipides & oléagineux",
    items: [
      { base: "Amandes (20g)", swaps: ["Noix (15g)", "Noix de cajou (20g)", "Pistaches (20g)", "Noisettes (20g)"] },
      { base: "Avocat (½)", swaps: ["Houmous (50g)", "Noix (15g)", "Beurre d'amande (1 c. à café)"] },
    ]
  },
  {
    titre: "Produits laitiers",
    items: [
      { base: "Yaourt grec 0% (150g)", swaps: ["Fromage blanc 0% (150g)", "Skyr nature (150g)", "Yaourt de coco nature (100g)"] },
    ]
  },
];

const COURSES = {
  "🥩 Protéines": [
    { nom: "Blanc de poulet", qte: "600g", semaine: true },
    { nom: "Filet de saumon", qte: "400g", semaine: true },
    { nom: "Bœuf haché 5% MG", qte: "300g", semaine: true },
    { nom: "Crevettes", qte: "300g", semaine: true },
    { nom: "Filet de cabillaud", qte: "300g", semaine: true },
    { nom: "Sardines en conserve", qte: "2 boîtes", semaine: true },
    { nom: "Saumon fumé", qte: "100g", semaine: true },
    { nom: "Dinde émincée", qte: "300g", semaine: true },
    { nom: "Œufs", qte: "18 pièces", semaine: true },
  ],
  "🥛 Produits laitiers": [
    { nom: "Yaourt grec 0%", qte: "1kg (pot)", semaine: true },
    { nom: "Fromage blanc 0%", qte: "500g", semaine: true },
    { nom: "Skyr nature", qte: "400g", semaine: true },
    { nom: "Fromage de chèvre frais", qte: "100g", semaine: true },
    { nom: "Ricotta légère", qte: "100g", semaine: true },
    { nom: "Feta", qte: "100g", semaine: true },
  ],
  "🫘 Légumineuses & féculents": [
    { nom: "Flocons d'avoine", qte: "500g", semaine: true },
    { nom: "Quinoa", qte: "400g", semaine: true },
    { nom: "Lentilles corail", qte: "300g", semaine: true },
    { nom: "Lentilles vertes", qte: "300g", semaine: true },
    { nom: "Pois chiches en conserve", qte: "2 boîtes (400g)", semaine: true },
    { nom: "Riz basmati", qte: "500g", semaine: true },
    { nom: "Pâtes complètes", qte: "500g", semaine: true },
    { nom: "Patate douce", qte: "4 pièces", semaine: true },
    { nom: "Pain de seigle", qte: "1 sachet", semaine: true },
    { nom: "Pain complet", qte: "1 miche", semaine: true },
    { nom: "Semoule complète", qte: "300g", semaine: true },
    { nom: "Tortillas complètes", qte: "1 paquet", semaine: true },
  ],
  "🥬 Légumes & salades": [
    { nom: "Épinards", qte: "300g", semaine: true },
    { nom: "Courgettes", qte: "3 pièces", semaine: true },
    { nom: "Poivrons (rouge/jaune)", qte: "4 pièces", semaine: true },
    { nom: "Tomates", qte: "6 pièces", semaine: true },
    { nom: "Tomates cerises", qte: "250g", semaine: true },
    { nom: "Haricots verts", qte: "500g (frais ou surgelés)", semaine: true },
    { nom: "Brocoli", qte: "1 tête", semaine: true },
    { nom: "Salade verte (mélange)", qte: "2 sachets", semaine: true },
    { nom: "Carottes", qte: "6 pièces", semaine: true },
    { nom: "Concombre", qte: "2 pièces", semaine: true },
    { nom: "Oignons + oignons rouges", qte: "4 pièces", semaine: true },
    { nom: "Ail (tête)", qte: "1 tête", semaine: true },
    { nom: "Champignons", qte: "300g", semaine: true },
    { nom: "Poireaux", qte: "2 pièces", semaine: true },
    { nom: "Chou-fleur", qte: "1 pièce", semaine: true },
  ],
  "🍎 Fruits": [
    { nom: "Pommes", qte: "4 pièces", semaine: true },
    { nom: "Bananes", qte: "5 pièces", semaine: true },
    { nom: "Fruits rouges (frais ou surgelés)", qte: "400g", semaine: true },
    { nom: "Myrtilles", qte: "150g", semaine: true },
    { nom: "Fraises", qte: "250g", semaine: true },
    { nom: "Kiwis", qte: "3 pièces", semaine: true },
    { nom: "Avocats", qte: "4 pièces", semaine: true },
    { nom: "Citrons", qte: "4 pièces", semaine: true },
    { nom: "Poire", qte: "2 pièces", semaine: true },
    { nom: "Dattes Medjool", qte: "100g", semaine: true },
  ],
  "🧴 Condiments & huiles": [
    { nom: "Huile d'olive extra vierge", qte: "1 bouteille", semaine: false },
    { nom: "Vinaigre de cidre (SOPK – régule glycémie)", qte: "1 bouteille", semaine: false },
    { nom: "Sauce soja allégée", qte: "1 bouteille", semaine: false },
    { nom: "Moutarde", qte: "1 pot", semaine: false },
    { nom: "Hummus", qte: "200g", semaine: true },
    { nom: "Gingembre frais", qte: "1 morceau", semaine: true },
    { nom: "Miel (pot)", qte: "1 pot", semaine: false },
  ],
  "🌰 Oléagineux & graines": [
    { nom: "Amandes", qte: "200g", semaine: true },
    { nom: "Noix", qte: "100g", semaine: true },
    { nom: "Noisettes", qte: "100g", semaine: true },
    { nom: "Graines de chia", qte: "200g", semaine: false },
    { nom: "Graines de lin moulues", qte: "200g", semaine: false },
    { nom: "Beurre d'amande", qte: "1 pot", semaine: false },
    { nom: "Graines de sésame", qte: "100g", semaine: false },
  ],
  "🫙 Épices & herbes SOPK": [
    { nom: "Cannelle en poudre (★ SOPK)", qte: "1 pot", semaine: false },
    { nom: "Curcuma (anti-inflammatoire)", qte: "1 pot", semaine: false },
    { nom: "Gingembre en poudre", qte: "1 pot", semaine: false },
    { nom: "Herbes de Provence", qte: "1 pot", semaine: false },
    { nom: "Paprika doux", qte: "1 pot", semaine: false },
  ],
  "🍫 Plaisir & extra": [
    { nom: "Chocolat noir 85%+ (SOPK-friendly)", qte: "100g", semaine: true },
    { nom: "Sirop d'érable pur", qte: "petit format", semaine: false },
    { nom: "Vin rouge (occasionnel)", qte: "1 bouteille", semaine: false },
  ],
};

const SPORT_PLAN = [
  { jour: "Lundi", run: true, type: "Endurance fondamentale", detail: "30 min – allure lente et confortable (tu peux parler)", conseils: "Hydrate-toi bien avant. Mange ta collation 1h30 avant." },
  { jour: "Mardi", run: false, type: "Repos actif", detail: "Étirements, yoga ou marche 20 min", conseils: "Profite pour bien dormir et récupérer." },
  { jour: "Mercredi", run: true, type: "Fractionnés doux", detail: "5 min échauffement + 6x2 min course / 2 min marche + 5 min cool-down", conseils: "Mange ta collation 45 min avant la course." },
  { jour: "Jeudi", run: false, type: "Repos complet", detail: "Aucun effort intense", conseils: "Fais de la mobilité ou un bain chaud pour récupérer." },
  { jour: "Vendredi", run: true, type: "Course longue progressive", detail: "35-40 min – commence lent, termine un peu plus vite", conseils: "La longue course de la semaine. Mange bien avant et après !" },
  { jour: "Samedi", run: false, type: "Repos actif / Social", detail: "Balade, vélo, yoga flow", conseils: "Journée récup et plaisir !" },
  { jour: "Dimanche", run: false, type: "Repos & préparation", detail: "Meal prep, détente", conseils: "Idéal pour préparer tes repas de la semaine." },
];

const SPORT_NUTRITION = [
  {
    icon: "🍌",
    titre: "Avant la course (45-90 min avant)",
    content: `<strong>But :</strong> fournir du glycogène rapidement disponible.<br/>
    ✓ Banane + beurre d'amande<br/>
    ✓ Dattes (2) + yaourt grec<br/>
    ✓ Riz cuit + un peu de sel<br/>
    ✓ Flocons d'avoine légers<br/>
    <em>Évite les graisses et fibres en excès → digestion lente.</em>`
  },
  {
    icon: "💧",
    titre: "Pendant la course",
    content: `<strong>Hydratation :</strong> 150-250ml d'eau toutes les 20 min.<br/>
    Pour les sorties < 45 min : eau suffit.<br/>
    Si + long : eau + une pincée de sel + un peu de jus de citron.`
  },
  {
    icon: "🍗",
    titre: "Après la course (dans les 30-45 min)",
    content: `<strong>But :</strong> reconstruction musculaire et recharge glucidique.<br/>
    ✓ Protéines : 25-35g (poulet, œufs, yaourt grec, poisson)<br/>
    ✓ Glucides : 40-60g (quinoa, riz, patate douce, avoine)<br/>
    ✓ Légumes + hydratation<br/>
    <em>C'est le moment le plus important pour ta progression !</em>`
  },
  {
    icon: "⚖️",
    titre: "Nutrition SOPK & course : les clés",
    content: `<strong>SOPK + sport = combo gagnant !</strong><br/>
    ✓ Cannelle & gingembre chaque jour pour réguler l'insuline<br/>
    ✓ Pas de course le ventre vide (risque hypoglycémie avec SOPK)<br/>
    ✓ Priorité aux protéines à chaque repas pour satiété<br/>
    ✓ Oméga-3 (saumon, sardines, noix) = anti-inflammatoire SOPK<br/>
    ✓ Vinaigre de cidre dilué avant les repas riches en glucides`
  }
];

const TIPS = [
  { icon: "🌿", titre: "SOPK & glycémie", text: "Commence chaque repas par les légumes et les protéines avant les glucides. Ça réduit le pic d'insuline de 30% !" },
  { icon: "⏰", titre: "Le timing des repas", text: "Essaie de manger dans une fenêtre de 8-10h (ex: 8h-18h). Le jeûne doux aide à réguler les hormones liées au SOPK." },
  { icon: "💧", titre: "Hydratation & SOPK", text: "8 verres d'eau par jour minimum. L'eau aide à éliminer l'excès d'hormones androgènes. Essaie l'eau citronnée le matin !" },
  { icon: "🫐", titre: "Antioxydants contre l'inflammation", text: "Fruits rouges, myrtilles, épinards, chocolat noir 85%+ sont tes alliés SOPK. Mange-en chaque jour !" },
  { icon: "🛌", titre: "Sommeil = perte de poids", text: "7-9h de sommeil régulent la ghréline (hormone de la faim). Un mauvais sommeil peut annuler 1 semaine d'efforts." },
  { icon: "🍽️", titre: "Règle du plaisir", text: "1 repas plaisir par semaine (pas un cheat day, un repas). Ça t'évite la frustration et c'est suffisant pour tenir sur la durée." },
  { icon: "🌿", titre: "Cannelle magique", text: "½ à 1 c. à café de cannelle par jour peut réduire la résistance à l'insuline de 10-29% selon des études. Mets-en partout !" },
  { icon: "🏃‍♀️", titre: "Course & hormones", text: "3 courses par semaine améliorent la sensibilité à l'insuline, réduisent le cortisol et reeequilibrent les hormones SOPK." },
];

// ─── STATE ────────────────────────────────────────────────────

const STATE = {
  activePage: 'dashboard',
  selectedDay: new Date().getDay() === 0 ? 6 : new Date().getDay() - 1,
  hydraCount: parseInt(localStorage.getItem('hydra') || '0'),
  log: JSON.parse(localStorage.getItem('log') || '[]'),
  checkedCourses: JSON.parse(localStorage.getItem('courses') || '[]'),
  weights: JSON.parse(localStorage.getItem('weights') || '[]'),
  coursesFilter: 'all',
};

function saveState() {
  localStorage.setItem('hydra', STATE.hydraCount);
  localStorage.setItem('log', JSON.stringify(STATE.log));
  localStorage.setItem('courses', JSON.stringify(STATE.checkedCourses));
  localStorage.setItem('weights', JSON.stringify(STATE.weights));
}

// ─── NAVIGATION ───────────────────────────────────────────────

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`page-${page}`).classList.add('active');
    STATE.activePage = page;
  });
});

// ─── DASHBOARD ────────────────────────────────────────────────

function renderDashboard() {
  // Date
  const now = new Date();
  document.getElementById('today-date').textContent = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  document.getElementById('day-label').textContent = PROGRAMME[STATE.selectedDay].jour;
  
  // Week number (simple week of year)
  const start = new Date(now.getFullYear(), 0, 1);
  const wk = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  document.getElementById('week-number').textContent = wk;

  // Today's meals
  const todayProg = PROGRAMME[STATE.selectedDay];
  const container = document.getElementById('meals-today-container');
  container.innerHTML = todayProg.repas.map(r => `
    <div class="meal-card">
      <div class="meal-card-header">
        <div class="meal-name-row">
          <span class="meal-icon">${r.icon}</span>
          <span class="meal-name">${r.nom}</span>
        </div>
        <span class="meal-kcal-badge">${r.kcal} kcal</span>
      </div>
      <ul class="meal-items">
        ${r.items.map(item => `
          <li class="meal-item">
            <span class="meal-item-name">${item.nom}</span>
            <span class="meal-item-macros">${item.p}P · ${item.g}G · ${item.l}L</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  // Hydratation
  renderHydra();

  // Macros from log
  updateMacroRing();

  // Tip of the day
  const tip = TIPS[now.getDay() % TIPS.length];
  document.getElementById('tip-card').innerHTML = `
    <div class="tip-icon">${tip.icon}</div>
    <div class="tip-title">${tip.titre}</div>
    <div class="tip-text">${tip.text}</div>
  `;
}

function renderHydra() {
  const g = document.getElementById('hydra-glasses');
  g.innerHTML = Array.from({length: 8}, (_, i) => `
    <span class="hydra-glass ${i < STATE.hydraCount ? 'filled' : ''}" data-i="${i}">💧</span>
  `).join('');
  document.getElementById('hydra-count').textContent = `${STATE.hydraCount} / 8 verres`;
  g.querySelectorAll('.hydra-glass').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.i);
      STATE.hydraCount = (STATE.hydraCount === i + 1) ? i : i + 1;
      saveState(); renderHydra();
    });
  });
}

function updateMacroRing() {
  const today = new Date().toDateString();
  const todayLog = STATE.log.filter(e => e.date === today);
  const totals = todayLog.reduce((acc, e) => {
    acc.kcal += e.kcal || 0;
    acc.p += e.p || 0;
    acc.g += e.g || 0;
    acc.l += e.l || 0;
    return acc;
  }, { kcal: 0, p: 0, g: 0, l: 0 });

  const TARGET = 1650;
  const pct = Math.min(totals.kcal / TARGET, 1);
  const circumference = 314;
  const offset = circumference - (pct * circumference);

  document.getElementById('ring-consumed').textContent = totals.kcal;
  document.getElementById('ring-fill-el').style.strokeDashoffset = offset;
  document.getElementById('today-kcal').textContent = `${totals.kcal} / 1650 kcal`;
  document.getElementById('dash-prot').textContent = `${totals.p} / 120g`;
  document.getElementById('dash-gluc').textContent = `${totals.g} / 160g`;
  document.getElementById('dash-lip').textContent = `${totals.l} / 55g`;
}

// ─── PROGRAMME ────────────────────────────────────────────────

function renderProgramme() {
  // Day tabs
  const tabsEl = document.getElementById('day-tabs');
  tabsEl.innerHTML = PROGRAMME.map((d, i) => `
    <button class="day-tab ${i === STATE.selectedDay ? 'active' : ''}" data-i="${i}">
      ${d.jour.substring(0,3)}${d.sport ? ' 🏃' : ''}
    </button>
  `).join('');
  tabsEl.querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.selectedDay = parseInt(btn.dataset.i);
      renderProgramme();
      renderDashboard();
    });
  });

  // Day programme
  const day = PROGRAMME[STATE.selectedDay];
  const totalKcal = day.repas.reduce((a, r) => a + r.kcal, 0);
  document.getElementById('day-programme').innerHTML = day.repas.map(r => `
    <div class="meal-card">
      <div class="meal-card-header">
        <div class="meal-name-row">
          <span class="meal-icon">${r.icon}</span>
          <span class="meal-name">${r.nom}</span>
        </div>
        <span class="meal-kcal-badge">${r.kcal} kcal</span>
      </div>
      <ul class="meal-items">
        ${r.items.map(item => `
          <li class="meal-item">
            <span class="meal-item-name">${item.nom}</span>
            <span class="meal-item-macros">${item.kcal}kcal · P${item.p} G${item.g} L${item.l}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('') + `<div class="macro-item" style="padding:0.5rem 0;font-size:0.82rem;color:var(--text-soft)">
    Total du jour : <strong style="color:var(--primary)">${totalKcal} kcal</strong>
  </div>`;

  // Alternatives
  const altEl = document.getElementById('alternatives-grid');
  altEl.innerHTML = ALTERNATIVES.map(cat => `
    <div class="alt-card">
      <div class="alt-title">${cat.titre}</div>
      ${cat.items.map(item => `
        <div style="margin-bottom:0.4rem;font-size:0.78rem;color:var(--text-soft)">
          <strong style="color:var(--text)">${item.base}</strong> → 
          <div class="alt-swaps" style="margin-top:0.2rem">
            ${item.swaps.map(s => `<span class="alt-swap">${s}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ─── JOURNAL ──────────────────────────────────────────────────

function renderJournal() {
  const today = new Date().toDateString();
  const todayLog = STATE.log.filter(e => e.date === today);

  const el = document.getElementById('log-entries');
  if (todayLog.length === 0) {
    el.innerHTML = `<div class="empty-state"><span class="empty-state-icon">📋</span>Rien de logué aujourd'hui.<br/>Ajoute tes repas !</div>`;
  } else {
    el.innerHTML = todayLog.map((e, idx) => `
      <div class="log-entry">
        <div class="log-entry-info">
          <div class="log-entry-name">${e.name}</div>
          <div class="log-entry-cat">${repasLabel(e.cat)}</div>
        </div>
        <div class="log-entry-right">
          <div class="log-entry-kcal">${e.kcal} kcal</div>
          <div style="font-size:0.7rem;color:var(--text-muted)">P${e.p} G${e.g} L${e.l}</div>
        </div>
        <button class="log-entry-del" data-idx="${STATE.log.indexOf(e)}">✕</button>
      </div>
    `).join('');
    el.querySelectorAll('.log-entry-del').forEach(btn => {
      btn.addEventListener('click', () => {
        STATE.log.splice(parseInt(btn.dataset.idx), 1);
        saveState(); renderJournal(); updateMacroRing();
      });
    });
  }

  // Bilan semaine
  const now = new Date();
  const days = ['L','M','M','J','V','S','D'];
  const bilanEl = document.getElementById('week-bilan');
  bilanEl.innerHTML = days.map((d, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - ((now.getDay() || 7) - 1) + i);
    const key = date.toDateString();
    const kcal = STATE.log.filter(e => e.date === key).reduce((a, e) => a + e.kcal, 0);
    const isToday = key === today;
    return `<div class="bilan-day ${isToday ? 'today' : ''}">
      <div class="bilan-d">${d}</div>
      <div class="bilan-k">${kcal || '—'}</div>
    </div>`;
  }).join('');
}

function repasLabel(cat) {
  const map = { 'petit-dej': '☀️ Petit-dej', 'dejeuner': '🥗 Déjeuner', 'snack': '🍎 Collation', 'diner': '🌙 Dîner' };
  return map[cat] || cat;
}

document.getElementById('log-add-btn').addEventListener('click', () => {
  const name = document.getElementById('log-food-name').value.trim();
  const kcal = parseInt(document.getElementById('log-kcal').value) || 0;
  const p = parseInt(document.getElementById('log-prot').value) || 0;
  const g = parseInt(document.getElementById('log-gluc').value) || 0;
  const l = parseInt(document.getElementById('log-lip').value) || 0;
  const cat = document.getElementById('log-repas').value;
  if (!name || !kcal) return;

  STATE.log.push({ name, kcal, p, g, l, cat, date: new Date().toDateString() });
  saveState();
  document.getElementById('log-food-name').value = '';
  document.getElementById('log-kcal').value = '';
  document.getElementById('log-prot').value = '';
  document.getElementById('log-gluc').value = '';
  document.getElementById('log-lip').value = '';
  renderJournal();
  updateMacroRing();
});

// ─── COURSES ──────────────────────────────────────────────────

function renderCourses() {
  const categories = Object.keys(COURSES);
  
  // Filters
  const filterEl = document.getElementById('courses-filter');
  filterEl.innerHTML = `
    <button class="filter-btn ${STATE.coursesFilter === 'all' ? 'active' : ''}" data-f="all">Tout</button>
    <button class="filter-btn ${STATE.coursesFilter === 'semaine' ? 'active' : ''}" data-f="semaine">Cette semaine</button>
    <button class="filter-btn ${STATE.coursesFilter === 'garde' ? 'active' : ''}" data-f="garde">À garder en stock</button>
  `;
  filterEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.coursesFilter = btn.dataset.f;
      renderCourses();
    });
  });

  const listEl = document.getElementById('courses-list');
  listEl.innerHTML = categories.map(cat => {
    let items = COURSES[cat];
    if (STATE.coursesFilter === 'semaine') items = items.filter(i => i.semaine);
    if (STATE.coursesFilter === 'garde') items = items.filter(i => !i.semaine);
    if (!items.length) return '';
    
    return `
      <div class="courses-cat">
        <div class="courses-cat-title">${cat}</div>
        ${items.map(item => {
          const id = `${cat}__${item.nom}`;
          const checked = STATE.checkedCourses.includes(id);
          return `
            <div class="course-item ${checked ? 'checked' : ''}" data-id="${id}">
              <div class="course-check">${checked ? '✓' : ''}</div>
              <span class="course-name" style="${checked ? 'text-decoration:line-through' : ''}">${item.nom}</span>
              <span class="course-qty">${item.qte}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('.course-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      const idx = STATE.checkedCourses.indexOf(id);
      if (idx === -1) STATE.checkedCourses.push(id);
      else STATE.checkedCourses.splice(idx, 1);
      saveState(); renderCourses();
    });
  });
}

document.getElementById('reset-courses-btn').addEventListener('click', () => {
  STATE.checkedCourses = [];
  saveState(); renderCourses();
});

// ─── SPORT ────────────────────────────────────────────────────

function renderSport() {
  // Plan
  const planEl = document.getElementById('sport-plan');
  const today = new Date().getDay();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  planEl.innerHTML = SPORT_PLAN.map(d => {
    const isToday = dayNames[today] === d.jour;
    return `
      <div class="sport-day-card ${d.run ? 'run-day' : 'rest-day'}" style="${isToday ? 'background:#F0F7EC;' : ''}">
        <div class="sport-day-icon">${d.run ? '🏃‍♀️' : d.type.includes('yoga') || d.type.includes('actif') ? '🧘‍♀️' : '💤'}</div>
        <div class="sport-day-info">
          <div class="sport-day-name">${d.jour} ${isToday ? '← aujourd\'hui' : ''}</div>
          <div class="sport-day-detail">${d.type} · ${d.detail}</div>
          <div style="font-size:0.72rem;color:var(--primary-muted);margin-top:0.2rem">💡 ${d.conseils}</div>
        </div>
        <span class="sport-day-badge ${d.run ? 'badge-run' : 'badge-rest'}">${d.run ? 'Run' : 'Repos'}</span>
      </div>
    `;
  }).join('');

  // Nutrition autour du sport
  const snEl = document.getElementById('sport-nutrition-cards');
  snEl.innerHTML = SPORT_NUTRITION.map(sn => `
    <div class="sn-card">
      <div class="sn-card-header">
        <span class="sn-icon">${sn.icon}</span>
        <span class="sn-title">${sn.titre}</span>
      </div>
      <div class="sn-content">${sn.content}</div>
    </div>
  `).join('');

  // Poids
  renderWeights();
}

function renderWeights() {
  const el = document.getElementById('weight-history');
  if (STATE.weights.length === 0) {
    el.innerHTML = `<div class="empty-state"><span class="empty-state-icon">⚖️</span>Aucun poids enregistré.<br/>Poids actuel : 87 kg</div>`;
  } else {
    const sorted = [...STATE.weights].reverse();
    el.innerHTML = sorted.map((w, i) => {
      const prev = sorted[i + 1];
      let delta = '';
      if (prev) {
        const diff = (w.val - prev.val).toFixed(1);
        delta = diff < 0 
          ? `<span class="weight-delta delta-down">▼ ${Math.abs(diff)}kg</span>`
          : diff > 0 ? `<span class="weight-delta delta-up">▲ ${diff}kg</span>` : '';
      }
      return `
        <div class="weight-entry">
          <span class="weight-entry-date">${new Date(w.date).toLocaleDateString('fr-FR', {day:'numeric', month:'short'})}</span>
          <span class="weight-entry-val">${w.val} kg${delta}</span>
        </div>
      `;
    }).join('');
  }
}

document.getElementById('weight-add-btn').addEventListener('click', () => {
  const val = parseFloat(document.getElementById('weight-input').value);
  if (!val || val < 30 || val > 250) return;
  STATE.weights.push({ val, date: new Date().toISOString() });
  document.getElementById('weight-input').value = '';
  saveState(); renderWeights();
});

// ─── INIT ─────────────────────────────────────────────────────

function init() {
  // Set today's day (0=Mon...6=Sun)
  const d = new Date().getDay();
  STATE.selectedDay = d === 0 ? 6 : d - 1;

  renderDashboard();
  renderProgramme();
  renderJournal();
  renderCourses();
  renderSport();
}

init();
