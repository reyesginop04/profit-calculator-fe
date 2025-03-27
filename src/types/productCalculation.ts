export interface ProductCalculation {
  _id: string;
  userId: string;
  baseCOG: number;
  shipping: number;
  duties: number;
  otherCosts: number;
  platformFee: number;
  platformFeeType: "percent" | "fixed";
  targetMargin: number;
  landedCost: number;
  finalCOG: number;
  suggestedPrice: number;
  profit: number;
  profitMargin: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
