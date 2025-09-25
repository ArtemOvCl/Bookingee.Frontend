"use client"

import { cn } from "@/lib/utils"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SiGoogle } from "react-icons/si"

import { signupSchema, SignupInput } from "../../schemas/sign_up.scheme"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FormInputField } from "@/app/modules/shared/components/FormField/FormField"
import { PasswordInput } from "@/app/modules/shared/components/PasswordInput/PasswordInput"

export function SignUpForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data: SignupInput) => {
    console.log("Дані реєстрації:", data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Створіть акаунт</CardTitle>
          <CardDescription>
            Реєструйтеся через email або соціальні мережі
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormInputField control={form.control} name="name" label="Ім’я">
                {(field) => <Input placeholder="Ваше ім’я" {...field} />}
              </FormInputField>

              <FormInputField control={form.control} name="email" label="Email">
                {(field) => <Input placeholder="m@example.com" {...field} />}
              </FormInputField>

              <FormInputField control={form.control} name="password" label="Пароль">
                {(field) => <PasswordInput value={field.value} onChange={field.onChange} />}
              </FormInputField>

              <FormInputField control={form.control} name="confirmPassword" label="Підтвердження паролю">
                {(field) => <Input type="password" placeholder="••••••" {...field} />}
              </FormInputField>

              <Button type="submit" className="w-full">
                Зареєструватися
              </Button>
            </form>
          </FormProvider>

          <div className="mt-6 flex flex-col gap-4">
            <div className="relative text-center text-sm after:border-t after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center">
              <span className="bg-card text-muted-foreground relative z-10 px-2">
                Або
              </span>
            </div>

            <Button variant="outline" className="w-full">
              <SiGoogle/> Увійти через Google
            </Button>
          </div>

          <div className="text-center text-sm mt-4">
            Уже є акаунт?{" "}
            <a href="/auth/sign_in" className="underline underline-offset-4">
              Увійти
            </a>
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Реєструючись, ви погоджуєтесь з{" "}
        <a href="#">Правилами користування</a> і{" "}
        <a href="#">Політикою конфіденційності</a>.
      </div>
    </div>
  )
}