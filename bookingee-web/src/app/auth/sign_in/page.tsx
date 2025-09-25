"use client"

import dynamic from "next/dynamic"

import CompanyName from "@/app/modules/shared/components/CompanyName/CompanyName"

const SignInForm = dynamic(
  () =>
    import("@/app/modules/auth/components/SignInForm/SignInForm").then(
      (mod) => mod.SignInForm
    ),
  { ssr: false }
)

const Page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <CompanyName />
        <SignInForm />
      </div>
    </div>
  )
}

export default Page