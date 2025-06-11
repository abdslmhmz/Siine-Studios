"use client"

import { useCallback } from "react"

export const useFormValidation = () => {
  const validateForm = useCallback((formData) => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill in all required fields."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address."
    }

    return null
  }, [])

  return { validateForm }
}
