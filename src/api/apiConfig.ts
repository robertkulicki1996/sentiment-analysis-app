export const apiConfig = {
  API_URL: import.meta.env.VITE_HUGGING_FACE_API_URL,
  API_KEY: import.meta.env.VITE_HUGGING_FACE_API_KEY,
  GRAPHQL_SERVER_URL: import.meta.env.VITE_GRAPHQL_SERVER_URL,
  
  getHeaders: () => ({
    Authorization: `Bearer ${import.meta.env.VITE_HUGGING_FACE_API_KEY}`,
    "Content-Type": "application/json",
  }),
};