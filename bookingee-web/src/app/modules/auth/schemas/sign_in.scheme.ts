import { z } from "zod"

export const signinSchema = z
  .object({
    email: z.string().email({ message: "Некоректний email" }),
    password: z.string()
  })

export type SigninInput = z.infer<typeof signinSchema>
