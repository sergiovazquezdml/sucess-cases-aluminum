/* ============================================================
   INTERLUB — SUCCESS CASE DATA FILE
   ------------------------------------------------------------
   Para agregar un nuevo caso:
   1. Añade un objeto dentro de casesData con un ID único
   2. Agrégalo a casesRegistry con isCurrent: true
   3. Guarda (Ctrl+S) y el navegador se recarga solo.
   ============================================================ */

/* ============================================================
   TODOS LOS CASOS
   ============================================================ */

const casesData = {

  /* ────────────────────────────────────────────────────────
     CASO 1 · BONNELL ALUMINUM – NEWNAN
     ──────────────────────────────────────────────────────── */
  'bonnell-newnan': {

    /* ── CLIENTE ──────────────────────────────────────────── */
    clientName: "Bonnell Aluminum",
    clientLocation: "Newnan, Georgia, United States",
    clientIndustry: "Aluminum Extrusion",
    caseDate: "2021-06",
    interlubContact: "Interlub Technical Team",

    /* ── PLANTA ───────────────────────────────────────────── */
    totalPresses: 10,
    activePressesWithRO3: 4,
    plantDescription: "4 presses in active production, each fitted with the RO3 automated dosing system. Bonnell's Newnan plant supplies aluminum profiles to construction, automotive, and industrial customers across the USA, and every press has to run clean.",

    /* ── PRENSAS (4 active presses with RO3) ─────────────── */
    presses: [
      {
        pressId: "Press 1",
        pressBrand: "Pressezi",
        pushTons: null,
        billetDiameter: 9,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Boron Nitride (powder)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Press 8",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 6,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Boron Nitride (powder)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Press 9",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 8,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Boron Nitride (powder)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 },
          { number: 3, location: "Butt shear", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Press 10",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 7,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Boron Nitride (powder)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 }
        ]
      }
    ],

    /* ── RETOS ────────────────────────────────────────────── */
    challenges: [
      {
        title: "Operator Safety Risk",
        description: "Boron nitride powder was applied by hand at temperatures up to 600 °C. Operators inhaled dust and worked within arm's reach of hot metal during every cycle and shift on 10 presses. There was no system to control it, and no way to track how much exposure was accumulating.",
        impactCategory: "Safety"
      },
      {
        title: "Defective Profiles & Scrap",
        description: "White boron nitride residue stuck to finished profiles across all 10 presses. Parts that passed extrusion failed surface inspection, requiring them to be sent back for rework or scrapped outright. The lubricant was solving one problem while creating another.",
        impactCategory: "Quality"
      },
      {
        title: "Uncontrolled Costs",
        description: "No dosing system meant no measurement. How much lubricant was actually being used was unknown. Three separate products were purchased, stored, and applied across 10 presses, with no way to track consumption or bring it down.",
        impactCategory: "Cost"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reduction in lubricant-related illnesses & workplace accidents",
      metricContext: "Zero respiratory incidents, zero chemical burn accidents, and zero lubricant-related safety reports across all 4 active presses, every shift, from the first day it ran.",
      metricUnit: "sustained since implementation"
    },

    /* ── MÉTRICAS DE APOYO (tarjetas antes/después) ───────── */
    supportingMetrics: [
      { label: "Lubricant Consumption", before: "Uncontrolled", after: "Precise", unit: "", improvement: "Fully automated" },
      { label: "Profile Defects from Lubricant", before: "Recurring", after: "Eliminated", unit: "", improvement: "↓ 100%" },
      { label: "Workplace Safety Incidents", before: 14, after: 0, unit: "per year", improvement: "↓ 100%" },
      { label: "Products in Use", before: "3 separate products", after: "1 product", unit: "", improvement: "Simplified" }
    ],

    /* ── PRUEBA COMPARATIVA ───────────────────────────────── */
    visualComparison: {
      testDescription: "Controlled side-by-side trial on Press 2 over a four-week production run, comparing boron nitride powder against Interforge KI-C applied via the RO3 system.",
      product1Label: "Boron Nitride (powder)",
      product1Result: "Visible white residue on 38% of profiles. Manual reapplication every cycle. Zero dosing control.",
      product2Label: "Interforge KI-C",
      product2Result: "Zero residue across all profiles. Automated dosing held consistently at 7 ml per application cycle.",
      hasPhotos: false,
      photos: []
    },

    /* ── COMPARATIVA DE PRODUCTOS ─────────────────────────── */
    productComparison: [
      { productName: "Boron Nitride", performance: "Medium", price: "High", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Graphite", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Acetylene Flames", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    /* ── SOLUCIÓN ─────────────────────────────────────────── */
    solution: {
      solutionText: "All 4 active presses transitioned to a single installation. RO3 replaced every manual lubricant application, including boron nitride powder and hot shear blade lubricant, in a single transition. Interforge KI-C now runs automatically on every cycle. Operators do not touch it, there is no residue, and there is nothing to adjust.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free release agent. Straight from the container, no mixing. Profiles come out clean with no white residue, no staining, and nothing for operators to breathe, making any trace residue exceptionally easy to remove.",
      ro3Description: "The same measured dose, every cycle, on every press, with no adjustments, no variation, and no manual steps."
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "No respiratory illnesses, no chemical burns, marking the first time in the plant's history" },
      { resultText: "Clean profiles on all 4 presses zero boron nitride residue since day one" },
      { resultText: "Three lubricant products replaced with one" },
      { resultText: "Lubrication fully automated with no operator contact on any press" },
      { resultText: "Every dose measured, every cycle, ensuring the same amount and same result" },
      { resultText: "No powder dust, no fumes, and no buildup on equipment." }
    ],

    /* ── BENEFICIOS ADICIONALES ───────────────────────────── */
    /* icon: safety | cleanliness | productivity | quality | cost | environment */
    additionalBenefits: [
      { icon: "safety", label: "Non-flammable & non-toxic" },
      { icon: "cleanliness", label: "Water-based, easy to remove residue" },
      { icon: "quality", label: "Defect-free profiles" },
      { icon: "productivity", label: "Consistent automated dosing" },
      { icon: "cost", label: "One product replaces three" },
      { icon: "environment", label: "No toxic emissions or dust" }
    ],

    /* ── IMÁGENES ─────────────────────────────────────────── */
    media: {
      coverImage: "assets/Extrusion_HD_01.png",
      productImage: "assets/Interforge-KI-C.png",
      clientLogoUrl: "assets/bonnell-aluminum.png"
    }

  }, /* end bonnell-newnan */


  /* ────────────────────────────────────────────────────────
     CASO 2 · EXTRUM
     ──────────────────────────────────────────────────────── */
  'extrum': {

    /* ── CLIENTE ──────────────────────────────────────────── */
    clientName: "Extrum",
    clientLocation: "San Pedro Sula, Honduras, Honduras",
    clientIndustry: "Aluminum Extrusion",
    caseDate: "2024-08",
    interlubContact: "Interlub Technical Team",

    /* ── PLANTA ───────────────────────────────────────────── */
    totalPresses: 3,
    activePressesWithRO3: 2,
    plantDescription: "Pressezi (Press 1) was consuming <strong>2,527 liters per year</strong> of Ejecteze on the dummy block with no dosing control. Mei Ruey (Press 2) stopped every 4 cycles for an acetylene flame arm, bleeding <strong>98,865 lb of production annually</strong> and keeping a live flame on the floor all day.",

    /* ── PRENSAS ──────────────────────────────────────────── */
    presses: [
      {
        pressId: "Press 1",
        pressBrand: "Pressezi",
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: 180,
        lubricantBefore: "Ejecteze on the dummy block",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: 15,
        mlPerApplicationAfter: 7,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        keyBenefit: "55% reduction in dummy block lubricant, dropping from 2,527 L to 1,154 L per year",
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 },
          { number: 3, location: "Butt shear", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Press 2",
        pressBrand: "Mei Ruey",
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Acetylene Flames (arm, every 4 cycles) plus Ejecteze",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: 7,
        dosingSystem: "RO3 Automated Dosing System",
        valveType: "Atomizing spray valve",
        ro3Implemented: true,
        keyBenefit: "98,865 lb/year recovered · Flame arm removed · Zero fire incidents",
        ro3Units: [
          { number: 1, location: "Hot log shear", lubePoints: 1, valves: 2 },
          { number: 2, location: "Billet", lubePoints: 1, valves: 1 },
          { number: 3, location: "Butt shear", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Press 3",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Ejecteze + Acetylene Flames",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Existing automated system",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Reference only with no RO3 installed"
      }
    ],

    /* ── RETOS ────────────────────────────────────────────── */
    challenges: [
      {
        title: "Mei Ruey: 98,865 lb Lost to Forced Lubrication Stops",
        description: "Press 2 (Mei Ruey) stopped every 4 cycles for lubrication, requiring 5 seconds, 135 times per day. At 1,690 lb/hr across 26 working days, that is 11.25 minutes of lost production every single day. Across a year, this amounts to 98,865 lb of aluminum that never made it out the door, all due to a lubrication step.",
        impactCategory: "Productivity"
      },
      {
        title: "Pressezi: 2× Lubricant Waste on Dummy Block",
        description: "Press 1 (Pressezi) applied Ejecteze manually at 15 ml per shot on the dummy block. With no dosing control and 540 cycles per day, 2,527 liters were consumed annually. Interforge KI-C via RO3 delivers 7 ml per shot in-motion, achieving 55% less lubricant, same coverage, and same dummy block protection.",
        impactCategory: "Cost"
      },
      {
        title: "Acetylene Flames: Continuous Fire Hazard at Every Cycle",
        description: "Every time the flame arm ran, there was an open flame on the production floor. This was an active issue dozens of times a day, 26 days a month. Extinguishers had to be kept nearby, and safety protocols existed just for this one step. The day RO3 replaced the arm, all of it went away.",
        impactCategory: "Safety"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "55%",
      metricLabel: "Reduction in dummy block lubricant · Press 1 · Pressezi",
      metricContext: "Ejecteze at 15 ml/shot replaced by Interforge KI-C at 7 ml/shot, with 1,372 liters saved per year on the dummy block alone.",
      metricUnit: "verified · Extrum · Honduras"
    },

    /* ── MÉTRICA SECUNDARIA ───────────────────────────────── */
    secondaryHeroMetric: {
      metricValue: "98,865",
      metricUnit: "lb",
      pressLabel: "Press 2 · Mei Ruey",
      metricLabel: "of production recovered per year since the flame arm was eliminated",
      metricContext: "270 lb of aluminum recovered every production day. The acetylene flame arm was eliminated, yielding zero forced stops and zero fire risk."
    },

    verificationNote: "All figures recorded on-site by Interlub's technical team at Extrum Honduras. Available for third-party audit.",

    /* ── MÉTRICAS DE APOYO ────────────────────────────────── */
    supportingMetrics: [
      { press: "Press 1 · Pressezi", label: "Lubricant per Shot", before: "15 ml", after: "7 ml", unit: "", improvement: "↓ 53%" },
      { press: "Press 1 · Pressezi", label: "Annual Consumption", before: "2,527 L", after: "1,154 L", unit: "/year", improvement: "↓ 55%" },
      { press: "Press 2 · Mei Ruey", label: "Production Loss", before: "98,865 lb", after: "0 lb", unit: "/year", improvement: "↓ 100%" },
      { press: "Press 2 · Mei Ruey", label: "Daily Downtime", before: "11.25 min", after: "0 min", unit: "/day", improvement: "Eliminated" }
    ],

    /* ── TABLAS COMPARATIVAS DETALLADAS ───────────────────── */
    comparisonTables: [
      {
        title: "Lubricant Consumption",
        subtitle: "Press 1 · Pressezi · Ejecteze vs. Interforge KI-C · dummy block · 540 extrusions/day",
        columns: ["", "Ejecteze", "Interforge KI-C"],
        highlight: 4,
        rows: [
          ["No. of Presses", "1", "1"],
          ["ml per Shot", "15 ml", "7 ml"],
          ["Lubricant per 24 Hours", "8.1 L", "3.7 L"],
          ["Working Days / Month", "26", "26"],
          ["Annual Consumption", "2,527 L", "1,154 L"]
        ]
      },
      {
        title: "Production Loss from Lubrication",
        subtitle: "Press 2 · Mei Ruey · Acetylene Flames vs. Interforge KI-C · 1,690 lb/hr · 26 days/month",
        columns: ["", "Flames", "Interforge KI-C"],
        highlight: 5,
        rows: [
          ["No. of Presses", "1", "1"],
          ["Arm Lubrication", "Every 4 cycles", "N/A"],
          ["Time Lost / Lubrication", "5 sec", "0 sec"],
          ["Extrusions / 24 hrs", "540", "540"],
          ["Working Days / Month", "26", "26"],
          ["Lb/Year Lost due to Lube", "98,865 lb", "0 lb"]
        ]
      }
    ],

    /* ── PRUEBA COMPARATIVA ───────────────────────────────── */
    visualComparison: {
      testDescription: "Field analysis on Press 1 in Extrum, Honduras. Manual acetylene plus Ejecteze (15 ml/shot, 2 points, every 4 cycles) vs. Interforge KI-C with RO3 (7 ml/shot, 1 point, in-motion). 540 extrusions/day · 26 days/month · 1,690 lb/hr.",
      product1Label: "Acetylene Flames + Ejecteze",
      product1Result: "15 ml per shot · 2 lubrication points (dummy + billet) · Applied every 4 cycles while stopped · 5 sec downtime per event · 135 stops/day · 11.25 min lost/day · 98,865 lb/year production loss · 2,527 L consumed annually.",
      product2Label: "Interforge KI-C + RO3",
      product2Result: "7 ml per shot · 1 lubrication point · Applied in-motion with zero stops · 0 sec downtime · 0 lb production loss · 1,154 L consumed annually (1,372 L saved) · 100% dummy block coverage guaranteed.",
      hasPhotos: false,
      photos: []
    },

    /* ── COMPARATIVA DE PRODUCTOS ─────────────────────────── */
    productComparison: [
      { productName: "Ejecteze", performance: "Medium", price: "Medium", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Graphite", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Acetylene Flames", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    /* ── SOLUCIÓN ─────────────────────────────────────────── */
    solution: {
      solutionText: "Pressezi and Mei Ruey had different problems, but the same fix. On Press 1, Ejecteze was replaced with Interforge KI-C via RO3, cutting consumption by 55%, from 2,527 L to 1,154 L per year. On Press 2, the flame arm came out and RO3 went in, recovering 98,865 lb of annual production and taking every fire risk off the floor. Both presses now run 3 lubrication points in-motion: Hot Shear, Dummy, and Butt Shear.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free release agent. Applied in-motion by the RO3 system across 3 lubrication points at 7 ml per shot on the dummy block, zero residue, zero flammability, making any trace residue easy to remove. No manual intervention, no forced stops, no fire risk.",
      ro3Description: "In-motion dosing across 3 points (Hot Shear, Dummy, and Butt Shear) applied during the extrusion cycle. Same amount, same coverage, every shot. Installed on Pressezi and Mei Ruey at Extrum Honduras."
    },

    /* ── RESULTADOS (dos grupos, uno por prensa) ─────────── */
    resultGroups: [
      {
        pressLabel: "Press 1 · Pressezi",
        headline: "55",
        headlineUnit: "%",
        headlineSub: "less lubricant on dummy block",
        items: [
          "Annual consumption: from <strong>2,527 L</strong> down to <strong>1,154 L</strong>, resulting in 1,372 liters saved per year",
          "Dose per shot: from <strong>15 ml</strong> to <strong>7 ml</strong>, applied in-motion during the cycle",
          "100% dummy block coverage, offering the same protection at half the volume"
        ]
      },
      {
        pressLabel: "Press 2 · Mei Ruey",
        headline: "98,865",
        headlineUnit: "lb",
        headlineSub: "of production recovered per year",
        items: [
          "Acetylene flame arm eliminated, yielding <strong>zero forced stops</strong> every 4 cycles",
          "Open flame off the floor, eliminating extinguisher replacements and safety protocols just for lubrication",
          "Daily downtime from lubrication: <strong>11.25 min to 0 min</strong>"
        ]
      }
    ],

    /* ── BENEFICIOS ADICIONALES ───────────────────────────── */
    additionalBenefits: [
      { icon: "productivity", label: "98,865 lb production recovered" },
      { icon: "cost", label: "55% less lubricant consumed" },
      { icon: "safety", label: "Flame arm removed, ensuring zero fire risk" },
      { icon: "quality", label: "100% dummy block coverage" },
      { icon: "cleanliness", label: "Water-based, graphite-free, easy to remove residue" },
      { icon: "environment", label: "1,372 L saved per year" }
    ],

    /* ── IMÁGENES ─────────────────────────────────────────── */
    media: {
      coverImage: "assets/Extrusion_HD_02.png",
      productImage: "assets/Interforge-KI-C.png",
      clientLogoUrl: "assets/extrum_logo.webp",
      logoPillBg: "rgba(255,255,255,0.92)"
    }

  }, /* end extrum */


  /* ────────────────────────────────────────────────────────
     CASO 3 · INDALUM
     ──────────────────────────────────────────────────────── */
  'indalum': {

    /* ── CLIENTE ──────────────────────────────────────────── */
    clientName: "INDALUM",
    clientLocation: "San Nicolas, Nuevo Leon, Mexico",
    clientIndustry: "Aluminum Extrusion",
    caseDate: "2022-11",
    interlubContact: "Interlub Technical Team",

    /* ── PLANTA ───────────────────────────────────────────── */
    totalPresses: 3,
    activePressesWithRO3: null,
    plantDescription: "Graphite residue contaminated profiles, fouled equipment, and drove up maintenance costs. 3 presses were converted to Interforge KI-C, using the existing automated dosing systems that came with each press, eliminating graphite entirely and reducing lubricant expenditure by 75%.",

    /* ── PRENSAS ──────────────────────────────────────────── */
    presses: [
      {
        pressId: "Press 1",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Graphite bars (2 bars/shift)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Existing press dosing system",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C applied via existing press dosing system"
      },
      {
        pressId: "Press 2",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Graphite bars (2 bars/shift)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Existing press dosing system",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C applied via existing press dosing system"
      },
      {
        pressId: "Press 3",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Graphite bars (2 bars/shift)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Existing press dosing system",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C applied via existing press dosing system"
      }
    ],

    /* ── RETOS ────────────────────────────────────────────── */
    challenges: [
      {
        title: "Graphite Contamination on Profiles",
        description: "Graphite bars left visible dark residue on extruded profiles across all 3 presses. Finished parts that passed extrusion failed quality inspection, requiring rework or outright rejection. Surface quality was inconsistent and unpredictable from cycle to cycle.",
        impactCategory: "Quality"
      },
      {
        title: "Equipment Fouling and Maintenance Load",
        description: "Graphite buildup accumulated on dies, bolsters, and spray equipment. Clogged nozzles required frequent manual cleaning and unscheduled maintenance stops. The fouling spread to surrounding equipment, shortening component life and increasing parts replacement costs.",
        impactCategory: "Productivity"
      },
      {
        title: "Excessive Lubricant Costs",
        description: "Each press consumed 2 graphite bars per shift, across 3 shifts per day, 26 days per month. The indirect costs of cleaning, rework, and rejected profiles made the total lubrication expense far higher than the lubricant cost alone.",
        impactCategory: "Cost"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "75%",
      metricLabel: "Reduction in annual lubricant expenditure across all 3 presses",
      metricContext: "Graphite eliminated entirely, with zero residue on profiles and zero equipment fouling, saving 75% on lubricant expenditure.",
      metricUnit: "verified since November 2022"
    },

    /* ── MÉTRICA SECUNDARIA ───────────────────────────────── */
    secondaryHeroMetric: null,

    verificationNote: null,

    /* ── MÉTRICAS DE APOYO ────────────────────────────────── */
    supportingMetrics: [
      { label: "Lubricant per Shift", before: "2 graphite bars", after: "2.4 kg KI-C", unit: "/shift", improvement: "Graphite eliminated" },
      { label: "Annual Lubricant Expenditure", before: "Baseline", after: "Reduced", unit: "", improvement: "↓ 75%" },
      { label: "Graphite Residue on Profiles", before: "Recurring", after: "Eliminated", unit: "", improvement: "↓ 100%" }
    ],

    /* ── TABLAS COMPARATIVAS DETALLADAS ───────────────────── */
    comparisonTables: [
      {
        title: "Lubricant Cost Comparison",
        subtitle: "All 3 presses · Graphite bars vs. Interforge KI-C · 3 shifts/day · 26 days/month",
        columns: ["", "Graphite Bars", "Interforge KI-C"],
        highlight: 4,
        rows: [
          ["No. of Presses", "3", "3"],
          ["Lubricant per Shift", "2 bars", "2.4 kg"],
          ["Shifts per Day", "3", "3"],
          ["Working Days / Month", "26", "26"],
          ["Cost Reduction", "", "75%"]
        ]
      }
    ],

    /* ── PRUEBA COMPARATIVA ───────────────────────────────── */
    visualComparison: {
      testDescription: "Full plant conversion across all 3 presses at INDALUM, Mexico. Graphite bars replaced by Interforge KI-C applied via the existing press dosing systems. 3 shifts per day, 26 working days per month.",
      product1Label: "Graphite Bars",
      product1Result: "2 bars per shift. Dark residue on profiles requiring cleaning and rework. Equipment fouling and clogged nozzles.",
      product2Label: "Interforge KI-C",
      product2Result: "2.4 kg per shift. Zero residue on profiles from day one. No equipment fouling, no clogged nozzles. Any trace residue is easy to remove with water.",
      hasPhotos: false,
      photos: []
    },

    /* ── COMPARATIVA DE PRODUCTOS ─────────────────────────── */
    productComparison: [
      { productName: "Graphite", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Boron Nitride", performance: "Medium", price: "High", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Acetylene Flames", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    /* ── SOLUCIÓN ─────────────────────────────────────────── */
    solution: {
      solutionText: "All 3 presses were converted in a single implementation phase. Graphite bars were replaced entirely by Interforge KI-C, applied through the existing automated dosing systems that came with each press, avoiding any unnecessary equipment investment. There is no graphite anywhere in the plant anymore: no residue on profiles, no buildup on equipment, no clogged nozzles, and no uncontrolled consumption.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free release agent applied on the billet. Ready to use straight from the container with no mixing required. Profiles come out clean with zero dark residue, zero staining, and any trace residue is exceptionally easy to remove with standard water.",
      ro3Description: null
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "Annual lubricant savings of 75%" },
      { resultText: "100% stain free aluminum profiles" },
      { resultText: "Cleaner working area" }
    ],

    /* ── BENEFICIOS ADICIONALES ───────────────────────────── */
    additionalBenefits: [
      { icon: "cost", label: "75% reduction in annual lubricant spend" },
      { icon: "quality", label: "Zero graphite residue on profiles" },
      { icon: "cleanliness", label: "Easy to remove residue with water" },
      { icon: "productivity", label: "No equipment fouling or clogged nozzles" },
      { icon: "safety", label: "Non-flammable, non-toxic, water-based" },
      { icon: "environment", label: "No VOC emissions, no hazardous waste" }
    ],

    /* ── IMÁGENES ─────────────────────────────────────────── */
    media: {
      coverImage: "assets/Extrusion_HD_05.png",
      productImage: "assets/Interforge-KI-C.png",
      clientLogoUrl: "assets/indalum_logo.png",
      logoPillBg: "rgba(255,255,255,0.92)"
    }

  } /* end indalum */

  ,
  'hai': {
    clientName: "HAI",
    clientLocation: "Chisineu-Cris, Romania, Romania",
    clientIndustry: "Aluminum Extrusion",
    caseDate: "2023-11",
    interlubContact: "Interlub Technical Team",

    totalPresses: 4,
    activePressesWithRO3: null,
    plantSummary: "",
    plantDescription: "A trial at HAI Romania on the Presezzi press (Press 1) addressed severe valve clogging and cleanliness issues from STAG 118. Implementing Interforge KI-C on the butt shear, with Interlub's technical calibration assistance, achieved a 100% reduction in clogging-related stops while optimizing consumption. The product was also validated on the Cometal press (Press 3) hot log shear.",

    presses: [
      {
        pressId: "Press 1",
        pressBrand: "Presezzi",
        pushTons: null,
        billetDiameter: 10,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Tested & validated for butt shear lubrication"
      },
      {
        pressId: "Press 2",
        pressBrand: "Prisma",
        pushTons: null,
        billetDiameter: 5,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Reference only (STAG 118 previous lubricant)"
      },
      {
        pressId: "Press 3",
        pressBrand: "Cometal",
        pushTons: null,
        billetDiameter: 7,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Tested & validated for hot log shear lubrication"
      },
      {
        pressId: "Press 4",
        pressBrand: "Sutton",
        pushTons: null,
        billetDiameter: 8,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Reference only (STAG 118 previous lubricant)"
      }
    ],

    challenges: [
      {
        title: "Constant Valve Clogging",
        description: "The previous lubricant (STAG 118) formed hard, highly crystallized residues that constantly clogged the spray valves. This required frequent maintenance interventions and caused unscheduled production stops.",
        impactCategory: "Productivity"
      },
      {
        title: "Contaminated Working Environment",
        description: "Partial or total valve clogging led to poor, irregular lubricant distribution. This resulted in overspray, product leaks, and a highly contaminated and dirty operating area.",
        impactCategory: "Environment"
      },
      {
        title: "High Product Waste & Lack of Technical Support",
        description: "The previous supplier failed to provide proper training on the application equipment and valves. Consequently, incorrect calibration caused excessive product waste during application, generating significant dirt on the machinery.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reduction in valve clogging-related stops",
      metricContext: "Unscheduled downtime caused by valve clogging was completely eliminated. The new residue is soft and easy to wipe clean using a wet cloth.",
      metricUnit: "achieved"
    },

    secondaryHeroMetric: null,

    verificationNote: null,

    supportingMetrics: [
      { label: "Clogging-Related Stops", before: "Frequent", after: "0", unit: "/month", improvement: "↓ 100%" },
      { label: "Lubricant Consumption", before: "Excessive (STAG 118)", after: "Optimized", unit: "", improvement: "Reduced" },
      { label: "Residue Cleanability", before: "Extremely difficult", after: "Easy with water", unit: "", improvement: "Soft residue" },
      { label: "Application Waste", before: "High (No training)", after: "Minimized", unit: "", improvement: "Calibrated" }
    ],

    comparisonTables: [
      {
        title: "Operational Performance Comparison",
        subtitle: "Previous Product (STAG 118) vs. Interforge KI-C with Technical Calibration",
        columns: ["Parameter", "STAG 118", "Interforge KI-C"],
        highlight: 1,
        rows: [
          ["Valve clogging frequency", "Constant / Daily", "Eliminated"],
          ["Clogging-related downtime", "Frequent stops", "100% reduction"],
          ["Lubricant consumption", "High waste (poor training)", "Reduced & optimized"],
          ["Residue removal method", "Difficult / Mechanical scraping", "Easy wiping with water"],
          ["Working area cleanliness", "Sooty / Very dirty", "Clean & controlled"]
        ]
      }
    ],

    /* ── PRUEBA COMPARATIVA ───────────────────────────────── */
    visualComparison: {
      testDescription: "Comparison between the previous lubricant (STAG 118) and Interforge KI-C on Press 1 (Presezzi) butt shear lubrication and Press 3 (Cometal) hot log shear lubrication.",
      product1Label: "STAG 118",
      product1Result: "Constant valve clogging, hard residues difficult to clean, high product waste due to lack of supplier training, and a highly contaminated work area.",
      product2Label: "Interforge KI-C",
      product2Result: "100% reduction in clogging-related stops, optimized consumption, and soft residues easily cleaned with water (regular cleaning recommended to prevent hardening).",
      hasPhotos: false,
      photos: []
    },

    /* ── COMPARATIVA DE PRODUCTOS ─────────────────────────── */
    productComparison: [
      { productName: "STAG 118", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    /* ── SOLUCIÓN ─────────────────────────────────────────── */
    solution: {
      solutionText: "By implementing Interforge KI-C combined with Interlub's technical assistance, the plant successfully centralized and optimized the lubrication directly on the targets. Rather than eliminating deposit crystallization entirely, this approach ensures that the resulting residue remains soft and exceptionally easy to clean with a water-dampened cloth. Hands-on technical training was provided to properly calibrate the application equipment, preventing product waste.",
      product: "Interforge KI-C",
      productDescription: "Water-based synthetic release agent for aluminum extrusion. It generates a soft residue that is easily wiped clean with water, preventing progressive hardening if cleaned regularly.",
      ro3Description: null
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "100% reduction in production stops related to valve clogging" },
      { resultText: "Reduced lubricant consumption through target centralization and calibration" },
      { resultText: "Trace residues remain soft and easily removed using a cloth with water" },
      { resultText: "Regular cleaning recommended to prevent progressive hardening over time" },
      { resultText: "Eliminated product waste during application through technical training on equipment and valves" },
      { resultText: "Significantly cleaner working environment due to corrected calibration" }
    ],

    /* ── BENEFICIOS ADICIONALES ───────────────────────────── */
    additionalBenefits: [
      { icon: "productivity", label: "100% reduction in clogging-related stops" },
      { icon: "cost", label: "Reduced lubricant consumption" },
      { icon: "cleanliness", label: "Residue easily removed with a wet cloth" },
      { icon: "safety", label: "Technical training on equipment and valves" },
      { icon: "environment", label: "Cleaner working area, minimized waste" }
    ],

    /* ── IMÁGENES ─────────────────────────────────────────── */
    media: {
      coverImage: "assets/Extrusion_HD_06.png",
      productImage: "assets/Interforge-KI-C.png",
      clientLogoUrl: "assets/Hammerer_Aluminium_Industries-profile-logo.webp",
      logoPillBg: "rgba(255,255,255,0.92)"
    }
  }

};
/* end casesData */


/* ============================================================
   GALERÍA DE CASOS
   ============================================================ */

const casesRegistry = [
  {
    id: "bonnell-newnan",
    client: "Bonnell Aluminum",
    industry: "Aluminum Extrusion",
    location: "Newnan, Georgia, United States",
    headline: "100% reduction in lubricant-related illnesses & accidents",
    date: "2021-06",
    isCurrent: true
  },
  {
    id: "indalum",
    client: "INDALUM",
    industry: "Aluminum Extrusion",
    location: "San Nicolas, Nuevo Leon, Mexico",
    headline: "75% lubricant cost reduction across all 3 presses",
    date: "2022-11",
    isCurrent: true
  },
  {
    id: "extrum",
    client: "Extrum",
    industry: "Aluminum Extrusion",
    location: "San Pedro Sula, Honduras, Honduras",
    headline: "55% less lubricant & 98,865 lb production loss eliminated",
    date: "2024-08",
    isCurrent: true
  },
  {
    id: "hai",
    client: "HAI",
    industry: "Aluminum Extrusion",
    location: "Chisineu-Cris, Romania, Romania",
    headline: "100% reduction in valve clogging-related downtime",
    date: "2023-11",
    isCurrent: true
  },
  {
    id: "hydro-cressona",
    client: "Hydro",
    industry: "Aluminum Extrusion",
    location: "Cressona, Pennsylvania, United States",
    headline: "100% migration to water-based technologies",
    date: "TBD",
    isCurrent: false
  }
];
/* ============================================================
   TEXTOS DE LA PANTALLA DE INICIO (GALERÍA)
   ============================================================ */

const homeContent = {
  headerTag: "Success Cases · The Uncommon Lubricant Company",
  eyebrow: "Documented results",
  title: "Success Cases",
  subtitle: "Real plants. Measured results. Select a case to read the full story, with every number validated in the field by our technical team.",
  scrollLabel: "Select a case above"
};


/* Exponer al documento */
window.caseData = casesData['bonnell-newnan'];   /* default — backward compat */
window.casesData = casesData;
window.casesRegistry = casesRegistry;
window.homeContent = homeContent;

/* ============================================================
   DATOS DEL FRAMEWORK DE COMPARACIÓN (ET Expo 24)
   ============================================================ */

const frameworkData = {
  categories: [
    { id: "cost", name: "Category 1 - Cost", weight: 25, parameters: ["1.1", "1.2"] },
    { id: "safety", name: "Category 2 - Safety & Environment", weight: 25, parameters: ["2.1", "2.2", "2.3", "2.4"] },
    { id: "productivity", name: "Category 3 - Productivity & Performance", weight: 25, parameters: ["3.1", "3.2", "3.3"] },
    { id: "easeOfUse", name: "Category 4 - Ease of use", weight: 25, parameters: ["4.1", "4.2", "4.3"] }
  ],
  parameters: {
    "1.1": { label: "Lubricant Cost ($/kg)", note: "1 = Highest cost, 5 = Lowest Cost" },
    "1.2": { label: "Lubricant consumption quantity", note: "1 = Highest Consumption, 5 = Lowest Consumption" },
    "2.1": { label: "Safety (Fire Hazard Risk)", note: "1 = Highest Risk, 5 = Lowest Risk" },
    "2.2": { label: "Worker Health (Injury / Long Term Risk)", note: "1 = Highest Risk, 5 = Lowest Risk" },
    "2.3": { label: "Environment (VOC Emissions)", note: "1 = Highest VOCs, 5 = Lowest" },
    "2.4": { label: "Work area cleanliness", note: "1 = Dirtiest / Most slippery, 5 = Cleanest" },
    "3.1": { label: "Productivity (Release performance)", note: "1 = Lowest dummy protection, 5 = Highest" },
    "3.2": { label: "Finished product quality", note: "1 = Highest defect probability, 5 = Lowest" },
    "3.3": { label: "Tooling protection (Hot shear)", note: "1 = Lowest protection, 5 = Highest" },
    "4.1": { label: "Ease of use (Clogging & cleaning)", note: "1 = Hardest to maintain, 5 = Easiest" },
    "4.2": { label: "Application method cost", note: "1 = Highest investment, 5 = Lowest" },
    "4.3": { label: "Lubrication points (Versatility)", note: "1 = Fewest uses, 5 = Most uses" }
  },
  technologies: [
    {
      id: "interforge",
      name: "Interforge KI-C",
      color: "#ff0000",
      isInterlub: true,
      grades: { "1.1": 3, "1.2": 5, "2.1": 5, "2.2": 5, "2.3": 4, "2.4": 5, "3.1": 5, "3.2": 5, "3.3": 4, "4.1": 5, "4.2": 3, "4.3": 5 }
    },
    {
      id: "acetylene",
      name: "Acetylene Flame",
      color: "#6c6c72",
      grades: { "1.1": 5, "1.2": 5, "2.1": 1, "2.2": 1, "2.3": 1, "2.4": 1, "3.1": 5, "3.2": 5, "3.3": 1, "4.1": 2, "4.2": 4, "4.3": 2 }
    },
    {
      id: "bn_suspension",
      name: "Boron Nitride Suspension",
      color: "#2e7bcf",
      grades: { "1.1": 2, "1.2": 4, "2.1": 5, "2.2": 3, "2.3": 4, "2.4": 3, "3.1": 5, "3.2": 3, "3.3": 3, "4.1": 2, "4.2": 3, "4.3": 5 }
    },
    {
      id: "bn_powder",
      name: "Boron Nitride Powder",
      color: "#3bb19b",
      grades: { "1.1": 1, "1.2": 3, "2.1": 5, "2.2": 3, "2.3": 5, "2.4": 4, "3.1": 5, "3.2": 5, "3.3": 1, "4.1": 2, "4.2": 1, "4.3": 2 }
    },
    {
      id: "graphite_suspension",
      name: "Graphite Suspension",
      color: "#8a58bf",
      grades: { "1.1": 3, "1.2": 4, "2.1": 5, "2.2": 2, "2.3": 4, "2.4": 3, "3.1": 5, "3.2": 5, "3.3": 5, "4.1": 2, "4.2": 3, "4.3": 4 }
    },
    {
      id: "sticks",
      name: "Sticks & Blocks",
      color: "#d9972b",
      grades: { "1.1": 4, "1.2": 1, "2.1": 2, "2.2": 1, "2.3": 2, "2.4": 2, "3.1": 3, "3.2": 1, "3.3": 1, "4.1": 1, "4.2": 5, "4.3": 2 }
    }
  ],
  notes: [
    { param: "2.2", text: "Graphite / Boron Nitride Sticks and Blocks use is highly dangerous. Operator must work within arm's reach of hot moving components." },
    { param: "3.2", text: "Nitride suspensions use other compounds to stay stable that can generate blisters or surface bubbles. Sticks & Blocks are poorly qualified because they cause defects if applied in excess." },
    { param: "4.1", text: "Acetylene Flame and Boron Nitride Powder cannot be used in other lubrication points (e.g. butt shear or hot shear), requiring a second lubricant system." },
    { param: "4.1", text: "Interforge KI-C does not need previous agitation, operates with low atomizing pressure, and is exceptionally easy to clean with standard water." },
    { param: "4.1", text: "Boron Nitride powder has a severe clogging effect on spray nozzles, valves, and surrounding equipment." },
    { param: "4.2", text: "Acetylene flame has an extremely elevated system complexity for safe automated implementation." },
    { param: "1.2", text: "Boron nitride and graphite suspensions tend to be more viscous, requiring a larger volume per application shot." },
    { param: "1.2", text: "Boron Nitride powder results in higher overall consumption and continuous losses due to airborne dust." },
    { param: "1.2", text: "Interforge KI-C is extremely efficient, consuming on average only 10g to 15g per application cycle." },
    { param: "4.3", text: "Graphite suspensions cannot be applied on hot shears at the exit of the pre-heating furnace because it will foul and contaminate the aluminum profile body." }
  ]
};

window.frameworkData = frameworkData;




