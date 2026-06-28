export const slides = [
  {
    id: "opportunity",
    eyebrow: "01 · Opportunity",
    title: "The Opportunity Is Immediate",
    subtitle: "Essential health signals, available through a camera",
    body: [
      "In 30 to 60 seconds, a face scan could give people access to everyday health measurements without requiring another wearable or specialized device.",
      "Users showed the strongest interest in familiar, consequential signals such as heart rate, blood pressure, heart-rate variability, and other indicators of cardiovascular and physiological state.",
      "The opportunity is not simply to make measurement easier. It is to make health information more available at the moments when people need it."
    ],
    implications: [
      "Position the scan as a low-friction entry point into health awareness.",
      "Lead with recognizable, high-value measurements.",
      "Avoid presenting the technology as novelty alone.",
      "Connect technical accessibility to a meaningful user outcome."
    ],
    visualType: "orb",
    image: "/images/opportunity.webp",
    accent: "violet"
  },
  {
    id: "blood-pressure",
    eyebrow: "02 · Trust",
    title: "BP Is Valuable but Hard to Believe",
    subtitle: "Blood pressure creates both demand and doubt",
    body: [
      "Blood pressure was one of the most valuable measurements the system could provide—and the one users questioned most.",
      "If contact-based wearables already struggle with accuracy, a camera that never touches the body faces an even higher burden of proof.",
    ],
    implications: [
      "Treat blood pressure as the product’s primary trust test.",
      "Validate readings against accepted reference devices.",
      "Make accuracy ranges and limitations visible.",
      "Communicate different levels of certainty.",
      "Avoid clinical claims the evidence cannot support."
    ],
    visualType: "pulse",
    image: "/images/trust.webp",
    accent: "coral"
  },
  {
    id: "dependable-patterns",
    eyebrow: "03 · Consistency",
    title: "Trust Does Not Require Perfection",
    subtitle: "It requires dependable patterns",
    body: [
      "Users did not expect a smartphone scan to reproduce a clinical examination perfectly.",
      "Their definition of trust was more pragmatic: the system should behave consistently, stay within a credible range, and help them understand changes over time.",
      "A stable pattern can be more useful than a single number presented with false precision."
    ],
    implications: [
      "Emphasize trends, ranges, and repeated measurements.",
      "Help users compare readings under similar conditions.",
      "Identify unexpected variation rather than overinterpreting small changes.",
      "Communicate confidence and uncertainty directly.",
      "Design for longitudinal trust, not one-time astonishment."
    ],
    visualType: "timeline",
    image: "/images/consistency.webp",
    accent: "blue"
  },
  {
    id: "habit-problem",
    eyebrow: "04 · Behavior",
    title: "The Scan Has a Habit Problem",
    subtitle: "People know how to wear a tracker. They do not yet know when to scan.",
    body: [
      "Unlike passive wearables, a face scan requires users to stop, open the feature, position the camera, and intentionally take a measurement.",
      "Saying they will scan daily does not mean the behavior will last after initial curiosity fades.",
      "The central question is not whether people will try it, but what will make scanning feel useful in a specific moment."
    ],
    implications: [
      "Do not rely on users remembering the feature independently.",
      "Anchor scanning to recognizable situations.",
      "Teach why repeated measurements matter.",
      "Reduce the effort required to begin a scan.",
      "Track whether use persists beyond initial curiosity."
    ],
    visualType: "rings",
    image: "/images/behavior.webp",
    accent: "green"
  },
  {
    id: "intervention",
    eyebrow: "05 · Intervention",
    title: "The Product Must Learn When to Intervene",
    subtitle: "From reminders to timely support",
    body: [
      "The system must help users recognize when a scan would be useful—not simply notify them at the same time every day.",
      "Prompts should respond to context, prior behavior, changing routines, and signals from the wider product ecosystem.",
    ],
    implications: [
      "Use just-in-time adaptive interventions for prompting.",
      "Personalize prompts around routines and engagement.",
      "Explain why each scan is being suggested.",
      "Avoid notifications that weaken trust.",
      "Let users control or dismiss prompt patterns."
    ],
    visualType: "signal",
    image: "/images/intervention.webp",
    accent: "amber"
  },
  {
    id: "information-layer",
    eyebrow: "06 · Meaning",
    title: "A Number Is Not an Answer",
    subtitle: "Users are searching for an information layer",
    body: [
      "Raw measurements tell users what the system detected.",
      "They do not necessarily tell users what the result means, whether it matters, or what to do next.",
      "Users want information presented in layers: the measurement, a short interpretation, and an optional deeper explanation.",
      "The value of the experience lies in reducing uncertainty without creating false medical authority."
    ],
    implications: [
      "Pair every major metric with concise contextual meaning.",
      "Use progressive disclosure rather than displaying everything at once.",
      "Separate observation from interpretation.",
      "Distinguish general wellness guidance from medical advice.",
      "Make deeper technical and educational information available on demand."
    ],
    visualType: "layers",
    image: "/images/meaning.webp",
    accent: "violet"
  },
  {
    id: "ai-guardrail",
    eyebrow: "07 · AI",
    title: "AI Must Explain Without Pretending to Diagnose",
    subtitle: "Intelligence increases value—and risk",
    body: [
      "Users wanted AI-supported explanations but remained hesitant to trust an agent with health decisions.",
      "AI can identify patterns, explain terminology, organize information, and suggest next steps without presenting uncertain interpretations as diagnoses.",
    ],
    implications: [
      "Use AI to interpret context, not declare conclusions.",
      "Label observations, possibilities, and uncertainty.",
      "Direct concerning results toward professional care.",
      "Make supporting evidence inspectable.",
      "Keep conversational confidence within clinical limits."
    ],
    visualType: "guardrail",
    image: "/images/ai.webp",
    accent: "coral"
  },
  {
    id: "ecosystem",
    eyebrow: "08 · Architecture",
    title: "The Scan Cannot Work in Isolation",
    subtitle: "A single reading sees a moment. Health exists across time.",
    body: [
      "A face scan captures one moment, while meaningful health guidance depends on what happened before and around it.",
      "Activity, sleep, recovery, historical measurements, symptoms, and connected platforms provide the context an isolated reading cannot.",
      "The long-term opportunity is a personalized health assistant that combines these signals into a coherent understanding of the user."
    ],
    implications: [
      "Build the scan into a broader health-data architecture.",
      "Combine internal and external data sources.",
      "Use longitudinal context before generating guidance.",
      "Treat each scan as one signal among several.",
      "Prioritize synthesis over additional metrics."
    ],
    visualType: "network",
    image: "/images/architecture.webp",
    accent: "blue"
  },
  {
    id: "mechanical-transparency",
    eyebrow: "09 · Transparency",
    title: "Trust Also Depends on Explaining the Machine",
    subtitle: "People need to understand how a camera can measure the body",
    body: [
      "A non-contact scan can feel implausible.",
    ],
    implications: [
      "Explain the measurement mechanism in accessible language.",
      "Show which environmental conditions affect scan quality.",
      "Provide real-time positioning and quality feedback.",
      "Identify measurements that could not be captured reliably.",
      "Distinguish a failed scan from a concerning health result."
    ],
    visualType: "camera",
    image: "/images/transparency.webp",
    accent: "green"
  },
  {
    id: "data-travel",
    eyebrow: "10 · Integration",
    title: "Health Data Must Travel",
    subtitle: "The experience ends only when the information becomes useful elsewhere",
    body: [
      "Users want to share meaningful summaries with physicians, caregivers, or family members.",
      "Advanced users also expect the feature to coexist with Apple Health, Garmin, Strava, and other parts of their existing health ecosystem.",
      "Poor synchronization risks duplicate data, contradictory records, and further mistrust."
    ],
    implications: [
      "Create clear, exportable health summaries.",
      "Preserve dates, measurement conditions, trends, and uncertainty.",
      "Support established health-data ecosystems.",
      "Prevent duplicate or conflicting records.",
      "Give users control over what is shared and with whom."
    ],
    visualType: "flow",
    image: "/images/integration.webp",
    accent: "amber"
  },
  {
    id: "strategic-shift",
    eyebrow: "11 · Product thesis",
    title: "The Strategic Shift",
    subtitle: "The scan captures the signal. The product creates the value.",
    body: [
      "The research points toward a broader product thesis.",
      "The winning experience will not be the one that displays the greatest number of measurements."
    ],
    implications: [
      "Earn trust through consistency and transparency.",
      "Teach users when scanning is useful.",
      "Turn measurements into understandable context.",
      "Connect isolated readings into longitudinal patterns.",
      "Help users make safer, more informed decisions."
    ],
    closing: [
      "The face scan is the interaction.",
      "The personalized health layer is the product."
    ],
    visualType: "finale",
    image: "/images/product-thesis.webp",
    accent: "violet"
  }
];
