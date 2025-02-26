import { AuthService } from "@/services/auth/service";
import { toast } from "react-hot-toast";
import jwt from "jsonwebtoken";
// import { useRouter } from "next/navigation";

export const AuthHelper = {
  login: async (email, password, router) => {
    try {
      const { token, userId } = await AuthService.login(email, password);

      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24}`;
        toast.success("Login successful!");

        router.push("/");
      }
      return { token, userId };
    } catch (err) {
      toast.error(err);
    }
  },
  logout: (router) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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

export function authMiddleware(request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer "))
    return new Response(
      JSON.stringify({ success: false, message: "Unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );

  try {
    return jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}
