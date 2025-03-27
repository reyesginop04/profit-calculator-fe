import { useEffect, useState } from "react";
import { userAPI } from "../api/user";
import { User } from "../types/user";

// Hook definition
export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userAPI.getProfile();

      if (response) {
        setUserProfile(response);
      } else {
        throw new Error("Invalid response format.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { userProfile, loading, error };
};
