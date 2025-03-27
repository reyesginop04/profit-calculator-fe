import { ProductCalculation } from "../productCalculation";

export interface ProductCalculationCreateDto {
  baseCOG: string;
  shipping: string;
  duties: string;
  otherCosts: string;
  platformFee: string;
  platformFeeType: "percent" | "fixed";
  targetMargin: string;
}

export interface ProductCalculationListResponseDto extends ProductCalculation {}
