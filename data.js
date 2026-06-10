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

/* ============================================================
   TODOS LOS CASOS (ESPAÑOL)
   ============================================================ */

const casesDataEs = {

  /* ────────────────────────────────────────────────────────
     CASO 1 · BONNELL ALUMINUM – NEWNAN
     ──────────────────────────────────────────────────────── */
  'bonnell-newnan': {

    clientName: "Bonnell Aluminum",
    clientLocation: "Newnan, Georgia, Estados Unidos",
    clientIndustry: "Extrusión de Aluminio",
    caseDate: "2021-06",
    interlubContact: "Equipo Técnico de Interlub",

    totalPresses: 10,
    activePressesWithRO3: 4,
    plantDescription: "4 prensas en producción activa, cada una equipada con el sistema de dosificación automatizado RO3. La planta de Bonnell en Newnan suministra perfiles de aluminio a clientes de los sectores de la construcción, automotriz e industrial en todo EE. UU., y cada prensa debe operar de manera limpia.",

    presses: [
      {
        pressId: "Prensa 1",
        pressBrand: "Pressezi",
        pushTons: null,
        billetDiameter: 9,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Nitruro de Boro (polvo)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Prensa 8",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 6,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Nitruro de Boro (polvo)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Prensa 9",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 8,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Nitruro de Boro (polvo)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 },
          { number: 3, location: "Cizalla de colilla (butt shear)", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Prensa 10",
        pressBrand: "OMAV",
        pushTons: null,
        billetDiameter: 7,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Nitruro de Boro (polvo)",
        lubricantPriceBefore: null,
        mlPerApplicationBefore: null,
        mlPerApplicationAfter: null,
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 }
        ]
      }
    ],

    challenges: [
      {
        title: "Riesgo de Seguridad para el Operador",
        description: "El polvo de nitruro de boro se aplicaba a mano a temperaturas de hasta 600 °C. Los operadores inhalaban polvo y trabajaban muy cerca del metal caliente durante cada ciclo y turno en 10 prensas. No había ningún sistema para controlarlo ni forma de medir la exposición acumulada.",
        impactCategory: "Safety"
      },
      {
        title: "Perfiles Defectuosos y Scrap (Desperdicio)",
        description: "El residuo blanco de nitruro de boro se adhería a los perfiles terminados en las 10 prensas. Las piezas que pasaban la extrusión fallaban la inspección de superficie, requiriendo retrabajo o siendo descartadas. El lubricante resolvía un problema pero creaba otro.",
        impactCategory: "Quality"
      },
      {
        title: "Costos Sin Control",
        description: "La falta de un sistema de dosificación impedía la medición. Se desconocía el consumo real de lubricante. Se compraban, almacenaban y aplicaban tres productos distintos en 10 prensas, sin forma de rastrear el consumo o reducirlo.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reducción de enfermedades y accidentes laborales relacionados con lubricantes",
      metricContext: "Cero incidentes respiratorios, cero accidentes por quemaduras químicas y cero reportes de seguridad relacionados con lubricantes en las 4 prensas activas, en cada turno, desde el primer día de implementación.",
      metricUnit: "sostenido desde la implementación"
    },

    supportingMetrics: [
      { label: "Consumo de Lubricante", before: "No controlado", after: "Preciso", unit: "", improvement: "Totalmente automatizado" },
      { label: "Defectos en Perfiles por Lube", before: "Recurrente", after: "Eliminado", unit: "", improvement: "↓ 100%" },
      { label: "Incidentes de Seguridad Laboral", before: 14, after: 0, unit: "/año", improvement: "↓ 100%" },
      { label: "Productos en Uso", before: "3 productos distintos", after: "1 producto", unit: "", improvement: "Simplificado" }
    ],

    visualComparison: {
      testDescription: "Prueba comparativa controlada en la Prensa 2 durante un ciclo de producción de cuatro semanas, comparando polvo de nitruro de boro frente a Interforge KI-C aplicado con el sistema RO3.",
      product1Label: "Nitruro de Boro (polvo)",
      product1Result: "Residuo blanco visible en el 38% de los perfiles. Reaplicación manual en cada ciclo. Cero control de dosificación.",
      product2Label: "Interforge KI-C",
      product2Result: "Cero residuos en todos los perfiles. Dosificación automatizada constante de 7 ml por ciclo de aplicación.",
      hasPhotos: false,
      photos: []
    },

    productComparison: [
      { productName: "Nitruro de Boro", performance: "Medium", price: "High", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Grafito", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Flama Acetileno", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    solution: {
      solutionText: "Las 4 prensas activas se unificaron en una sola instalación. El sistema RO3 reemplazó todas las aplicaciones manuales de lubricante, incluyendo el polvo de nitruro de boro y el lubricante de la cizalla en caliente, en una sola transición. Interforge KI-C ahora opera automáticamente en cada ciclo. Los operadores no intervienen, no hay residuos y no hay nada que ajustar.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante base agua y libre de grafito. Listo para usar sin mezclar. Los perfiles salen limpios, sin manchas ni residuos blancos y sin vapores nocivos para los operadores, facilitando la limpieza de cualquier residuo traza.",
      ro3Description: "La misma dosis medida, en cada ciclo, en cada prensa, sin necesidad de ajustes, variaciones ni pasos manuales."
    },

    results: [
      { resultText: "Cero enfermedades respiratorias y cero quemaduras químicas por primera vez en la historia de la planta." },
      { resultText: "Perfiles limpios en las 4 prensas, eliminando los residuos de nitruro de boro por completo." },
      { resultText: "Tres productos de lubricación sustituidos por uno solo." },
      { resultText: "Lubricación totalmente automatizada sin contacto del operador en ninguna prensa." },
      { resultText: "Cada dosis es medida en cada ciclo, garantizando el mismo volumen y resultado." },
      { resultText: "Sin polvo, sin humos y sin acumulación de residuos en los equipos." }
    ],

    additionalBenefits: [
      { icon: "safety", label: "No inflamable y no tóxico" },
      { icon: "cleanliness", label: "Base agua, residuo fácil de remover" },
      { icon: "quality", label: "Perfiles libres de defectos" },
      { icon: "productivity", label: "Dosificación automatizada constante" },
      { icon: "cost", label: "Un producto reemplaza a tres" },
      { icon: "environment", label: "Sin emisiones tóxicas ni polvo" }
    ],

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

    clientName: "Extrum",
    clientLocation: "San Pedro Sula, Honduras",
    clientIndustry: "Extrusión de Aluminio",
    caseDate: "2024-08",
    interlubContact: "Equipo Técnico de Interlub",

    totalPresses: 3,
    activePressesWithRO3: 2,
    plantDescription: "La prensa Pressezi (Prensa 1) consumía <strong>2,527 litros al año</strong> de Ejecteze en el dummy block sin control de dosificación. La prensa Mei Ruey (Prensa 2) se detenía cada 4 ciclos para aplicar flama de acetileno, perdiendo <strong>98,865 libras de producción al año</strong> y manteniendo una flama abierta en la planta todo el día.",

    presses: [
      {
        pressId: "Prensa 1",
        pressBrand: "Pressezi",
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: 180,
        lubricantBefore: "Ejecteze en el dummy block",
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        keyBenefit: "Reducción del 55% en lubricante de dummy block, bajando de 2,527 L a 1,154 L al año",
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 },
          { number: 3, location: "Cizalla de colilla (butt shear)", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Prensa 2",
        pressBrand: "Mei Ruey",
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Flama de acetileno (brazo, cada 4 ciclos) más Ejecteze",
        dosingSystem: "Sistema de Dosificación Automatizado RO3",
        valveType: "Válvula de pulverización atomizadora",
        ro3Implemented: true,
        keyBenefit: "98,865 lb/año recuperadas · Brazo de flama eliminado · Cero incidentes de incendio",
        ro3Units: [
          { number: 1, location: "Cizalla de troncos en caliente", lubePoints: 1, valves: 2 },
          { number: 2, location: "Tocho", lubePoints: 1, valves: 1 },
          { number: 3, location: "Cizalla de colilla (butt shear)", lubePoints: 1, valves: 1 }
        ]
      },
      {
        pressId: "Prensa 3",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Ejecteze + Flama de acetileno",
        dosingSystem: "Sistema automatizado existente",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Solo como referencia, sin RO3 instalado"
      }
    ],

    challenges: [
      {
        title: "Mei Ruey: 98,865 lb Perdidas por Paros de Lubricación",
        description: "La Prensa 2 (Mei Ruey) se detenía cada 4 ciclos para lubricar, requiriendo 5 segundos, 135 veces al día. Con una producción de 1,690 lb/h durante 26 días de operación, esto representaba 11.25 minutos de producción perdida al día, equivalentes a 98,865 lb de aluminio anuales no producidas debido a un paso de lubricación.",
        impactCategory: "Productivity"
      },
      {
        title: "Pressezi: Desperdicio del Doble de Lubricante en el Dummy Block",
        description: "La Prensa 1 (Pressezi) aplicaba Ejecteze manualmente a 15 ml por disparo en el dummy block. Sin control de dosificación y con 540 ciclos diarios, se consumían 2,527 litros anuales. Interforge KI-C con RO3 dosifica 7 ml en movimiento, logrando un 55% menos de lubricante con la misma cobertura y protección.",
        impactCategory: "Cost"
      },
      {
        title: "Flama de Acetileno: Riesgo de Incendio en Cada Ciclo",
        description: "Cada vez que operaba el brazo de flama, había fuego abierto en el área de producción. Este riesgo se repetía decenas de veces al día, 26 días al mes. Se requerían extintores cercanos y protocols de seguridad específicos. Al implementar el sistema RO3, el brazo de flama y sus riesgos se eliminaron.",
        impactCategory: "Safety"
      }
    ],

    heroMetric: {
      metricValue: "55%",
      metricLabel: "Reducción de lubricante en dummy block · Prensa 1 · Pressezi",
      metricContext: "Sustitución de Ejecteze a 15 ml/disparo por Interforge KI-C a 7 ml/disparo, ahorrando 1,372 litros anuales de lubricante únicamente en el dummy block.",
      metricUnit: "verificado · Extrum · Honduras"
    },

    secondaryHeroMetric: {
      metricValue: "98,865",
      metricUnit: "lb",
      pressLabel: "Prensa 2 · Mei Ruey",
      metricLabel: "de producción recuperada al año al eliminar el brazo de flama",
      metricContext: "270 lb de aluminio recuperadas por día de producción. Se eliminó el brazo de flama de acetileno, logrando cero paros forzados y cero riesgos de incendio."
    },

    verificationNote: "Todos los datos registrados en sitio por el equipo técnico de Interlub en Extrum Honduras. Disponibles para auditoría.",

    supportingMetrics: [
      { press: "Prensa 1 · Pressezi", label: "Lubricante por Disparo", before: "15 ml", after: "7 ml", unit: "", improvement: "↓ 53%" },
      { press: "Prensa 1 · Pressezi", label: "Consumo Anual", before: "2,527 L", after: "1,154 L", unit: "/año", improvement: "↓ 55%" },
      { press: "Prensa 2 · Mei Ruey", label: "Pérdida de Producción", before: "98,865 lb", after: "0 lb", unit: "/año", improvement: "↓ 100%" },
      { press: "Prensa 2 · Mei Ruey", label: "Tiempo Muerto Diario", before: "11.25 min", after: "0 min", unit: "/día", improvement: "Eliminado" }
    ],

    comparisonTables: [
      {
        title: "Consumo de Lubricante",
        subtitle: "Prensa 1 · Pressezi · Ejecteze vs. Interforge KI-C · dummy block · 540 extrusiones/día",
        columns: ["", "Ejecteze", "Interforge KI-C"],
        highlight: 4,
        rows: [
          ["No. de Prensas", "1", "1"],
          ["ml por Disparo", "15 ml", "7 ml"],
          ["Lubricante por 24 Horas", "8.1 L", "3.7 L"],
          ["Días Laborables / Mes", "26", "26"],
          ["Consumo Anual", "2,527 L", "1,154 L"]
        ]
      },
      {
        title: "Pérdida de Producción por Lubricación",
        subtitle: "Prensa 2 · Mei Ruey · Flama de Acetileno vs. Interforge KI-C · 1,690 lb/h · 26 días/mes",
        columns: ["", "Flama", "Interforge KI-C"],
        highlight: 5,
        rows: [
          ["No. de Prensas", "1", "1"],
          ["Lubricación de Brazo", "Cada 4 ciclos", "N/A"],
          ["Tiempo Perdido / Lubricación", "5 s", "0 s"],
          ["Extrusiones / 24 hrs", "540", "540"],
          ["Días Laborables / Mes", "26", "26"],
          ["Libras/Año Perdidas por Lube", "98,865 lb", "0 lb"]
        ]
      }
    ],

    visualComparison: {
      testDescription: "Análisis de campo en la Prensa 1 en Extrum, Honduras. Acetileno manual más Ejecteze (15 ml/disparo, 2 puntos, cada 4 ciclos) vs. Interforge KI-C con RO3 (7 ml/disparo, 1 punto, en movimiento). 540 extrusiones/día · 26 días/mes · 1,690 lb/h.",
      product1Label: "Flama de Acetileno + Ejecteze",
      product1Result: "15 ml por disparo · 2 puntos de lubricación (dummy + tocho) · Aplicado con paro cada 4 ciclos · 5 s de tiempo muerto por evento · 135 paros/día · 11.25 min perdidos/día · 98,865 lb/año de pérdida de producción · 2,527 L consumidos anualmente.",
      product2Label: "Interforge KI-C + RO3",
      product2Result: "7 ml por disparo · 1 punto de lubricación · Aplicado en movimiento con cero paros · 0 s de tiempo muerto · 0 lb de producción perdida · 1,154 L consumidos anualmente (ahorro de 1,372 L) · 100% de cobertura de dummy block garantizada.",
      hasPhotos: false,
      photos: []
    },

    productComparison: [
      { productName: "Ejecteze", performance: "Medium", price: "Medium", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Grafito", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Flama Acetileno", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    solution: {
      solutionText: "La Pressezi y la Mei Ruey tenían problemas diferentes pero la misma solución. En la Prensa 1, se reemplazó Ejecteze con Interforge KI-C mediante RO3, reduciendo el consumo en un 55% (de 2,527 L a 1,154 L al año). En la Prensa 2, se retiró el brazo de flama e instaló el sistema RO3, recuperando 98,865 lb de producción anual y eliminando el riesgo de incendio. Ambas prensas operan ahora con 3 puntos de lubricación en movimiento: Cizalla en Caliente, Dummy y Cizalla de Colilla.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante base agua y libre de grafito. Aplicado en movimiento por el sistema RO3 en 3 puntos de lubricación a 7 ml por disparo en el dummy block, sin residuos, no inflamable y fácil de limpiar con agua. Sin intervención manual, paros forzados ni riesgos de incendio.",
      ro3Description: "Dosificación en movimiento en 3 puntos (Cizalla Caliente, Dummy y Cizalla de Colilla) aplicada durante el ciclo de extrusión. Mismo volumen y cobertura en cada disparo. Instalado en Pressezi y Mei Ruey en Extrum Honduras."
    },

    resultGroups: [
      {
        pressLabel: "Prensa 1 · Pressezi",
        headline: "55",
        headlineUnit: "%",
        headlineSub: "menos lubricante en dummy block",
        items: [
          "Consumo anual: de <strong>2,527 L</strong> a sólo <strong>1,154 L</strong>, logrando un ahorro de 1,372 litros al año.",
          "Dosis por disparo: de <strong>15 ml</strong> a <strong>7 ml</strong>, aplicado en movimiento durante el ciclo.",
          "100% de cobertura en el dummy block, ofreciendo la misma protección a la mitad del volumen."
        ]
      },
      {
        pressLabel: "Prensa 2 · Mei Ruey",
        headline: "98,865",
        headlineUnit: "lb",
        headlineSub: "de producción recuperada al año",
        items: [
          "Eliminación del brazo de flama de acetileno, logrando <strong>cero paros forzados</strong> cada 4 ciclos.",
          "Eliminación del fuego abierto en planta, eliminando reemplazos de extintores y protocols de seguridad específicos de lubricación.",
          "Tiempo muerto diario por lubricación: reducido de <strong>11.25 min a 0 min</strong>."
        ]
      }
    ],

    additionalBenefits: [
      { icon: "productivity", label: "98,865 lb de producción recuperada" },
      { icon: "cost", label: "55% menos de lubricante consumido" },
      { icon: "safety", label: "Flama eliminada, logrando cero riesgo de incendio" },
      { icon: "quality", label: "100% cobertura de dummy block" },
      { icon: "cleanliness", label: "Base agua, libre de grafito, residuo fácil de limpiar" },
      { icon: "environment", label: "1,372 L ahorrados al año" }
    ],

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

    clientName: "INDALUM",
    clientLocation: "San Nicolás, Nuevo León, México",
    clientIndustry: "Extrusión de Aluminio",
    caseDate: "2022-11",
    interlubContact: "Equipo Técnico de Interlub",

    totalPresses: 3,
    activePressesWithRO3: null,
    plantDescription: "Los residuos de grafito contaminaban los perfiles, ensuciaban los equipos y elevaban los costos de mantenimiento. Se convirtieron 3 prensas a Interforge KI-C utilizando los sistemas de dosificación automatizados existentes de cada prensa, eliminando el grafito por completo y reduciendo el gasto de lubricante en un 75%.",

    presses: [
      {
        pressId: "Prensa 1",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Barras de grafito (2 barras/turno)",
        dosingSystem: "Sistema de dosificación existente de la prensa",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C aplicado a través del sistema de dosificación existente"
      },
      {
        pressId: "Prensa 2",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Barras de grafito (2 barras/turno)",
        dosingSystem: "Sistema de dosificación existente de la prensa",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C aplicado a través del sistema de dosificación existente"
      },
      {
        pressId: "Prensa 3",
        pressBrand: null,
        pushTons: null,
        billetDiameter: null,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "Barras de grafito (2 barras/turno)",
        dosingSystem: "Sistema de dosificación existente de la prensa",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Interforge KI-C aplicado a través del sistema de dosificación existente"
      }
    ],

    challenges: [
      {
        title: "Contaminación por Grafito en Perfiles",
        description: "Las barras de grafito dejaban un residuo oscuro y visible en los perfiles extruidos de las 3 prensas. Las piezas que pasaban extrusión fallaban en control de calidad, requiriendo retrabajos o generando scrap (desperdicio). La calidad superficial era inconsistente e impredecible.",
        impactCategory: "Quality"
      },
      {
        title: "Ensuciamiento de Equipos y Carga de Mantenimiento",
        description: "La acumulación de grafito obstruía troqueles, portamatrices y boquillas de pulverización. La limpieza manual forzaba paros de mantenimiento no programados. El ensuciamiento se extendía a equipos circundantes, acortando su vida útil e incrementando costos de refacciones.",
        impactCategory: "Productivity"
      },
      {
        title: "Costos Excesivos de Lubricación",
        description: "Cada prensa consumía 2 barras de grafito por turno, durante 3 turnos al día, 26 días al mes. Los costos indirectos de limpieza, retrabajos y perfiles rechazados hacían que el gasto total de lubricación fuera muy superior al costo del producto solo.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "75%",
      metricLabel: "Reducción en el gasto anual de lubricante en las 3 prensas",
      metricContext: "Eliminación completa del grafito, logrando cero residuos en los perfiles y cero ensuciamiento de equipos, ahorrando un 75% en gasto de lubricante.",
      metricUnit: "verificado desde Noviembre de 2022"
    },

    secondaryHeroMetric: null,

    verificationNote: null,

    supportingMetrics: [
      { label: "Lubricante por Turno", before: "2 barras de grafito", after: "2.4 kg KI-C", unit: "/turno", improvement: "Grafito eliminado" },
      { label: "Gasto Anual en Lubricante", before: "Línea base", after: "Reducido", unit: "", improvement: "↓ 75%" },
      { label: "Residue de Grafito en Perfiles", before: "Recurrente", after: "Eliminado", unit: "", improvement: "↓ 100%" }
    ],

    comparisonTables: [
      {
        title: "Comparación de Costo de Lubricante",
        subtitle: "Las 3 prensas · Barras de grafito vs. Interforge KI-C · 3 turnos/día · 26 días/mes",
        columns: ["", "Barras de Grafito", "Interforge KI-C"],
        highlight: 4,
        rows: [
          ["No. de Prensas", "3", "3"],
          ["Lubricante por Turno", "2 barras", "2.4 kg"],
          ["Turnos por Día", "3", "3"],
          ["Días Laborables / Mes", "26", "26"],
          ["Reducción de Costo", "", "75%"]
        ]
      }
    ],

    visualComparison: {
      testDescription: "Conversión completa de planta en las 3 prensas en INDALUM, México. Barras de grafito reemplazadas por Interforge KI-C aplicado con los sistemas de dosificación existentes de las prensas. 3 turnos al día, 26 días de operación al mes.",
      product1Label: "Barras de Grafito",
      product1Result: "2 barras por turno. Residuo oscuro en perfiles que requería limpieza y retrabajos. Ensuciamiento de equipos y boquillas obstruidas.",
      product2Label: "Interforge KI-C",
      product2Result: "2.4 kg por turno. Cero residuos en perfiles desde el primer día. Sin ensuciamiento de equipos ni boquillas obstruidas. El residuo traza es fácil de limpiar con agua.",
      hasPhotos: false,
      photos: []
    },

    productComparison: [
      { productName: "Grafito", performance: "Medium", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Nitruro de Boro", performance: "Medium", price: "High", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Flama Acetileno", performance: "Low", price: "Low", cleanliness: "Low", safetyEnvironment: "Low", isInterlub: false },
      { productName: "Interforge KI-C", performance: "High", price: "Medium", cleanliness: "High", safetyEnvironment: "High", isInterlub: true }
    ],

    solution: {
      solutionText: "Se convirtieron las 3 prensas en una única fase. Las barras de grafito fueron sustituidas en su totalidad por Interforge KI-C, aplicando el producto a través de los sistemas de dosificación automatizados existentes de cada prensa, evitando inversiones de capital adicionales. Se eliminó el grafito de toda la planta: sin residuos en los perfiles, sin acumulaciones en los equipos, sin boquillas obstruidas y sin consumo descontrolado.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante base agua y libre de grafito aplicado al tocho. Listo para usar sin mezclas. Los perfiles salen limpios, libres de manchas oscuras, y cualquier residuo traza es fácil de remover con agua convencional.",
      ro3Description: null
    },

    results: [
      { resultText: "Ahorro del 75% en gasto anual de lubricante." },
      { resultText: "Perfiles de aluminio 100% libres de manchas." },
      { resultText: "Área de trabajo más limpia." }
    ],

    additionalBenefits: [
      { icon: "cost", label: "75% de reducción en el gasto anual de lubricante" },
      { icon: "quality", label: "Cero residuos de grafito en perfiles" },
      { icon: "cleanliness", label: "Residue fácil de limpiar con agua" },
      { icon: "productivity", label: "Sin ensuciamiento de equipos ni boquillas obstruidas" },
      { icon: "safety", label: "No inflamable, no tóxico, base agua" },
      { icon: "environment", label: "Sin emisiones de COV ni residuos peligrosos" }
    ],

    media: {
      coverImage: "assets/Extrusion_HD_05.png",
      productImage: "assets/Interforge-KI-C.png",
      clientLogoUrl: "assets/indalum_logo.png",
      logoPillBg: "rgba(255,255,255,0.92)"
    }

  }, /* end indalum */


  /* ────────────────────────────────────────────────────────
     CASO 4 · HAI
     ──────────────────────────────────────────────────────── */
  'hai': {
    clientName: "HAI",
    clientLocation: "Chisineu-Cris, Rumania",
    clientIndustry: "Extrusión de Aluminio",
    caseDate: "2023-11",
    interlubContact: "Equipo Técnico de Interlub",

    totalPresses: 4,
    activePressesWithRO3: null,
    plantSummary: "",
    plantDescription: "Se corrió una prueba en la empresa HAI en Rumania en la prensa Pressezi (Prensa 1) para resolver problemas severos de taponamiento de válvulas y suciedad en el área operativa. El lubricante anterior (STAG 118) formaba un residuo muy difícil de remover y taponaba constantemente las válvulas de pulverización, lo cual se agravó debido a que el proveedor anterior no brindó la capacitación adecuada de los equipos, generando mucho desperdicio de producto y suciedad. Al implementar Interforge KI-C en la cizalla de colilla de la prensa Presezzi, junto con la asistencia técnica de Interlub para calibrar y centralizar la lubricación en los objetivos, logramos reducir el consumo y los paros relacionados a taponamientos en un 100%. El producto también fue validado en la cizalla de troncos en caliente de la prensa Cometal (Prensa 3).",

    presses: [
      {
        pressId: "Prensa 1",
        pressBrand: "Presezzi",
        pushTons: null,
        billetDiameter: 10,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Probado y verificado para la lubricación de cizalla de colilla (butt shear)"
      },
      {
        pressId: "Prensa 2",
        pressBrand: "Prisma",
        pushTons: null,
        billetDiameter: 5,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Solo como referencia (STAG 118 como lubricante anterior)"
      },
      {
        pressId: "Prensa 3",
        pressBrand: "Cometal",
        pushTons: null,
        billetDiameter: 7,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Probado y verificado para la lubricación de cizalla de troncos en caliente (hot log shear)"
      },
      {
        pressId: "Prensa 4",
        pressBrand: "Sutton",
        pushTons: null,
        billetDiameter: 8,
        billetUnit: "in",
        extrusionsPerShift: null,
        lubricantBefore: "STAG 118",
        dosingSystem: "Automated",
        valveType: null,
        ro3Implemented: false,
        statusNote: "Solo como referencia (STAG 118 como lubricante anterior)"
      }
    ],

    challenges: [
      {
        title: "Taponamiento Constante de Válvulas",
        description: "El lubricante anterior (STAG 118) formaba residuos altamente cristalizados y duros que obstruían constantemente las válvulas de pulverización. Esto requería paros de mantenimiento frecuentes y causaba paros de producción no programados.",
        impactCategory: "Productivity"
      },
      {
        title: "Ambiente Operativo Contaminado",
        description: "El taponamiento parcial o total de las válvulas provocaba una distribución deficiente e irregular del lubricante. Esto generaba sobrepulverización, fugas de producto y un área operativa extremadamente sucia e insegura.",
        impactCategory: "Environment"
      },
      {
        title: "Alto Desperdicio de Producto y Falta de Soporte",
        description: "El proveedor anterior no brindó la capacitación técnica adecuada respecto a los equipos y válvulas. Como consecuencia, la calibración incorrecta generaba un gran desperdicio de producto y acumulaba suciedad en la maquinaria.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reducción de paros relacionados con taponamiento de válvulas",
      metricContext: "Se eliminaron por completo los paros de producción no programados por taponamiento de válvulas. Aunque Interforge KI-C sí genera un depósito cristalizado, este permanece blando y es muy fácil de limpiar con agua y un trapo.",
      metricUnit: "logrado"
    },

    secondaryHeroMetric: null,

    verificationNote: null,

    supportingMetrics: [
      { label: "Paros por Taponamiento", before: "Frecuentes", after: "0", unit: "/mes", improvement: "↓ 100%" },
      { label: "Consumo de Lubricante", before: "Excesivo (STAG 118)", after: "Optimizado", unit: "", improvement: "Reducido" },
      { label: "Limpieza de Residuos", before: "Extremadamente difícil", after: "Fácil con agua", unit: "", improvement: "Residuo blando" },
      { label: "Desperdicio por Aplicación", before: "Alto (sin capacitación)", after: "Minimizado", unit: "", improvement: "Calibrado" }
    ],

    comparisonTables: [
      {
        title: "Comparación de Desempeño Operativo",
        subtitle: "Lubricante anterior (STAG 118) vs. Interforge KI-C bajo calibración técnica",
        columns: ["Parámetro", "STAG 118", "Interforge KI-C"],
        highlight: 1,
        rows: [
          ["Frecuencia de taponamiento", "Constante / Diaria", "Eliminado"],
          ["Paros por obstrucción", "Paros frecuentes", "Reducción del 100%"],
          ["Consumo de lubricante", "Alto desperdicio (falta de soporte)", "Reducido y optimizado"],
          ["Método de remoción de residuo", "Difícil / Raspado mecánico", "Limpieza fácil con agua y trapo"],
          ["Limpieza del área operativa", "Hollín / Suciedad severa", "Limpia y controlada"]
        ]
      }
    ],

    /* ── PRUEBA COMPARATIVA ───────────────────────────────── */
    visualComparison: {
      testDescription: "Comparación entre el lubricante anterior (STAG 118) e Interforge KI-C en la lubricación de cizalla de colilla de la Prensa 1 (Presezzi) y de cizalla de troncos en caliente de la Prensa 3 (Cometal).",
      product1Label: "STAG 118",
      product1Result: "Taponamiento constante de válvulas, residuos duros difíciles de limpiar, alto desperdicio por falta de soporte y un área operativa sucia.",
      product2Label: "Interforge KI-C",
      product2Result: "Reducción del 100% en paros por taponamiento, consumo optimizado y residuos blandos fáciles de limpiar con agua (se recomienda limpieza periódica para evitar acumulación).",
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
      solutionText: "Al implementar Interforge KI-C y la asistencia técnica de Interlub, logramos centralizar la lubricación en los objetivos. El producto genera un residuo que sí se deposita, pero este es blando y sumamente fácil de remover con un trapo húmedo con agua (el residuo se vuelve difícil de quitar solo si se deja acumular). Se brindó capacitación técnica para calibrar las válvulas, deteniendo el desperdicio de producto.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante sintético base agua para extrusión de aluminio. Produce un residuo blando fácilmente lavable con agua, evitando la cristalización rígida del producto anterior si se realiza limpieza regular.",
      ro3Description: null
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "Reducción del 100% en paros relacionados con taponamiento de válvulas." },
      { resultText: "Reducción en el consumo de lubricante mediante calibración y centralización." },
      { resultText: "Residuos traza blandos y fáciles de limpiar con un trapo y agua." },
      { resultText: "Se recomienda limpieza regular para evitar el endurecimiento por acumulación." },
      { resultText: "Eliminación de desperdicio de producto gracias a la capacitación técnica de equipos y válvulas." },
      { resultText: "Área de trabajo notablemente más limpia por calibración de boquillas." }
    ],

    /* ── BENEFICIOS ADICIONALES ───────────────────────────── */
    additionalBenefits: [
      { icon: "productivity", label: "Reducción del 100% en paros por taponamientos" },
      { icon: "cost", label: "Menor consumo de lubricante" },
      { icon: "cleanliness", label: "Residuos fáciles de limpiar con trapo y agua" },
      { icon: "safety", label: "Capacitación técnica en equipos y válvulas" },
      { icon: "environment", label: "Área de trabajo más limpia y menos desperdicios" }
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
/* end casesDataEs */


/* ============================================================
   GALERÍA DE CASOS (ESPAÑOL)
   ============================================================ */

const casesRegistryEs = [
  {
    id: "bonnell-newnan",
    client: "Bonnell Aluminum",
    industry: "Extrusión de Aluminio",
    location: "Newnan, Georgia, Estados Unidos",
    headline: "Reducción del 100% en enfermedades y accidentes por lubricantes",
    date: "2021-06",
    isCurrent: true
  },
  {
    id: "indalum",
    client: "INDALUM",
    industry: "Extrusión de Aluminio",
    location: "San Nicolás, Nuevo León, México",
    headline: "Reducción del 75% en costo de lubricante en las 3 prensas",
    date: "2022-11",
    isCurrent: true
  },
  {
    id: "extrum",
    client: "Extrum",
    industry: "Extrusión de Aluminio",
    location: "San Pedro Sula, Honduras",
    headline: "55% menos de lubricante y eliminación de paros por flama",
    date: "2024-08",
    isCurrent: true
  },
  {
    id: "hai",
    client: "HAI",
    industry: "Extrusión de Aluminio",
    location: "Chisineu-Cris, Rumania",
    headline: "Reducción del 100% en paros por taponamiento de válvulas",
    date: "2023-11",
    isCurrent: true
  },
  {
    id: "hydro-cressona",
    client: "Hydro",
    industry: "Extrusión de Aluminio",
    location: "Cressona, Pensilvania, Estados Unidos",
    headline: "Migración del 100% a tecnologías base agua",
    date: "TBD",
    isCurrent: false
  }
];


/* ============================================================
   TEXTOS DE LA PANTALLA DE INICIO (ESPAÑOL)
   ============================================================ */

const homeContentEs = {
  headerTag: "Casos de Éxito · The Uncommon Lubricant Company",
  eyebrow: "Resultados documentados",
  title: "Casos de Éxito",
  subtitle: "Plantas reales. Resultados medidos. Selecciona un caso para leer la historia completa, con cada cifra validada en campo por nuestro equipo técnico.",
  scrollLabel: "Selecciona un caso arriba"
};


/* ============================================================
   DATOS DEL FRAMEWORK DE COMPARACIÓN (ESPAÑOL)
   ============================================================ */

const frameworkDataEs = {
  categories: [
    { id: "cost", name: "Categoría 1 - Costo", weight: 25, parameters: ["1.1", "1.2"] },
    { id: "safety", name: "Categoría 2 - Seguridad y Medio Ambiente", weight: 25, parameters: ["2.1", "2.2", "2.3", "2.4"] },
    { id: "productivity", name: "Categoría 3 - Productividad y Rendimiento", weight: 25, parameters: ["3.1", "3.2", "3.3"] },
    { id: "easeOfUse", name: "Categoría 4 - Facilidad de uso", weight: 25, parameters: ["4.1", "4.2", "4.3"] }
  ],
  parameters: {
    "1.1": { label: "Costo del lubricante ($/kg)", note: "1 = Costo más alto, 5 = Costo más bajo" },
    "1.2": { label: "Volumen de consumo de lubricante", note: "1 = Mayor consumo, 5 = Menor consumo" },
    "2.1": { label: "Seguridad (Riesgo de incendio)", note: "1 = Mayor riesgo, 5 = Menor riesgo" },
    "2.2": { label: "Salud ocupacional (Riesgo de lesiones / a largo plazo)", note: "1 = Mayor riesgo, 5 = Menor riesgo" },
    "2.3": { label: "Medio ambiente (Emisiones de COV)", note: "1 = Mayor COV, 5 = Menor" },
    "2.4": { label: "Limpieza del área de trabajo", note: "1 = Más sucia / resbaladiza, 5 = Más limpia" },
    "3.1": { label: "Productividad (Desempeño de desmoldeo)", note: "1 = Menor protección de dummy, 5 = Mayor" },
    "3.2": { label: "Calidad del producto terminado", note: "1 = Mayor probabilidad de defectos, 5 = Menor" },
    "3.3": { label: "Protección de herramentales (Cizalla en caliente)", note: "1 = Menor protección, 5 = Mayor" },
    "4.1": { label: "Facilidad de uso (Taponamiento y limpieza)", note: "1 = Más difícil de mantener, 5 = Más fácil" },
    "4.2": { label: "Costo del método de aplicación", note: "1 = Mayor inversión, 5 = Menor" },
    "4.3": { label: "Puntos de lubricación (Versatilidad)", note: "1 = Menor cantidad de usos, 5 = Mayor" }
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
      name: "Flama de Acetileno",
      color: "#6c6c72",
      grades: { "1.1": 5, "1.2": 5, "2.1": 1, "2.2": 1, "2.3": 1, "2.4": 1, "3.1": 5, "3.2": 5, "3.3": 1, "4.1": 2, "4.2": 4, "4.3": 2 }
    },
    {
      id: "bn_suspension",
      name: "Suspensión de Nitruro de Boro",
      color: "#2e7bcf",
      grades: { "1.1": 2, "1.2": 4, "2.1": 5, "2.2": 3, "2.3": 4, "2.4": 3, "3.1": 5, "3.2": 3, "3.3": 3, "4.1": 2, "4.2": 3, "4.3": 5 }
    },
    {
      id: "bn_powder",
      name: "Polvo de Nitruro de Boro",
      color: "#3bb19b",
      grades: { "1.1": 1, "1.2": 3, "2.1": 5, "2.2": 3, "2.3": 5, "2.4": 4, "3.1": 5, "3.2": 5, "3.3": 1, "4.1": 2, "4.2": 1, "4.3": 2 }
    },
    {
      id: "graphite_suspension",
      name: "Suspensión de Grafito",
      color: "#8a58bf",
      grades: { "1.1": 3, "1.2": 4, "2.1": 5, "2.2": 2, "2.3": 4, "2.4": 3, "3.1": 5, "3.2": 5, "3.3": 5, "4.1": 2, "4.2": 3, "4.3": 4 }
    },
    {
      id: "sticks",
      name: "Crayones y Bloques",
      color: "#d9972b",
      grades: { "1.1": 4, "1.2": 1, "2.1": 2, "2.2": 1, "2.3": 2, "2.4": 2, "3.1": 3, "3.2": 1, "3.3": 1, "4.1": 1, "4.2": 5, "4.3": 2 }
    }
  ],
  notes: [
    { param: "2.2", text: "El uso de crayones y bloques de grafito o nitruro de boro es altamente peligroso. El operador debe trabajar al alcance de componentes calientes en movimiento." },
    { param: "3.2", text: "El uso de suspensiones de nitruro utiliza otros compuestos para mantenerse estable que pueden generar ampollas o burbujas superficiales. Las crayones y bloques califican bajo porque causan defectos si se aplican en exceso." },
    { param: "4.1", text: "La flama de acetileno y el polvo de nitruro de boro no se pueden usar en otros puntos de lubricación (ej. cizalla de colilla o cizalla en caliente), requiriendo un segundo sistema de lubricación." },
    { param: "4.1", text: "Interforge KI-C no necesita agitación previa, opera con baja presión de atomización y es excepcionalmente fácil de limpiar con agua estándar." },
    { param: "4.1", text: "El polvo de nitruro de boro tiene un efecto severo de obstrucción en boquillas de pulverización, válvulas y equipos circundantes." },
    { param: "4.2", text: "La flama de acetileno tiene una complejidad de sistema sumamente elevada para una implementación automatizada segura." },
    { param: "1.2", text: "Las suspensiones de nitruro de boro y grafito tienden a ser más viscosas, requiriendo un mayor volumen por disparo de aplicación." },
    { param: "1.2", text: "El polvo de nitruro de boro resulta en un mayor consumo general y pérdidas continuas debido al polvo en el aire." },
    { param: "1.2", text: "Interforge KI-C es sumamente eficiente, consumiendo en promedio sólo de 10g a 15g por ciclo de aplicación." },
    { param: "4.3", text: "Las suspensiones de grafito no se pueden aplicar en las cizallas en caliente a la salida del horno de precalentamiento porque ensuciarán y contaminarán el cuerpo del perfil de aluminio." }
  ]
};

window.casesDataEs = casesDataEs;
window.casesRegistryEs = casesRegistryEs;
window.homeContentEs = homeContentEs;
window.frameworkDataEs = frameworkDataEs;




