const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

const oldPlantDesc = 'plantDescription: "HAI Romania operates a 36,000 MT/year plant producing automotive and construction profiles. We were running STAG 11 and STAG 118 for hub-end and guillotine lubrication. Our maintenance team faced severe, recurring issues: crystallized deposits, progressive residue hardening, spray nozzle clogging, and sludge accumulation inside the tanks. We decided to evaluate INTERFORGE KI-C under real production conditions to address these specific failure modes. The product is now running continuously on our flagship 10-inch Presezzi Extrutec press.",';
const newPlantDesc = 'plantDescription: "36,000 MT/year production capacity for automotive and construction profiles. We previously used STAG 11 and STAG 118 for hub-end and guillotine lubrication. The result was severe, recurring maintenance issues: crystallized deposits, hardened residue, clogged spray nozzles, and tank sludge. We evaluated Interforge KI-C to eliminate these exact failures. It now runs continuously on our flagship 10-inch Presezzi Extrutec press.",';

const oldVerif = 'verificationNote: "Validation report: November 2023. Follow-up review: June 2026. Competing products (Motul/Baraldi/STAG and Chemsol Ekomould) observed on other lines still showed heavy residue and nozzle clogging. All findings recorded on-site at HAI Romania under real production conditions. Evaluators: Csaba Jakabos (HAI), Vali (Lubricant Romania), Thomas Massmann (Interlub), Andrea Zanoni and Srdjan Jordanovic (Danieli).",';
const newVerif = 'verificationNote: "Validation report: November 2023. Follow-up review: June 2026. Competing products on other lines still show heavy residue and nozzle clogging. All findings verified on-site at HAI Romania under real production conditions. Evaluators: Csaba Jakabos (HAI), Vali (Lubricant Romania), Thomas Massmann (Interlub), Andrea Zanoni, and Srdjan Jordanovic (Danieli).",';

const oldSol = 'solutionText:       "Our evaluation team concluded that INTERFORGE KI-C is technically suitable for both hub-end and guillotine lubrication. It is used directly without dilution. It eliminated the severe crystallized deposits and hardening behavior that plagued our previous setup. We have maintained it in continuous operation on our flagship Presezzi line for over two years, observing a consistently cleaner process environment.",';
const newSol = 'solutionText:       "Interforge KI-C replaced our previous hub-end and guillotine lubricants. We apply it directly without dilution. It completely eliminated the crystallized deposits and hardening that plagued our prior setup. We have run it continuously on our flagship Presezzi line for over two years. The process environment stays clean, and the nozzles do not clog.",';

content = content.replace(oldPlantDesc, newPlantDesc);
content = content.replace(oldVerif, newVerif);
content = content.replace(oldSol, newSol);

fs.writeFileSync('data.js', content, 'utf8');
console.log('data.js updated with polished copy!');
