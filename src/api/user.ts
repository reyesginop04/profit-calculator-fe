import { GetUserProfileResponseDto } from "../types/dto/userDto";
import { http } from "./http";

export const userAPI = {
  getProfile: (): Promise<GetUserProfileResponseDto> => http.get("/users/profile"),
};
