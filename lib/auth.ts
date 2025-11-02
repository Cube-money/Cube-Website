// Authentication utility functions for managing auth tokens

export const AuthStorage = {
  // Store auth token
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", token);
    }
  },

  // Get auth token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("authToken");
    }
    return null;
  },

  // Remove auth token
  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!AuthStorage.getToken();
  }
};

// API helper for authenticated requests
export async function authenticatedFetch(url: string, options: RequestInit = {}) {
  const token = AuthStorage.getToken();
  
  const headers = {
    "Content-Type": "application/json",
    ...(token && { "Authorization": `Bearer ${token}` }),
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

