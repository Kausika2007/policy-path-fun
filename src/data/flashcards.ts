export type CardType = "myth" | "scenario" | "term" | "story";

export interface FlashcardData {
  id: number;
  type: CardType;
  front: string;
  back: {
    title: string;
    content: string;
    additionalInfo?: string[];
  };
  icon: string;
}

export const flashcards: FlashcardData[] = [
  {
    id: 1,
    type: "myth",
    front: "Health Insurance covers all medical expenses",
    back: {
      title: "TRUTH",
      content: "Health insurance covers only treatments within the selected coverage plan. Many policies have exclusions like cosmetic procedures, pre-existing conditions (during waiting periods), and alternative treatments.",
      additionalInfo: [
        "Always read the policy document for exclusions",
        "Co-payment and deductibles apply",
        "Network hospitals offer cashless treatment"
      ]
    },
    icon: "heart-pulse"
  },
  {
    id: 2,
    type: "scenario",
    front: "Your car is stolen from a parking lot. Which insurance helps?",
    back: {
      title: "SOLUTION",
      content: "Comprehensive motor insurance provides coverage for theft. Third-party insurance only covers damage to others' property and does not cover theft of your own vehicle.",
      additionalInfo: [
        "File FIR immediately",
        "Inform insurer within 24 hours",
        "Keep all vehicle documents ready"
      ]
    },
    icon: "car"
  },
  {
    id: 3,
    type: "myth",
    front: "Life Insurance is only for breadwinners",
    back: {
      title: "TRUTH",
      content: "Everyone needs life insurance. Stay-at-home parents provide invaluable services that would cost money to replace. Even children can benefit from early insurance with lower premiums and guaranteed insurability.",
      additionalInfo: [
        "Consider household contributions",
        "Future financial goals matter",
        "Medical history affects later applications"
      ]
    },
    icon: "users"
  },
  {
    id: 4,
    type: "term",
    front: "Grace Period",
    back: {
      title: "CRITICAL TERM",
      content: "Found in your premium payment section. A grace period (typically 15-30 days) allows you to pay overdue premiums without policy lapsing. Missing it causes loss of coverage and reinstatement hassles.",
      additionalInfo: [
        "📍 Location: Premium payment clause",
        "⚠️ Impact: Policy continues during grace period",
        "💡 Tip: Set up auto-payment to avoid lapses",
        "🚨 Fraud Alert: Fake urgency calls claiming immediate payment needed"
      ]
    },
    icon: "clock"
  },
  {
    id: 5,
    type: "story",
    front: "Chennai Floods 2020: Family Lost Their Home",
    back: {
      title: "INSURANCE IMPACT",
      content: "A Chennai family's home was severely damaged in the 2020 floods. Their home insurance covered ₹15 lakhs for rebuilding costs and ₹2 lakhs for alternate accommodation for 6 months.",
      additionalInfo: [
        "💰 Financial: ₹17 lakhs saved",
        "❤️ Mental Peace: Housing secured during crisis",
        "⏱️ Recovery: 8 months to rebuild with insurance support"
      ]
    },
    icon: "home"
  },
  {
    id: 6,
    type: "myth",
    front: "Young people don't need health insurance",
    back: {
      title: "TRUTH",
      content: "Younger age means lower premiums and no waiting periods for pre-existing conditions. Medical emergencies can happen at any age, and starting early builds a long-term coverage history with better renewal benefits.",
      additionalInfo: [
        "Premiums increase with age",
        "Accidents don't discriminate by age",
        "Lifestyle diseases affecting youth today"
      ]
    },
    icon: "user-check"
  },
  {
    id: 7,
    type: "scenario",
    front: "You're diagnosed with diabetes. Can you still buy health insurance?",
    back: {
      title: "SOLUTION",
      content: "Yes, but with conditions. Most insurers accept diabetic patients with higher premiums or waiting periods (2-4 years) for diabetes-related claims. Some specialized plans cater specifically to diabetic individuals.",
      additionalInfo: [
        "Disclose all medical conditions honestly",
        "Compare specialized diabetic plans",
        "Regular health check-ups help"
      ]
    },
    icon: "activity"
  },
  {
    id: 8,
    type: "myth",
    front: "Insurance companies always deny claims",
    back: {
      title: "TRUTH",
      content: "IRDAI data shows 85-90% of genuine claims are settled. Claims get rejected mainly due to non-disclosure of pre-existing conditions, incomplete documentation, or policy exclusions. Understanding your policy prevents rejections.",
      additionalInfo: [
        "Keep all medical records organized",
        "Read policy terms carefully",
        "File claims with complete documentation"
      ]
    },
    icon: "shield-check"
  },
  {
    id: 9,
    type: "term",
    front: "Pre-Existing Condition",
    back: {
      title: "CRITICAL TERM",
      content: "Found in health insurance policy documents under 'Exclusions and Waiting Periods'. Any illness/condition you had before buying insurance. Most policies have 2-4 year waiting periods for coverage of these conditions.",
      additionalInfo: [
        "📍 Location: Definitions and exclusions section",
        "⚠️ Impact: Claims denied during waiting period",
        "💡 Tip: Disclose everything during application",
        "🚨 Fraud Alert: Agents suggesting to hide conditions for lower premiums"
      ]
    },
    icon: "file-text"
  },
  {
    id: 10,
    type: "story",
    front: "Mumbai IT Professional: Critical Illness at 32",
    back: {
      title: "INSURANCE IMPACT",
      content: "A 32-year-old IT professional in Mumbai was diagnosed with cancer. His critical illness insurance paid ₹25 lakhs immediately upon diagnosis, covering treatment costs and income loss during 18 months of treatment.",
      additionalInfo: [
        "💰 Financial: ₹25 lakhs lump sum received",
        "❤️ Mental Peace: Family could focus on recovery, not finances",
        "⏱️ Support: Monthly income replacement during treatment"
      ]
    },
    icon: "heart"
  },
  {
    id: 11,
    type: "scenario",
    front: "Your house is damaged by fire. What insurance coverage do you need?",
    back: {
      title: "SOLUTION",
      content: "Home insurance (structure coverage) protects against fire damage to the building. Add contents insurance for valuables inside. Fire coverage is usually included in comprehensive home insurance policies.",
      additionalInfo: [
        "Document valuables with photos",
        "Keep policy documents in safe place",
        "Understand sum insured limits"
      ]
    },
    icon: "flame"
  },
  {
    id: 12,
    type: "myth",
    front: "Term insurance doesn't give any returns",
    back: {
      title: "TRUTH",
      content: "Term insurance is pure protection, not an investment. It offers the highest coverage at lowest cost. The 'return' is financial security for your family if something happens to you - which is its true purpose.",
      additionalInfo: [
        "Focus on coverage amount, not returns",
        "Separate insurance from investment",
        "Cover 10-15x annual income"
      ]
    },
    icon: "shield"
  },
  {
    id: 13,
    type: "term",
    front: "Sum Insured vs Sum Assured",
    back: {
      title: "CRITICAL TERM",
      content: "Sum Insured (health): Maximum amount insurer pays for medical expenses. Sum Assured (life): Guaranteed amount paid to nominees. Both appear in policy schedule/cover page. Choosing too low leaves you underinsured.",
      additionalInfo: [
        "📍 Location: First page of policy document",
        "⚠️ Impact: Defines maximum claim amount",
        "💡 Tip: Health insurance should cover at least ₹5-10 lakhs",
        "🚨 Fraud Alert: Fake policies showing inflated sum insured at low premiums"
      ]
    },
    icon: "indian-rupee"
  },
  {
    id: 14,
    type: "story",
    front: "Bangalore Couple: Road Accident & Medical Bills",
    back: {
      title: "INSURANCE IMPACT",
      content: "A Bangalore couple met with a road accident. Their health insurance covered ₹8 lakhs in medical bills through cashless hospitalization. Personal accident insurance provided ₹3 lakhs additional compensation for temporary disability.",
      additionalInfo: [
        "💰 Financial: ₹11 lakhs total coverage",
        "❤️ Mental Peace: No out-of-pocket hospital expenses",
        "⏱️ Recovery: 4 months rehabilitation fully supported"
      ]
    },
    icon: "ambulance"
  },
  {
    id: 15,
    type: "myth",
    front: "Employer insurance is enough",
    back: {
      title: "TRUTH",
      content: "Employer insurance is temporary and often insufficient. When you change jobs or retire, coverage ends. The sum insured is usually low, and family coverage may be limited. Always have your own personal health policy.",
      additionalInfo: [
        "Job changes leave coverage gaps",
        "Personal policy has lifelong renewability",
        "Supplement employer coverage with own policy"
      ]
    },
    icon: "briefcase"
  },
  {
    id: 16,
    type: "scenario",
    front: "You need surgery but can't afford the upfront hospital bill. What helps?",
    back: {
      title: "SOLUTION",
      content: "Cashless hospitalization feature in health insurance. Network hospitals directly bill the insurer. You need to inform the insurer 48-72 hours before planned procedures and get pre-authorization approved.",
      additionalInfo: [
        "Check network hospital list",
        "Get pre-authorization for planned surgeries",
        "Keep health card handy during admission"
      ]
    },
    icon: "hospital"
  },
  {
    id: 17,
    type: "term",
    front: "No Claim Bonus (NCB)",
    back: {
      title: "CRITICAL TERM",
      content: "Found in motor and health insurance. Rewards claim-free years with premium discounts (up to 50% in motor insurance) or increased sum insured (up to 50% in health). Protects your discount even if you switch insurers.",
      additionalInfo: [
        "📍 Location: Policy schedule under 'Benefits'",
        "⚠️ Impact: Significant long-term savings",
        "💡 Tip: Small claims may cost more than NCB loss",
        "🚨 Fraud Alert: Agents suggesting to make false claims to use NCB"
      ]
    },
    icon: "gift"
  },
  {
    id: 18,
    type: "story",
    front: "Delhi Family: Father's Sudden Demise",
    back: {
      title: "INSURANCE IMPACT",
      content: "A Delhi family lost their father suddenly to cardiac arrest at age 42. His ₹1 crore term insurance payout helped clear ₹30 lakhs home loan, fund children's education, and provide financial stability for 15+ years.",
      additionalInfo: [
        "💰 Financial: ₹1 crore financial cushion",
        "❤️ Mental Peace: Children's education secured",
        "⏱️ Support: Family maintained lifestyle without financial stress"
      ]
    },
    icon: "user-x"
  },
  {
    id: 19,
    type: "scenario",
    front: "Your bike damaged someone's car in an accident. Which insurance pays?",
    back: {
      title: "SOLUTION",
      content: "Third-party motor insurance (mandatory by law) covers damage to others' property and injuries. It won't cover damage to your own bike - you need comprehensive insurance for that.",
      additionalInfo: [
        "Third-party is mandatory by law",
        "No cap on third-party liability",
        "Comprehensive covers own damage too"
      ]
    },
    icon: "bike"
  },
  {
    id: 20,
    type: "myth",
    front: "I'm healthy, I don't need critical illness insurance",
    back: {
      title: "TRUTH",
      content: "Critical illnesses like cancer, heart attack, and stroke are increasingly affecting younger Indians. These require expensive long-term treatment beyond hospitalization. Critical illness insurance provides lump sum funds for treatment, lifestyle changes, and income loss.",
      additionalInfo: [
        "1 in 3 Indians risk critical illness",
        "Covers non-hospitalization costs",
        "Lump sum paid immediately on diagnosis"
      ]
    },
    icon: "alert-triangle"
  },
  {
    id: 21,
    type: "term",
    front: "Copayment Clause",
    back: {
      title: "CRITICAL TERM",
      content: "Found in health insurance under 'Claims' section. You pay a fixed percentage (10-20%) of every claim. Common in senior citizen policies or to reduce premiums. A ₹1 lakh claim with 20% copay means you pay ₹20,000 out of pocket.",
      additionalInfo: [
        "📍 Location: Policy terms under 'Claim settlement'",
        "⚠️ Impact: Reduces claim amount you receive",
        "💡 Tip: Avoid copay unless premium savings justify it",
        "🚨 Fraud Alert: Hidden copay clauses in fine print"
      ]
    },
    icon: "percent"
  },
  {
    id: 22,
    type: "story",
    front: "Pune Business Owner: Shop Fire Incident",
    back: {
      title: "INSURANCE IMPACT",
      content: "A Pune shop owner's electronics store caught fire, destroying inventory worth ₹20 lakhs. Shop insurance covered stock loss, property damage (₹8 lakhs), and business interruption loss (₹5 lakhs) during 3-month closure.",
      additionalInfo: [
        "💰 Financial: ₹33 lakhs total coverage",
        "❤️ Mental Peace: Business could restart without debt",
        "⏱️ Recovery: Business resumed in 4 months with insurance support"
      ]
    },
    icon: "store"
  },
  {
    id: 23,
    type: "scenario",
    front: "You're traveling abroad and need emergency medical treatment. What insurance covers this?",
    back: {
      title: "SOLUTION",
      content: "Travel insurance with overseas medical coverage. Regular health insurance often doesn't cover international treatment. Travel insurance covers emergency medical expenses, evacuation, and repatriation costs abroad.",
      additionalInfo: [
        "Buy before departure",
        "Check coverage limits carefully",
        "Keep emergency helpline numbers handy"
      ]
    },
    icon: "plane"
  },
  {
    id: 24,
    type: "myth",
    front: "Insurance companies can cancel my policy anytime",
    back: {
      title: "TRUTH",
      content: "IRDAI regulations protect policyholders. Insurers cannot cancel policies arbitrarily. Cancellation only happens for non-payment of premiums, material misrepresentation, or fraud. You have legal recourse through insurance ombudsman.",
      additionalInfo: [
        "Policies have guaranteed renewal rights",
        "Ombudsman protects your interests",
        "Read cancellation clauses in policy"
      ]
    },
    icon: "x-circle"
  },
  {
    id: 25,
    type: "term",
    front: "Waiting Period",
    back: {
      title: "CRITICAL TERM",
      content: "Found under 'Exclusions' in health insurance. Initial period (30 days to 4 years) during which specific conditions aren't covered. Standard: 30 days for illnesses, 2-4 years for pre-existing conditions, 1-2 years for specific diseases.",
      additionalInfo: [
        "📍 Location: Policy document under 'Exclusions'",
        "⚠️ Impact: Claims rejected during waiting period",
        "💡 Tip: Buy early to complete waiting periods",
        "🚨 Fraud Alert: Policies claiming 'zero waiting period' for everything"
      ]
    },
    icon: "hourglass"
  }
];