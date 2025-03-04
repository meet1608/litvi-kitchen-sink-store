
export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export const validateContactForm = (
  name: string,
  email: string,
  message: string
): ValidationResult => {
  const errors: ValidationResult["errors"] = {};
  let isValid = true;

  // Name validation
  if (!name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Message validation
  if (!message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
    isValid = false;
  }

  return { isValid, errors };
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  // This would normally be an API call to submit the form
  // Simulating an API call with a timeout
  return new Promise<{ success: boolean; message: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for your enquiry! We'll get back to you shortly.",
      });
    }, 1500);
  });
};
