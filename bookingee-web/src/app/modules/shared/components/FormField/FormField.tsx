"use client"

import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form"
import { Control, FieldValues, Path, ControllerRenderProps } from "react-hook-form"
import { ReactNode } from "react"

interface FormInputFieldProps<T extends FieldValues> {
  name: Path<T> 
  label: string
  control: Control<T>
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode,
  isCustomError?: boolean
}

export function FormInputField<T extends FieldValues>({
  name,
  label,
  control,
  children,
  isCustomError = false,
}: FormInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name} 
      render={({ field }) => (
        <FormItem className="grid gap-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {children(field)}
          </FormControl>
          { isCustomError ? <FormMessage /> : null }
        </FormItem>
      )}
    />
  )
}
