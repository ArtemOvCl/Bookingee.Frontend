import React from 'react'
import Link from 'next/link'
import { LuGlobe } from "react-icons/lu";

const CompanyName = () => {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-medium">
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <LuGlobe/>
        </div>
        Bookingeee
    </Link>
  )
}

export default CompanyName
