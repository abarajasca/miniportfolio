/**
 * Validates a full name field
 * @param value - The name string to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Validation rules:
 * - Must not be empty or whitespace only
 * - Must be at least 2 characters long
 * - Must contain only letters and spaces
 * 
 * @example
 * validateName("John Doe") // returns ""
 * validateName("J") // returns "Name must be at least 2 characters"
 * validateName("John123") // returns "Name can only contain letters and spaces"
 */
export const validateName = (value: string): string => {
  if (!value.trim()) return 'Full name is required';
  if (value.trim().length < 2) return 'Name must be at least 2 characters';
  if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters and spaces';
  return '';
};

/**
 * Validates an email address field
 * @param value - The email string to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Validation rules:
 * - Must not be empty or whitespace only
 * - Must match standard email format (user@domain.tld)
 * 
 * @example
 * validateEmail("user@example.com") // returns ""
 * validateEmail("invalid-email") // returns "Please enter a valid email address"
 * validateEmail("") // returns "Email address is required"
 */
export const validateEmail = (value: string): string => {
  if (!value.trim()) return 'Email address is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return 'Please enter a valid email address';
  return '';
};

/**
 * Validates a subject field
 * @param value - The subject string to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Validation rules:
 * - Must not be empty or whitespace only
 * - Must be at least 5 characters long
 * 
 * @example
 * validateSubject("Project inquiry") // returns ""
 * validateSubject("Hi") // returns "Subject must be at least 5 characters"
 * validateSubject("") // returns "Subject is required"
 */
export const validateSubject = (value: string): string => {
  if (!value.trim()) return 'Subject is required';
  if (value.trim().length < 5) return 'Subject must be at least 5 characters';
  return '';
};

/**
 * Validates a phone number field
 * @param value - The phone number string to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Validation rules:
 * - Field is optional (empty values are valid)
 * - If provided, must match international phone format
 * - Allows optional country code (+)
 * - Supports common formatting characters (spaces, dashes, parentheses)
 * - Must start with digit 1-9, followed by up to 15 digits
 * 
 * @example
 * validatePhone("") // returns "" (optional field)
 * validatePhone("+1 555-123-4567") // returns ""
 * validatePhone("555 123 4567") // returns ""
 * validatePhone("abc123") // returns "Please enter a valid phone number"
 */
export const validatePhone = (value: string): string => {
  if (!value) return ''; // Empty is valid (optional field)
  
  const cleanedValue = value.replace(/[\s\-\(\)]/g, '');
  
  // Check minimum length (at least 7 digits for a valid phone number)
  if (cleanedValue.length < 7) {
    return 'Please enter a valid phone number';
  }
  
  // Check format: optional +, then 1-9, then 6-14 more digits (total 7-15)
  if (!/^[\+]?[1-9][\d]{6,14}$/.test(cleanedValue)) {
    return 'Please enter a valid phone number';
  }
  
  return '';
};

/**
 * Validates a message/textarea field
 * @param value - The message string to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Validation rules:
 * - Must not be empty or whitespace only
 * - Must be at least 10 characters long
 * 
 * @example
 * validateMessage("This is a detailed message") // returns ""
 * validateMessage("Short") // returns "Message must be at least 10 characters"
 * validateMessage("") // returns "Message is required"
 */
export const validateMessage = (value: string): string => {
  if (!value.trim()) return 'Message is required';
  if (value.trim().length < 10) return 'Message must be at least 10 characters';
  return '';
};

/**
 * Generic field validator that routes to specific validation functions
 * @param name - The field name to determine validation type
 * @param value - The field value to validate
 * @returns Empty string if valid, error message if invalid
 * 
 * Supported field names:
 * - 'name': Routes to validateName()
 * - 'email': Routes to validateEmail()
 * - 'subject': Routes to validateSubject()
 * - 'phone': Routes to validatePhone()
 * - 'message': Routes to validateMessage()
 * - Other field names return empty string (no validation)
 * 
 * @example
 * validateField("name", "John Doe") // returns ""
 * validateField("email", "invalid") // returns "Please enter a valid email address"
 * validateField("unknown", "any value") // returns ""
 */
export const validateField = (name: string, value: string): string => {
  switch (name) {
    case 'name':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'subject':
      return validateSubject(value);
    case 'phone':
      return validatePhone(value);
    case 'message':
      return validateMessage(value);
    default:
      return '';
  }
};