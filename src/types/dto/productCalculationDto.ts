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

export interface ProductCalculationUpdateDto extends ProductCalculationCreateDto {}

export interface ProductCalculationListResponseDto extends ProductCalculation {}

export interface ProductCalculationCreateResponseDto {
  message: string;
  productCalculation: ProductCalculation;
}
export interface ProductCalculationUpdateResponseDto {
  message: string;
  productCalculation: ProductCalculation;
}
