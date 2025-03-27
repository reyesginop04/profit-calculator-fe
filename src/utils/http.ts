const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type FetchOptions = RequestInit & { params?: Record<string, string | number> };

const request = async <T>(url: string, { params, headers, ...options }: FetchOptions = {}): Promise<T> => {
  try {
    // Build URL with query params
    const queryString = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    const fullUrl = `${BASE_URL}${url}${queryString}`;

    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API Error");
    }

    return response.json();
  } catch (error) {
    console.error("HTTP Request Failed:", error);
    throw error;
  }
};

export const http = {
  get: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "GET" }),
  post: <T>(url: string, body: any, options?: FetchOptions) =>
    request<T>(url, { ...options, method: "POST", body: JSON.stringify(body) }),
  put: <T>(url: string, body: any, options?: FetchOptions) =>
    request<T>(url, { ...options, method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "DELETE" }),
};
