import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
export const baseDataSchema = z.object({
  username: z.string().min(2, { message: "姓名至少2個字" }).optional(),
  phone: z.string().optional(),
  birthday: z.string().optional(),
  confirmPassword: z.string({ invalid_type_error: "密碼不一致" }).optional(),
  address: z.object({
    zipcode: z.string().optional(),
    detail: z.string().optional(),
  }),
});

export type BaseDataSchema = z.infer<typeof baseDataSchema>;

export const BaseDataDefaultValues: BaseDataSchema = {
  username: "",
  phone: "",
  birthday: "",
  confirmPassword: "",
  address: {
    zipcode: "",
    detail: "",
  },
};

export const BaseDataResolver = zodResolver(baseDataSchema);

export const AccountSchema = z
  .object({
    email: z.string({ required_error: "請輸入Email" }).optional(),
    password: z
      .string({ required_error: "請輸入密碼" })
      .min(8, { message: "密碼至少需要8位數" })
      .refine(
        (value) => {
          // 自定義條件：檢查是否包含英文字符
          const hasEnglish = /[a-zA-Z]/.test(value);

          return hasEnglish;
        },
        {
          message: "密碼需要包含英數混和",
        }
      )
      .optional(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "密碼不一致",
  });

export type AccountSchema = z.infer<typeof AccountSchema>;

export const AccountDefaultValues: AccountSchema = {
  password: "",
  email: "",
  confirmPassword: "",
};

export const Accountresolver = zodResolver(AccountSchema);
