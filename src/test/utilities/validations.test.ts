import { describe, it, expect } from 'vitest'
import { 
  validateName, 
  validateEmail, 
  validateSubject, 
  validatePhone, 
  validateMessage,
  validateField 
} from '../../utilities/validations'

describe('validateName', () => {
  it('should return empty string for valid names', () => {
    expect(validateName('John Doe')).toBe('')
    expect(validateName('Jane Smith')).toBe('')
    expect(validateName('Mara Garcia')).toBe('')
  })

  it('should return error for empty or whitespace names', () => {
    expect(validateName('')).toBe('Full name is required')
    expect(validateName('   ')).toBe('Full name is required')
  })

  it('should return error for names too short', () => {
    expect(validateName('J')).toBe('Name must be at least 2 characters')
  })

  it('should return error for names with invalid characters', () => {
    expect(validateName('John123')).toBe('Name can only contain letters and spaces')
    expect(validateName('John@Doe')).toBe('Name can only contain letters and spaces')
  })
})

describe('validateEmail', () => {
  it('should return empty string for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe('')
    expect(validateEmail('user.name+tag@domain.co.uk')).toBe('')
  })

  it('should return error for empty email', () => {
    expect(validateEmail('')).toBe('Email address is required')
    expect(validateEmail('   ')).toBe('Email address is required')
  })

  it('should return error for invalid email formats', () => {
    expect(validateEmail('invalid-email')).toBe('Please enter a valid email address')
    expect(validateEmail('test@')).toBe('Please enter a valid email address')
    expect(validateEmail('@example.com')).toBe('Please enter a valid email address')
  })
})

describe('validateSubject', () => {
  it('should return empty string for valid subjects', () => {
    expect(validateSubject('Project inquiry')).toBe('')
    expect(validateSubject('Hello there')).toBe('')
  })

  it('should return error for empty subject', () => {
    expect(validateSubject('')).toBe('Subject is required')
  })

  it('should return error for subjects too short', () => {
    expect(validateSubject('Hi')).toBe('Subject must be at least 5 characters')
  })
})

describe('validatePhone', () => {
  it('should return empty string for valid phone numbers', () => {
    expect(validatePhone('')).toBe('') // Optional field
    expect(validatePhone('+1 555-123-4567')).toBe('')
    expect(validatePhone('555 123 4567')).toBe('')
    expect(validatePhone('15551234567')).toBe('')
  })

  it('should return error for invalid phone numbers', () => {
    expect(validatePhone('abc123')).toBe('Please enter a valid phone number')
    expect(validatePhone('123')).toBe('Please enter a valid phone number')
  })
})

describe('validateMessage', () => {
  it('should return empty string for valid messages', () => {
    expect(validateMessage('This is a detailed message')).toBe('')
    expect(validateMessage('Hello there, this is a test')).toBe('')
  })

  it('should return error for empty message', () => {
    expect(validateMessage('')).toBe('Message is required')
  })

  it('should return error for messages too short', () => {
    expect(validateMessage('Short')).toBe('Message must be at least 10 characters')
  })
})

describe('validateField', () => {
  it('should route to correct validation functions', () => {
    expect(validateField('name', 'John Doe')).toBe('')
    expect(validateField('email', 'test@example.com')).toBe('')
    expect(validateField('subject', 'Valid subject')).toBe('')
    expect(validateField('phone', '+1234567890')).toBe('')
    expect(validateField('message', 'This is a valid message')).toBe('')
  })

  it('should return empty string for unknown fields', () => {
    expect(validateField('unknown', 'any value')).toBe('')
  })
})