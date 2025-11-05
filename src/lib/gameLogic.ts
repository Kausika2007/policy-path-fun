export const ladderMap: Record<number, number> = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  51: 67,
  71: 91,
  80: 99,
};

export const snakeMap: Record<number, number> = {
  17: 7,
  54: 34,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 79,
};

export const insuranceMessages: Record<number, string> = {
  // Ladders - Insurance Benefits
  1: "Great start! Health insurance protects you from unexpected medical bills. Just like this ladder, it helps you climb towards financial security!",
  4: "Life insurance provides financial protection for your loved ones. This ladder represents the security they'll have!",
  9: "Vehicle insurance shields you from accident costs. Moving up the ladder means driving with confidence!",
  21: "Home insurance protects your biggest investment. This ladder takes you closer to peace of mind!",
  28: "Critical illness insurance covers major health events. This big jump shows how it can save your finances!",
  51: "Disability insurance replaces lost income if you can't work. Climbing up means financial stability!",
  71: "Travel insurance covers trip cancellations and emergencies. This ladder represents worry-free adventures!",
  80: "Business insurance protects your livelihood. This final climb shows how it secures your future!",
  
  // Snakes - Insurance Risks
  17: "No insurance? Medical emergencies can be financially devastating. This snake shows the fall without coverage!",
  54: "Uninsured vehicle accidents lead to huge out-of-pocket costs. This setback could have been avoided!",
  62: "Without home insurance, property damage means paying everything yourself. The snake represents this financial hit!",
  64: "Skipping health insurance means no preventive care coverage. Small issues become big problems!",
  87: "No life insurance leaves your family financially vulnerable. This drop shows the risk they face!",
  93: "Uninsured business losses can mean bankruptcy. This snake represents what's at stake!",
  95: "Travel without insurance? Lost luggage or emergencies hit your wallet hard. See how quickly costs add up!",
  98: "So close to 100! But without insurance, one accident can set you back. Always be protected!",
  
  // Special positions
  100: "🎉 Congratulations! You've reached 100! You now understand the importance of insurance in protecting your future. Remember: being insured means being prepared for life's uncertainties!",
};

export const getInsuranceMessage = (position: number): string => {
  return insuranceMessages[position] || "";
};
