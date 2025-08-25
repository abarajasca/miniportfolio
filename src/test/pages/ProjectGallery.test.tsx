import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectGallery from '../../pages/ProjectGallery'

// Mock the projects data
vi.mock('../../data/projects.json', () => ({
  default: [
    {
      id: 1,
      title: 'Test Project',
      description: 'Test Description',
      technologies: ['React', 'TypeScript'],
      imageUrl: '/test-image.jpg',
      githubUrl: 'https://github.com/test',
      liveUrl: 'https://test.com'
    }
  ]
}))

describe('ProjectGallery Component', () => {
  it('should render the main heading', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('Project Gallery')).toBeInTheDocument()
  })

  it('should render project cards', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should render technology badges', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render project links', () => {
    render(<ProjectGallery />)
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /live demo/i })).toBeInTheDocument()
  })
})