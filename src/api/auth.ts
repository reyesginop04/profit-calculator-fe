import { LoginDto, LoginResponseDto } from "../types/dto/loginDto";
import { http } from "./http";

export const authAPI = {
  login: (credentials: LoginDto): Promise<LoginResponseDto> => http.post("/auth/login", credentials),
};
