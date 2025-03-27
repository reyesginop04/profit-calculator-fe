import { LoginDto, LoginResponseDto, RegisterDto, RegisterResponseDto } from "../types/dto/authDto";
import { http } from "./http";

export const authAPI = {
  login: (body: LoginDto): Promise<LoginResponseDto> => http.post("/auth/login", body),
  register: (body: RegisterDto): Promise<RegisterResponseDto> => http.post("/auth/register", body),
};
