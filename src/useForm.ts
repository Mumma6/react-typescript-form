import { useState, ChangeEvent, useCallback } from 'react'

export function useForm<T>(state: T) {
  const [formData, setFormData] = useState<T>(state)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const resetForm = useCallback(() => {
    setFormData(state)
  }, [state])

  return {
    formData,
    handleChange,
    resetForm,
  }
}
