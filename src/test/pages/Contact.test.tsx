import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../../pages/Contact'

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  it('should render contact form', () => {
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Send Me a Message')).toBeInTheDocument()
  })

  it('should render all form fields', () => {
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('should show validation errors for required fields', async () => {
    const user = userEvent.setup()
    
    // Try to submit empty form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Check for validation errors
    expect(screen.getByText('Full name is required')).toBeInTheDocument()
    expect(screen.getByText('Email address is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('should validate email format', async () => {
    const user = userEvent.setup()
    
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'invalid-email')
    fireEvent.blur(emailInput)

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('should submit form with valid data', async () => {
    const user = userEvent.setup()
    
    // Fill out form with valid data
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Test subject')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Thank you for your message! I\'ll get back to you soon.')).toBeInTheDocument()
    })
  })
})