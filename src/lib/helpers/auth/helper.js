import { AuthService } from "@/services/auth/service";
import { toast } from "react-hot-toast";

export const AuthHelper = {
  login: async (email, password, router) => {
    try {
      const { token, userId } = await AuthService.login(email, password);

      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        toast.success("Login successful!");

        router.push("/");
      }
      return { token, userId };
    } catch (err) {
      toast.error(err);
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/login");
  },
  signup: async (email, password, router) => {
    try {
      const { token, userId } = await AuthService.signup(email, password);

      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        toast.success("Sigup successful!");

        router.push("/login");
      }
      return { token, userId };
    } catch (err) {
      toast.error(err);
    }
  },
};
