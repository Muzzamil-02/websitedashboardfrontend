import client from "../client";

export const AuthService = {
  login: async (email, password) => {
    return client.post("/auth/login", { email: email, password: password });
  },
  signup: async (email, password) => {
    return client.post("/auth/signup", { email: email, password: password });
  },
};
