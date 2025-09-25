"use client"

import { useId, useMemo, useState } from "react"
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PasswordInputProps {
  value: string
  onChange: (val: string) => void
  label?: string
}

export function PasswordInput({ value, onChange, label }: PasswordInputProps) {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible((prev) => !prev)

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ]
    return requirements.map((req) => ({ ...req, met: req.regex.test(pass) }))
  }

  const strength = useMemo(() => checkStrength(value), [value])
  const strengthScore = useMemo(() => strength.filter((r) => r.met).length, [strength])
  const getStrengthColor = (score: number) => {
    if (score <= 1) return "bg-red-500"
    if (score <= 2) return "bg-orange-500"
    if (score === 3) return "bg-amber-500"
    return "bg-emerald-500"
  }

  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <Input
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder="••••••"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pe-9"
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center"
          aria-label={isVisible ? "Hide password" : "Show password"}
        >
          {isVisible ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </button>
      </div>

      <div className="bg-border mt-2 h-1 w-full rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        />
      </div>

      <ul className="mt-1 space-y-1 text-xs">
        {strength.map((req, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {req.met ? <CheckIcon size={16} className="text-emerald-500" /> : <XIcon size={16} className="text-muted-foreground/80" />}
            {req.text}
          </li>
        ))}
      </ul>
    </div>
  )
}