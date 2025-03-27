import { User } from "../user";

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  message: string;
  token: string;
}
export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponseDto {
  message: string;
  user: User;
}
