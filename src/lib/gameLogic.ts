// Optimized for 15 moves maximum with educational snake/ladder encounters
export const ladderMap: Record<number, number> = {
  3: 22,   // Early boost - Learn about insurance basics
  8: 31,   // Health insurance benefit
  14: 35,  // Life insurance protection
  20: 42,  // Home insurance security
  28: 50,  // Vehicle insurance coverage
  36: 57,  // Critical illness benefit
  45: 67,  // Disability insurance climb
  52: 73,  // Travel insurance advantage
  63: 81,  // Business insurance growth
  72: 91,  // Investment insurance leap
};

export const snakeMap: Record<number, number> = {
  25: 5,   // No health insurance - major setback
  33: 15,  // Uninsured vehicle accident
  48: 26,  // Property damage without coverage
  55: 37,  // Skipping preventive care
  68: 49,  // No life insurance risk
  78: 58,  // Business without coverage
  85: 65,  // Travel emergency costs
  96: 76,  // Near win but unprotected!
};

export const insuranceMessages: Record<number, string> = {
  // Ladders - Insurance Benefits
  3: "Smart start! Basic insurance knowledge is your foundation. This ladder shows how learning protects you!",
  8: "Health insurance covers medical bills and preventive care. This climb represents wellness and security!",
  14: "Life insurance ensures your family's future. Moving up means protecting those you love most!",
  20: "Home insurance guards your biggest asset. This ladder represents the safety of having coverage!",
  28: "Vehicle insurance covers accidents and damages. Climbing higher means driving with confidence!",
  36: "Critical illness insurance handles major health costs. This jump shows financial protection in crisis!",
  45: "Disability insurance replaces income if you can't work. Moving up ensures financial stability!",
  52: "Travel insurance covers emergencies abroad. This ladder means exploring the world worry-free!",
  63: "Business insurance protects your livelihood. Climbing up secures your entrepreneurial dreams!",
  72: "Investment insurance safeguards your financial future. This leap represents growing wealth safely!",
  
  // Snakes - Insurance Risks
  25: "Without health insurance, medical bills can bankrupt you! This major fall shows the danger of being uninsured.",
  33: "Uninsured vehicle accident costs are devastating. This snake shows how quickly finances collapse without coverage!",
  48: "Property damage without insurance means losing everything. This setback could have been prevented!",
  55: "Skipping insurance means no safety net. Small problems become catastrophes - see how far you fall!",
  68: "No life insurance? Your family faces financial ruin. This snake shows the risk of being unprotected!",
  78: "Business losses without coverage can mean bankruptcy. This drop represents unprotected entrepreneurship!",
  85: "Travel emergencies without insurance drain your savings. See how costly it gets without protection!",
  96: "So close to winning! But one uninsured incident changes everything. This snake teaches: always be protected!",
  
  // Special positions
  100: "🎉 CONGRATULATIONS! YOU WIN! 🎉\n\nYou've completed your Insurance Awareness Journey! You now understand how insurance protects against life's uncertainties. Remember: Being insured means being prepared for anything life throws at you!",
};

export const getInsuranceMessage = (position: number): string => {
  return insuranceMessages[position] || "";
};
