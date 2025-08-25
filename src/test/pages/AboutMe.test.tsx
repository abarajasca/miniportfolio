import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AboutMe from '../../pages/AboutMe'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('AboutMe Component', () => {
  it('should render the main heading', () => {
    renderWithRouter(<AboutMe />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('should render profile information', () => {
    renderWithRouter(<AboutMe />)
    expect(screen.getByText('Hello, I\'m John Doe')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer | Problem Solver | Technology Enthusiast')).toBeInTheDocument()
  })

  it('should render technical skills section', () => {
    renderWithRouter(<AboutMe />)
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render experience section', () => {
    renderWithRouter(<AboutMe />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  })

  it('should render contact links', () => {
    renderWithRouter(<AboutMe />)
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })
})