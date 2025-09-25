"use client"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"

import { SiGoogle } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInputField } from "@/app/modules/shared/components/FormField/FormField"
import { signinSchema, SigninInput } from "../../schemas/sign_in.scheme"

export function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<SigninInput>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = (data: SigninInput) => {
    console.log("Дані логіну:", data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Увійти в акаунт</CardTitle>
          <CardDescription>Введіть ваш email та пароль</CardDescription>
        </CardHeader>

        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormInputField control={form.control} name="email" label="Email">
                {(field) => <Input placeholder="m@example.com" {...field} />}
              </FormInputField>

              <FormInputField control={form.control} name="password" label="Пароль">
                {(field) => <Input type="password" placeholder="••••••" {...field} />}
              </FormInputField>

              <Button type="submit" className="w-full mt-2">
                Увійти
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
            Ще немає акаунту?{" "}
            <a href="/auth/sign_up" className="underline underline-offset-4">
              Зареєструватися
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}