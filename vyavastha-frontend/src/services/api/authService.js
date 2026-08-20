import API_BASE_URL from "./api";

export async function registerUser(userData) {
  const response = await fetch(
    `${API_BASE_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Registration failed"
    );
  }

  return data;
}

export async function loginUser(credentials) {
  const response = await fetch(
    `${API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // Allows browser to send/receive JSESSIONID
      credentials: "include",

      body: JSON.stringify(credentials),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
}

export async function getCurrentUser() {
  const response = await fetch(
    `${API_BASE_URL}/api/auth/me`,
    {
      method: "GET",

      // Sends JSESSIONID to Spring Boot
      credentials: "include",
    }
  );

  if (response.status === 401) {
    return null;
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to get current user"
    );
  }

  return data;
}
export async function logoutUser() {
  const response = await fetch(
    `${API_BASE_URL}/api/auth/logout`,
    {
      method: "POST",


      credentials: "include",
    }
  );

  if (!response.ok && response.status !== 401) {
    throw new Error("Logout failed");
  }

  return true;
}