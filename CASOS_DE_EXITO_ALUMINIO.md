# DOCUMENTACIÓN TÉCNICA Y ESTRUCTURA DE DATOS
## Proyecto: Success Cases Aluminum — Interlub SA de CV

> **Propósito del documento**: Este archivo sirve como guía integral de contexto, arquitectura y base de conocimiento estructurada para que cualquier Inteligencia Artificial o desarrollador entienda la arquitectura de la aplicación, el esquema JSON de los datos, los casos de éxito documentados en plantas de extrusión de aluminio y el framework de comparación técnica de desmoldantes.

---

## 1. RESUMEN GENERAL DEL PROYECTO

- **Cliente / Empresa**: Interlub SA de CV (*The Uncommon Lubricant Company*).
- **Aplicación**: Web SPA (Single Page Application) interactiva, trilingüe (Inglés [Base/Fuente de Verdad], Español y Alemán), responsiva y con acabado de diseño premium dark-mode.
- **Objetivo**: Presentar auditorías operativas verificadas en plantas de extrusión de aluminio a nivel global (EE. UU., Honduras, México, Rumania) para demostrar los beneficios de la transición de tecnologías tradicionales (grafito, flama de acetileno, nitruro de boro en polvo/suspensión, STAG 118) hacia la química base agua de **Interforge KI-C** y la automatización con el **Sistema de Dosificación RO3**.
- **Servidor Local**: `npx http-server . -p 8080` (Acceso local: `http://localhost:8080`).

---

## 2. ARQUITECTURA DE ARCHIVOS

```
sucess-cases-aluminum/
├── index.html              # UI SPA con vistas de Galería, Caso Detallado, Framework ET Expo 24 y Selector de Idioma (EN | ES | DE)
├── data.js                 # Base de datos JSON central (Casos EN/ES/DE, Registros, Framework de Comparación)
├── vercel.json             # Configuración de despliegue en Vercel
├── .agents/
│   └── AGENTS.md           # Reglas de contexto y comandos del proyecto
├── assets/                 # Imágenes HD de extrusión, logos de clientes, renders de producto y fuentes locales
│   ├── fonts/              # Fuentes locales (Hector-Regular.ttf, KumbhSans-Variable.ttf)
│   ├── Interforge-KI-C.png
│   ├── bonnell-aluminum.png
│   ├── extrum_logo.webp
│   ├── indalum_logo.png
│   └── HAI.webp
└── CASOS_DE_EXITO_ALUMINIO.md # Este documento de documentación técnica para AI
```

---

## 3. ESQUEMA DE DATOS Y CONTRATO JSON (`data.js`)

Los datos se estructuran en `data.js` exponiendo variables globales en `window`:
- `window.casesData` / `window.casesDataEs` / `window.casesDataDe`: Objeto diccionario indexado por `caseId`. La versión en inglés (`casesData`) es la base y fuente de verdad.
- `window.casesRegistry` / `window.casesRegistryEs` / `window.casesRegistryDe`: Lista array para renderizar tarjetas en la galería inicial.
- `window.homeContent` / `window.homeContentEs` / `window.homeContentDe`: Textos y títulos para la vista Home.
- `window.frameworkData` / `window.frameworkDataEs` / `window.frameworkDataDe`: Matriz de evaluación benchmarking (ET Expo 24).

### Esquema del Objeto de un Caso de Éxito (`caseId`)

```typescript
interface SuccessCase {
  // Información del Cliente
  clientName: string;            // Nombre de la empresa (e.g. "Bonnell Aluminum")
  clientLocation: string;        // Ubicación física (e.g. "Newnan, Georgia, United States")
  clientIndustry: string;        // Industria (e.g. "Aluminum Extrusion")
  caseDate: string;              // Fecha del caso YYYY-MM (e.g. "2021-06")
  interlubContact: string;       // Equipo responsable

  // Datos de la Planta
  totalPresses: number;          // Prensas totales en planta
  activePressesWithRO3: number | null; // Prensas operando con sistema RO3
  plantDescription: string;      // Resumen operativo de la planta

  // Prensas Detalladas
  presses: Array<{
    pressId: string;             // Identificador (e.g. "Press 1")
    pressBrand: string | null;   // Marca (Pressezi, OMAV, Mei Ruey, Cometal, etc.)
    pushTons: number | null;     // Tonelaje de empuje
    billetDiameter: number | null;// Diámetro de tocho (pulgadas)
    billetUnit: string;          // Unidad ("in")
    extrusionsPerShift: number | null;
    lubricantBefore: string;     // Lubricante/tecnología anterior
    dosingSystem: string;        // Sistema de aplicación implementado
    ro3Implemented: boolean;     // Si cuenta con RO3
    keyBenefit?: string;         // Beneficio destacado por prensa
    ro3Units?: Array<{           // Módulos RO3 instalados
      number: number;
      location: string;          // Hot log shear, Billet/Dummy, Butt shear
      lubePoints: number;
      valves: number;
    }>;
  }>;

  // Retos de Planta (3 categorías principales)
  challenges: Array<{
    title: string;
    description: string;
    impactCategory: "Safety" | "Quality" | "Cost" | "Productivity" | "Environment";
  }>;

  // Métricas Clave (Hero & Secondary)
  heroMetric: {
    metricValue: string;         // Valor principal (e.g. "100%", "75%", "55%")
    metricLabel: string;         // Título explicativo de la métrica
    metricContext: string;       // Contexto operativo de la mejora
    metricUnit: string;          // Unidad o estado de verificación
  };
  secondaryHeroMetric?: {
    metricValue: string;         // e.g. "98,865"
    metricUnit: string;          // e.g. "lb"
    pressLabel: string;          // e.g. "Press 2 · Mei Ruey"
    metricLabel: string;
    metricContext: string;
  } | null;

  // Métricas de Apoyo (Antes vs Después)
  supportingMetrics: Array<{
    press?: string;
    label: string;
    before: string | number;
    after: string | number;
    unit: string;
    improvement: string;
  }>;

  // Tablas Comparativas Específicas
  comparisonTables?: Array<{
    title: string;
    subtitle: string;
    columns: string[];
    highlight?: number;
    rows: Array<Array<string>>;
  }>;

  // Prueba Comparativa
  visualComparison: {
    testDescription: string;
    product1Label: string;
    product1Result: string;
    product2Label: string;
    product2Result: string;
    hasPhotos: boolean;
    photos: string[];
  };

  // Comparativa de Productos en Matriz
  productComparison: Array<{
    productName: string;
    performance: "Low" | "Medium" | "High";
    price: "Low" | "Medium" | "High";
    cleanliness: "Low" | "Medium" | "High";
    safetyEnvironment: "Low" | "Medium" | "High";
    isInterlub: boolean;
  }>;

  // Solución Implementada
  solution: {
    solutionText: string;
    product: string;             // "Interforge KI-C"
    productDescription: string;
    ro3Description: string | null;
  };

  // Resultados
  results: Array<{ resultText: string }>;
  resultGroups?: Array<{
    pressLabel: string;
    headline: string;
    headlineUnit: string;
    headlineSub: string;
    items: string[];
  }>;

  // Beneficios Adicionales (con Iconos UI)
  additionalBenefits: Array<{
    icon: "safety" | "cleanliness" | "productivity" | "quality" | "cost" | "environment";
    label: string;
  }>;

  // Medios y Logotipos
  media: {
    coverImage: string;
    productImage: string;
    clientLogoUrl: string;
    logoPillBg?: string;
  };
}
```

---

## 4. DETALLE DE LOS 4 CASOS DE ÉXITO AUDITADOS

### 📌 CASO 1: BONNELL ALUMINUM
- **ID**: `bonnell-newnan`
- **Ubicación**: Newnan, Georgia, Estados Unidos.
- **Fecha**: 2021-06.
- **Prensas**: 10 prensas en total; 4 prensas activas de alta capacidad modernizadas con RO3 (Pressezi, OMAV).
- **Problema / Reto**:
  - *EHS*: Operadores aplicando polvo seco de nitruro de boro manualmente a 600 °C, sufriendo inhalación de polvo y riesgos de quemaduras.
  - *Calidad*: Acumulaciones de residuo blanco en perfiles que causaban fallas cosméticas y falta de adherencia en anodizado/pintura.
  - *Costo*: Operación con 3 lubricantes diferentes sin control de consumo ni medición de TCO.
- **Solución**: Transición a **Interforge KI-C** con dosificación automática **RO3** en cizalla de troncos, tocho y cizalla de colilla.
- **Resultados Auditados**:
  - **100% eliminación** de incidentes respiratorios y quemaduras por contacto (récord de seguridad en EHS).
  - **100% eliminación** de manchas blancas en perfiles de aluminio.
  - Estandarización de 3 productos a **1 solo SKU** (Interforge KI-C).
  - Dosificación automática constante a **7 ml por ciclo**.

---

### 📌 CASO 2: EXTRUM
- **ID**: `extrum`
- **Ubicación**: San Pedro Sula, Honduras.
- **Fecha**: 2024-08.
- **Prensas**: 3 prensas totales; 2 activas con dosificación RO3 (Prensa 1 Pressezi, Prensa 2 Mei Ruey).
- **Problema / Reto**:
  - *Prensa 1 (Pressezi)*: Consumo excesivo de desmoldante Ejecteze (2,527 L/año) a 15 ml por disparo sin control de flujo.
  - *Prensa 2 (Mei Ruey)*: La prensa se detenía 5 segundos cada 4 ciclos para aplicar un brazo de flama de acetileno, perdiendo 11.25 minutos al día (**98,865 lb de aluminio al año no extruidas**) y manteniendo fuego abierto en piso.
- **Solución**: Interforge KI-C con dosificación automática RO3 en movimiento en 3 puntos: Cizalla de troncos, Dummy block y Cizalla de colilla.
- **Resultados Auditados**:
  - **Prensa 1**: Reducción del **55% en volumen de lubricante** en dummy block (de 2,527 L a 1,154 L/año, **ahorro directo de 1,372 L/año**). Disparo optimizado de 15 ml a 7 ml.
  - **Prensa 2**: **98,865 lb/año de producción recuperadas** al retirar el brazo de flama. Reducción del tiempo muerto diario por lubricación de 11.25 min a 0 min. Cero riesgo de incendio en planta.

---

### 📌 CASO 3: INDALUM
- **ID**: `indalum`
- **Ubicación**: San Nicolás, Nuevo León, México.
- **Fecha**: 2022-11.
- **Prensas**: 3 prensas de alta capacidad.
- **Problema / Reto**:
  - Uso de barras de grafito sólido (2 barras por turno por prensa) aplicadas en la cara del tocho.
  - Manchas oscuras de grafito en el cuerpo del perfil, provocando rechazos masivos de scrap por falta de adherencia en pintura y anodizado.
  - Polvo abrasivo de grafito que ensuciaba guías, portamatrices y tapaba boquillas de aerosol.
- **Solución**: Conversión de las 3 prensas a **Interforge KI-C** utilizando los sistemas de dosificación OEM existentes mediante calibración técnica de boquillas (**sin CAPEX** en equipos nuevos).
- **Resultados Auditados**:
  - **75% de reducción en el TCO anual de lubricación** en toda la planta.
  - **100% eliminación** de manchas de grafito y 0% rechazos de calidad en perfiles extruidos.
  - Eliminación del lavado manual de perfiles y prevención del desgaste abrasivo en contenedores y sellos.

---

### 📌 CASO 4: HAI
- **ID**: `hai`
- **Ubicación**: Chisineu-Cris, Rumania.
- **Fecha**: 2023-11.
- **Prensas**: 4 prensas (Pruebas en Prensa 1 Presezzi y Prensa 3 Cometal).
- **Problema / Reto**:
  - El lubricante anterior (STAG 118) sufría cristalización rápida y rígida, generando costras duras que tapaban los orificios de pulverización diariamente.
  - Paros no programados de producción, atomización asimétrica, derrame de fluido resbaladizo en piso y falta de soporte/capacitación por parte del proveedor anterior.
- **Solución**: Implementación de **Interforge KI-C** en cizalla de colilla y cizalla de troncos en caliente, complementado con capacitación técnica presencial de Interlub para la calibración del flujo y presión de atomización.
- **Resultados Auditados**:
  - **100% reducción** en paros no programados por taponamiento de válvulas.
  - Cambio en la naturaleza del residuo: de depósitos duros calcificados a una película blanda lavable fácilmente con trapo y agua.
  - Eliminación del sobreflujo y desperdicio de químico en piso.

---

## 5. FRAMEWORK DE BENCHMARKING TÉCNICO (ET EXPO 24)

El proyecto incluye una matriz de evaluación comparativa que pondera las tecnologías de desmolde en 4 categorías principales (25% cada una):

```
                                  [ BENCHMARKING FRAMEWORK ]
                                              │
      ┌──────────────────────┬────────────────┴─────────────────────┬──────────────────────┐
      ▼                      ▼                                      ▼                      ▼
1. Costo y TCO (25%)   2. Seguridad y EHS (25%)               3. Productividad (25%)   4. Operabilidad (25%)
 ├─ 1.1 Precio ($/kg)   ├─ 2.1 Riesgo de Incendio (Flama)      ├─ 3.1 Desmoldeo         ├─ 4.1 Taponamiento boquillas
 └─ 1.2 Consumo ml/c.   ├─ 2.2 Salud Ocupacional (Polvo/Salud) ├─ 3.2 Calidad Perfil    ├─ 4.2 CAPEX de aplicación
                        ├─ 2.3 Huella Ambiental (COV)          └─ 3.3 Herramentales     └─ 4.3 Versatilidad SKU
                        └─ 2.4 Limpieza de Área (Slick)
```

### Tecnologías Evaluadas y Puntuación Comparativa (Escala 1 a 5)

| Parámetro / Categoría | Interforge KI-C | Flama Acetileno | Nitruro Boro (Susp.) | Nitruro Boro (Polvo) | Grafito (Susp.) | Crayones / Bloques |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1.1 Precio Unitario ($/kg)** | 3 | 5 | 2 | 1 | 3 | 4 |
| **1.2 Consumo Específico (ml/ciclo)** | **5** (5-10 ml) | 5 | 4 | 3 | 4 | 1 |
| **2.1 Riesgo de Incendio** | **5** (0 riesgo) | 1 (Crítico) | 5 | 5 | 5 | 2 |
| **2.2 Salud Ocupacional (EHS)** | **5** (Seguro) | 1 | 3 | 3 | 2 | 1 |
| **2.3 Huella Ambiental (COV)** | 4 | 1 | 4 | 5 | 4 | 2 |
| **2.4 Limpieza del Área** | **5** (Zona seca) | 1 | 3 | 4 | 3 | 2 |
| **3.1 Desmoldeo de Dummy** | 5 | 5 | 5 | 5 | 5 | 3 |
| **3.2 Calidad Superficial Perfil** | **5** (Sin manchas) | 5 | 3 (Ampollas) | 5 | 5 | 1 (Manchas) |
| **3.3 Protección Herramentales** | 4 | 1 | 3 | 1 | 5 | 1 |
| **4.1 Resistencia a Taponamiento** | **5** (Residuo blando)| 2 | 2 | 2 | 2 | 1 |
| **4.2 Bajo Requerimiento CAPEX** | 3 | 4 | 3 | 1 | 3 | 5 |
| **4.3 Versatilidad Multi-punto** | **5** (3 puntos) | 2 (No cizalla) | 5 | 2 | 4 (No cizalla) | 2 |

---

## 6. ESPECIFICACIONES DE PRODUCTO Y TECNOLOGÍA INTERLUB

### 🧪 Interforge KI-C
- **Descripción**: Desmoldante sintético base agua, ecológico y libre de grafito formulado para extrusión de aluminio.
- **Propiedades clave**:
  - No inflamable, biodegradable, cero emisiones de compuestos orgánicos volátiles (COVs).
  - Listo para usar (no requiere agitación constante ni homogenización).
  - Produce un residuo blando lavable con agua convencional, evitando la incrustación dura en válvulas y boquillas.
  - Aplicable en tocho, dummy block, cizalla de troncos en caliente y cizalla de colilla.

### ⚙️ Sistema de Dosificación RO3
- **Descripción**: Sistema automatizado de aplicación en movimiento synchronized con los ciclos de prensa.
- **Características**:
  - Pulverización atomizada de alta precisión con dosificación en microlitros (típicamente 5 a 10 ml por disparo).
  - Válvulas atomizadoras dirigidas a múltiples puntos de lubricación.
  - Operación segura desde panel de control sin exposición humana a zonas de alta temperatura (500 °C - 600 °C).

---

## 7. INSTRUCCIONES PARA IA AL AGREGAR O MODIFICAR DATOS

1. **Ubicación de Modificaciones**: Editar `data.js`.
2. **Sincronización Bilingüe**: Cada cambio en `casesData` (versión en inglés) debe replicarse con su correspondiente traducción en `casesDataEs` (versión en español).
3. **Registro de Tarjetas Home**: Si se añade un nuevo caso, actualizar tanto `casesRegistry` como `casesRegistryEs`.
4. **Formato de Archivo**: Preservar codificación UTF-8 sin BOM y sintaxis de objetos JavaScript limpia.
5. **Verificación de UI**: Tras modificar `data.js`, la aplicación actualiza las métricas y gráficos de forma reactiva al recargar `index.html`.
