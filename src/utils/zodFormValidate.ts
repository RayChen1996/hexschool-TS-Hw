import { ZodRawShape, ZodObject } from "zod";

/** - `zod`表單驗證 */
export default function zodFormValidate<T extends ZodRawShape>(
  /** - `zod`物件 */
  schema: ZodObject<T>,
  /** - 要驗證的欄位 */
  pick: Partial<{ [K in keyof T]: true }>,
  /** - 要驗證的參數，需要帶入`key`物件 */
  value: Partial<{ [K in keyof T]: any }>
) {
  const result = schema.pick(pick).safeParse(value);
  return result.success || result.error.issues[0].message;
}
