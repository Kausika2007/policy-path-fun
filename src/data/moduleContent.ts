// Module content data for all 10 insurance modules

export interface TeachingContent {
  title: string;
  sections: {
    heading: string;
    content: string;
    image?: string;
    colorTheme: string;
  }[];
  visualIdeas: string[];
}

export interface MCQQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  emoji: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ModuleData {
  id: number;
  title: string;
  description: string;
  icon: string;
  colorTheme: string;
  teaching: TeachingContent;
  mcqQuestions: MCQQuestion[];
  quizQuestions: QuizQuestion[];
  points: number;
}

export const moduleContent: ModuleData[] = [
  {
    id: 1,
    title: "Basics of Insurance",
    description: "Foundation of insurance concepts",
    icon: "🛡️",
    colorTheme: "from-blue-500 to-indigo-600",
    points: 100,
    teaching: {
      title: "Understanding Insurance Fundamentals",
      sections: [
        {
          heading: "What is Insurance?",
          content: "Insurance is a contract between you (the policyholder) and an insurance company. You pay regular premiums, and in return, the insurance company agrees to cover specific financial losses or risks. Think of it as a safety net that protects you from unexpected events that could otherwise cause significant financial hardship.",
          image: "🤝",
          colorTheme: "bg-blue-50 dark:bg-blue-950"
        },
        {
          heading: "Key Insurance Terms",
          content: "Premium: The amount you pay regularly (monthly, quarterly, or annually) for insurance coverage. Deductible: The amount you must pay out-of-pocket before insurance kicks in. Policy: The written contract detailing coverage terms. Claim: A formal request to the insurance company for payment after a loss. Coverage: The protection provided by your insurance policy.",
          image: "📝",
          colorTheme: "bg-indigo-50 dark:bg-indigo-950"
        },
        {
          heading: "Why Insurance Matters",
          content: "Insurance provides financial security and peace of mind. It protects you from catastrophic losses, helps you manage risk, and ensures that unexpected events don't derail your financial goals. Whether it's protecting your health, property, or loved ones, insurance is a crucial component of financial planning.",
          image: "💪",
          colorTheme: "bg-purple-50 dark:bg-purple-950"
        },
        {
          heading: "Types of Insurance",
          content: "There are many types of insurance designed for different needs: Life insurance protects your family's financial future, Health insurance covers medical expenses, Property insurance protects your home and belongings, Auto insurance covers vehicle-related risks, and many specialized policies for specific needs.",
          image: "📊",
          colorTheme: "bg-cyan-50 dark:bg-cyan-950"
        }
      ],
      visualIdeas: ["Shield icon animations", "Contract signing visuals", "Family protection imagery", "Financial security graphics"]
    },
    mcqQuestions: [
      {
        question: "What is the primary purpose of insurance?",
        options: ["To make money", "To protect against financial loss", "To avoid paying taxes", "To get discounts"],
        correct: 1,
        explanation: "Insurance is designed to protect you from unexpected financial losses by transferring risk to the insurance company.",
        emoji: "🛡️"
      },
      {
        question: "What is a premium in insurance?",
        options: ["The claim amount", "The amount you pay for coverage", "A bonus payment", "The deductible"],
        correct: 1,
        explanation: "A premium is the regular payment you make to maintain your insurance coverage.",
        emoji: "💰"
      },
      {
        question: "What is a deductible?",
        options: ["Total premium paid", "Amount paid before insurance covers", "Insurance company profit", "Type of policy"],
        correct: 1,
        explanation: "A deductible is the amount you must pay out-of-pocket before your insurance coverage begins.",
        emoji: "📊"
      },
      {
        question: "What is an insurance policy?",
        options: ["A savings account", "A written contract of coverage", "A government rule", "A type of claim"],
        correct: 1,
        explanation: "An insurance policy is the legal contract that outlines the terms, conditions, and coverage details.",
        emoji: "📜"
      },
      {
        question: "What does filing a claim mean?",
        options: ["Paying premium", "Requesting payment for a loss", "Canceling policy", "Buying insurance"],
        correct: 1,
        explanation: "Filing a claim is the process of formally requesting payment from your insurance company after a covered loss.",
        emoji: "📋"
      },
      {
        question: "Who is a policyholder?",
        options: ["Insurance company", "Person who owns the policy", "Government official", "Claims adjuster"],
        correct: 1,
        explanation: "The policyholder is the person or entity that owns the insurance policy and pays the premiums.",
        emoji: "👤"
      },
      {
        question: "What is coverage in insurance?",
        options: ["Premium amount", "Protection provided by policy", "Deductible limit", "Claim process"],
        correct: 1,
        explanation: "Coverage refers to the specific risks and losses that your insurance policy will protect against.",
        emoji: "☂️"
      },
      {
        question: "What is risk pooling?",
        options: ["Swimming insurance", "Sharing risk among many people", "Individual coverage", "Premium discount"],
        correct: 1,
        explanation: "Risk pooling spreads the financial risk among many policyholders, making insurance affordable for everyone.",
        emoji: "👥"
      },
      {
        question: "When should you review your insurance?",
        options: ["Never", "Only when buying", "Regularly and after life changes", "Every 10 years"],
        correct: 2,
        explanation: "You should review your insurance regularly and especially after major life events to ensure adequate coverage.",
        emoji: "🔍"
      },
      {
        question: "What is underwriting?",
        options: ["Writing policies", "Assessing risk for coverage", "Paying claims", "Selling insurance"],
        correct: 1,
        explanation: "Underwriting is the process where insurers evaluate risk to determine coverage eligibility and premium rates.",
        emoji: "✍️"
      }
    ],
    quizQuestions: [
      {
        question: "Insurance transfers risk from the individual to:",
        options: ["The government", "The insurance company", "Family members", "Banks"],
        correct: 1,
        explanation: "Insurance works by transferring your risk of financial loss to the insurance company in exchange for premiums."
      },
      {
        question: "Which payment is made regularly to keep insurance active?",
        options: ["Deductible", "Claim", "Premium", "Coverage"],
        correct: 2,
        explanation: "Premiums are regular payments made to maintain active insurance coverage."
      },
      {
        question: "Higher deductibles usually mean:",
        options: ["Higher premiums", "Lower premiums", "No premiums", "More coverage"],
        correct: 1,
        explanation: "Higher deductibles typically result in lower premiums because you're taking on more of the initial risk."
      },
      {
        question: "What document outlines your insurance coverage details?",
        options: ["Receipt", "Policy document", "Claim form", "Premium notice"],
        correct: 1,
        explanation: "The policy document is the official contract that details all coverage terms and conditions."
      },
      {
        question: "Insurance is primarily used for:",
        options: ["Making profit", "Investment returns", "Risk management", "Tax avoidance"],
        correct: 2,
        explanation: "The primary purpose of insurance is to manage and mitigate financial risks."
      },
      {
        question: "Who assesses and approves insurance claims?",
        options: ["Policyholder", "Claims adjuster", "Sales agent", "Beneficiary"],
        correct: 1,
        explanation: "Claims adjusters are professionals who investigate and determine the validity and value of insurance claims."
      },
      {
        question: "What happens if you stop paying premiums?",
        options: ["Coverage continues", "Policy may lapse", "You get refund", "Nothing"],
        correct: 1,
        explanation: "Failure to pay premiums can result in policy lapse, meaning you lose your insurance coverage."
      },
      {
        question: "What is a beneficiary in insurance?",
        options: ["Insurance agent", "Person who receives benefits", "Premium payer", "Risk assessor"],
        correct: 1,
        explanation: "A beneficiary is the person or entity designated to receive insurance benefits, especially in life insurance."
      },
      {
        question: "Term insurance covers you for:",
        options: ["Lifetime", "Specific period", "One year only", "No fixed time"],
        correct: 1,
        explanation: "Term insurance provides coverage for a specific period, such as 10, 20, or 30 years."
      },
      {
        question: "What does comprehensive coverage mean?",
        options: ["Minimal coverage", "Broad extensive protection", "Only accidents", "Only theft"],
        correct: 1,
        explanation: "Comprehensive coverage provides broad protection against many types of risks and losses."
      }
    ]
  },
  // Module 2: Life Insurance
  {
    id: 2,
    title: "Life Insurance",
    description: "Protecting your loved ones' future",
    icon: "❤️",
    colorTheme: "from-red-500 to-pink-600",
    points: 150,
    teaching: {
      title: "Life Insurance: Securing Your Family's Future",
      sections: [
        {
          heading: "What is Life Insurance?",
          content: "Life insurance is a contract that provides financial protection to your loved ones after your death. When you pass away, the insurance company pays a death benefit to your designated beneficiaries. This ensures your family can maintain their lifestyle, pay off debts, and achieve long-term financial goals even in your absence.",
          image: "❤️",
          colorTheme: "bg-red-50 dark:bg-red-950"
        },
        {
          heading: "Types of Life Insurance",
          content: "Term Life Insurance provides coverage for a specific period (10, 20, or 30 years) at lower premiums. Whole Life Insurance covers you for your entire life and includes a cash value component. Universal Life Insurance offers flexible premiums and death benefits. Endowment plans combine insurance with savings, paying out either on death or policy maturity.",
          image: "📋",
          colorTheme: "bg-pink-50 dark:bg-pink-950"
        },
        {
          heading: "Who Needs Life Insurance?",
          content: "Anyone with financial dependents should consider life insurance. This includes parents with young children, spouses who rely on your income, individuals with debts or mortgages, and business owners whose loss would impact operations. The younger and healthier you are when you buy, the lower your premiums will be.",
          image: "👨‍👩‍👧‍👦",
          colorTheme: "bg-rose-50 dark:bg-rose-950"
        },
        {
          heading: "Determining Coverage Amount",
          content: "Calculate your coverage needs by considering: annual income replacement (typically 10-15 times your salary), outstanding debts and mortgages, future education costs for children, final expenses, and specific financial goals. A common rule is to have coverage of 10-12 times your annual income.",
          image: "💵",
          colorTheme: "bg-red-100 dark:bg-red-900"
        }
      ],
      visualIdeas: ["Family protection imagery", "Financial security graphics", "Growth charts", "Safety net animations"]
    },
    mcqQuestions: [
      {
        question: "What is the primary purpose of life insurance?",
        options: ["Investment returns", "Financial protection for beneficiaries", "Tax savings", "Retirement income"],
        correct: 1,
        explanation: "Life insurance primarily provides financial support to your beneficiaries after your death.",
        emoji: "❤️"
      },
      {
        question: "Who receives the life insurance payout?",
        options: ["The insured", "The beneficiaries", "The government", "The employer"],
        correct: 1,
        explanation: "Beneficiaries are the people you designate to receive the life insurance death benefit.",
        emoji: "👨‍👩‍👧‍👦"
      },
      {
        question: "Which type of life insurance is most affordable?",
        options: ["Whole life", "Term life", "Universal life", "Endowment"],
        correct: 1,
        explanation: "Term life insurance typically has the lowest premiums because it provides coverage only for a specific period.",
        emoji: "💰"
      },
      {
        question: "What is a death benefit?",
        options: ["Monthly pension", "Amount paid to beneficiaries upon death", "Premium refund", "Bonus payment"],
        correct: 1,
        explanation: "The death benefit is the sum of money paid to beneficiaries when the insured person dies.",
        emoji: "💵"
      },
      {
        question: "Term life insurance covers you for:",
        options: ["Your entire life", "A specific period", "Only one year", "Until age 65"],
        correct: 1,
        explanation: "Term life insurance provides coverage for a predetermined period, such as 10, 20, or 30 years.",
        emoji: "📅"
      },
      {
        question: "What is whole life insurance?",
        options: ["Temporary coverage", "Permanent coverage with cash value", "Health coverage", "Property insurance"],
        correct: 1,
        explanation: "Whole life insurance provides lifetime coverage and accumulates cash value over time.",
        emoji: "🏛️"
      },
      {
        question: "When should you buy life insurance?",
        options: ["After retirement", "When you're young and healthy", "Only when sick", "Never"],
        correct: 1,
        explanation: "Buying life insurance when young and healthy results in lower premiums and better coverage options.",
        emoji: "⏰"
      },
      {
        question: "Can you have multiple life insurance policies?",
        options: ["No, only one", "Yes, you can have multiple", "Only from same company", "Only term policies"],
        correct: 1,
        explanation: "You can have multiple life insurance policies from different insurers to increase your total coverage.",
        emoji: "📚"
      },
      {
        question: "What is a rider in life insurance?",
        options: ["A type of policy", "Additional coverage option", "Premium discount", "Claim process"],
        correct: 1,
        explanation: "Riders are additional benefits you can add to your base life insurance policy for extra coverage.",
        emoji: "➕"
      },
      {
        question: "What is the cash value in whole life insurance?",
        options: ["Death benefit", "Savings component that grows", "Premium refund", "Claim amount"],
        correct: 1,
        explanation: "Cash value is the savings portion of permanent life insurance that accumulates over time and can be borrowed against.",
        emoji: "💎"
      }
    ],
    quizQuestions: [
      {
        question: "Life insurance premiums are based on:",
        options: ["Only age", "Age, health, and lifestyle", "Just income", "Education level"],
        correct: 1,
        explanation: "Premiums are determined by multiple factors including age, health status, lifestyle habits, and coverage amount."
      },
      {
        question: "What is a grace period in life insurance?",
        options: ["Waiting period for coverage", "Time to pay overdue premium", "Claim processing time", "Policy maturity period"],
        correct: 1,
        explanation: "A grace period is additional time given to pay a missed premium before the policy lapses."
      },
      {
        question: "Can beneficiaries be changed?",
        options: ["Never", "Yes, by the policyholder", "Only by insurance company", "Only after death"],
        correct: 1,
        explanation: "Policyholders can typically change beneficiaries at any time during the policy term."
      },
      {
        question: "What is a term conversion option?",
        options: ["Canceling policy", "Converting term to permanent coverage", "Increasing premium", "Reducing coverage"],
        correct: 1,
        explanation: "Term conversion allows you to convert your term policy to permanent coverage without medical exam."
      },
      {
        question: "What happens if you outlive your term policy?",
        options: ["You get money back", "Coverage ends, no payout", "Automatic renewal", "Premium refund"],
        correct: 1,
        explanation: "If you outlive your term policy, the coverage simply ends and there is no death benefit paid."
      },
      {
        question: "What is suicide clause in life insurance?",
        options: ["Policy exclusion", "Waiting period before suicide covered", "Benefit increase", "Premium waiver"],
        correct: 1,
        explanation: "Most policies have a suicide clause (typically 2 years) during which suicide is not covered."
      },
      {
        question: "Can you borrow against term life insurance?",
        options: ["Yes, always", "No, only permanent policies", "After 5 years", "Only half amount"],
        correct: 1,
        explanation: "Only permanent life insurance policies build cash value that can be borrowed against."
      },
      {
        question: "What is level premium?",
        options: ["Premium that changes yearly", "Fixed premium throughout term", "Minimum premium", "Premium based on claims"],
        correct: 1,
        explanation: "Level premium means the premium amount stays the same throughout the policy period."
      },
      {
        question: "Who owns a life insurance policy?",
        options: ["Insurance company", "The policyholder", "The beneficiary", "The employer"],
        correct: 1,
        explanation: "The policyholder is the owner of the life insurance policy and controls all policy decisions."
      },
      {
        question: "What is a medical exam in life insurance for?",
        options: ["Free health checkup", "Assessing risk for underwriting", "Claim verification", "Premium refund"],
        correct: 1,
        explanation: "Medical exams help insurers assess your health risk to determine coverage eligibility and premium rates."
      }
    ]
  },
  // Module 3: Health Insurance
  {
    id: 3,
    title: "Health Insurance",
    description: "Understanding medical coverage",
    icon: "🏥",
    colorTheme: "from-green-500 to-emerald-600",
    points: 150,
    teaching: {
      title: "Health Insurance: Your Medical Safety Net",
      sections: [
        {
          heading: "What is Health Insurance?",
          content: "Health insurance is a type of coverage that pays for medical, surgical, and sometimes dental expenses. It can either reimburse you for expenses or pay the healthcare provider directly. With rising healthcare costs, health insurance protects you from financial hardship due to medical emergencies or routine care.",
          image: "🏥",
          colorTheme: "bg-green-50 dark:bg-green-950"
        },
        {
          heading: "Key Health Insurance Terms",
          content: "Premium: Your regular payment for coverage. Deductible: Amount you pay before insurance kicks in. Co-payment: Fixed amount you pay for specific services. Co-insurance: Percentage of costs you share with insurer. Out-of-pocket maximum: Maximum you'll pay in a year. Network: Approved healthcare providers.",
          image: "📝",
          colorTheme: "bg-emerald-50 dark:bg-emerald-950"
        },
        {
          heading: "Types of Health Insurance Plans",
          content: "Individual/Family Floater: Covers individual or entire family. Critical Illness: Covers specific serious diseases. Senior Citizen Plans: Designed for elderly with pre-existing conditions. Maternity Coverage: Covers pregnancy and childbirth. Group Health: Employer-provided coverage for employees.",
          image: "🔄",
          colorTheme: "bg-teal-50 dark:bg-teal-950"
        },
        {
          heading: "What is Covered?",
          content: "Most health plans cover: hospitalization expenses, pre and post-hospitalization care, ambulance charges, day-care procedures, diagnostic tests, prescribed medications, and preventive care. Always check your specific policy for coverage details and exclusions.",
          image: "✅",
          colorTheme: "bg-green-100 dark:bg-green-900"
        }
      ],
      visualIdeas: ["Hospital imagery", "Medical care graphics", "Health protection symbols", "Doctor-patient visuals"]
    },
    mcqQuestions: [
      {
        question: "What does health insurance primarily cover?",
        options: ["Life events", "Medical expenses", "Property damage", "Travel costs"],
        correct: 1,
        explanation: "Health insurance is designed to cover medical, surgical, and healthcare-related expenses.",
        emoji: "🏥"
      },
      {
        question: "What is a co-payment?",
        options: ["Monthly premium", "Fixed amount for specific services", "Total medical bill", "Deductible"],
        correct: 1,
        explanation: "A co-payment (or co-pay) is a fixed amount you pay for healthcare services, with insurance covering the rest.",
        emoji: "💊"
      },
      {
        question: "What is a health insurance network?",
        options: ["Insurance companies", "Approved healthcare providers", "Hospital database", "Government system"],
        correct: 1,
        explanation: "A network consists of doctors, hospitals, and healthcare providers that have agreements with your insurer.",
        emoji: "🏨"
      },
      {
        question: "What is an out-of-pocket maximum?",
        options: ["Premium limit", "Maximum you pay annually", "Deductible amount", "Coverage limit"],
        correct: 1,
        explanation: "It's the maximum amount you'll pay for covered services in a year; after that, insurance pays 100%.",
        emoji: "💰"
      },
      {
        question: "What is a pre-existing condition?",
        options: ["Future illness", "Condition before insurance", "Genetic disease", "Chronic illness"],
        correct: 1,
        explanation: "A pre-existing condition is a health issue you had before purchasing your insurance policy.",
        emoji: "📋"
      },
      {
        question: "What is cashless hospitalization?",
        options: ["Free treatment", "Insurance pays hospital directly", "Patient pays later", "Government coverage"],
        correct: 1,
        explanation: "Cashless hospitalization means the insurance company pays the hospital directly for covered expenses.",
        emoji: "🏥"
      },
      {
        question: "What is waiting period in health insurance?",
        options: ["Claim processing time", "Time before coverage starts", "Payment delay", "Review period"],
        correct: 1,
        explanation: "Waiting period is the time you must wait before certain coverage benefits become active.",
        emoji: "⏳"
      },
      {
        question: "What is a family floater plan?",
        options: ["Individual coverage", "Coverage for entire family", "Senior citizen plan", "Maternity plan"],
        correct: 1,
        explanation: "A family floater provides coverage for all family members under a single sum insured amount.",
        emoji: "👨‍👩‍👧‍👦"
      },
      {
        question: "What is preventive care in health insurance?",
        options: ["Emergency treatment", "Routine check-ups and screenings", "Surgery", "Medication"],
        correct: 1,
        explanation: "Preventive care includes routine services like annual check-ups and screenings to prevent illness.",
        emoji: "🔍"
      },
      {
        question: "Can you switch health insurance providers?",
        options: ["Never", "Yes, at policy renewal", "Only once", "After 5 years"],
        correct: 1,
        explanation: "You can switch providers, typically at policy renewal, to get better coverage or rates.",
        emoji: "🔄"
      }
    ],
    quizQuestions: [
      {
        question: "What is co-insurance in health coverage?",
        options: ["Multiple policies", "Percentage you share in costs", "Premium payment", "Network doctors"],
        correct: 1,
        explanation: "Co-insurance is the percentage of medical costs you pay after meeting your deductible."
      },
      {
        question: "When should you file a health insurance claim?",
        options: ["Before treatment", "After receiving treatment", "Only for surgery", "Within 10 years"],
        correct: 1,
        explanation: "Claims should be filed promptly after receiving medical treatment, typically within the specified time period."
      },
      {
        question: "What is a health insurance rider?",
        options: ["Basic coverage", "Additional coverage option", "Premium discount", "Network hospital"],
        correct: 1,
        explanation: "Riders are additional benefits you can add to your base health policy for enhanced coverage."
      },
      {
        question: "What is sum insured in health insurance?",
        options: ["Premium amount", "Maximum coverage amount", "Deductible", "Co-payment"],
        correct: 1,
        explanation: "Sum insured is the maximum amount the insurance company will pay for your medical expenses."
      },
      {
        question: "Are maternity expenses usually covered immediately?",
        options: ["Yes, immediately", "No, after waiting period", "Only in emergencies", "Never covered"],
        correct: 1,
        explanation: "Most health policies have a waiting period (typically 9-48 months) before maternity coverage begins."
      },
      {
        question: "What is room rent limit in health insurance?",
        options: ["Hotel charges", "Maximum hospital room cost covered", "Ambulance fee", "Doctor's fee"],
        correct: 1,
        explanation: "Room rent limit is the maximum amount the insurer will pay per day for hospital room charges."
      },
      {
        question: "What are exclusions in health insurance?",
        options: ["Covered items", "Items not covered by policy", "Premium discounts", "Bonus benefits"],
        correct: 1,
        explanation: "Exclusions are specific conditions, treatments, or situations that your policy does not cover."
      },
      {
        question: "What is portability in health insurance?",
        options: ["Carrying card", "Switching insurers without losing benefits", "Online access", "Multiple policies"],
        correct: 1,
        explanation: "Portability allows you to switch insurers while maintaining credit for waiting periods served."
      },
      {
        question: "What is sub-limit in health insurance?",
        options: ["Total coverage", "Limit on specific treatments", "Premium cap", "Age limit"],
        correct: 1,
        explanation: "Sub-limits are caps on coverage for specific treatments or expenses within your overall coverage."
      },
      {
        question: "Can health insurance be renewed lifelong?",
        options: ["No, only till 60", "Yes, most policies offer lifelong renewal", "Only for 10 years", "Till 80 years"],
        correct: 1,
        explanation: "Many modern health insurance policies offer lifelong renewability options."
      }
    ]
  },
  // Module 4: Vehicle Insurance
  {
    id: 4,
    title: "Vehicle Insurance",
    description: "Auto protection essentials",
    icon: "🚗",
    colorTheme: "from-orange-500 to-amber-600",
    points: 150,
    teaching: {
      title: "Vehicle Insurance: Protecting Your Ride",
      sections: [
        {
          heading: "What is Vehicle Insurance?",
          content: "Vehicle insurance, also known as auto or motor insurance, provides financial protection against physical damage or bodily injury from traffic accidents and liability. It's mandatory in most places and protects you from significant financial loss in case of accidents, theft, or natural disasters affecting your vehicle.",
          image: "🚗",
          colorTheme: "bg-orange-50 dark:bg-orange-950"
        },
        {
          heading: "Types of Vehicle Insurance Coverage",
          content: "Third-Party Liability: Covers damage to others (mandatory by law). Comprehensive: Covers own damage plus third-party. Collision: Covers damage from accidents. Own Damage: Covers your vehicle's damage. Personal Accident: Covers driver's injury or death. Zero Depreciation: No depreciation deduction on claims.",
          image: "🛡️",
          colorTheme: "bg-amber-50 dark:bg-amber-950"
        },
        {
          heading: "What's Covered?",
          content: "Vehicle insurance typically covers: accident damage repairs, theft or total loss, fire and explosion, natural disasters (floods, earthquakes), vandalism, third-party injury or property damage. Additional coverage can include roadside assistance, engine protection, and consumables.",
          image: "✅",
          colorTheme: "bg-yellow-50 dark:bg-yellow-950"
        },
        {
          heading: "Factors Affecting Premiums",
          content: "Your vehicle insurance premium depends on: vehicle make and model, age of vehicle, location and registration, driving history, claim history (No Claim Bonus), coverage type, age and experience of driver, and optional add-ons. Safe driving can earn you significant discounts.",
          image: "💵",
          colorTheme: "bg-orange-100 dark:bg-orange-900"
        }
      ],
      visualIdeas: ["Car protection imagery", "Road safety graphics", "Accident prevention visuals", "Insurance claim process"]
    },
    mcqQuestions: [
      {
        question: "What does comprehensive vehicle insurance cover?",
        options: ["Only theft", "Own damage plus third-party", "Only accidents", "Only natural disasters"],
        correct: 1,
        explanation: "Comprehensive insurance covers both damage to your own vehicle and third-party liabilities.",
        emoji: "🚗"
      },
      {
        question: "Is third-party vehicle insurance mandatory?",
        options: ["No, optional", "Yes, by law in most places", "Only for new cars", "Only for taxis"],
        correct: 1,
        explanation: "Third-party liability insurance is legally required in most jurisdictions to protect others.",
        emoji: "⚖️"
      },
      {
        question: "What is IDV in vehicle insurance?",
        options: ["Premium amount", "Insured Declared Value of vehicle", "Claim number", "Insurance company"],
        correct: 1,
        explanation: "IDV is the current market value of your vehicle and the maximum claim amount for total loss.",
        emoji: "💰"
      },
      {
        question: "What is No Claim Bonus (NCB)?",
        options: ["Penalty for claims", "Discount for claim-free years", "Extra coverage", "Premium increase"],
        correct: 1,
        explanation: "NCB is a discount on premium renewal for each claim-free year, encouraging safe driving.",
        emoji: "🎁"
      },
      {
        question: "What is zero depreciation cover?",
        options: ["No coverage", "Full claim without depreciation", "Half coverage", "Only for new cars"],
        correct: 1,
        explanation: "Zero depreciation add-on ensures full claim amount without deducting depreciation on parts.",
        emoji: "✨"
      },
      {
        question: "When should you inform insurer after accident?",
        options: ["Within a week", "Immediately or within 24-48 hours", "Within a month", "Any time"],
        correct: 1,
        explanation: "Most policies require you to inform the insurer immediately or within 24-48 hours of an accident.",
        emoji: "📞"
      },
      {
        question: "What is third-party insurance?",
        options: ["Three policies", "Coverage for damage to others", "Coverage for own vehicle", "Life insurance"],
        correct: 1,
        explanation: "Third-party insurance covers liability for injury or damage you cause to other people or property.",
        emoji: "👥"
      },
      {
        question: "Can you transfer NCB to a new vehicle?",
        options: ["Never", "Yes, it stays with owner", "Only same model", "After 5 years"],
        correct: 1,
        explanation: "No Claim Bonus is personal to the owner and can be transferred when you buy a new vehicle.",
        emoji: "🔄"
      },
      {
        question: "What is own damage cover?",
        options: ["Third-party damage", "Damage to your own vehicle", "Driver injury", "Theft only"],
        correct: 1,
        explanation: "Own damage cover protects your vehicle from damages due to accidents, theft, fire, and natural calamities.",
        emoji: "🛡️"
      },
      {
        question: "What is personal accident cover in motor insurance?",
        options: ["Vehicle damage", "Coverage for driver injury/death", "Passenger coverage", "Third-party injury"],
        correct: 1,
        explanation: "Personal accident cover provides compensation for injury, disability, or death of the vehicle owner/driver.",
        emoji: "🚑"
      }
    ],
    quizQuestions: [
      {
        question: "What happens to IDV as vehicle ages?",
        options: ["Increases", "Decreases due to depreciation", "Stays same", "Doubles"],
        correct: 1,
        explanation: "IDV decreases as the vehicle ages because it represents the current depreciated market value."
      },
      {
        question: "What is engine protection cover?",
        options: ["Oil change coverage", "Protection against engine damage", "Extended warranty", "Free servicing"],
        correct: 1,
        explanation: "Engine protection add-on covers damage to engine parts due to water ingress, oil leakage, etc."
      },
      {
        question: "Can you claim insurance for normal wear and tear?",
        options: ["Yes, always", "No, it's excluded", "Only for new cars", "After 3 years"],
        correct: 1,
        explanation: "Normal wear and tear, mechanical breakdown, and gradual deterioration are not covered."
      },
      {
        question: "What is roadside assistance cover?",
        options: ["Fuel discounts", "Help during breakdowns on road", "Toll payments", "Parking fees"],
        correct: 1,
        explanation: "Roadside assistance provides emergency services like towing, flat tire help, and fuel delivery."
      },
      {
        question: "What documents are needed to file claim?",
        options: ["Only insurance copy", "Policy, RC, license, FIR if theft", "Just driving license", "Only RC book"],
        correct: 1,
        explanation: "You typically need policy copy, RC book, driving license, FIR (for theft/third-party), and repair estimates."
      },
      {
        question: "What is a deductible in vehicle insurance?",
        options: ["Bonus amount", "Amount you pay before insurance pays", "Total premium", "Claim limit"],
        correct: 1,
        explanation: "Deductible is the amount you agree to pay out-of-pocket before the insurance coverage kicks in."
      },
      {
        question: "Are cosmetic damages usually covered?",
        options: ["Yes, always", "Not in basic plans", "Only scratches", "Only dents"],
        correct: 1,
        explanation: "Cosmetic damages like scratches and dents may require additional coverage or may not be fully covered."
      },
      {
        question: "What is return to invoice cover?",
        options: ["Premium refund", "Pay original price on total loss", "Invoice copy", "Discount benefit"],
        correct: 1,
        explanation: "This add-on ensures you get the original invoice value (not depreciated) if vehicle is totaled."
      },
      {
        question: "Can you renew vehicle insurance after expiry?",
        options: ["No, must buy new", "Yes, but may need inspection", "Only within 1 year", "Never allowed"],
        correct: 1,
        explanation: "You can renew expired insurance, but you may lose NCB and vehicle might need inspection."
      },
      {
        question: "What is consumables cover?",
        options: ["Fuel costs", "Coverage for parts like oil, nuts, bolts", "Food during travel", "Toll charges"],
        correct: 1,
        explanation: "Consumables cover includes costs of items like engine oil, nuts, bolts, screws used during repairs."
      }
    ]
  },
  // Module 5: Educational Insurance
  {
    id: 5,
    title: "Educational Insurance",
    description: "Securing educational future",
    icon: "🎓",
    colorTheme: "from-purple-500 to-violet-600",
    points: 150,
    teaching: {
      title: "Educational Insurance: Investing in Knowledge",
      sections: [
        {
          heading: "What is Educational Insurance?",
          content: "Educational insurance is a specialized plan that ensures your child's education continues uninterrupted, even if something happens to you. It combines life insurance with a savings component, guaranteeing funds for education expenses. These plans provide financial security for your children's academic future.",
          image: "🎓",
          colorTheme: "bg-purple-50 dark:bg-purple-950"
        },
        {
          heading: "How It Works",
          content: "You pay regular premiums during the policy term. If you (the parent/guardian) pass away or become disabled during this period, the insurance company waives future premiums but continues to pay the guaranteed amounts for education. At predetermined milestones (like high school, college), payouts are made for educational expenses.",
          image: "🔄",
          colorTheme: "bg-violet-50 dark:bg-violet-950"
        },
        {
          heading: "Benefits and Features",
          content: "Premium waiver on parent's death or disability, guaranteed payouts at education milestones, maturity benefit for final expenses, tax benefits under applicable laws, loan facilities against policy value, and flexibility in payout structure. Some plans also offer scholarship benefits.",
          image: "✨",
          colorTheme: "bg-indigo-50 dark:bg-indigo-950"
        },
        {
          heading: "Planning Education Costs",
          content: "Consider: current education costs and inflation (typically 8-10% annually), duration until child needs funds, level of education planned (domestic vs. international), additional costs (books, accommodation, travel), and family financial goals. Start early to benefit from compound growth and lower premiums.",
          image: "📊",
          colorTheme: "bg-purple-100 dark:bg-purple-900"
        }
      ],
      visualIdeas: ["Graduation imagery", "Student success graphics", "Parent-child education visuals", "Future planning charts"]
    },
    mcqQuestions: [
      {
        question: "What is the primary purpose of educational insurance?",
        options: ["Parent's retirement", "Fund child's education", "Home purchase", "Vehicle loan"],
        correct: 1,
        explanation: "Educational insurance is designed specifically to ensure funds are available for a child's education.",
        emoji: "🎓"
      },
      {
        question: "What happens if the parent dies during policy term?",
        options: ["Policy ends", "Future premiums waived, benefits continue", "Child loses benefits", "Partial payout"],
        correct: 1,
        explanation: "Premium waiver benefit ensures education funds continue even if the parent passes away.",
        emoji: "🛡️"
      },
      {
        question: "When are payouts typically made in education plans?",
        options: ["Monthly", "At education milestones", "Only at maturity", "Weekly"],
        correct: 1,
        explanation: "Payouts are structured around key educational milestones like high school entry, college admission, etc.",
        emoji: "📅"
      },
      {
        question: "Can you take a loan against educational insurance?",
        options: ["Never", "Yes, after certain period", "Only at maturity", "Only for education"],
        correct: 1,
        explanation: "Most educational insurance policies allow loans against the surrender value after a certain period.",
        emoji: "💰"
      },
      {
        question: "What is premium waiver benefit?",
        options: ["Premium discount", "No premium after parent's death", "Refund of premiums", "Bonus payment"],
        correct: 1,
        explanation: "Premium waiver exempts future premium payments if the policyholder dies or becomes disabled.",
        emoji: "✅"
      },
      {
        question: "When should you start an education insurance plan?",
        options: ["When child is in college", "As early as possible", "After retirement", "Only for high school"],
        correct: 1,
        explanation: "Starting early provides more time for wealth accumulation and lower premium costs.",
        emoji: "⏰"
      },
      {
        question: "What costs does educational insurance typically cover?",
        options: ["Only tuition", "Tuition, books, accommodation", "Just exams", "Only uniforms"],
        correct: 1,
        explanation: "Educational insurance can cover comprehensive education costs including tuition, books, and living expenses.",
        emoji: "📚"
      },
      {
        question: "Is educational insurance tax-deductible?",
        options: ["Never", "Yes, under applicable tax laws", "Only for government schools", "Only maturity amount"],
        correct: 1,
        explanation: "Premiums and certain benefits may qualify for tax deductions under relevant tax legislation.",
        emoji: "📑"
      },
      {
        question: "What is maturity benefit in education plans?",
        options: ["Monthly pension", "Lump sum at policy end", "Premium refund", "Loan waiver"],
        correct: 1,
        explanation: "Maturity benefit is the amount paid when the policy term ends, useful for final education expenses.",
        emoji: "🎯"
      },
      {
        question: "Can educational insurance cover international education?",
        options: ["No, only domestic", "Yes, with adequate sum assured", "Only USA", "Only neighbouring countries"],
        correct: 1,
        explanation: "With proper planning and adequate sum assured, these plans can fund international education too.",
        emoji: "🌍"
      }
    ],
    quizQuestions: [
      {
        question: "What is the typical policy term for education insurance?",
        options: ["1-5 years", "10-20 years", "50 years", "Lifelong"],
        correct: 1,
        explanation: "Education insurance typically runs for 10-20 years, aligning with the child's educational timeline."
      },
      {
        question: "Who is the life assured in educational insurance?",
        options: ["The child", "The parent/guardian", "The school", "The government"],
        correct: 1,
        explanation: "The parent or guardian is usually the life assured, ensuring benefits continue if they pass away."
      },
      {
        question: "What is survival benefit in these plans?",
        options: ["Death benefit", "Periodic payouts during policy term", "Final payout", "Premium waiver"],
        correct: 1,
        explanation: "Survival benefits are periodic payments made at specified intervals while the policy is active."
      },
      {
        question: "Can you surrender educational insurance policy?",
        options: ["Never", "Yes, but may lose some benefits", "Only after maturity", "Without any loss"],
        correct: 1,
        explanation: "You can surrender the policy after a certain period, but surrender charges may apply and you may lose benefits."
      },
      {
        question: "What is education inflation?",
        options: ["Decreasing fees", "Rising cost of education", "Scholarship increase", "Government subsidy"],
        correct: 1,
        explanation: "Education inflation refers to the annual increase in education costs, typically higher than general inflation."
      },
      {
        question: "What is partial withdrawal in education plans?",
        options: ["Canceling policy", "Taking part of accumulated value", "Skipping premium", "Reducing coverage"],
        correct: 1,
        explanation: "Partial withdrawal allows you to withdraw a portion of the policy's accumulated value during emergencies."
      },
      {
        question: "How is sum assured determined in education plans?",
        options: ["Random selection", "Based on expected education costs", "Government fixed", "Age-based only"],
        correct: 1,
        explanation: "Sum assured should be calculated based on projected education costs, considering inflation and education goals."
      },
      {
        question: "What happens at policy maturity?",
        options: ["Nothing", "Maturity benefit paid out", "Policy continues forever", "Premiums refunded"],
        correct: 1,
        explanation: "At maturity, the accumulated value along with any bonuses is paid to the policyholder."
      },
      {
        question: "Can you increase coverage during policy term?",
        options: ["No, never", "Yes, through riders or top-up", "Only at maturity", "Automatic increase only"],
        correct: 1,
        explanation: "Many policies allow increasing coverage through additional riders or top-up options."
      },
      {
        question: "What is scholarship benefit?",
        options: ["Free education", "Additional payout for academic excellence", "Premium discount", "Government grant"],
        correct: 1,
        explanation: "Some education plans offer scholarship benefits as additional rewards for the child's academic achievements."
      }
    ]
  },
  // Module 6: Travel Insurance
  {
    id: 6,
    title: "Travel Insurance",
    description: "Protection for your journeys",
    icon: "✈️",
    colorTheme: "from-cyan-500 to-blue-600",
    points: 150,
    teaching: {
      title: "Travel Insurance: Safe Journeys Assured",
      sections: [
        {
          heading: "What is Travel Insurance?",
          content: "Travel insurance protects you against unexpected events while traveling, whether domestically or internationally. It covers trip cancellations, medical emergencies abroad, lost luggage, flight delays, and more. In an era of unpredictable circumstances, travel insurance provides peace of mind and financial protection during your journeys.",
          image: "✈️",
          colorTheme: "bg-cyan-50 dark:bg-cyan-950"
        },
        {
          heading: "Types of Coverage",
          content: "Trip Cancellation: Reimburses non-refundable costs if you cancel. Medical Emergency: Covers illness/injury during travel. Baggage Loss: Compensation for lost/delayed luggage. Flight Delay: Benefits for significant delays. Emergency Evacuation: Covers medical transport. Personal Liability: Protects against legal claims. Adventure Sports: Optional coverage for risky activities.",
          image: "🛡️",
          colorTheme: "bg-blue-50 dark:bg-blue-950"
        },
        {
          heading: "When You Need Travel Insurance",
          content: "International travel (highly recommended), expensive trips with non-refundable bookings, travel to remote destinations, adventure activities or sports, travel during uncertain times, medical conditions requiring care, valuable items being carried, and business travel with important commitments.",
          image: "🌍",
          colorTheme: "bg-sky-50 dark:bg-sky-950"
        },
        {
          heading: "Making Claims",
          content: "Keep all receipts and documentation, inform insurer immediately of incidents, file police reports for theft/loss, obtain medical reports for health claims, keep copies of all communications, submit claims within specified timeframes, provide proof of ownership for valuables, and follow the insurer's claim process carefully.",
          image: "📋",
          colorTheme: "bg-cyan-100 dark:bg-cyan-900"
        }
      ],
      visualIdeas: ["Travel destinations", "Airplane and luggage imagery", "Global protection graphics", "Adventure travel visuals"]
    },
    mcqQuestions: [
      {
        question: "What does travel insurance primarily cover?",
        options: ["Only flight tickets", "Various travel-related risks", "Hotel upgrades", "Shopping expenses"],
        correct: 1,
        explanation: "Travel insurance covers multiple risks including cancellations, medical emergencies, and lost luggage.",
        emoji: "✈️"
      },
      {
        question: "When should you purchase travel insurance?",
        options: ["During the trip", "As soon as you book", "After arriving", "Only for cancellations"],
        correct: 1,
        explanation: "Buying insurance when booking ensures maximum coverage including trip cancellation protection.",
        emoji: "📅"
      },
      {
        question: "Does travel insurance cover medical emergencies abroad?",
        options: ["Never", "Yes, typically included", "Only in home country", "Only for injuries"],
        correct: 1,
        explanation: "Most travel insurance plans cover medical emergencies and treatment during international travel.",
        emoji: "🏥"
      },
      {
        question: "What is trip cancellation coverage?",
        options: ["Free rebooking", "Reimbursement for non-refundable costs", "Travel voucher", "Penalty waiver"],
        correct: 1,
        explanation: "Trip cancellation coverage reimburses you for prepaid, non-refundable expenses if you must cancel.",
        emoji: "🚫"
      },
      {
        question: "Are pre-existing medical conditions covered?",
        options: ["Always covered", "Usually excluded or need declaration", "Only minor ones", "Only for seniors"],
        correct: 1,
        explanation: "Pre-existing conditions are typically excluded unless specifically declared and covered with additional premium.",
        emoji: "📋"
      },
      {
        question: "What is baggage delay coverage?",
        options: ["Free luggage", "Compensation for delayed baggage", "Priority handling", "Extra baggage allowance"],
        correct: 1,
        explanation: "Baggage delay coverage provides reimbursement for essential purchases when luggage is significantly delayed.",
        emoji: "🧳"
      },
      {
        question: "Does travel insurance cover adventure sports?",
        options: ["Always included", "Needs specific add-on coverage", "Never covered", "Only swimming"],
        correct: 1,
        explanation: "Adventure sports typically require additional coverage as they're considered high-risk activities.",
        emoji: "🏔️"
      },
      {
        question: "What is emergency evacuation coverage?",
        options: ["Hotel change", "Medical transport to facility", "Visa processing", "Flight upgrade"],
        correct: 1,
        explanation: "Emergency evacuation covers costs of transporting you to appropriate medical facility or home country.",
        emoji: "🚑"
      },
      {
        question: "Can you buy travel insurance for domestic trips?",
        options: ["No, only international", "Yes, domestic plans available", "Only for certain states", "Never needed"],
        correct: 1,
        explanation: "Domestic travel insurance is available and covers risks during travel within your own country.",
        emoji: "🗺️"
      },
      {
        question: "What is personal liability coverage in travel insurance?",
        options: ["Lost items", "Legal liability for injury/damage to others", "Medical bills", "Trip costs"],
        correct: 1,
        explanation: "Personal liability covers legal costs if you're held responsible for injury or property damage to others.",
        emoji: "⚖️"
      }
    ],
    quizQuestions: [
      {
        question: "What should you do immediately after a travel mishap?",
        options: ["Wait and see", "Inform insurer and document everything", "Ignore it", "Only inform hotel"],
        correct: 1,
        explanation: "Prompt notification to insurer and thorough documentation are crucial for successful claims."
      },
      {
        question: "What is covered under trip interruption?",
        options: ["Planning changes", "Costs when trip is cut short", "Itinerary modifications", "Sightseeing changes"],
        correct: 1,
        explanation: "Trip interruption covers additional costs and losses when you must end your trip early unexpectedly."
      },
      {
        question: "Are natural disasters typically covered?",
        options: ["Never", "Yes, for trip cancellation/interruption", "Only earthquakes", "Only floods"],
        correct: 1,
        explanation: "Natural disasters are usually covered reasons for trip cancellation or interruption."
      },
      {
        question: "What is the typical duration of travel insurance?",
        options: ["Only 1 day", "Matches trip duration", "Always 1 year", "Permanent"],
        correct: 1,
        explanation: "Travel insurance typically covers the specific duration of your trip, from departure to return."
      },
      {
        question: "Can you extend travel insurance while traveling?",
        options: ["Never possible", "Yes, usually with some conditions", "Only within first week", "Only for medical"],
        correct: 1,
        explanation: "Many insurers allow extension of coverage while traveling, though conditions and limitations may apply."
      },
      {
        question: "What is cash or card loss coverage?",
        options: ["Free money", "Limited reimbursement for theft", "Credit card benefits", "Currency exchange"],
        correct: 1,
        explanation: "This covers a limited amount if your cash or cards are stolen during travel."
      },
      {
        question: "Are connecting flights covered for delays?",
        options: ["Never", "Yes, if causing significant disruption", "Only international", "Only same airline"],
        correct: 1,
        explanation: "Missed connections due to delays are typically covered if they result in significant additional costs."
      },
      {
        question: "What is repatriation coverage?",
        options: ["Hotel booking", "Returning remains to home country", "Visa service", "Travel rebooking"],
        correct: 1,
        explanation: "Repatriation coverage pays for returning mortal remains to home country in case of death abroad."
      },
      {
        question: "Can you claim for losing your passport?",
        options: ["No coverage", "Yes, for emergency replacement costs", "Only visa costs", "Full passport value"],
        correct: 1,
        explanation: "Most policies cover emergency passport replacement costs and related expenses."
      },
      {
        question: "What is annual multi-trip insurance?",
        options: ["One long trip", "Coverage for multiple trips in a year", "Group travel", "Business only"],
        correct: 1,
        explanation: "Annual multi-trip policies cover all your trips within a year, ideal for frequent travelers."
      }
    ]
  },
  // Module 7: Fraud Awareness
  {
    id: 7,
    title: "Fraud Awareness and Prevention",
    description: "Protecting yourself from scams",
    icon: "🔒",
    colorTheme: "from-red-500 to-rose-600",
    points: 200,
    teaching: {
      title: "Insurance Fraud: Stay Alert, Stay Protected",
      sections: [
        {
          heading: "What is Insurance Fraud?",
          content: "Insurance fraud occurs when someone deceives an insurance company for financial gain. This can be committed by policyholders (inflating claims, staging accidents), agents (selling fake policies), or even providers (billing for services not rendered). Fraud increases costs for everyone and is a serious crime with legal consequences.",
          image: "🚨",
          colorTheme: "bg-red-50 dark:bg-red-950"
        },
        {
          heading: "Common Fraud Schemes",
          content: "Fake insurance companies: Selling policies that don't exist. Ghost brokers: Selling fraudulent policies. Staged accidents: Deliberate collisions for claims. Exaggerated claims: Inflating damages. Premium fraud: Using false info for lower premiums. Phantom providers: Billing for non-existent services. Identity theft: Using someone's details for claims.",
          image: "⚠️",
          colorTheme: "bg-rose-50 dark:bg-rose-950"
        },
        {
          heading: "Red Flags to Watch",
          content: "Unsolicited offers with unbelievable terms, pressure to buy immediately, requests for cash-only payments, no proper documentation or license verification, deals seeming too good to be true, agents avoiding questions, companies with no online presence or reviews, and requests for personal information via email/phone.",
          image: "🚩",
          colorTheme: "bg-orange-50 dark:bg-orange-950"
        },
        {
          heading: "Protecting Yourself",
          content: "Verify company credentials with regulatory authorities, never share sensitive information unless verified, review all documents carefully before signing, keep records of all communications, report suspicious activities to authorities, use official channels for purchasing insurance, be wary of unsolicited contact, and educate family members about fraud tactics.",
          image: "🛡️",
          colorTheme: "bg-red-100 dark:bg-red-900"
        }
      ],
      visualIdeas: ["Security imagery", "Warning signs graphics", "Protection symbols", "Verification process visuals"]
    },
    mcqQuestions: [
      {
        question: "What is insurance fraud?",
        options: ["Legal claim", "Deceiving insurer for gain", "Honest mistake", "Premium payment"],
        correct: 1,
        explanation: "Insurance fraud is deliberately deceiving an insurance company to receive unauthorized benefits.",
        emoji: "🚨"
      },
      {
        question: "Who can commit insurance fraud?",
        options: ["Only customers", "Policyholders, agents, or providers", "Only companies", "Only strangers"],
        correct: 1,
        explanation: "Fraud can be committed by policyholders, insurance agents, healthcare providers, or third parties.",
        emoji: "⚠️"
      },
      {
        question: "What is a staged accident?",
        options: ["Real accident", "Deliberately planned collision for claim", "Practice drill", "Movie scene"],
        correct: 1,
        explanation: "Staged accidents are deliberately caused collisions designed to file fraudulent insurance claims.",
        emoji: "🚗"
      },
      {
        question: "What is premium fraud?",
        options: ["Honest disclosure", "Providing false info for lower premiums", "Paying extra", "Canceling policy"],
        correct: 1,
        explanation: "Premium fraud involves lying about risk factors to get lower insurance premiums.",
        emoji: "💰"
      },
      {
        question: "What is a ghost broker?",
        options: ["Licensed agent", "Seller of fake insurance policies", "Online insurance", "Insurance advisor"],
        correct: 1,
        explanation: "Ghost brokers are fraudsters who sell fake or invalid insurance policies, often to unsuspecting buyers.",
        emoji: "👻"
      },
      {
        question: "How can you verify an insurance company?",
        options: ["Trust their word", "Check with regulatory authority", "Ask neighbors", "Guess"],
        correct: 1,
        explanation: "Always verify insurance companies through official regulatory authorities and licensing databases.",
        emoji: "✅"
      },
      {
        question: "What should you do if offered a deal 'too good to be true'?",
        options: ["Buy immediately", "Be suspicious and verify", "Share with friends", "Ignore verification"],
        correct: 1,
        explanation: "Extremely good deals are often fraudulent; always verify credentials and company legitimacy.",
        emoji: "🚩"
      },
      {
        question: "Is exaggerating claim damages considered fraud?",
        options: ["No, it's normal", "Yes, it's fraud", "Only if caught", "Legal practice"],
        correct: 1,
        explanation: "Exaggerating or inflating damages in an insurance claim constitutes fraud and is illegal.",
        emoji: "📊"
      },
      {
        question: "What is identity theft in insurance?",
        options: ["Forgetting password", "Using someone's identity for claims", "Name change", "Address update"],
        correct: 1,
        explanation: "Insurance identity theft involves using stolen personal information to file fraudulent claims.",
        emoji: "🆔"
      },
      {
        question: "Should you report suspected insurance fraud?",
        options: ["No, ignore it", "Yes, to authorities", "Only if it affects you", "Confront the fraudster"],
        correct: 1,
        explanation: "Reporting suspected fraud to regulatory authorities helps protect everyone and is your civic duty.",
        emoji: "📞"
      }
    ],
    quizQuestions: [
      {
        question: "What are consequences of committing insurance fraud?",
        options: ["Nothing", "Criminal charges, fines, imprisonment", "Small warning", "Discount on next policy"],
        correct: 1,
        explanation: "Insurance fraud is a serious crime that can result in criminal charges, heavy fines, and imprisonment."
      },
      {
        question: "What is hard fraud?",
        options: ["Difficult claims", "Deliberately faking events for claims", "Complex policies", "High premiums"],
        correct: 1,
        explanation: "Hard fraud involves deliberately planning and faking incidents to collect insurance money."
      },
      {
        question: "What is soft fraud?",
        options: ["Easy claims", "Exaggerating legitimate claims", "Low premiums", "Simple policies"],
        correct: 1,
        explanation: "Soft fraud is inflating or exaggerating an otherwise legitimate claim to receive more money."
      },
      {
        question: "Can insurance companies investigate suspicious claims?",
        options: ["Never", "Yes, they have investigation units", "Only police can", "Not allowed"],
        correct: 1,
        explanation: "Insurance companies have Special Investigation Units (SIUs) to detect and investigate fraud."
      },
      {
        question: "What is phantom treatment fraud?",
        options: ["Ghost stories", "Billing for services not provided", "Experimental treatment", "Traditional medicine"],
        correct: 1,
        explanation: "Phantom treatment involves healthcare providers billing for treatments or services never actually rendered."
      },
      {
        question: "Should you share insurance policy details publicly?",
        options: ["Yes, always", "No, keep confidential", "Only on social media", "With everyone"],
        correct: 1,
        explanation: "Policy details should be kept confidential to prevent identity theft and fraudulent use."
      },
      {
        question: "What is padding in insurance fraud?",
        options: ["Adding comfort", "Adding false items to legitimate claim", "Insurance extra", "Premium increase"],
        correct: 1,
        explanation: "Padding involves adding extra items or expenses to a legitimate claim to increase the payout."
      },
      {
        question: "Are cash-only insurance offers legitimate?",
        options: ["Very legitimate", "Usually suspicious red flags", "Preferred method", "Standard practice"],
        correct: 1,
        explanation: "Legitimate insurers accept various payment methods; cash-only requirements are major red flags."
      },
      {
        question: "What is upcoding in health insurance?",
        options: ["Code update", "Billing for more expensive service", "Software upgrade", "Policy improvement"],
        correct: 1,
        explanation: "Upcoding is when providers bill for more expensive procedures than what was actually performed."
      },
      {
        question: "How does fraud affect honest policyholders?",
        options: ["No effect", "Increases everyone's premiums", "Lower premiums", "Better coverage"],
        correct: 1,
        explanation: "Insurance fraud increases costs for companies, which leads to higher premiums for all honest policyholders."
      }
    ]
  },
  // Module 8: Policy Types and Details
  {
    id: 8,
    title: "Policy Types and Details",
    description: "Understanding different insurance policies",
    icon: "📋",
    colorTheme: "from-teal-500 to-green-600",
    points: 175,
    teaching: {
      title: "Insurance Policies: Types and Details",
      sections: [
        {
          heading: "Understanding Policy Types",
          content: "Insurance policies come in various forms to meet different needs. Term policies provide coverage for specific periods. Whole life or permanent policies cover you for life. Endowment policies combine insurance with savings. Unit-Linked plans (ULIP) combine insurance with investment. Understanding policy types helps you choose the right coverage for your needs.",
          image: "📋",
          colorTheme: "bg-teal-50 dark:bg-teal-950"
        },
        {
          heading: "Policy Components",
          content: "Every policy has key components: Policy Schedule (summary of coverage), Premium (payment amount and frequency), Sum Assured (coverage amount), Policy Term (duration), Exclusions (what's not covered), Conditions (requirements for coverage), Riders (additional benefits), Grace Period (time to pay overdue premium), and Nomination (beneficiary designation).",
          image: "📄",
          colorTheme: "bg-green-50 dark:bg-green-950"
        },
        {
          heading: "Reading Your Policy Document",
          content: "Policy documents contain crucial information. Start with the schedule page for quick overview. Read exclusions carefully to know what's not covered. Understand claim procedures and requirements. Note important dates (start date, maturity, premium due dates). Review coverage limits and deductibles. Check renewal terms and any mandatory requirements.",
          image: "🔍",
          colorTheme: "bg-emerald-50 dark:bg-emerald-950"
        },
        {
          heading: "Riders and Add-ons",
          content: "Riders enhance your base policy: Critical Illness rider covers specific diseases. Accidental Death Benefit provides extra death benefit. Waiver of Premium continues coverage if you can't pay. Income Benefit provides regular payouts. Hospital Cash gives daily hospitalization amount. Riders increase coverage but also increase premiums, so choose based on actual needs.",
          image: "➕",
          colorTheme: "bg-teal-100 dark:bg-teal-900"
        }
      ],
      visualIdeas: ["Document imagery", "Policy comparison charts", "Coverage diagrams", "Selection guides"]
    },
    mcqQuestions: [
      {
        question: "What is a term insurance policy?",
        options: ["Lifetime coverage", "Coverage for specific period", "Savings plan", "Investment plan"],
        correct: 1,
        explanation: "Term insurance provides coverage for a predetermined period like 10, 20, or 30 years.",
        emoji: "📅"
      },
      {
        question: "What is an endowment policy?",
        options: ["Pure insurance", "Insurance plus savings", "Only investment", "Health plan"],
        correct: 1,
        explanation: "Endowment policies combine life insurance protection with a savings or investment component.",
        emoji: "💰"
      },
      {
        question: "What is a ULIP?",
        options: ["Only insurance", "Insurance linked with investments", "Pure investment", "Health insurance"],
        correct: 1,
        explanation: "ULIP (Unit Linked Insurance Plan) combines life insurance with market-linked investments.",
        emoji: "📈"
      },
      {
        question: "What is the policy schedule?",
        options: ["Payment dates", "Summary of coverage details", "Claim timeline", "Meeting schedule"],
        correct: 1,
        explanation: "The policy schedule is a summary page showing key details like coverage amount, term, and premiums.",
        emoji: "📋"
      },
      {
        question: "What are exclusions in a policy?",
        options: ["Extra benefits", "Things not covered", "Premium discounts", "Bonus features"],
        correct: 1,
        explanation: "Exclusions are specific circumstances, conditions, or events that the policy does not cover.",
        emoji: "❌"
      },
      {
        question: "What is a policy rider?",
        options: ["Vehicle insurance", "Additional coverage option", "Policy cancellation", "Premium payment"],
        correct: 1,
        explanation: "A rider is an additional benefit that can be attached to your base insurance policy for enhanced coverage.",
        emoji: "➕"
      },
      {
        question: "What is free-look period?",
        options: ["Preview policy", "Time to review and return policy", "Claim period", "Grace period"],
        correct: 1,
        explanation: "Free-look period allows you to review the policy and return it for full refund if not satisfied.",
        emoji: "👀"
      },
      {
        question: "What is policy maturity?",
        options: ["Policy starts", "Policy term ends", "Claim filed", "Premium due"],
        correct: 1,
        explanation: "Policy maturity is when the policy term ends and maturity benefits, if any, are paid out.",
        emoji: "🎯"
      },
      {
        question: "What is nomination in insurance?",
        options: ["Voting rights", "Designating beneficiaries", "Policy selection", "Agent assignment"],
        correct: 1,
        explanation: "Nomination is designating the person(s) who will receive policy benefits upon the insured's death.",
        emoji: "👤"
      },
      {
        question: "What is policy lapse?",
        options: ["Policy upgrade", "Coverage terminated due to non-payment", "Claim approved", "Bonus added"],
        correct: 1,
        explanation: "Policy lapse occurs when coverage is terminated because premiums are not paid within the grace period.",
        emoji: "⚠️"
      }
    ],
    quizQuestions: [
      {
        question: "What is revival of a lapsed policy?",
        options: ["Buying new policy", "Reinstating terminated policy", "Claim process", "Premium increase"],
        correct: 1,
        explanation: "Revival means reinstating a lapsed policy by paying pending premiums and meeting other conditions."
      },
      {
        question: "What is paid-up value?",
        options: ["Total premiums paid", "Reduced coverage when premiums stop", "Claim amount", "Surrender value"],
        correct: 1,
        explanation: "Paid-up value is the reduced sum assured your policy continues with if you stop paying premiums."
      },
      {
        question: "What is surrender value?",
        options: ["Purchase price", "Amount received on policy cancellation", "Maturity benefit", "Death benefit"],
        correct: 1,
        explanation: "Surrender value is the amount you receive if you cancel your policy before maturity."
      },
      {
        question: "What is bonus in insurance policies?",
        options: ["Premium discount", "Additional benefit from profits", "Sign-up gift", "Claim extra"],
        correct: 1,
        explanation: "Bonus is an additional benefit added to the sum assured from the insurance company's profits."
      },
      {
        question: "What is sum assured?",
        options: ["Premium amount", "Guaranteed minimum payout", "Surrender value", "Bonus amount"],
        correct: 1,
        explanation: "Sum assured is the guaranteed amount payable on death or maturity of the policy."
      },
      {
        question: "Can you change your policy nominee?",
        options: ["Never", "Yes, anytime during policy term", "Only at start", "Only at maturity"],
        correct: 1,
        explanation: "Policyholders can typically change nominees at any time by submitting proper forms."
      },
      {
        question: "What is policy assignment?",
        options: ["Homework", "Transferring policy rights", "Claim process", "Premium payment"],
        correct: 1,
        explanation: "Assignment is transferring your rights in the policy to another person, often done for loans."
      },
      {
        question: "What is the cooling-off period same as?",
        options: ["Grace period", "Free-look period", "Waiting period", "Claim period"],
        correct: 1,
        explanation: "Cooling-off period is another term for free-look period when you can review and return the policy."
      },
      {
        question: "What is guaranteed addition?",
        options: ["Premium increase", "Assured additions to sum assured", "Random bonus", "Claim extra"],
        correct: 1,
        explanation: "Guaranteed additions are predetermined bonuses that are guaranteed to be added to your policy."
      },
      {
        question: "What happens to unclaimed insurance money?",
        options: ["Company keeps it", "Transferred to senior citizen welfare fund", "Government takes it", "Deleted"],
        correct: 1,
        explanation: "Unclaimed insurance amounts are eventually transferred to the Senior Citizens' Welfare Fund."
      }
    ]
  },
  // Module 9: Government Policy Updates
  {
    id: 9,
    title: "Government Policy Updates",
    description: "Latest government insurance schemes",
    icon: "🏛️",
    colorTheme: "from-indigo-500 to-blue-600",
    points: 175,
    teaching: {
      title: "Government Insurance Schemes and Policies",
      sections: [
        {
          heading: "Government Insurance Initiatives",
          content: "The government has launched several insurance schemes to make coverage accessible and affordable for all citizens. These include Pradhan Mantri Jeevan Jyoti Bima Yojana (life insurance), Pradhan Mantri Suraksha Bima Yojana (accident insurance), Ayushman Bharat (health coverage), and various state-specific schemes. These initiatives aim to provide financial security to underserved populations.",
          image: "🏛️",
          colorTheme: "bg-indigo-50 dark:bg-indigo-950"
        },
        {
          heading: "PM Jeevan Jyoti Bima Yojana (PMJJBY)",
          content: "PMJJBY is a life insurance scheme offering coverage of ₹2 lakh at an annual premium of just ₹436. It's available to people aged 18-50 with savings bank accounts. Coverage is renewable annually. Death benefit is payable for any reason. Simple enrollment through banks makes it accessible. This scheme provides basic life coverage to millions.",
          image: "❤️",
          colorTheme: "bg-blue-50 dark:bg-blue-950"
        },
        {
          heading: "PM Suraksha Bima Yojana (PMSBY)",
          content: "PMSBY provides accidental death and disability coverage of ₹2 lakh for only ₹20 per year. Available to people aged 18-70 with bank accounts. Covers accidental death (₹2 lakh), permanent total disability (₹2 lakh), and permanent partial disability (₹1 lakh). Auto-debit from bank account makes enrollment easy and premium affordable for everyone.",
          image: "🛡️",
          colorTheme: "bg-sky-50 dark:bg-sky-950"
        },
        {
          heading: "Ayushman Bharat - PM-JAY",
          content: "The world's largest health insurance scheme providing coverage of ₹5 lakh per family per year. Covers over 10 crore poor and vulnerable families. Includes secondary and tertiary care hospitalization. Cashless and paperless services at empaneled hospitals. Covers pre and post-hospitalization expenses. Portable across India with no restrictions on family size, age, or gender.",
          image: "🏥",
          colorTheme: "bg-indigo-100 dark:bg-indigo-900"
        }
      ],
      visualIdeas: ["Government symbols", "Scheme comparison charts", "Beneficiary imagery", "Coverage graphics"]
    },
    mcqQuestions: [
      {
        question: "What is PMJJBY?",
        options: ["Health scheme", "Government life insurance scheme", "Accident insurance", "Pension plan"],
        correct: 1,
        explanation: "Pradhan Mantri Jeevan Jyoti Bima Yojana is a government-backed life insurance scheme.",
        emoji: "❤️"
      },
      {
        question: "What is the annual premium for PMJJBY?",
        options: ["₹100", "₹436", "₹1000", "Free"],
        correct: 1,
        explanation: "PMJJBY offers ₹2 lakh life coverage for an annual premium of ₹436.",
        emoji: "💰"
      },
      {
        question: "What does PMSBY cover?",
        options: ["Illness", "Accidental death and disability", "Life coverage", "Property"],
        correct: 1,
        explanation: "Pradhan Mantri Suraksha Bima Yojana covers accidental death and disability.",
        emoji: "🛡️"
      },
      {
        question: "What is the annual premium for PMSBY?",
        options: ["₹10", "₹20", "₹50", "₹100"],
        correct: 1,
        explanation: "PMSBY provides ₹2 lakh accident coverage for just ₹20 per year.",
        emoji: "💵"
      },
      {
        question: "What is Ayushman Bharat?",
        options: ["Life insurance", "Health insurance scheme", "Pension plan", "Education scheme"],
        correct: 1,
        explanation: "Ayushman Bharat (PM-JAY) is the world's largest government health insurance scheme.",
        emoji: "🏥"
      },
      {
        question: "What is the coverage under Ayushman Bharat?",
        options: ["₹1 lakh", "₹5 lakh per family per year", "₹10 lakh", "Unlimited"],
        correct: 1,
        explanation: "Ayushman Bharat provides health coverage of up to ₹5 lakh per family annually.",
        emoji: "💳"
      },
      {
        question: "Who is eligible for PMJJBY?",
        options: ["Only seniors", "People aged 18-50 with bank account", "Only women", "Government employees"],
        correct: 1,
        explanation: "PMJJBY is available to individuals aged 18-50 years with a savings bank account.",
        emoji: "👥"
      },
      {
        question: "Is Ayushman Bharat coverage portable across India?",
        options: ["No, state-specific", "Yes, portable across India", "Only in metro cities", "Only in villages"],
        correct: 1,
        explanation: "Ayushman Bharat coverage is portable and can be used at empaneled hospitals across India.",
        emoji: "🌍"
      },
      {
        question: "How is PMSBY premium paid?",
        options: ["Cash", "Auto-debit from bank account", "Online only", "Cheque"],
        correct: 1,
        explanation: "PMSBY premium is auto-debited from the linked savings bank account annually.",
        emoji: "🏦"
      },
      {
        question: "Does Ayushman Bharat have family size restrictions?",
        options: ["Yes, only 4 members", "No restrictions", "Only 2 members", "Only 6 members"],
        correct: 1,
        explanation: "Ayushman Bharat has no restrictions on family size, age, or gender for eligible families.",
        emoji: "👨‍👩‍👧‍👦"
      }
    ],
    quizQuestions: [
      {
        question: "Can one person enroll in both PMJJBY and PMSBY?",
        options: ["No, only one", "Yes, both can be taken", "Only with approval", "Only seniors can"],
        correct: 1,
        explanation: "An individual can enroll in both schemes simultaneously for comprehensive coverage."
      },
      {
        question: "Is medical examination required for PMJJBY?",
        options: ["Yes, mandatory", "No, it's not required", "Only for seniors", "Only for high coverage"],
        correct: 1,
        explanation: "PMJJBY does not require medical examination for enrollment, making it easily accessible."
      },
      {
        question: "What is covered under PMSBY's partial disability?",
        options: ["Nothing", "₹1 lakh for loss of one eye/limb", "₹2 lakh", "₹50,000"],
        correct: 1,
        explanation: "PMSBY provides ₹1 lakh coverage for permanent partial disability (loss of one eye or limb)."
      },
      {
        question: "How are beneficiaries identified for Ayushman Bharat?",
        options: ["Random selection", "Based on SECC database", "First come first serve", "Lottery"],
        correct: 1,
        explanation: "Beneficiaries are identified based on the Socio-Economic Caste Census (SECC) database."
      },
      {
        question: "Can PMJJBY coverage be renewed after age 50?",
        options: ["Yes, till 60", "No, coverage ends at 50", "Yes, till 55", "Lifetime renewal"],
        correct: 1,
        explanation: "PMJJBY coverage is available only till age 50; it cannot be renewed after that age."
      },
      {
        question: "Are pre-existing conditions covered under Ayushman Bharat?",
        options: ["Never covered", "Yes, covered from day one", "After waiting period", "Only some conditions"],
        correct: 1,
        explanation: "Ayushman Bharat covers pre-existing conditions from day one with no waiting period."
      },
      {
        question: "How do you enroll in PMJJBY or PMSBY?",
        options: ["Online portal only", "Through bank where you have account", "Insurance office", "Government office"],
        correct: 1,
        explanation: "Enrollment is done through the bank where you have a savings account via consent form."
      },
      {
        question: "What is the claim process for PMJJBY?",
        options: ["Automatic", "Nominee submits death certificate and form", "No claim needed", "Bank decides"],
        correct: 1,
        explanation: "The nominee must submit death certificate, claim form, and other required documents to the bank."
      },
      {
        question: "Are treatments under Ayushman Bharat cashless?",
        options: ["No, must pay first", "Yes, cashless at empaneled hospitals", "Only for emergency", "Only for surgery"],
        correct: 1,
        explanation: "Treatment at empaneled hospitals under Ayushman Bharat is completely cashless for beneficiaries."
      },
      {
        question: "What is the coverage period for PMSBY?",
        options: ["Permanent", "June 1 to May 31 annually", "January to December", "Financial year"],
        correct: 1,
        explanation: "PMSBY coverage period is from June 1 to May 31 each year and must be renewed annually."
      }
    ]
  },
  // Module 10: Insurance Process
  {
    id: 10,
    title: "Insurance Process from Start to Claim",
    description: "Complete insurance journey",
    icon: "🔄",
    colorTheme: "from-violet-500 to-purple-600",
    points: 200,
    teaching: {
      title: "The Insurance Journey: From Purchase to Claim",
      sections: [
        {
          heading: "Step 1: Assessing Your Needs",
          content: "Start by evaluating your insurance needs based on your life stage, financial obligations, dependents, assets, health status, and risk exposure. Calculate coverage amounts considering income replacement, debt coverage, future goals, and emergency funds. Research different policy types and compare offerings from multiple insurers. Consult advisors but make informed decisions based on your unique circumstances.",
          image: "🎯",
          colorTheme: "bg-violet-50 dark:bg-violet-950"
        },
        {
          heading: "Step 2: Purchasing Insurance",
          content: "Compare policies using online tools and insurance aggregators. Verify company credentials and claim settlement ratio. Read policy documents thoroughly, especially exclusions and conditions. Fill application forms accurately and honestly. Undergo medical examination if required. Pay premium through secure channels. Receive policy document and verify all details immediately. Keep documents safe and inform family members.",
          image: "🛒",
          colorTheme: "bg-purple-50 dark:bg-purple-950"
        },
        {
          heading: "Step 3: Policy Maintenance",
          content: "Pay premiums on time to keep policy active. Review coverage annually and after life changes (marriage, birth, new job). Update contact information and nominees as needed. Understand policy anniversary dates and renewal terms. Take advantage of free health check-ups if offered. Add riders as needs evolve. Maintain good health for better terms on new policies.",
          image: "🔧",
          colorTheme: "bg-fuchsia-50 dark:bg-fuchsia-950"
        },
        {
          heading: "Step 4: Filing Claims",
          content: "Notify insurer immediately after an event. Gather required documents (policy, ID, medical records, bills, FIR if applicable). Fill claim forms accurately and completely. Submit within specified timeframes. Cooperate with investigation if any. Track claim status regularly. Escalate to ombudsman if necessary. Receive settlement and verify amount. Understand tax implications of payouts.",
          image: "📝",
          colorTheme: "bg-violet-100 dark:bg-violet-900"
        }
      ],
      visualIdeas: ["Process flowcharts", "Timeline graphics", "Document checklists", "Step-by-step visuals"]
    },
    mcqQuestions: [
      {
        question: "What is the first step in buying insurance?",
        options: ["Pay premium", "Assess your needs", "File claim", "Choose agent"],
        correct: 1,
        explanation: "The first step is assessing your insurance needs based on your financial situation and goals.",
        emoji: "🎯"
      },
      {
        question: "What should you verify before buying insurance?",
        options: ["Only price", "Company credentials and claim ratio", "Color of brochure", "Office location"],
        correct: 1,
        explanation: "Always verify the insurance company's credentials, license, and claim settlement ratio.",
        emoji: "✅"
      },
      {
        question: "What is claim settlement ratio?",
        options: ["Premium rate", "Percentage of claims settled", "Coverage amount", "Bonus rate"],
        correct: 1,
        explanation: "Claim settlement ratio shows the percentage of claims settled by an insurer, indicating reliability.",
        emoji: "📊"
      },
      {
        question: "When should you inform the insurer about a claim?",
        options: ["After 6 months", "Immediately or within specified time", "After settlement", "Never"],
        correct: 1,
        explanation: "You should inform the insurer immediately or within the time period specified in the policy.",
        emoji: "📞"
      },
      {
        question: "What documents are typically needed for claims?",
        options: ["Only policy copy", "Policy, ID, relevant proofs, forms", "Just claim form", "Nothing"],
        correct: 1,
        explanation: "Claims require policy copy, identification, relevant proof (medical/death/damage), and claim forms.",
        emoji: "📄"
      },
      {
        question: "What happens during underwriting?",
        options: ["Claim payment", "Risk assessment for coverage", "Policy cancellation", "Premium refund"],
        correct: 1,
        explanation: "Underwriting is when the insurer assesses your risk profile to determine coverage and premium.",
        emoji: "🔍"
      },
      {
        question: "Should you disclose pre-existing conditions?",
        options: ["No, hide them", "Yes, disclose honestly", "Only if asked", "Never relevant"],
        correct: 1,
        explanation: "You must disclose all pre-existing conditions honestly; hiding them can lead to claim rejection.",
        emoji: "📋"
      },
      {
        question: "What is the free-look period for?",
        options: ["Free insurance", "Review and return policy", "File claims", "Skip premium"],
        correct: 1,
        explanation: "The free-look period (typically 15-30 days) lets you review the policy and return it if unsatisfied.",
        emoji: "👀"
      },
      {
        question: "How often should you review your insurance?",
        options: ["Never", "Annually and after life changes", "Every 10 years", "Only when buying"],
        correct: 1,
        explanation: "Review insurance annually and especially after major life events to ensure adequate coverage.",
        emoji: "🔄"
      },
      {
        question: "What if your claim is rejected?",
        options: ["Accept it", "Escalate to ombudsman", "Buy new policy", "Forget about it"],
        correct: 1,
        explanation: "If unsatisfied with claim rejection, you can escalate to the insurance ombudsman for review.",
        emoji: "⚖️"
      }
    ],
    quizQuestions: [
      {
        question: "What is proposal form in insurance?",
        options: ["Claim form", "Application for insurance", "Premium receipt", "Policy document"],
        correct: 1,
        explanation: "The proposal form is your insurance application where you provide details for underwriting."
      },
      {
        question: "What is the importance of policy document?",
        options: ["Just a formality", "Legal contract of coverage", "Optional reading", "Marketing material"],
        correct: 1,
        explanation: "The policy document is a legal contract outlining all terms, conditions, and coverage details."
      },
      {
        question: "Can you cancel your policy?",
        options: ["Never possible", "Yes, but may have surrender charges", "Only after maturity", "Only in free-look period"],
        correct: 1,
        explanation: "You can cancel (surrender) your policy, though surrender charges may apply depending on when you cancel."
      },
      {
        question: "What is a claim form?",
        options: ["Application form", "Document to request insurance payout", "Premium receipt", "Policy copy"],
        correct: 1,
        explanation: "A claim form is the official document used to request payment from your insurance company."
      },
      {
        question: "What is TPA in health insurance?",
        options: ["Type of policy", "Third Party Administrator for claims", "Premium amount", "Medical test"],
        correct: 1,
        explanation: "TPA (Third Party Administrator) processes health insurance claims on behalf of insurance companies."
      },
      {
        question: "What should you do immediately after buying insurance?",
        options: ["Nothing", "Verify all policy details", "File a claim", "Forget about it"],
        correct: 1,
        explanation: "Immediately verify all policy details against your requirements and report any discrepancies."
      },
      {
        question: "What is subrogation in insurance?",
        options: ["Subcategory", "Insurer's right to recover from liable third party", "Bonus benefit", "Premium discount"],
        correct: 1,
        explanation: "Subrogation is the insurer's right to recover claim amount from the party responsible for the loss."
      },
      {
        question: "What is reimbursement claim?",
        options: ["Cashless treatment", "You pay first, claim later", "Automatic payment", "No payment"],
        correct: 1,
        explanation: "In reimbursement claims, you pay for treatment first and then claim reimbursement from the insurer."
      },
      {
        question: "What is the role of a surveyor in claims?",
        options: ["Sell policies", "Assess damage and verify claim", "Pay claims", "Medical treatment"],
        correct: 1,
        explanation: "A surveyor assesses the damage or loss and verifies the claim details for the insurance company."
      },
      {
        question: "What should you do after claim settlement?",
        options: ["Nothing", "Verify amount and understand tax implications", "Cancel policy", "Buy new policy"],
        correct: 1,
        explanation: "After settlement, verify the received amount, understand any tax implications, and update records."
      }
    ]
  }
];

export default moduleContent;
