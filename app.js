/* ══════════════════════════════════════════════════════════════
   NUTRIGLOW v2 – app.js
   1 650 kcal/j · SOPK · Perte de poids douce
══════════════════════════════════════════════════════════════ */

const ALIMENTS_REF = [
  { nom: "Pain baguette", kcal: 270, p: 9, g: 55, l: 1 },
  { nom: "Pain de campagne", kcal: 255, p: 8, g: 50, l: 2 },
  { nom: "Pain complet", kcal: 230, p: 9, g: 44, l: 2 },
  { nom: "Pain de seigle", kcal: 220, p: 7, g: 44, l: 2 },
  { nom: "Pain de mie", kcal: 265, p: 8, g: 48, l: 4 },
  { nom: "Croissant", kcal: 405, p: 8, g: 45, l: 22 },
  { nom: "Pain aux céréales", kcal: 240, p: 9, g: 45, l: 3 },
  { nom: "Flocons d'avoine", kcal: 368, p: 13, g: 66, l: 7 },
  { nom: "Muesli sans sucre", kcal: 360, p: 10, g: 63, l: 8 },
  { nom: "Granola", kcal: 415, p: 9, g: 64, l: 15 },
  { nom: "Riz blanc cuit", kcal: 130, p: 3, g: 28, l: 0 },
  { nom: "Riz basmati cuit", kcal: 130, p: 3, g: 28, l: 0 },
  { nom: "Riz complet cuit", kcal: 120, p: 3, g: 25, l: 1 },
  { nom: "Pâtes cuites", kcal: 158, p: 6, g: 31, l: 1 },
  { nom: "Pâtes complètes cuites", kcal: 145, p: 6, g: 28, l: 1 },
  { nom: "Quinoa cuit", kcal: 120, p: 4, g: 21, l: 2 },
  { nom: "Semoule cuite", kcal: 145, p: 5, g: 30, l: 0 },
  { nom: "Boulgour cuit", kcal: 115, p: 4, g: 23, l: 0 },
  { nom: "Patate douce cuite", kcal: 80, p: 2, g: 18, l: 0 },
  { nom: "Pomme de terre cuite", kcal: 80, p: 2, g: 17, l: 0 },
  { nom: "Tortilla de blé", kcal: 280, p: 8, g: 50, l: 6 },
  { nom: "Poulet blanc grillé", kcal: 165, p: 31, g: 0, l: 3 },
  { nom: "Poulet cuisse cuite", kcal: 185, p: 25, g: 0, l: 9 },
  { nom: "Dinde émincée cuite", kcal: 155, p: 30, g: 0, l: 3 },
  { nom: "Bœuf haché 5% MG", kcal: 175, p: 26, g: 0, l: 7 },
  { nom: "Steak bœuf grillé", kcal: 200, p: 27, g: 0, l: 10 },
  { nom: "Agneau côtelette", kcal: 250, p: 20, g: 0, l: 18 },
  { nom: "Porc filet cuit", kcal: 165, p: 28, g: 0, l: 5 },
  { nom: "Jambon blanc", kcal: 110, p: 17, g: 1, l: 4 },
  { nom: "Saumon cuit", kcal: 200, p: 25, g: 0, l: 11 },
  { nom: "Thon en conserve au naturel", kcal: 100, p: 23, g: 0, l: 1 },
  { nom: "Sardines en conserve", kcal: 190, p: 21, g: 0, l: 11 },
  { nom: "Cabillaud cuit", kcal: 90, p: 20, g: 0, l: 1 },
  { nom: "Crevettes cuites", kcal: 95, p: 20, g: 0, l: 1 },
  { nom: "Maquereau cuit", kcal: 220, p: 20, g: 0, l: 15 },
  { nom: "Truite cuite", kcal: 160, p: 23, g: 0, l: 7 },
  { nom: "Saumon fumé", kcal: 175, p: 20, g: 0, l: 10 },
  { nom: "Oeuf entier", kcal: 155, p: 13, g: 1, l: 11 },
  { nom: "Blanc d'oeuf", kcal: 52, p: 11, g: 1, l: 0 },
  { nom: "Yaourt grec 0%", kcal: 57, p: 10, g: 4, l: 0 },
  { nom: "Yaourt grec entier", kcal: 100, p: 9, g: 4, l: 5 },
  { nom: "Fromage blanc 0%", kcal: 50, p: 8, g: 4, l: 0 },
  { nom: "Skyr nature", kcal: 60, p: 11, g: 4, l: 0 },
  { nom: "Lait demi-écrémé", kcal: 47, p: 3, g: 5, l: 2 },
  { nom: "Lait végétal amande ou avoine", kcal: 35, p: 1, g: 5, l: 1 },
  { nom: "Fromage de chèvre frais", kcal: 230, p: 13, g: 1, l: 20 },
  { nom: "Feta", kcal: 265, p: 15, g: 0, l: 22 },
  { nom: "Emmental", kcal: 380, p: 29, g: 0, l: 29 },
  { nom: "Parmesan", kcal: 430, p: 38, g: 3, l: 29 },
  { nom: "Ricotta", kcal: 175, p: 11, g: 3, l: 13 },
  { nom: "Mozzarella", kcal: 255, p: 18, g: 2, l: 19 },
  { nom: "Cottage cheese", kcal: 85, p: 11, g: 3, l: 3 },
  { nom: "Lentilles corail cuites", kcal: 120, p: 9, g: 20, l: 0 },
  { nom: "Lentilles vertes cuites", kcal: 110, p: 9, g: 16, l: 0 },
  { nom: "Pois chiches cuits", kcal: 165, p: 9, g: 26, l: 3 },
  { nom: "Haricots rouges cuits", kcal: 125, p: 8, g: 22, l: 0 },
  { nom: "Edamame", kcal: 120, p: 11, g: 9, l: 5 },
  { nom: "Tofu ferme", kcal: 75, p: 9, g: 1, l: 4 },
  { nom: "Hummus", kcal: 165, p: 8, g: 16, l: 9 },
  { nom: "Salade verte", kcal: 15, p: 1, g: 2, l: 0 },
  { nom: "Épinards", kcal: 23, p: 3, g: 1, l: 0 },
  { nom: "Tomate", kcal: 18, p: 1, g: 3, l: 0 },
  { nom: "Concombre", kcal: 12, p: 1, g: 2, l: 0 },
  { nom: "Courgette", kcal: 17, p: 1, g: 3, l: 0 },
  { nom: "Poivron rouge", kcal: 30, p: 1, g: 6, l: 0 },
  { nom: "Brocoli cuit", kcal: 35, p: 3, g: 5, l: 0 },
  { nom: "Haricots verts cuits", kcal: 30, p: 2, g: 5, l: 0 },
  { nom: "Carottes cuites", kcal: 35, p: 1, g: 7, l: 0 },
  { nom: "Champignons cuits", kcal: 22, p: 3, g: 2, l: 0 },
  { nom: "Oignon", kcal: 40, p: 1, g: 9, l: 0 },
  { nom: "Avocat", kcal: 160, p: 2, g: 2, l: 15 },
  { nom: "Chou-fleur cuit", kcal: 25, p: 2, g: 4, l: 0 },
  { nom: "Poireau cuit", kcal: 25, p: 1, g: 4, l: 0 },
  { nom: "Betterave cuite", kcal: 45, p: 2, g: 9, l: 0 },
  { nom: "Pomme", kcal: 52, p: 0, g: 13, l: 0 },
  { nom: "Banane", kcal: 90, p: 1, g: 21, l: 0 },
  { nom: "Fraises", kcal: 32, p: 1, g: 7, l: 0 },
  { nom: "Myrtilles", kcal: 55, p: 1, g: 13, l: 0 },
  { nom: "Fruits rouges mélange", kcal: 40, p: 1, g: 9, l: 0 },
  { nom: "Mangue", kcal: 60, p: 1, g: 14, l: 0 },
  { nom: "Orange", kcal: 45, p: 1, g: 10, l: 0 },
  { nom: "Kiwi", kcal: 60, p: 1, g: 14, l: 0 },
  { nom: "Raisin", kcal: 67, p: 1, g: 17, l: 0 },
  { nom: "Poire", kcal: 55, p: 0, g: 14, l: 0 },
  { nom: "Pêche", kcal: 40, p: 1, g: 10, l: 0 },
  { nom: "Ananas", kcal: 50, p: 1, g: 12, l: 0 },
  { nom: "Amandes", kcal: 580, p: 21, g: 10, l: 50 },
  { nom: "Noix", kcal: 655, p: 15, g: 7, l: 65 },
  { nom: "Noisettes", kcal: 630, p: 14, g: 10, l: 60 },
  { nom: "Noix de cajou", kcal: 550, p: 18, g: 30, l: 44 },
  { nom: "Pistaches", kcal: 560, p: 20, g: 28, l: 45 },
  { nom: "Beurre de cacahuète", kcal: 600, p: 25, g: 15, l: 50 },
  { nom: "Beurre d'amande", kcal: 620, p: 21, g: 12, l: 55 },
  { nom: "Graines de chia", kcal: 490, p: 16, g: 36, l: 31 },
  { nom: "Graines de lin moulues", kcal: 500, p: 18, g: 29, l: 37 },
  { nom: "Graines de sésame", kcal: 580, p: 18, g: 24, l: 50 },
  { nom: "Huile d'olive", kcal: 900, p: 0, g: 0, l: 100 },
  { nom: "Chocolat noir 70%", kcal: 550, p: 6, g: 40, l: 40 },
  { nom: "Chocolat noir 85%", kcal: 590, p: 8, g: 28, l: 50 },
  { nom: "Miel", kcal: 305, p: 0, g: 80, l: 0 },
  { nom: "Sirop d'érable", kcal: 260, p: 0, g: 67, l: 0 },
  { nom: "Beurre", kcal: 745, p: 1, g: 0, l: 82 },
  { nom: "Sauce tomate maison", kcal: 50, p: 2, g: 9, l: 1 },
  { nom: "Soupe de légumes", kcal: 40, p: 2, g: 7, l: 1 },
  { nom: "Vinaigrette huile vinaigre", kcal: 450, p: 0, g: 2, l: 50 },
  { nom: "Crème fraîche légère", kcal: 150, p: 3, g: 4, l: 13 },
  { nom: "Dattes Medjool", kcal: 280, p: 2, g: 72, l: 0 },
];

const SWAP_GROUPS = {
  poulet:    { label: "Protéine – volaille", opts: [
    { nom: "Poulet grillé (150g)", kcal: 248, p: 47, g: 0, l: 5 },
    { nom: "Dinde sautée (150g)", kcal: 233, p: 45, g: 0, l: 5 },
    { nom: "Thon en conserve (120g)", kcal: 120, p: 28, g: 0, l: 1 },
    { nom: "Crevettes (180g)", kcal: 171, p: 36, g: 0, l: 2 },
    { nom: "Tofu ferme (180g)", kcal: 135, p: 16, g: 2, l: 7 },
    { nom: "Sardines (120g)", kcal: 228, p: 25, g: 0, l: 13 },
  ]},
  saumon:    { label: "Poisson gras", opts: [
    { nom: "Saumon (150g)", kcal: 300, p: 38, g: 0, l: 17 },
    { nom: "Maquereau (150g)", kcal: 330, p: 30, g: 0, l: 23 },
    { nom: "Truite (150g)", kcal: 240, p: 35, g: 0, l: 11 },
    { nom: "Thon frais (150g)", kcal: 195, p: 32, g: 0, l: 7 },
    { nom: "Sardines (130g)", kcal: 247, p: 27, g: 0, l: 14 },
    { nom: "Cabillaud (180g)", kcal: 162, p: 36, g: 0, l: 2 },
  ]},
  boeuf:     { label: "Viande rouge", opts: [
    { nom: "Steak bœuf (130g)", kcal: 260, p: 35, g: 0, l: 13 },
    { nom: "Veau (130g)", kcal: 195, p: 28, g: 0, l: 9 },
    { nom: "Agneau (100g)", kcal: 250, p: 20, g: 0, l: 18 },
    { nom: "Lapin (150g)", kcal: 210, p: 30, g: 0, l: 10 },
  ]},
  oeuf:      { label: "Œufs", opts: [
    { nom: "2 œufs brouillés", kcal: 186, p: 16, g: 1, l: 13 },
    { nom: "3 œufs brouillés", kcal: 279, p: 24, g: 2, l: 20 },
    { nom: "Omelette (2 œufs)", kcal: 186, p: 16, g: 1, l: 13 },
    { nom: "Œufs pochés (2)", kcal: 186, p: 16, g: 1, l: 13 },
  ]},
  riz:       { label: "Féculent", opts: [
    { nom: "Riz basmati cuit (150g)", kcal: 195, p: 5, g: 42, l: 0 },
    { nom: "Quinoa cuit (130g)", kcal: 156, p: 5, g: 27, l: 3 },
    { nom: "Boulgour cuit (130g)", kcal: 150, p: 5, g: 30, l: 0 },
    { nom: "Patate douce (180g)", kcal: 144, p: 4, g: 32, l: 0 },
    { nom: "Semoule cuite (130g)", kcal: 189, p: 7, g: 39, l: 0 },
    { nom: "Pâtes complètes (150g)", kcal: 218, p: 9, g: 42, l: 2 },
  ]},
  lentilles: { label: "Légumineuse", opts: [
    { nom: "Lentilles corail (80g sec)", kcal: 265, p: 20, g: 44, l: 1 },
    { nom: "Pois chiches cuits (160g)", kcal: 264, p: 14, g: 42, l: 5 },
    { nom: "Lentilles vertes (80g sec)", kcal: 245, p: 19, g: 38, l: 1 },
    { nom: "Haricots rouges (80g sec)", kcal: 240, p: 17, g: 43, l: 1 },
  ]},
  yaourt:    { label: "Produit laitier", opts: [
    { nom: "Yaourt grec 0% (150g)", kcal: 86, p: 15, g: 6, l: 0 },
    { nom: "Fromage blanc 0% (150g)", kcal: 75, p: 12, g: 6, l: 0 },
    { nom: "Skyr nature (150g)", kcal: 90, p: 17, g: 6, l: 0 },
    { nom: "Yaourt grec entier (100g)", kcal: 100, p: 9, g: 4, l: 5 },
  ]},
  amandes:   { label: "Oléagineux", opts: [
    { nom: "Amandes (20g)", kcal: 116, p: 4, g: 2, l: 10 },
    { nom: "Noix (15g)", kcal: 98, p: 2, g: 1, l: 10 },
    { nom: "Noix de cajou (20g)", kcal: 110, p: 4, g: 6, l: 9 },
    { nom: "Pistaches (20g)", kcal: 112, p: 4, g: 6, l: 9 },
    { nom: "Noisettes (20g)", kcal: 126, p: 3, g: 2, l: 12 },
  ]},
  avoine:    { label: "Base petit-déjeuner", opts: [
    { nom: "Flocons d'avoine (50g) + lait végétal", kcal: 220, p: 7, g: 35, l: 5 },
    { nom: "Smoothie bowl banane + myrtilles + yaourt", kcal: 220, p: 12, g: 32, l: 4 },
    { nom: "Chia pudding (30g chia + 200ml lait végétal)", kcal: 200, p: 7, g: 20, l: 10 },
    { nom: "2 tranches pain complet + beurre d'amande", kcal: 300, p: 10, g: 36, l: 14 },
    { nom: "2 oeufs brouillés + 1 tranche pain de seigle", kcal: 260, p: 18, g: 20, l: 13 },
    { nom: "Pancakes protéinés (avoine + oeufs)", kcal: 340, p: 22, g: 34, l: 11 },
  ]},
};

const PROGRAMME = [
  { jour: "Lundi", repas: [
    { nom: "Petit-déjeuner", icon: "☀️", kcal: 382, items: [
      { nom: "Flocons d'avoine (50g) + lait végétal (200ml)", kcal: 215, p: 7, g: 35, l: 4, swapGroup: "avoine" },
      { nom: "Yaourt grec 0% (150g)", kcal: 86, p: 15, g: 6, l: 0, swapGroup: "yaourt" },
      { nom: "Fruits rouges (80g)", kcal: 32, p: 1, g: 7, l: 0 },
      { nom: "Graines de chia (10g)", kcal: 49, p: 2, g: 4, l: 3 },
    ]},
    { nom: "Déjeuner", icon: "🥗", kcal: 504, items: [
      { nom: "Poulet grillé (150g)", kcal: 248, p: 47, g: 0, l: 5, swapGroup: "poulet" },
      { nom: "Quinoa cuit (130g)", kcal: 156, p: 5, g: 27, l: 3, swapGroup: "riz" },
      { nom: "Légumes rôtis courgette + poivron (200g)", kcal: 46, p: 2, g: 9, l: 0 },
      { nom: "Huile d'olive (10g)", kcal: 90, p: 0, g: 0, l: 10 },
    ]},
    { nom: "Collation", icon: "🍎", kcal: 194, items: [
      { nom: "Amandes (20g)", kcal: 116, p: 4, g: 2, l: 10, swapGroup: "amandes" },
      { nom: "Pomme (150g)", kcal: 78, p: 0, g: 20, l: 0 },
    ]},
    { nom: "Dîner", icon: "🌙", kcal: 579, items: [
      { nom: "Saumon (150g)", kcal: 300, p: 38, g: 0, l: 17, swapGroup: "saumon" },
      { nom: "Patate douce cuite (180g)", kcal: 144, p: 4, g: 32, l: 0, swapGroup: "riz" },
      { nom: "Haricots verts (200g)", kcal: 60, p: 4, g: 10, l: 0 },
      { nom: "Huile d'olive (5g)", kcal: 45, p: 0, g: 0, l: 5 },
    ]},
  ]},
  { jour: "Mardi", repas: [
    { nom: "Petit-déjeuner", icon: "☀️", kcal: 358, items: [
      { nom: "2 oeufs brouillés + 1 tranche pain de seigle", kcal: 260, p: 18, g: 20, l: 13, swapGroup: "avoine" },
      { nom: "Avocat (75g)", kcal: 120, p: 2, g: 2, l: 11 },
      { nom: "Tomates cerises (100g)", kcal: 18, p: 1, g: 3, l: 0 },
    ]},
    { nom: "Déjeuner", icon: "🥗", kcal: 540, items: [
      { nom: "Lentilles corail (80g sec)", kcal: 265, p: 20, g: 44, l: 1, swapGroup: "lentilles" },
      { nom: "Légumes mijotés tomate + carotte (150g)", kcal: 50, p: 2, g: 10, l: 0 },
      { nom: "Feta (30g)", kcal: 80, p: 5, g: 0, l: 7 },
      { nom: "Salade verte + vinaigrette (10ml)", kcal: 60, p: 1, g: 3, l: 5 },
      { nom: "1 tranche pain complet", kcal: 70, p: 3, g: 13, l: 1 },
    ]},
    { nom: "Collation", icon: "🍌", kcal: 195, items: [
      { nom: "Fromage blanc 0% (150g)", kcal: 75, p: 12, g: 6, l: 0, swapGroup: "yaourt" },
      { nom: "Demi banane (60g)", kcal: 54, p: 1, g: 13, l: 0 },
      { nom: "Noix (10g) + cannelle", kcal: 66, p: 2, g: 1, l: 7, swapGroup: "amandes" },
    ]},
    { nom: "Dîner", icon: "🌙", kcal: 510, items: [
      { nom: "Steak boeuf 5% MG (130g)", kcal: 260, p: 35, g: 0, l: 13, swapGroup: "boeuf" },
      { nom: "Riz basmati cuit (150g)", kcal: 195, p: 5, g: 42, l: 0, swapGroup: "riz" },
      { nom: "Épinards sautés à l'ail (150g)", kcal: 35, p: 5, g: 2, l: 0 },
      { nom: "Huile d'olive (5g)", kcal: 45, p: 0, g: 0, l: 5 },
    ]},
  ]},
  { jour: "Mercredi", repas: [
    { nom: "Petit-déjeuner", icon: "☀️", kcal: 380, items: [
      { nom: "Smoothie bowl banane + myrtilles (80g) + yaourt (100g)", kcal: 220, p: 11, g: 32, l: 4, swapGroup: "avoine" },
      { nom: "Granola (30g)", kcal: 125, p: 3, g: 19, l: 5 },
      { nom: "Graines de lin moulues (7g)", kcal: 35, p: 1, g: 2, l: 3 },
    ]},
    { nom: "Déjeuner", icon: "🥗", kcal: 569, items: [
      { nom: "Dinde sautée (150g)", kcal: 233, p: 45, g: 0, l: 5, swapGroup: "poulet" },
      { nom: "Pâtes complètes cuites (150g)", kcal: 218, p: 9, g: 42, l: 2, swapGroup: "riz" },
      { nom: "Sauce tomate maison (150g)", kcal: 75, p: 3, g: 14, l: 2 },
      { nom: "Parmesan râpé (10g)", kcal: 43, p: 4, g: 0, l: 3 },
    ]},
    { nom: "Collation", icon: "⚡", kcal: 140, items: [
      { nom: "Banane (100g)", kcal: 90, p: 1, g: 21, l: 0 },
      { nom: "Beurre d'amande (8g)", kcal: 50, p: 2, g: 1, l: 4, swapGroup: "amandes" },
    ]},
    { nom: "Dîner", icon: "🌙", kcal: 562, items: [
      { nom: "3 oeufs durs", kcal: 279, p: 24, g: 2, l: 20, swapGroup: "oeuf" },
      { nom: "Pois chiches rôtis (120g cuit)", kcal: 198, p: 11, g: 31, l: 4, swapGroup: "lentilles" },
      { nom: "Salade crudités concombre + tomate (150g)", kcal: 30, p: 1, g: 6, l: 0 },
      { nom: "Vinaigrette moutarde (10ml)", kcal: 55, p: 0, g: 1, l: 6 },
    ]},
  ]},
  { jour: "Jeudi", repas: [
    { nom: "Petit-déjeuner", icon: "☀️", kcal: 355, items: [
      { nom: "Chia pudding (30g chia + 200ml lait végétal)", kcal: 200, p: 6, g: 22, l: 10, swapGroup: "avoine" },
      { nom: "Fromage blanc 0% (150g)", kcal: 75, p: 12, g: 6, l: 0, swapGroup: "yaourt" },
      { nom: "Kiwi + miel (5g)", kcal: 80, p: 1, g: 19, l: 0 },
    ]},
    { nom: "Déjeuner", icon: "🥗", kcal: 489, items: [
      { nom: "Sardines en conserve (120g égoutté)", kcal: 228, p: 25, g: 0, l: 13, swapGroup: "saumon" },
      { nom: "Lentilles vertes cuites (160g)", kcal: 176, p: 14, g: 26, l: 0, swapGroup: "lentilles" },
      { nom: "Salade tomate + concombre (150g)", kcal: 30, p: 1, g: 5, l: 0 },
      { nom: "Vinaigrette citron-moutarde (10ml)", kcal: 55, p: 0, g: 1, l: 6 },
    ]},
    { nom: "Collation", icon: "🥜", kcal: 203, items: [
      { nom: "Hummus (50g)", kcal: 83, p: 4, g: 8, l: 5 },
      { nom: "Légumes crus carottes + concombre (100g)", kcal: 25, p: 1, g: 5, l: 0 },
      { nom: "Noisettes (15g)", kcal: 95, p: 2, g: 2, l: 9, swapGroup: "amandes" },
    ]},
    { nom: "Dîner", icon: "🌙", kcal: 466, items: [
      { nom: "Crevettes sautées (180g)", kcal: 171, p: 36, g: 0, l: 2, swapGroup: "poulet" },
      { nom: "Nouilles soba cuites (120g)", kcal: 175, p: 7, g: 35, l: 1, swapGroup: "riz" },
      { nom: "Légumes wok brocoli + carotte + poivron (200g)", kcal: 60, p: 3, g: 11, l: 0 },
      { nom: "Sauce soja + gingembre + sésame (15ml)", kcal: 60, p: 2, g: 5, l: 3 },
    ]},
  ]},
  { jour: "Vendredi", repas: [
    { nom: "Petit-déjeuner", icon: "☀️", kcal: 385, items: [
      { nom: "Pancakes protéinés avoine (50g) + 2 oeufs", kcal: 340, p: 22, g: 34, l: 11, swapGroup: "avoine" },
      { nom: "Fraises (100g) + sirop d'érable (5g)", kcal: 45, p: 1, g: 11, l: 0 },
    ]},
    { nom: "Déjeuner", icon: "🥗", kcal: 549, items: [
      { nom: "1 tortilla complète", kcal: 196, p: 6, g: 35, l: 4 },
      { nom: "Poulet rôti effiloché (120g)", kcal: 198, p: 38, g: 0, l: 4, swapGroup: "poulet" },
      { nom: "Avocat (75g) + salade + tomate", kcal: 155, p: 3, g: 8, l: 12 },
    ]},
    { nom: "Collation", icon: "⚡", kcal: 130, items: [
      { nom: "Dattes (30g – 2 pièces)", kcal: 84, p: 1, g: 22, l: 0 },
      { nom: "Yaourt grec 0% (80g)", kcal: 46, p: 8, g: 3, l: 0, swapGroup: "yaourt" },
    ]},
    { nom: "Dîner", icon: "🌙", kcal: 500, items: [
      { nom: "Filet de cabillaud (180g)", kcal: 162, p: 36, g: 0, l: 2, swapGroup: "saumon" },
      { nom: "Semoule complète cuite (150g)", kcal: 218, p: 8, g: 45, l: 1, swapGroup: "riz" },
      { nom: "Légumes vapeur + herbes (200g)", kcal: 70, p: 2, g: 12, l: 2 },
      { nom: "Huile d'olive (5g)", kcal: 45, p: 0, g: 0, l: 5 },
    ]},
  ]},
  { jour: "Samedi", repas: [
    { nom: "Brunch", icon: "🍳", kcal: 599, items: [
      { nom: "Omelette champignons (3 oeufs)", kcal: 279, p: 24, g: 5, l: 20, swapGroup: "oeuf" },
      { nom: "2 tranches pain de seigle grillé", kcal: 144, p: 5, g: 29, l: 1 },
      { nom: "Saumon fumé (50g)", kcal: 88, p: 10, g: 0, l: 5, swapGroup: "saumon" },
      { nom: "Ricotta légère (50g)", kcal: 88, p: 6, g: 2, l: 7 },
    ]},
    { nom: "Collation plaisir", icon: "🍫", kcal: 163, items: [
      { nom: "Chocolat noir 85% (20g)", kcal: 118, p: 2, g: 6, l: 10 },
      { nom: "Orange (100g)", kcal: 45, p: 1, g: 10, l: 0 },
    ]},
    { nom: "Dîner convivial", icon: "🌙", kcal: 595, items: [
      { nom: "Agneau côtelettes (120g)", kcal: 300, p: 24, g: 0, l: 22, swapGroup: "boeuf" },
      { nom: "Ratatouille maison (250g)", kcal: 95, p: 3, g: 16, l: 2 },
      { nom: "Pomme de terre vapeur (150g)", kcal: 120, p: 3, g: 26, l: 0, swapGroup: "riz" },
      { nom: "1 verre vin rouge 125ml (optionnel)", kcal: 85, p: 0, g: 3, l: 0 },
    ]},
  ]},
  { jour: "Dimanche", repas: [
    { nom: "Petit-déjeuner douceur", icon: "☀️", kcal: 445, items: [
      { nom: "2 tranches pain complet + avocat (75g) + 1 oeuf poché", kcal: 365, p: 16, g: 32, l: 20, swapGroup: "avoine" },
      { nom: "Smoothie épinard-kiwi-gingembre (300ml)", kcal: 80, p: 2, g: 16, l: 1 },
    ]},
    { nom: "Déjeuner en famille", icon: "🥗", kcal: 523, items: [
      { nom: "Poulet rôti cuisse avec peau (180g)", kcal: 333, p: 40, g: 0, l: 18, swapGroup: "poulet" },
      { nom: "Haricots verts + carottes vapeur (200g)", kcal: 50, p: 2, g: 10, l: 0 },
      { nom: "Purée chou-fleur légère (150g)", kcal: 90, p: 5, g: 12, l: 3 },
      { nom: "1 tranche pain complet", kcal: 70, p: 3, g: 13, l: 1 },
    ]},
    { nom: "Goûter", icon: "🍮", kcal: 200, items: [
      { nom: "Chia pudding (20g chia + 150ml lait végétal)", kcal: 140, p: 4, g: 15, l: 7 },
      { nom: "Kiwi (1 pièce – 100g)", kcal: 60, p: 1, g: 14, l: 0 },
    ]},
    { nom: "Dîner léger", icon: "🌙", kcal: 420, items: [
      { nom: "Soupe légumes maison (350ml)", kcal: 140, p: 7, g: 25, l: 4 },
      { nom: "2 tranches pain + fromage de chèvre (40g)", kcal: 280, p: 13, g: 26, l: 12 },
    ]},
  ]},
];

const COURSES = {
  "🥩 Protéines": [
    { nom: "Blanc de poulet", qte: "600g", semaine: true },
    { nom: "Filet de saumon", qte: "400g", semaine: true },
    { nom: "Boeuf haché 5% MG", qte: "300g", semaine: true },
    { nom: "Crevettes", qte: "300g", semaine: true },
    { nom: "Filet de cabillaud", qte: "300g", semaine: true },
    { nom: "Sardines en conserve", qte: "2 boîtes", semaine: true },
    { nom: "Saumon fumé", qte: "100g", semaine: true },
    { nom: "Dinde émincée", qte: "300g", semaine: true },
    { nom: "Oeufs", qte: "18 pièces", semaine: true },
  ],
  "🥛 Produits laitiers": [
    { nom: "Yaourt grec 0%", qte: "1 kg (gros pot)", semaine: true },
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
    { nom: "Pain de seigle ou complet", qte: "1 miche", semaine: true },
    { nom: "Semoule complète", qte: "300g", semaine: true },
    { nom: "Tortillas complètes", qte: "1 paquet", semaine: true },
    { nom: "Graines de chia", qte: "200g", semaine: false },
    { nom: "Graines de lin moulues", qte: "200g", semaine: false },
  ],
  "🥬 Légumes": [
    { nom: "Épinards (frais ou surgelés)", qte: "300g", semaine: true },
    { nom: "Courgettes", qte: "3 pièces", semaine: true },
    { nom: "Poivrons rouge/jaune", qte: "4 pièces", semaine: true },
    { nom: "Tomates + tomates cerises", qte: "6 pièces + 250g", semaine: true },
    { nom: "Haricots verts", qte: "500g", semaine: true },
    { nom: "Brocoli", qte: "1 tête", semaine: true },
    { nom: "Salade mélange", qte: "2 sachets", semaine: true },
    { nom: "Carottes", qte: "6 pièces", semaine: true },
    { nom: "Concombre", qte: "2 pièces", semaine: true },
    { nom: "Oignons + oignons rouges", qte: "4 pièces", semaine: true },
    { nom: "Ail", qte: "1 tête", semaine: true },
    { nom: "Champignons", qte: "300g", semaine: true },
    { nom: "Chou-fleur", qte: "1 pièce", semaine: true },
    { nom: "Pommes de terre", qte: "500g", semaine: true },
  ],
  "🍎 Fruits": [
    { nom: "Pommes", qte: "4 pièces", semaine: true },
    { nom: "Bananes", qte: "5 pièces", semaine: true },
    { nom: "Fruits rouges", qte: "400g (frais ou surgelés)", semaine: true },
    { nom: "Myrtilles", qte: "150g", semaine: true },
    { nom: "Fraises", qte: "250g", semaine: true },
    { nom: "Kiwis", qte: "3 pièces", semaine: true },
    { nom: "Avocats", qte: "4 pièces", semaine: true },
    { nom: "Citrons", qte: "4 pièces", semaine: true },
    { nom: "Dattes Medjool", qte: "100g", semaine: true },
  ],
  "🧴 Condiments & huiles": [
    { nom: "Huile d'olive extra vierge", qte: "1 bouteille", semaine: false },
    { nom: "Vinaigre de cidre (SOPK)", qte: "1 bouteille", semaine: false },
    { nom: "Sauce soja allégée", qte: "1 bouteille", semaine: false },
    { nom: "Moutarde", qte: "1 pot", semaine: false },
    { nom: "Hummus", qte: "200g", semaine: true },
    { nom: "Gingembre frais", qte: "1 morceau", semaine: true },
    { nom: "Miel", qte: "1 pot", semaine: false },
  ],
  "🌰 Oléagineux": [
    { nom: "Amandes", qte: "200g", semaine: true },
    { nom: "Noix", qte: "100g", semaine: true },
    { nom: "Noisettes", qte: "100g", semaine: true },
    { nom: "Beurre d'amande", qte: "1 pot", semaine: false },
  ],
  "🫙 Épices SOPK": [
    { nom: "Cannelle (régule insuline)", qte: "1 pot", semaine: false },
    { nom: "Curcuma (anti-inflammatoire)", qte: "1 pot", semaine: false },
    { nom: "Gingembre en poudre", qte: "1 pot", semaine: false },
    { nom: "Herbes de Provence", qte: "1 pot", semaine: false },
  ],
  "🍫 Plaisir": [
    { nom: "Chocolat noir 85%+", qte: "100g", semaine: true },
    { nom: "Sirop d'érable pur", qte: "petit format", semaine: false },
  ],
};

const TIPS = [
  { icon: "🌿", titre: "Glycémie & SOPK", text: "Commence chaque repas par tes légumes et protéines avant les glucides. Ça réduit le pic d'insuline de 30% !" },
  { icon: "💧", titre: "Hydratation", text: "8 verres minimum par jour. L'eau aide à éliminer l'excès d'hormones androgènes. Essaie l'eau citronnée le matin !" },
  { icon: "🫐", titre: "Anti-inflammatoire", text: "Fruits rouges, myrtilles, épinards, chocolat noir 85% sont tes alliés SOPK. Mange-en chaque jour !" },
  { icon: "🌿", titre: "Cannelle magique", text: "1/2 c. à café de cannelle par jour peut réduire la résistance à l'insuline. Mets-en dans ton avoine, café, yaourt..." },
  { icon: "🛌", titre: "Sommeil = perte de poids", text: "7-9h de sommeil régulent la ghréline (hormone de la faim). Un mauvais sommeil peut annuler une semaine d'efforts !" },
  { icon: "🍽️", titre: "Règle du plaisir", text: "1 repas plaisir par semaine, pas un cheat day. Ça évite la frustration et c'est suffisant pour tenir sur la durée." },
  { icon: "⏰", titre: "Timing des repas", text: "Mange dans une fenêtre de 8-10h (ex: 8h-18h). Le jeûne doux aide à réguler les hormones du SOPK." },
  { icon: "🫙", titre: "Vinaigre de cidre", text: "1 c. à soupe diluée dans de l'eau avant un repas riche en glucides réduit le pic glycémique. Excellent pour le SOPK !" },
];

// ─── STATE ───────────────────────────────────────────────────
const STATE = {
  activePage: 'dashboard',
  selectedDay: 0,
  hydraCount: parseInt(localStorage.getItem('ng_hydra') || '0'),
  log: JSON.parse(localStorage.getItem('ng_log') || '[]'),
  checkedCourses: JSON.parse(localStorage.getItem('ng_courses') || '[]'),
  swaps: JSON.parse(localStorage.getItem('ng_swaps') || '{}'),
  coursesFilter: 'all',
  selectedFood: null,
};

function save() {
  localStorage.setItem('ng_hydra', STATE.hydraCount);
  localStorage.setItem('ng_log', JSON.stringify(STATE.log));
  localStorage.setItem('ng_courses', JSON.stringify(STATE.checkedCourses));
  localStorage.setItem('ng_swaps', JSON.stringify(STATE.swaps));
}

// ─── NAVIGATION ──────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('page-' + page).classList.add('active');
    STATE.activePage = page;
  });
});

// ─── DASHBOARD ───────────────────────────────────────────────
function renderDashboard() {
  const now = new Date();
  document.getElementById('today-date').textContent =
    now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const d = now.getDay();
  STATE.selectedDay = d === 0 ? 6 : d - 1;
  document.getElementById('day-label').textContent = PROGRAMME[STATE.selectedDay].jour;

  const todayProg = PROGRAMME[STATE.selectedDay];
  const container = document.getElementById('meals-today-container');
  container.innerHTML = todayProg.repas.map((r, ri) => {
    const items = r.items.map((item, ii) => {
      const key = STATE.selectedDay + '_' + ri + '_' + ii;
      const swapped = STATE.swaps[key];
      const display = swapped || item;
      return '<li class="meal-item ' + (swapped ? 'is-swapped' : '') + '">' +
        '<span class="meal-item-name">' + display.nom + (swapped ? '<span class="swapped-badge">modifié</span>' : '') + '</span>' +
        '<span class="meal-item-macros">' + display.p + 'P · ' + display.g + 'G · ' + display.l + 'L</span>' +
        '</li>';
    }).join('');
    return '<div class="meal-card">' +
      '<div class="meal-card-header"><div class="meal-name-row"><span class="meal-icon">' + r.icon + '</span><span class="meal-name">' + r.nom + '</span></div>' +
      '<span class="meal-kcal-badge">' + r.kcal + ' kcal</span></div>' +
      '<ul class="meal-items">' + items + '</ul></div>';
  }).join('');

  updateMacroRing();
  renderHydra();

  const tip = TIPS[now.getDay() % TIPS.length];
  document.getElementById('tip-card').innerHTML =
    '<div class="tip-icon">' + tip.icon + '</div><div class="tip-title">' + tip.titre + '</div><div class="tip-text">' + tip.text + '</div>';
}

function renderHydra() {
  const g = document.getElementById('hydra-glasses');
  g.innerHTML = Array.from({ length: 8 }, (_, i) =>
    '<span class="hydra-glass ' + (i < STATE.hydraCount ? 'filled' : '') + '" data-i="' + i + '">💧</span>'
  ).join('');
  document.getElementById('hydra-count').textContent = STATE.hydraCount + ' / 8 verres';
  g.querySelectorAll('.hydra-glass').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.i);
      STATE.hydraCount = (STATE.hydraCount === i + 1) ? i : i + 1;
      save(); renderHydra();
    });
  });
}

function updateMacroRing() {
  const today = new Date().toDateString();
  const t = STATE.log.filter(e => e.date === today).reduce((a, e) =>
    ({ kcal: a.kcal + (e.kcal||0), p: a.p + (e.p||0), g: a.g + (e.g||0), l: a.l + (e.l||0) }),
    { kcal: 0, p: 0, g: 0, l: 0 }
  );
  const pct = Math.min(t.kcal / 1650, 1);
  document.getElementById('ring-consumed').textContent = t.kcal;
  document.getElementById('ring-fill-el').style.strokeDashoffset = 314 - pct * 314;
  document.getElementById('today-kcal').textContent = t.kcal + ' / 1650 kcal';
  document.getElementById('dash-prot').textContent = t.p + ' / 120g';
  document.getElementById('dash-gluc').textContent = t.g + ' / 160g';
  document.getElementById('dash-lip').textContent = t.l + ' / 55g';
  document.getElementById('dash-reste').textContent = Math.max(0, 1650 - t.kcal) + ' kcal';
}

// ─── PROGRAMME ───────────────────────────────────────────────
function renderProgramme() {
  const tabsEl = document.getElementById('day-tabs');
  tabsEl.innerHTML = PROGRAMME.map((d, i) =>
    '<button class="day-tab ' + (i === STATE.selectedDay ? 'active' : '') + '" data-i="' + i + '">' + d.jour.substring(0, 3) + '</button>'
  ).join('');
  tabsEl.querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', () => { STATE.selectedDay = parseInt(btn.dataset.i); renderProgramme(); });
  });

  const day = PROGRAMME[STATE.selectedDay];
  const el = document.getElementById('day-programme');
  el.innerHTML = day.repas.map((r, ri) => {
    const items = r.items.map((item, ii) => {
      const key = STATE.selectedDay + '_' + ri + '_' + ii;
      const swapped = STATE.swaps[key];
      const display = swapped || item;
      const canSwap = !!item.swapGroup;
      return '<li class="meal-item ' + (swapped ? 'is-swapped' : '') + '">' +
        '<span class="meal-item-name">' + display.nom +
        (swapped ? '<span class="swapped-badge">✓</span><button class="reset-swap-btn" data-key="' + key + '">annuler</button>' : '') +
        '</span>' +
        '<div style="display:flex;align-items:center;gap:0.3rem">' +
        '<span class="meal-item-macros">' + display.kcal + 'kcal · P' + display.p + ' G' + display.g + ' L' + display.l + '</span>' +
        (canSwap ? '<button class="swap-btn" data-day="' + STATE.selectedDay + '" data-ri="' + ri + '" data-ii="' + ii + '">🔄</button>' : '') +
        '</div></li>';
    }).join('');
    return '<div class="meal-card">' +
      '<div class="meal-card-header"><div class="meal-name-row"><span class="meal-icon">' + r.icon + '</span><span class="meal-name">' + r.nom + '</span></div>' +
      '<span class="meal-kcal-badge">' + r.kcal + ' kcal</span></div>' +
      '<ul class="meal-items">' + items + '</ul></div>';
  }).join('');

  el.querySelectorAll('.swap-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openSwapModal(parseInt(btn.dataset.day), parseInt(btn.dataset.ri), parseInt(btn.dataset.ii));
    });
  });

  el.querySelectorAll('.reset-swap-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      delete STATE.swaps[btn.dataset.key];
      save(); renderProgramme(); renderDashboard();
    });
  });
}

function openSwapModal(di, ri, ii) {
  const item = PROGRAMME[di].repas[ri].items[ii];
  const group = SWAP_GROUPS[item.swapGroup];
  if (!group) return;

  const key = di + '_' + ri + '_' + ii;
  const curName = (STATE.swaps[key] || item).nom;
  document.getElementById('swap-modal-current').textContent = 'Actuellement : ' + curName;

  const listEl = document.getElementById('swap-list');
  listEl.innerHTML = group.opts.map(opt =>
    '<div class="swap-option" data-key="' + key + '" data-nom="' + opt.nom + '" data-kcal="' + opt.kcal + '" data-p="' + opt.p + '" data-g="' + opt.g + '" data-l="' + opt.l + '">' +
    '<div class="swap-opt-name">' + opt.nom + '</div>' +
    '<div class="swap-opt-macros">' + opt.kcal + ' kcal · P' + opt.p + ' · G' + opt.g + ' · L' + opt.l + '</div>' +
    '</div>'
  ).join('');

  listEl.querySelectorAll('.swap-option').forEach(opt => {
    opt.addEventListener('click', () => {
      STATE.swaps[opt.dataset.key] = {
        nom: opt.dataset.nom,
        kcal: parseInt(opt.dataset.kcal),
        p: parseInt(opt.dataset.p),
        g: parseInt(opt.dataset.g),
        l: parseInt(opt.dataset.l),
      };
      save(); closeSwapModal(); renderProgramme(); renderDashboard();
    });
  });

  document.getElementById('swap-modal').classList.remove('hidden');
}

function closeSwapModal() { document.getElementById('swap-modal').classList.add('hidden'); }
document.getElementById('swap-modal-close').addEventListener('click', closeSwapModal);
document.getElementById('swap-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('swap-modal')) closeSwapModal();
});

// ─── JOURNAL ─────────────────────────────────────────────────
function showStep(step) {
  document.getElementById('log-step-1').classList.toggle('hidden', step !== 1);
  document.getElementById('log-step-2').classList.toggle('hidden', step !== 2);
  document.getElementById('log-step-manual').classList.toggle('hidden', step !== 'manual');
}

let searchTimeout = null;
document.getElementById('log-search').addEventListener('input', function () {
  clearTimeout(searchTimeout);
  const q = this.value.trim().toLowerCase();
  const resultsEl = document.getElementById('search-results');
  if (q.length < 2) { resultsEl.classList.add('hidden'); return; }

  searchTimeout = setTimeout(() => {
    const results = ALIMENTS_REF.filter(a => a.nom.toLowerCase().includes(q)).slice(0, 8);
    resultsEl.classList.remove('hidden');

    if (!results.length) {
      resultsEl.innerHTML = '<div class="search-result-item" style="color:var(--text-muted);cursor:default">' +
        '<div class="sri-name">Aucun résultat pour "' + q + '"</div>' +
        '<div class="sri-macros">Utilise la saisie manuelle</div></div>';
      return;
    }

    resultsEl.innerHTML = results.map(a =>
      '<div class="search-result-item" data-nom="' + a.nom + '" data-kcal="' + a.kcal + '" data-p="' + a.p + '" data-g="' + a.g + '" data-l="' + a.l + '">' +
      '<div class="sri-name">' + a.nom + '</div>' +
      '<div class="sri-macros">Pour 100g : ' + a.kcal + ' kcal · P' + a.p + 'g · G' + a.g + 'g · L' + a.l + 'g</div></div>'
    ).join('');

    resultsEl.querySelectorAll('.search-result-item[data-nom]').forEach(item => {
      item.addEventListener('click', () => selectFood({
        nom: item.dataset.nom, kcal: parseFloat(item.dataset.kcal),
        p: parseFloat(item.dataset.p), g: parseFloat(item.dataset.g), l: parseFloat(item.dataset.l),
      }));
    });
  }, 200);
});

function selectFood(food) {
  STATE.selectedFood = food;
  document.getElementById('search-results').classList.add('hidden');
  document.getElementById('log-search').value = '';
  document.getElementById('selected-food-banner').textContent = '📌 ' + food.nom;
  document.getElementById('ref-macros-row').innerHTML =
    '<span class="ref-per">Pour 100g :</span>' +
    '<span class="ref-chip"><strong>' + food.kcal + '</strong> kcal</span>' +
    '<span class="ref-chip">P<strong>' + food.p + 'g</strong></span>' +
    '<span class="ref-chip">G<strong>' + food.g + 'g</strong></span>' +
    '<span class="ref-chip">L<strong>' + food.l + 'g</strong></span>';
  document.getElementById('log-weight').value = '';
  document.getElementById('calc-result').classList.add('hidden');
  showStep(2);
}

document.getElementById('log-weight').addEventListener('input', function () {
  const w = parseFloat(this.value);
  if (!w || !STATE.selectedFood) { document.getElementById('calc-result').classList.add('hidden'); return; }
  const f = STATE.selectedFood;
  const r = w / 100;
  const kcal = Math.round(f.kcal * r), p = Math.round(f.p * r), g = Math.round(f.g * r), l = Math.round(f.l * r);
  document.getElementById('calc-result').classList.remove('hidden');
  document.getElementById('calc-kcal').textContent = kcal + ' kcal';
  document.getElementById('calc-macros').innerHTML =
    '<span class="calc-m">P <strong>' + p + 'g</strong></span>' +
    '<span class="calc-m">G <strong>' + g + 'g</strong></span>' +
    '<span class="calc-m">L <strong>' + l + 'g</strong></span>';
});

document.getElementById('log-add-btn').addEventListener('click', () => {
  const w = parseFloat(document.getElementById('log-weight').value);
  if (!w || !STATE.selectedFood) return;
  const f = STATE.selectedFood, r = w / 100;
  addToLog({
    name: f.nom + ' (' + w + 'g)',
    kcal: Math.round(f.kcal * r), p: Math.round(f.p * r),
    g: Math.round(f.g * r), l: Math.round(f.l * r),
    cat: document.getElementById('log-repas').value,
  });
  document.getElementById('log-weight').value = '';
  document.getElementById('calc-result').classList.add('hidden');
  STATE.selectedFood = null;
  showStep(1);
});

document.getElementById('log-back-btn').addEventListener('click', () => showStep(1));
document.getElementById('manual-mode-btn').addEventListener('click', () => showStep('manual'));
document.getElementById('manual-back-btn').addEventListener('click', () => showStep(1));
document.getElementById('manual-add-btn').addEventListener('click', () => {
  const name = document.getElementById('manual-name').value.trim();
  const kcal = parseInt(document.getElementById('manual-kcal').value) || 0;
  const p = parseInt(document.getElementById('manual-prot').value) || 0;
  const g = parseInt(document.getElementById('manual-gluc').value) || 0;
  const l = parseInt(document.getElementById('manual-lip').value) || 0;
  if (!name && !kcal) return;
  addToLog({ name: name || 'Aliment', kcal, p, g, l, cat: document.getElementById('log-repas').value });
  ['manual-name','manual-kcal','manual-prot','manual-gluc','manual-lip'].forEach(id => { document.getElementById(id).value = ''; });
  showStep(1);
});

function addToLog(entry) {
  entry.date = new Date().toDateString();
  STATE.log.push(entry);
  save(); renderJournal(); updateMacroRing();
}

function repasLabel(cat) {
  return ({ 'petit-dej': '☀️ Petit-dej', 'dejeuner': '🥗 Déjeuner', 'snack': '🍎 Collation', 'diner': '🌙 Dîner' })[cat] || cat;
}

function renderJournal() {
  const today = new Date().toDateString();
  const todayLog = STATE.log.filter(e => e.date === today);
  const totalKcal = todayLog.reduce((a, e) => a + e.kcal, 0);
  document.getElementById('log-total-badge').textContent = totalKcal + ' kcal';

  const el = document.getElementById('log-entries');
  if (!todayLog.length) {
    el.innerHTML = '<div class="empty-state"><span class="empty-state-icon">📋</span>Rien de logué aujourd\'hui !</div>';
  } else {
    el.innerHTML = todayLog.map(e => {
      const idx = STATE.log.indexOf(e);
      const macros = (e.p || e.g || e.l) ? ' · P' + e.p + ' G' + e.g + ' L' + e.l : '';
      return '<div class="log-entry">' +
        '<div class="log-entry-info"><div class="log-entry-name">' + e.name + '</div>' +
        '<div class="log-entry-cat">' + repasLabel(e.cat) + macros + '</div></div>' +
        '<div class="log-entry-right"><div class="log-entry-kcal">' + e.kcal + ' kcal</div></div>' +
        '<button class="log-entry-del" data-idx="' + idx + '">✕</button></div>';
    }).join('');
    el.querySelectorAll('.log-entry-del').forEach(btn => {
      btn.addEventListener('click', () => {
        STATE.log.splice(parseInt(btn.dataset.idx), 1);
        save(); renderJournal(); updateMacroRing();
      });
    });
  }

  // Bilan semaine
  const now = new Date();
  const jours = ['L','M','M','J','V','S','D'];
  document.getElementById('week-bilan').innerHTML = jours.map((d, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - ((now.getDay() || 7) - 1) + i);
    const key = date.toDateString();
    const kcal = STATE.log.filter(e => e.date === key).reduce((a, e) => a + e.kcal, 0);
    const isToday = key === today;
    const isGood = kcal >= 1400 && kcal <= 1800;
    return '<div class="bilan-day ' + (isToday ? 'today' : '') + ' ' + (isGood && kcal > 0 ? 'good' : '') + '">' +
      '<div class="bilan-d">' + d + '</div><div class="bilan-k">' + (kcal || '—') + '</div></div>';
  }).join('');
}

// ─── COURSES ─────────────────────────────────────────────────
function renderCourses() {
  const filterEl = document.getElementById('courses-filter');
  filterEl.innerHTML = [['all','Tout'],['semaine','Cette semaine'],['stock','Stock de base']].map(([f, label]) =>
    '<button class="filter-btn ' + (STATE.coursesFilter === f ? 'active' : '') + '" data-f="' + f + '">' + label + '</button>'
  ).join('');
  filterEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => { STATE.coursesFilter = btn.dataset.f; renderCourses(); });
  });

  const listEl = document.getElementById('courses-list');
  listEl.innerHTML = Object.keys(COURSES).map(cat => {
    let items = COURSES[cat];
    if (STATE.coursesFilter === 'semaine') items = items.filter(i => i.semaine);
    if (STATE.coursesFilter === 'stock') items = items.filter(i => !i.semaine);
    if (!items.length) return '';
    return '<div class="courses-cat"><div class="courses-cat-title">' + cat + '</div>' +
      items.map(item => {
        const id = cat + '__' + item.nom;
        const checked = STATE.checkedCourses.includes(id);
        return '<div class="course-item ' + (checked ? 'checked' : '') + '" data-id="' + id + '">' +
          '<div class="course-check">' + (checked ? '✓' : '') + '</div>' +
          '<span class="course-name" style="' + (checked ? 'text-decoration:line-through' : '') + '">' + item.nom + '</span>' +
          '<span class="course-qty">' + item.qte + '</span></div>';
      }).join('') + '</div>';
  }).join('');

  listEl.querySelectorAll('.course-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = STATE.checkedCourses.indexOf(el.dataset.id);
      if (idx === -1) STATE.checkedCourses.push(el.dataset.id);
      else STATE.checkedCourses.splice(idx, 1);
      save(); renderCourses();
    });
  });
}

document.getElementById('reset-courses-btn').addEventListener('click', () => {
  STATE.checkedCourses = []; save(); renderCourses();
});

// ─── INIT ────────────────────────────────────────────────────
function init() {
  const d = new Date().getDay();
  STATE.selectedDay = d === 0 ? 6 : d - 1;
  showStep(1);
  renderDashboard();
  renderProgramme();
  renderJournal();
  renderCourses();
}

init();
