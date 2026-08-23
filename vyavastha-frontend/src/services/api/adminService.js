const API_BASE_URL = "http://localhost:8081/api";

export const getAllEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return await response.json();
};