import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
export const signInSchema = z.object({
  password: z.string({ required_error: "請輸入密碼" }),
  email: z.string({ required_error: "請輸入Email" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const defaultValues: SignInSchema = {
  email: "",
  password: "",
};

export const resolver = zodResolver(signInSchema);
