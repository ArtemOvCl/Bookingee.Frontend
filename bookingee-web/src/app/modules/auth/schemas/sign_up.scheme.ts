import { z } from "zod"

export const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Ім’я має містити щонайменше 2 символи" }),
    email: z.string().email({ message: "Некоректний email" }),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не збігаються",
    path: ["confirmPassword"],
  })

export type SignupInput = z.infer<typeof signupSchema>
