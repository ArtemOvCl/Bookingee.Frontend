"use client"

import dynamic from "next/dynamic"
import Link from "next/link";

import { LuGlobe } from "react-icons/lu";

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
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <LuGlobe/>
          </div>
          Bookingeee
        </Link>
        <SignInForm />
      </div>
    </div>
  )
}

export default Page