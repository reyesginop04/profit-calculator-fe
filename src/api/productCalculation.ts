import {
  ProductCalculationCreateDto,
  ProductCalculationCreateResponseDto,
  ProductCalculationListResponseDto,
  ProductCalculationUpdateDto,
  ProductCalculationUpdateResponseDto,
} from "../types/dto/productCalculationDto";
import { http } from "./http";

export const productCalculationAPI = {
  getHistory: (): Promise<ProductCalculationListResponseDto[]> => http.get("/product-calculation/"),
  create: (data: ProductCalculationCreateDto): Promise<ProductCalculationCreateResponseDto> =>
    http.post("/product-calculation", data),
  update: (id: string, data: ProductCalculationUpdateDto): Promise<ProductCalculationUpdateResponseDto> =>
    http.put(`/product-calculation/${id}`, data),
  delete: (id: string): Promise<void> => http.delete(`/product-calculation/${id}`),
};
