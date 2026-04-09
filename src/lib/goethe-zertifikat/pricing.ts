export const PRICING = {
  free: { name: "Free", price: 0, currency: "EUR", interval: null, features: ["10 questions / day","Basic analytics","All levels"] },
  premium: { name: "Premium", price: 4.99, currency: "EUR", interval: "month" as const, features: ["Unlimited questions","AI-powered study paths","Writing feedback","Offline mode","Priority support"] },
} as const;

export type PricingTier = keyof typeof PRICING;
