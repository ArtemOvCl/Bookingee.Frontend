import { z } from "zod"

export const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Ім’я має містити щонайменше 2 символи" }),
    email: z.string().email({ message: "Некоректний email" }),
    password: z.string().min(6, { message: "Пароль має містити мінімум 6 символів" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не збігаються",
    path: ["confirmPassword"],
  })

export type SignupInput = z.infer<typeof signupSchema>
