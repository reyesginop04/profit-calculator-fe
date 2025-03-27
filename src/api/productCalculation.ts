import { ProductCalculationListResponseDto } from "../types/dto/productCalculationDto";
import { http } from "./http";

export const productCalculationAPI = {
  getHistory: (): Promise<ProductCalculationListResponseDto[]> => http.get("/product-calculation/"),
};
