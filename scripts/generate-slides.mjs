import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const slideFiles = [
  ["Slide01Cover", "01_Cover", 1],
  ["Slide02Members", "02_Members", 2],
  ["Slide03Importance", "03_Importance", 3],
  ["Slide04ChapterMap", "04_ChapterMap", 4],
  ["Slide05IdeaToBusiness", "05_IdeaToBusiness", 5],
  ["Slide06ImplementationChecklist", "06_ImplementationChecklist", 6],
  ["Slide07BusinessModel", "07_BusinessModel", 7],
  ["Slide08LegalEntity", "08_LegalEntity", 8],
  ["Slide09LegalDecisionTree", "09_LegalDecisionTree", 9],
  ["Slide10RegistrationDossier", "10_RegistrationDossier", 10],
  ["Slide11RegistrationProcess", "11_RegistrationProcess", 11],
  ["Slide12InitialLegalCosts", "12_InitialLegalCosts", 12],
  ["Slide13LegalRisks", "13_LegalRisks", 13],
  ["Slide14WrongLegalFormCase", "14_WrongLegalFormCase", 14],
  ["Slide15OperatingSystem", "15_OperatingSystem", 15],
  ["Slide16FounderRole", "16_FounderRole", 16],
  ["Slide17CoreTeamRoles", "17_CoreTeamRoles", 17],
  ["Slide18EarlyOrgChart", "18_EarlyOrgChart", 18],
  ["Slide19MinimumOpsProcess", "19_MinimumOpsProcess", 19],
  ["Slide20Sop", "20_SOP", 20],
  ["Slide21MinimumOffer", "21_MinimumOffer", 21],
  ["Slide22LeanStartupMvp", "22_LeanStartupMvp", 22],
  ["Slide23BuildMeasureLearn", "23_BuildMeasureLearn", 23],
  ["Slide24CustomerValidation", "24_CustomerValidation", 24],
  ["Slide25EarlySalesChannels", "25_EarlySalesChannels", 25],
  ["Slide26MarketingLaunchPlan", "26_MarketingLaunchPlan", 26],
  ["Slide27CustomerFunnel", "27_CustomerFunnel", 27],
  ["Slide28ConversionChart", "28_ConversionChart", 28],
  ["Slide29StartupCosts", "29_StartupCosts", 29],
  ["Slide30InitialCashflow", "30_InitialCashflow", 30],
  ["Slide31Breakeven", "31_Breakeven", 31],
  ["Slide32ResourceAllocation", "32_ResourceAllocation", 32],
  ["Slide33FinancialRisks", "33_FinancialRisks", 33],
  ["Slide34RiskManagement", "34_RiskManagement", 34],
  ["Slide35MarketRisks", "35_MarketRisks", 35],
  ["Slide36OperatingRisks", "36_OperatingRisks", 36],
  ["Slide37RiskMatrix", "37_RiskMatrix", 37],
  ["Slide38StartupKpi", "38_StartupKpi", 38],
  ["Slide39KpiDashboard", "39_KpiDashboard", 39],
  ["Slide40First90Days", "40_First90Days", 40],
  ["Slide41First30Days", "41_First30Days", 41],
  ["Slide42First60Days", "42_First60Days", 42],
  ["Slide43First90DayMilestone", "43_First90DayMilestone", 43],
  ["Slide44CommonMistakes", "44_CommonMistakes", 44],
  ["Slide45PreLaunchChecklist", "45_PreLaunchChecklist", 45],
  ["Slide46ClassInteraction", "46_ClassInteraction", 46],
  ["Slide47CriticalQuestionOne", "47_CriticalQuestionOne", 47],
  ["Slide48CriticalQuestionTwo", "48_CriticalQuestionTwo", 48],
  ["Slide49ChapterRecap", "49_ChapterRecap", 49],
  ["Slide50Closing", "50_Closing", 50],
]

const slidesDir = join(process.cwd(), "src", "slides")
mkdirSync(slidesDir, { recursive: true })

for (const [componentName, fileName, id] of slideFiles) {
  writeFileSync(
    join(slidesDir, `${fileName}.tsx`),
    `import { getSlide } from "@/data/slides"\nimport { SlideScene } from "./SlideScene"\n\nexport function ${componentName}() {\n  return <SlideScene slide={getSlide(${id})} />\n}\n`,
    "utf8",
  )
}

const imports = slideFiles
  .map(([componentName, fileName]) => `import { ${componentName} } from "./${fileName}"`)
  .join("\n")

const registry = slideFiles.map(([componentName]) => `  ${componentName},`).join("\n")

writeFileSync(
  join(slidesDir, "index.ts"),
  `${imports}\n\nexport const slideComponents = [\n${registry}\n]\n`,
  "utf8",
)
