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
    plantDescription: "10 presses total at the Newnan plant, with 4 heavy-duty extrusion presses upgraded to automated Interforge KI-C delivery. Bonnell supplies high-precision architectural, automotive, and industrial aluminum profiles across the USA, requiring flawless surface finishes.",

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
        title: "EHS Liability & Manual Application Risks",
        description: "Operators manually applied dry boron nitride powder at billet temperatures up to 600 °C. Constant inhalation of airborne dust and close proximity to hot moving press components created critical safety liabilities and inconsistent cycle times.",
        impactCategory: "Safety"
      },
      {
        title: "Surface Defects & Downstream Scrap Rate",
        description: "Uncontrolled manual powder application left heavy white boron nitride stains on extruded profiles. These surface contaminants caused immediate cosmetic rejections, anodizing/painting adhesion failures, and high scrap rates.",
        impactCategory: "Quality"
      },
      {
        title: "Inventory Complexity & Unmeasured Costs",
        description: "No dosing control meant zero usage visibility. Bonnell was purchasing, storing, and applying 3 separate lubricant products across 10 presses. The lack of standard consumption tracking inflated operational costs (TCO) and complicated warehousing.",
        impactCategory: "Cost"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "100%",
      metricLabel: "Elimination of lubricant EHS incidents & workplace injuries",
      metricContext: "Sustained zero respiratory complaints, zero contact burn incidents, and zero safety reports since automated dosing replaced manual dusting across all active presses.",
      metricUnit: "sustained since implementation"
    },

    /* ── MÉTRICAS DE APOYO (tarjetas antes/después) ───────── */
    supportingMetrics: [
      { label: "Process Control", before: "Manual / Variable", after: "Closed-loop Auto", unit: "", improvement: "RO3 Automated" },
      { label: "Surface Contaminants", before: "Frequent", after: "Eliminated", unit: "", improvement: "↓ 100%" },
      { label: "Safety Incidents", before: 14, after: 0, unit: "/ year", improvement: "↓ 100%" },
      { label: "Inventory Complexity", before: "3 Products", after: "1 Product", unit: "", improvement: "KI-C Standardized" }
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
      solutionText: "All active presses were converted to Interforge KI-C water-based release agent. Automated RO3 dosing systems replaced manual dusting at the hot log shear, billet, and butt shear points. Dosing is fully synchronized with press cycles, requiring zero operator intervention.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free synthetic release agent. Formulated to run pure without mixing or agitation. Prevents boron nitride staining and surface blistering, while ensuring that any dry trace residue is easily washed off with standard water.",
      ro3Description: "High-precision automated spray dosing. Delivers exact, repeatable microliter volumes directly onto active lubrication points with zero operator hazard."
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "Sustained zero respiratory safety incidents and contact burns, achieving a new plant EHS record." },
      { resultText: "100% elimination of white boron nitride residue on finished profile surfaces, drastically reducing scrap rates." },
      { resultText: "Standardized on a single release agent SKU, replacing three separate lubricant types." },
      { resultText: "Closed-loop automated dosing with zero manual operator interaction per press." },
      { resultText: "Consistent volume delivery of 7 ml per cycle, eliminating uncontrolled consumption spikes." },
      { resultText: "Eliminated airborne powder contamination, protecting press seals and linear guides from abrasive dust." }
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
    plantDescription: "Extrum's Sula plant operates 3 extrusion lines. Pressezi (Press 1) was consuming an excessive **2,527 liters of Ejecteze annually** on the dummy block with no flow control. Simultaneously, Mei Ruey (Press 2) stopped every 4 cycles to run an acetylene flame arm, bleeding **11.25 minutes of production capacity daily** (98,865 lb annually) and maintaining an open-fire hazard on the plant floor.",

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
        title: "Mei Ruey: Capacity Loss to Forced Flame Cycle Stops",
        description: "Press 2 had to stop for 5 seconds every 4 cycles to run the acetylene flame arm. At a throughput of 1,690 lb/hr, this minor interruption accumulated to 11.25 minutes of lost production capacity every single day. Over a working year, this cost the plant **98,865 lb of aluminum output** that was never extruded.",
        impactCategory: "Productivity"
      },
      {
        title: "Pressezi: Excess Billet Release Consumption & Lubricant Waste",
        description: "Ejecteze dummy-block lubricant was applied manually at a high volume of 15 ml per shot. Lacking precise dosing, the press consumed 2,527 liters annually. Manual application resulted in overspray, floor spills, and uneven dummy-block coverage.",
        impactCategory: "Cost"
      },
      {
        title: "Acetylene Flames: Active Fire Risks & Safety Overheads",
        description: "Using an open flame at each cycle created a high-risk operational area. Extrum had to maintain safety spotters and specialized extinguisher protocols around Press 2. Replacing the flame arm with automated chemical release immediately lowered plant insurance risk and safety overheads.",
        impactCategory: "Safety"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "55%",
      metricLabel: "Reduction in dummy-block lubricant consumption on Press 1 (Pressezi)",
      metricContext: "Transitioning from manual Ejecteze at 15 ml/shot to Interforge KI-C at 7 ml/shot saved 1,372 liters annually on the dummy block while maintaining perfect release performance.",
      metricUnit: "verified · Extrum · Honduras"
    },

    /* ── MÉTRICA SECUNDARIA ───────────────────────────────── */
    secondaryHeroMetric: {
      metricValue: "98,865",
      metricUnit: "lb",
      pressLabel: "Press 2 · Mei Ruey",
      metricLabel: "Annual production capacity recovered on Press 2 (Mei Ruey)",
      metricContext: "Eliminated the acetylene flame arm and its associated forced stops, recovering 270 lb of aluminum per operating day and completely removing the open flame hazard."
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
          "Annual consumption cut by 55%, dropping from 2,527 L down to 1,154 L (saving 1,372 L/year).",
          "Calibrated volume per shot reduced from 15 ml to 7 ml, applied automatically in-motion.",
          "100% dummy block coverage, maintaining tool safety with half the lubricant volume."
        ]
      },
      {
        pressLabel: "Press 2 · Mei Ruey",
        headline: "98,865",
        headlineUnit: "lb",
        headlineSub: "of production recovered per year",
        items: [
          "Elimination of the acetylene flame arm, delivering zero forced stops and zero open flames.",
          "Reclaimed 11.25 minutes of daily press capacity, recovering 98,865 lb of annual output.",
          "Eliminated specialized fire safety protocols and extinguisher replacements at the press."
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
    plantDescription: "The plant operated 3 heavy-duty extrusion presses with manual and semi-automated graphite bar application. Heavy graphite residue on the profile body caused severe surface contamination, leading to critical downstream failures (scrap rejection during painting and anodizing). Additionally, abrasive graphite dust fouled the press guides, bolsters, and dies, requiring frequent maintenance shutdowns. The plant successfully converted all 3 presses to Interforge KI-C, utilizing the existing OEM dosing systems with customized spray calibrations, eliminating graphite entirely and slashing annual lubricant expenditures by 75%.",

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
        description: "Graphite bars applied to the billet face left heavy carbonaceous residue on the extruded profiles. These dark deposits caused surface pitting, aesthetic blemishes, and immediate quality failures on finished parts. Substantial profile scrap occurred when residues survived basic cleaning and compromised paint and anodizing adhesion in subsequent processing stages.",
        impactCategory: "Quality"
      },
      {
        title: "Equipment Fouling and Maintenance Load",
        description: "Abrasive graphite dust accumulated rapidly on die faces, bolsters, and container guides. Nozzles in the existing spray manifolds suffered from constant clogging, demanding frequent manual mechanical cleaning and causing unscheduled micro-stops. This heavy contamination accelerated wear on the container seal plates and guides, increasing the plant's spare parts overhead.",
        impactCategory: "Productivity"
      },
      {
        title: "Excessive Lubricant Costs",
        description: "Continuous application of 2 solid graphite bars per shift across 3 presses running 3 shifts per day generated high direct product consumption. When combined with the high cost of manual profile washing, post-extrusion rework, and finished scrap rejection, the Total Cost of Ownership (TCO) of the graphite-based system became unsustainably high.",
        impactCategory: "Cost"
      }
    ],

    /* ── MÉTRICA PRINCIPAL ────────────────────────────────── */
    heroMetric: {
      metricValue: "75%",
      metricLabel: "Reduction in annual lubricant expenditure across all 3 presses",
      metricContext: "Transitioning to Interforge KI-C eliminated graphite entirely. By resolving finished profile surface defects, eliminating post-extrusion manual cleaning, and preventing nozzle fouling, the plant achieved a verified 75% reduction in total lubrication-related costs.",
      metricUnit: "verified since November 2022"
    },

    /* ── MÉTRICA SECUNDARIA ───────────────────────────────── */
    secondaryHeroMetric: null,

    verificationNote: null,

    /* ── MÉTRICAS DE APOYO ────────────────────────────────── */
    supportingMetrics: [
      { label: "Specific Chemical Consumption", before: "2 graphite bars", after: "2.4 kg", unit: "/shift", improvement: "Standardized" },
      { label: "Annual Lubricant Expenditure", before: "100% (Baseline)", after: "25%", unit: "", improvement: "↓ 75% (TCO)" },
      { label: "Profile Surface Scrap", before: "Frequent rejections", after: "0% rejections", unit: "", improvement: "↓ 100% defects" }
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
      solutionText: "All 3 presses were fully converted to Interforge KI-C water-based chemistry. The transition was executed using the existing OEM automated dosing systems after minor calibration of nozzle pressure and spray timings, avoiding capital expenditure (CAPEX) for new application systems. The entire facility is now graphite-free, ensuring clean press environments, stable cycle times, and zero profile contamination.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free release agent applied on the billet. Ready to use straight from the container with no mixing required. Profiles come out clean with zero dark residue, zero staining, and any trace residue is exceptionally easy to remove with standard water.",
      ro3Description: null
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "Achieved a verified 75% reduction in annual lubrication TCO by eliminating manual cleaning, profile rejections, and downtime." },
      { resultText: "100% elimination of dark graphite stains and surface blemishes on extruded profiles, driving downstream paint/anodize scrap to zero." },
      { resultText: "Eliminated abrasive graphite dust contamination, protecting linear guides and significantly extending container seal and die life." },
      { resultText: "Successfully utilized existing OEM automated dosing equipment, avoiding new CAPEX through simple calibration of nozzle pressure." }
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

  },

  /* ────────────────────────────────────────────────────────
     CASO 4 · HAI
     ──────────────────────────────────────────────────────── */
  'hai': {
    clientName: "HAI",
    clientLocation: "Chisineu-Cris, Romania, Romania",
    clientIndustry: "Aluminum Extrusion",
    caseDate: "2023-11",
    interlubContact: "Interlub Technical Team",

    totalPresses: 4,
    activePressesWithRO3: null,
    plantSummary: "",
    plantDescription: "A trial at HAI Romania's 4-press facility was launched to resolve critical valve clogging and unscheduled downtime caused by the previous lubricant (STAG 118) on Presezzi (Press 1) and Cometal (Press 3). The competitor product suffered from rapid crystallization, producing hard deposits that blocked the spray nozzle orifices. By implementing Interforge KI-C on the butt shear and hot log shear, and providing hands-on technical calibration training to stabilize the flow, HAI achieved a 100% reduction in clogging-related maintenance stops while optimizing product consumption.",

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
        description: "Chemical crystallization of the previous lubricant (STAG 118) generated hard, calcified residues inside the spray nozzles. The atomizing ports clogged daily, necessitating constant unscheduled downtime for maintenance cleaning and disrupting continuous extrusion cycles.",
        impactCategory: "Productivity"
      },
      {
        title: "Contaminated Working Environment",
        description: "Clogged nozzle orifices caused erratic, asymmetric spray patterns and poor target distribution. To compensate, operators over-pressurized the system, resulting in severe lubricant overspray, fluid runoff, and a slick, contaminated container area that created slip hazards.",
        impactCategory: "Environment"
      },
      {
        title: "High Product Waste & Lack of Technical Support",
        description: "The competitor supplier provided no technical onboarding or nozzle flow-rate training. Without proper calibration guidelines, the automated system delivered excessive release agent volumes, generating massive product waste and heavy buildup on the press shears.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reduction in valve clogging-related stops",
      metricContext: "Transitioning to Interforge KI-C completely eliminated unscheduled maintenance stops. Due to the product's formulation, any trace overspray remains soft and non-rigid, allowing operators to wipe it away easily with a damp cloth.",
      metricUnit: "achieved"
    },

    secondaryHeroMetric: null,

    verificationNote: null,

    supportingMetrics: [
      { label: "Nozzle clogging events", before: "Daily", after: "0", unit: "/month", improvement: "↓ 100% stops" },
      { label: "Residue cleanability", before: "Mechanical scraping", after: "Damp cloth wipe", unit: "", improvement: "Soft trace residue" },
      { label: "Supplier technical support", before: "None / No training", after: "On-site Calibration", unit: "", improvement: "Hands-on calibration" }
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
      solutionText: "Interforge KI-C was deployed on Press 1 (Presezzi) for butt shear lubrication and validated on Press 3 (Cometal) for hot log shear lubrication. Interlub's technical team conducted hands-on training for the plant's maintenance crews to properly calibrate atomization air pressure and fluid delivery volume. Unlike the competitor's agent, Interforge KI-C's dry trace remains soft, preventing nozzle clogging and allowing clean, tool-free maintenance during routine checks.",
      product: "Interforge KI-C",
      productDescription: "Water-based, graphite-free synthetic release agent. Specifically designed to prevent hard crystallization on warm press surfaces. The soft, non-rigid residue prevents valve clogging and can be cleaned effortlessly with a water-dampened cloth.",
      ro3Description: null
    },

    /* ── RESULTADOS ───────────────────────────────────────── */
    results: [
      { resultText: "Achieved a 100% reduction in unscheduled press stops caused by spray nozzle and valve orifice clogging." },
      { resultText: "Transformed residues from hard, calcified scale to a soft, non-rigid paste easily wiped clean with a damp cloth." },
      { resultText: "Optimized chemical consumption and prevented fluid overspray through hands-on flow-rate calibration training for maintenance staff." },
      { resultText: "Eliminated slick fluid accumulation and runoff on the container floor, restoring a safe, clean operating environment." }
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
    headline: "100% elimination of respiratory hazards and cosmetic surface defects",
    date: "2021-06",
    isCurrent: true
  },
  {
    id: "indalum",
    client: "INDALUM",
    industry: "Aluminum Extrusion",
    location: "San Nicolas, Nuevo Leon, Mexico",
    headline: "75% reduction in annual lubrication TCO through graphite elimination",
    date: "2022-11",
    isCurrent: true
  },
  {
    id: "extrum",
    client: "Extrum",
    industry: "Aluminum Extrusion",
    location: "San Pedro Sula, Honduras, Honduras",
    headline: "55% lubricant volume reduction and 98,865 lb of output recovered",
    date: "2024-08",
    isCurrent: true
  },
  {
    id: "hai",
    client: "HAI",
    industry: "Aluminum Extrusion",
    location: "Chisineu-Cris, Romania, Romania",
    headline: "100% elimination of unscheduled downtime from spray valve clogging",
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
  eyebrow: "Documented Operational Audits",
  title: "Extrusion Success Cases",
  subtitle: "Data-verified operational improvements in aluminum extrusion plants. Direct field audits on cycle times, profile scrap reduction, TCO optimization, and EHS compliance.",
  scrollLabel: "Select a case study below to view verified plant data"
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
    { id: "cost", name: "Category 1 — Cost & TCO", weight: 25, parameters: ["1.1", "1.2"] },
    { id: "safety", name: "Category 2 — Safety & Environmental Compliance (EHS)", weight: 25, parameters: ["2.1", "2.2", "2.3", "2.4"] },
    { id: "productivity", name: "Category 3 — Productivity & Surface Quality", weight: 25, parameters: ["3.1", "3.2", "3.3"] },
    { id: "easeOfUse", name: "Category 4 — Operational Ease & Maintenance", weight: 25, parameters: ["4.1", "4.2", "4.3"] }
  ],
  parameters: {
    "1.1": { label: "Release Agent Unit Cost ($/kg)", note: "1 = Highest unit price, 5 = Lowest unit price" },
    "1.2": { label: "Specific Chemical Consumption (ml/cycle)", note: "1 = Excess volume/waste, 5 = Optimized microliter dosing" },
    "2.1": { label: "Fire Hazard Risk (Open-Flame/Flashpoint)", note: "1 = Critical risk (Acetylene/Solvent), 5 = Zero fire risk (Water-based)" },
    "2.2": { label: "Worker Health Liability (Inhalation & Contact)", note: "1 = Airborne powder/burn exposure, 5 = Safe automated delivery" },
    "2.3": { label: "Environmental Footprint (VOC & Waste)", note: "1 = High VOCs/hazardous packaging, 5 = Zero VOCs/biodegradable" },
    "2.4": { label: "Press Area Cleanliness (Slip Hazards)", note: "1 = Accumulation of oily/graphite slick, 5 = Clean dry-zone" },
    "3.1": { label: "Demolding Performance (Release Quality)", note: "1 = Dummy block sticking/profile damage, 5 = Flawless separation" },
    "3.2": { label: "Profile Surface Quality (Staining/Blisters)", note: "1 = Severe cosmetic stains, 5 = Zero defects/painting ready" },
    "3.3": { label: "Tooling Protection (Shear Blades & Containers)", note: "1 = Accelerated wear/abrasive friction, 5 = Extended tool life" },
    "4.1": { label: "Spray Nozzle Clogging & Maintenance", note: "1 = Hard crystallization/daily blockages, 5 = No-clog soft residue" },
    "4.2": { label: "Application Equipment CAPEX Requirement", note: "1 = Proprietary high-cost systems, 5 = Standard/existing integration" },
    "4.3": { label: "Lubrication Point Versatility (SKU Count)", note: "1 = Billet only (requires multiple products), 5 = Multi-point capability" }
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
    { param: "2.2", text: "Graphite and boron nitride sticks or blocks pose high EHS liability. Operators must manually apply them near moving press components at temperatures above 500 °C." },
    { param: "3.2", text: "Nitride suspensions utilize organic carrier compounds that can outgas during extrusion, producing surface blisters or bubbles. Sticks and blocks frequently leave thick localized deposits, resulting in profile surface defects." },
    { param: "4.1", text: "Acetylene flames and dry boron nitride powder cannot lubricate shears (butt or hot log shear), forcing the plant to purchase and maintain separate lubrication systems." },
    { param: "4.1", text: "Interforge KI-C operates with low atomizing pressure, requires no continuous agitation to remain suspended, and leaves a soft residue that dissolves in standard water." },
    { param: "4.1", text: "Dry Boron Nitride powder causes severe nozzle clogging and abrasive wear on nearby solenoid valves and container guides." },
    { param: "4.2", text: "Acetylene flame systems require high instrumentation complexity, explosion-proof piping, and specialized EHS safety protocols for automated press integration." },
    { param: "1.2", text: "Viscous boron nitride and graphite suspensions require larger delivery volumes (typically 12 to 20 ml per cycle) to guarantee coverage." },
    { param: "1.2", text: "Airborne boron nitride dust drifts out of the target zone, resulting in high material loss and excessive product consumption." },
    { param: "1.2", text: "Interforge KI-C is optimized for high-efficiency microliter spray deposition, consuming only 5 to 10 ml per press cycle." },
    { param: "4.3", text: "Graphite-based products cannot be applied at the hot log shear exit because the black residue contaminates the profile body, ruining architectural anodizing finishes." }
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
    plantDescription: "10 prensas en total en la planta de Newnan, con 4 prensas de extrusión de alta capacidad modernizadas con dosificación automática. Bonnell suministra perfiles de aluminio de alta precisión para arquitectura, automotriz e industria en todo EE. UU., exigiendo acabados superficiales impecables.",

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
        title: "Riesgos EHS y Operación Manual",
        description: "Los operadores aplicaban polvo seco de nitruro de boro manualmente a temperaturas de hasta 600 °C. La inhalación constante de polvos en suspensión y el trabajo a corta distancia de componentes móviles representaban una alta responsabilidad en EHS y variabilidad en los ciclos.",
        impactCategory: "Safety"
      },
      {
        title: "Defectos Superficiales y Tasa de Scrap",
        description: "La aplicación manual descontrolada dejaba acumulaciones de residuo blanco en los perfiles. Estos contaminantes provocaban rechazos cosméticos inmediatos y fallas de adherencia en anodizado o pintura, elevando la tasa de scrap.",
        impactCategory: "Quality"
      },
      {
        title: "Complejidad de Inventario y TCO Elevado",
        description: "La ausencia de control de dosificación impedía cuantificar el consumo real. Se gestionaban, almacenaban y aplicaban 3 lubricantes diferentes en la planta. La falta de estandarización incrementaba los costos totales (TCO) y complicaba el almacén.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "100%",
      metricLabel: "Reducción en incidentes EHS y accidentes por lubricantes",
      metricContext: "Cero quejas respiratorias, cero quemaduras por contacto y cero reportes de riesgo laboral desde la transición de la aplicación manual a la automática.",
      metricUnit: "sostenido desde la implementación"
    },

    supportingMetrics: [
      { label: "Control del Proceso", before: "Manual / Variable", after: "Automático en ciclo", unit: "", improvement: "RO3 Automatizado" },
      { label: "Contaminantes en Perfil", before: "Recurrentes", after: "Eliminados", unit: "", improvement: "↓ 100%" },
      { label: "Incidentes de EHS", before: 14, after: 0, unit: "/año", improvement: "↓ 100%" },
      { label: "Complejidad de SKUs", before: "3 Productos", after: "1 Producto", unit: "", improvement: "KI-C Estandarizado" }
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
      solutionText: "Se eliminó el polvo manual en las prensas activas, centralizando la lubricación de la cizalla en caliente, tocho y cizalla de colilla mediante el sistema automático RO3. Interforge KI-C se dosifica de forma sincronizada con el ciclo de la prensa sin interacción humana.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante sintético, base agua y libre de grafito. Desarrollado para uso directo sin agitación. Evita manchas y ampollas superficiales en el aluminio; los residuos traza secos se eliminan de forma simple con agua.",
      ro3Description: "Dosificación automática de alta precisión. Suministra volúmenes exactos en microlitros sobre los puntos de lubricación, eliminando riesgos para el personal."
    },

    results: [
      { resultText: "Cero incidentes respiratorios o quemaduras por contacto, estableciendo un nuevo récord de seguridad (EHS)." },
      { resultText: "Eliminación total del residuo blanco en los perfiles, reduciendo la tasa de scrap y rechazo en anodizado/pintura." },
      { resultText: "Estandarización en un solo SKU de desmolde, reemplazando tres lubricantes en planta." },
      { resultText: "Lubricación en ciclo y en movimiento, eliminando intervenciones manuales por turno." },
      { resultText: "Consumo controlado y repetible a 7 ml por ciclo, eliminando picos de desperdicio." },
      { resultText: "Reducción de polvos abrasivos en el aire, protegiendo guías lineales y sellos de la prensa." }
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
    plantDescription: "La planta Sula de Extrum opera 3 líneas de extrusión. La Prensa 1 (Pressezi) consumía **2,527 litros anuales de Ejecteze** en el dummy block sin control de flujo. Al mismo tiempo, la Prensa 2 (Mei Ruey) se detenía cada 4 ciclos por un brazo de flama de acetileno, perdiendo **11.25 minutos de capacidad diaria** (98,865 lb anuales) y manteniendo fuego abierto en piso.",

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
        title: "Mei Ruey: Pérdida de Capacidad por Paros de Ciclo de Flama",
        description: "La Prensa 2 requería detenerse 5 segundos cada 4 ciclos para aplicar la flama de acetileno. A un ritmo de 1,690 lb/h, esta breve interrupción acumulaba 11.25 minutos perdidos al día. A lo largo del año, esto costó a la planta **98,865 lb de aluminio extrusionado** que se dejaron de producir.",
        impactCategory: "Productivity"
      },
      {
        title: "Pressezi: Desperdicio y Exceso de Consumo en Desmoldante",
        description: "Ejecteze se aplicaba manualmente a 15 ml por disparo. Sin dosificación controlada, la prensa consumía 2,527 litros anuales. Esta dosificación manual provocaba derrames en piso, sobrepulverización y una cobertura de protección inconsistente en el dummy block.",
        impactCategory: "Cost"
      },
      {
        title: "Flama Abierta: Riesgo de Incendio Activo en Planta",
        description: "El uso de flama de acetileno requería protocols especiales de seguridad y recarga constante de extintores. La eliminación del brazo de flama mediante la automatización de la lubricación disminuyó de inmediato la prima de riesgo de la planta y los costos asociados de EHS.",
        impactCategory: "Safety"
      }
    ],

    heroMetric: {
      metricValue: "55%",
      metricLabel: "Reducción de lubricante de dummy block en Prensa 1 (Pressezi)",
      metricContext: "La transición de Ejecteze manual a 15 ml/disparo por Interforge KI-C a 7 ml/disparo ahorró 1,372 litros anuales con un desmolde impecable.",
      metricUnit: "verificado · Extrum · Honduras"
    },

    secondaryHeroMetric: {
      metricValue: "98,865",
      metricUnit: "lb",
      pressLabel: "Prensa 2 · Mei Ruey",
      metricLabel: "Producción anual recuperada en Prensa 2 (Mei Ruey)",
      metricContext: "Se eliminaron por completo el brazo de flama y sus paros en ciclo, recuperando 270 lb de perfil de aluminio por día operativo y eliminando el riesgo de incendio."
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
      solutionText: "Ambas prensas se modernizaron con Interforge KI-C automatizado. En la Prensa 1, la dosificación RO3 redujo el consumo un 55% (ahorrando 1,372 L/año). En la Prensa 2, se retiró la flama de acetileno, recuperando 98,865 lb de capacidad anual. Ambas prensas operan ahora con 3 puntos de lubricación automática en movimiento: cizalla de troncos, dummy block y cizalla de colilla.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante sintético, base agua y libre de grafito. Aplicado por el sistema RO3 en movimiento. Evita la adherencia del dummy, no genera hollín y cualquier residuo seco es fácilmente lavable con agua.",
      ro3Description: "Sistema de dosificación automática multiboquilla en movimiento. Pulveriza un volumen calibrado (7 ml) durante los ciclos de corte y extrusión sin detener la prensa."
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
    plantDescription: "La planta operaba 3 prensas de extrusión de alta capacidad con aplicación manual y semiautomática de barras de grafito. Los residuos densos de grafito en el cuerpo del perfil provocaban una severa contaminación superficial, causando fallas críticas en los procesos posteriores (rechazos por falta de adherencia en pintura y anodizado). Además, el polvo de grafito suspendido ensuciaba las guías de la prensa, portamatrices y troqueles, exigiendo paros frecuentes de mantenimiento. La planta convirtió con éxito las 3 prensas a Interforge KI-C, utilizando los sistemas de dosificación OEM existentes con calibraciones de pulverización a la medida, eliminando el grafito por completo y reduciendo el gasto anual en lubricación en un 75%.",

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
        description: "Las barras de grafito aplicadas en la cara del tocho dejaban residuos de carbono densos en los perfiles extruidos. Estos depósitos oscuros provocaban picaduras superficiales, manchas estéticas y rechazos inmediatos de control de calidad. Se generaba un desperdicio significativo de aluminio cuando los residuos sobrevivían a la limpieza básica y comprometían la adherencia de la pintura y el anodizado en etapas posteriores de procesamiento.",
        impactCategory: "Quality"
      },
      {
        title: "Ensuciamiento de Equipos y Carga de Mantenimiento",
        description: "El polvo abrasivo de grafito se acumulaba rápidamente en las caras de los dados, portamatrices y guías del contenedor. Las boquillas de los sistemas de pulverización existentes sufrían taponamientos constantes, exigiendo limpiezas mecánicas manuales frecuentes y paros no programados. Esta contaminación aceleró el desgaste en las placas de sello y guías del contenedor, elevando los costos de refacciones en planta.",
        impactCategory: "Productivity"
      },
      {
        title: "Costos Excesivos de Lubricación",
        description: "El consumo constante de 2 barras de grafito sólidas por turno en 3 prensas con 3 turnos diarios generaba un alto costo directo. Al sumar los costos indirectos del lavado manual de perfiles, los retrabajos de extrusión y el scrap de producto terminado, el Costo Total de Propiedad (TCO) del sistema basado en grafito resultaba insostenible.",
        impactCategory: "Cost"
      }
    ],

    heroMetric: {
      metricValue: "75%",
      metricLabel: "Reducción en el gasto anual de lubricación en las 3 prensas",
      metricContext: "La transición a Interforge KI-C eliminó el grafito por completo. Al resolver los defectos superficiales en los perfiles, eliminar la limpieza manual posterior a la extrusión y evitar el taponamiento de boquillas, la planta logró una reducción verificada del 75% en los costos totales de lubricación.",
      metricUnit: "verificado desde Noviembre de 2022"
    },

    secondaryHeroMetric: null,

    verificationNote: null,

    supportingMetrics: [
      { label: "Consumo de Químico Específico", before: "2 barras de grafito", after: "2.4 kg", unit: "/turno", improvement: "Estandarizado" },
      { label: "Gasto Anual de Lubricante", before: "100% (Línea base)", after: "25%", unit: "", improvement: "↓ 75% (TCO)" },
      { label: "Scrap Superficial de Perfil", before: "Rechazos frecuentes", after: "0% rechazos", unit: "", improvement: "↓ 100% defectos" }
    ],

    comparisonTables: [
      {
        title: "Comparación de Costo de Lubricante",
        subtitle: "Las 3 prensas · Barras de grafito vs. Interforge KI-C · 3 turnos/día · 26 días/mes",
        columns: ["", "Barras de Grafito", "Interforge KI-C"],
        highlight: 4,
        rows: [
          ["No. de Prensas", "3", "3"],
          ["Lubricant por Turno", "2 barras", "2.4 kg"],
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
      solutionText: "Se convirtieron las 3 prensas a la química base agua de Interforge KI-C. La transición se realizó utilizando los sistemas de dosificación automáticos OEM existentes tras una calibración de la presión de boquillas y tiempos de atomización, evitando inversiones de capital (CAPEX) en nuevos equipos de aplicación. La planta está libre de grafito, garantizando un área limpia, ciclos de prensa estables y cero contaminación de perfiles.",
      product: "Interforge KI-C",
      productDescription: "Agente desmoldante sintético base agua, libre de grafito. Formulado para alta estabilidad térmica en la cara del tocho hasta a 600 °C. No deja residuos oscuros ni manchas de carbono; cualquier residuo seco de sobrepulverización en perfiles o dados se disuelve y remueve fácilmente con agua convencional.",
      ro3Description: null
    },

    results: [
      { resultText: "Reducción verificada del 75% en el TCO anual de lubricación al eliminar la limpieza manual, rechazos de perfiles y paros por boquillas obstruidas." },
      { resultText: "Eliminación del 100% de manchas oscuras de grafito y defectos superficiales en perfiles, reduciendo a cero el scrap en pintura/anodizado." },
      { resultText: "Eliminación del polvo abrasivo de grafito, protegiendo las guías de la prensa y extendiendo la vida útil de los dados y sellos del contenedor." },
      { resultText: "Aprovechamiento total de los sistemas de dosificación automática OEM existentes, evitando CAPEX adicional mediante calibración técnica de boquillas." }
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
    plantDescription: "Se corrió una prueba en la planta de 4 prensas de HAI Rumania para resolver paros críticos por taponamientos de válvulas y suciedad en el área operativa causados por el lubricante anterior (STAG 118) en las prensas Presezzi (Prensa 1) y Cometal (Prensa 3). El producto competidor sufría de una rápida cristalización, generando depósitos duros que bloqueaban los orificios de pulverización. Al implementar Interforge KI-C en la cizalla de colilla y en la cizalla de troncos en caliente, y brindar capacitación técnica presencial para calibrar y de esta manera optimizar el flujo, la planta logró reducir en un 100% los paros de mantenimiento por taponamiento, optimizando el consumo del producto.",

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
        description: "La cristalización química del lubricante anterior (STAG 118) generaba residuos duros y calcificados dentro de las boquillas de pulverización. Los puertos de atomización se tapaban diariamente, obligando a constantes paros no programados para limpieza de mantenimiento e interrumpiendo el ciclo de extrusión continuo.",
        impactCategory: "Productivity"
      },
      {
        title: "Ambiente Operativo Contaminado",
        description: "La obstrucción de las boquillas provocaba patrones de pulverización erráticos y asimétricos, afectando la distribución en los objetivos. Para compensarlo, los operadores elevaban la presión del sistema, lo que generaba sobrepulverización severa, escurrimiento de fluido y un área de contenedor resbaladiza y contaminada que creaba riesgos de caídas.",
        impactCategory: "Environment"
      },
      {
        title: "Alto Desperdicio de Producto y Falta de Soporte",
        description: "El proveedor anterior no ofreció capacitación técnica ni soporte para la calibración del flujo en las boquillas. Sin guías adecuadas de calibración, el sistema automatizado entregaba un volumen excesivo de desmoldante, generando un desperdicio masivo de producto y una densa acumulación de suciedad en las cizallas de la prensa.",
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
    headline: "Eliminación del 100% de riesgos respiratorios y defectos superficiales cosméticos",
    date: "2021-06",
    isCurrent: true
  },
  {
    id: "indalum",
    client: "INDALUM",
    industry: "Extrusión de Aluminio",
    location: "San Nicolás, Nuevo León, México",
    headline: "Reducción del 75% en TCO anual de lubricación mediante eliminación de grafito",
    date: "2022-11",
    isCurrent: true
  },
  {
    id: "extrum",
    client: "Extrum",
    industry: "Extrusión de Aluminio",
    location: "San Pedro Sula, Honduras",
    headline: "Ahorro del 55% en volumen de lubricante y 98,865 lb de producción recuperadas",
    date: "2024-08",
    isCurrent: true
  },
  {
    id: "hai",
    client: "HAI",
    industry: "Extrusión de Aluminio",
    location: "Chisineu-Cris, Rumania",
    headline: "Eliminación del 100% de paros no programados por taponamiento de válvulas",
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
  eyebrow: "Auditorías Operativas Documentadas",
  title: "Casos de Éxito en Extrusión",
  subtitle: "Mejoras operativas verificadas con datos de campo en plantas de extrusión de aluminio. Auditorías directas sobre tiempos de ciclo, reducción de scrap, optimización de TCO y cumplimiento de EHS.",
  scrollLabel: "Selecciona un caso de éxito para ver los datos de planta verificados"
};


/* ============================================================
   DATOS DEL FRAMEWORK DE COMPARACIÓN (ESPAÑOL)
   ============================================================ */

const frameworkDataEs = {
  categories: [
    { id: "cost", name: "Categoría 1 — Costo y TCO", weight: 25, parameters: ["1.1", "1.2"] },
    { id: "safety", name: "Categoría 2 — Seguridad y Cumplimiento Ambiental (EHS)", weight: 25, parameters: ["2.1", "2.2", "2.3", "2.4"] },
    { id: "productivity", name: "Categoría 3 — Productividad y Calidad Superficial", weight: 25, parameters: ["3.1", "3.2", "3.3"] },
    { id: "easeOfUse", name: "Categoría 4 — Operabilidad y Mantenimiento", weight: 25, parameters: ["4.1", "4.2", "4.3"] }
  ],
  parameters: {
    "1.1": { label: "Costo Unitario del Agente ($/kg)", note: "1 = Precio unitario más alto, 5 = Precio unitario más bajo" },
    "1.2": { label: "Consumo de Químico Específico (ml/ciclo)", note: "1 = Volumen excesivo/desperdicio, 5 = Dosificación optimizada en microlitros" },
    "2.1": { label: "Riesgo de Incendio (Flama Abierta/Punto de Inflamación)", note: "1 = Riesgo crítico (acetileno/solventes), 5 = Cero riesgo de fuego (base agua)" },
    "2.2": { label: "Responsabilidad de Salud Ocupacional (Inhalación/Contacto)", note: "1 = Exposición a polvos/quemaduras, 5 = Entrega automática segura" },
    "2.3": { label: "Huella Ambiental (COV y Residuos)", note: "1 = Altos COV/envases peligrosos, 5 = Cero COV/biodegradable" },
    "2.4": { label: "Limpieza del Área de Prensa (Riesgo de Deslizamiento)", note: "1 = Acumulación de aceite/grafito resbaladizo, 5 = Zona seca y limpia" },
    "3.1": { label: "Rendimiento de Desmoldeo (Calidad de Despegue)", note: "1 = Adherencia de dummy block/daño a perfil, 5 = Separación impecable" },
    "3.2": { label: "Calidad Superficial del Perfil (Manchas/Ampollas)", note: "1 = Manchas cosméticas severas, 5 = Cero defectos/listo para pintura" },
    "3.3": { label: "Protección de Herramentales (Cizallas y Contenedor)", note: "1 = Desgaste acelerado/fricción abrasiva, 5 = Vida útil extendida" },
    "4.1": { label: "Taponamiento de Boquillas y Mantenimiento", note: "1 = Cristalización rígida/obstrucción diaria, 5 = Residuo blando sin tapón" },
    "4.2": { label: "Requerimiento de CAPEX para Equipos de Aplicación", note: "1 = Sistemas propietarios de alto costo, 5 = Integración en estándar/existente" },
    "4.3": { label: "Versatilidad de Puntos de Lubricación (Número de SKUs)", note: "1 = Solo tocho (requiere múltiples productos), 5 = Capacidad multipunto" }
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
    { param: "2.2", text: "El uso de crayones y bloques de grafito o nitruro de boro genera una alta responsabilidad de EHS. Los operadores deben aplicarlos manualmente cerca de componentes móviles a temperaturas superiores a 500 °C." },
    { param: "3.2", text: "Las suspensiones de nitruro utilizan vehículos orgánicos que pueden gasificar durante la extrusión, produciendo ampollas o burbujas superficiales. Los crayones y bloques dejan depósitos localizados gruesos, resultando en defectos superficiales." },
    { param: "4.1", text: "La flama de acetileno y el polvo seco de nitruro de boro no pueden lubricar cizallas (de colilla o en caliente), obligando a mantener sistemas de lubricación separados." },
    { param: "4.1", text: "Interforge KI-C opera con baja presión de atomización, no requiere agitación continua para mantenerse en suspensión y deja un residuo blando que se disuelve en agua convencional." },
    { param: "4.1", text: "El polvo seco de nitruro de boro causa taponamientos severos en boquillas y desgaste abrasivo en electroválvulas cercanas y guías del contenedor." },
    { param: "4.2", text: "Los sistemas de flama de acetileno requieren alta complejidad de instrumentación, tuberías a prueba de explosión y protocolos especializados de EHS para integración automática." },
    { param: "1.2", text: "Las suspensiones viscosas de grafito y nitruro de boro requieren mayores volúmenes de entrega (típicamente 12 a 20 ml por ciclo) para garantizar cobertura." },
    { param: "1.2", text: "El polvo de nitruro de boro se dispersa fuera de la zona objetivo, resultando en pérdidas materiales y alto consumo del producto." },
    { param: "1.2", text: "Interforge KI-C está optimizado para deposición eficiente en microlitros, consumiendo sólo de 5 a 10 ml por ciclo de prensa." },
    { param: "4.3", text: "Los productos base grafito no pueden aplicarse en la cizalla de troncos en caliente porque el residuo negro contamina el cuerpo del perfil, arruinando acabados de anodizado arquitectónico." }
  ]
};

window.casesDataEs = casesDataEs;
window.casesRegistryEs = casesRegistryEs;
window.homeContentEs = homeContentEs;
window.frameworkDataEs = frameworkDataEs;




