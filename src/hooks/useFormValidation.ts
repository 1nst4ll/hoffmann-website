import { useState, useCallback } from 'react';
import { ContactFormData } from '@/types';
import { validateContactForm } from '@/utils/validation';

interface ValidationState {
  errors: Partial<Record<keyof ContactFormData, string>>;
  touched: Partial<Record<keyof ContactFormData, boolean>>;
}

export const useFormValidation = (initialData: ContactFormData) => {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [validation, setValidation] = useState<ValidationState>({
    errors: {},
    touched: {}
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidation(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: true }
    }));
  }, []);

  const validateField = useCallback((name: keyof ContactFormData) => {
    const { errors } = validateContactForm(formData);
    setValidation(prev => ({
      ...prev,
      errors: { ...prev.errors, [name]: errors[name] }
    }));
  }, [formData]);

  const validateForm = useCallback(() => {
    const result = validateContactForm(formData);
    setValidation(prev => ({
      ...prev,
      errors: result.errors,
      touched: Object.keys(formData).reduce((acc, key) => ({
        ...acc,
        [key]: true
      }), {})
    }));
    return result.isValid;
  }, [formData]);

  return {
    formData,
    setFormData,
    validation,
    handleChange,
    validateField,
    validateForm
  };
};