# Mini Portfolio - React + TypeScript + Vite

A modern personal portfolio website built with React, TypeScript, and Vite, featuring a responsive design with Bootstrap and comprehensive form validation.

> **Note**: This project was primarily developed using **GitHub Copilot** as an AI coding assistant, demonstrating AI-powered development workflows and best practices.

## 🚀 Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive layouts
- **Multi-page Navigation**: React Router implementation with About Me, Project Gallery, and Contact pages
- **Dynamic Project Gallery**: JSON-driven project showcase with technology badges and links
- **Advanced Contact Form**: Complete form validation with real-time feedback
- **Type Safety**: Full TypeScript implementation for better development experience
- **Comprehensive Testing**: Vitest setup with React Testing Library integration
- **Modern Tooling**: Vite for fast development and building

## 📂 Project Structure

```
src/
├── pages/
│   ├── AboutMe.tsx          # Personal information and experience
│   ├── Contact.tsx          # Contact form with validation
│   └── ProjectGallery.tsx   # Dynamic project showcase
├── utilities/
│   └── validations.ts       # Reusable validation functions
├── data/
│   └── projects.json        # Project data configuration
├── test/
│   ├── setup.ts            # Test environment setup
│   ├── pages/              # Component tests
│   └── utilities/          # Utility function tests
└── App.tsx                 # Main application with routing
```

## 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript, Bootstrap 5
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Testing**: Vitest, React Testing Library, Jest DOM
- **Styling**: Bootstrap CSS + Custom SCSS
- **Form Validation**: Custom validation utilities
- **Icons**: Bootstrap Icons

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd miniportfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |

## 🧪 Testing

The project includes comprehensive test coverage:

- **Validation Tests**: Unit tests for all form validation functions
- **Component Tests**: React component testing with user interactions
- **Integration Tests**: Form submission and routing tests

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage

# Run with UI
npm run test:ui
```

## 🎨 Pages Overview

### About Me
- Personal introduction and background
- Technical skills organized by category (Frontend, Backend, Database & Tools)
- Professional experience timeline
- Education details
- Personal interests and hobbies
- Contact information with social media links

### Project Gallery
- Dynamic project cards loaded from JSON data
- Technology badges for each project
- GitHub and live demo links
- Responsive grid layout
- Project images and descriptions

### Contact
- Comprehensive contact form with validation
- Required fields: Name, Email, Subject, Message
- Optional fields: Company, Phone, Project Type, Timeline
- Real-time validation with visual feedback
- Form submission simulation
- Contact information cards
- Social media links

## 🔧 Form Validation Features

The contact form includes advanced validation:

- **Real-time Validation**: Validates fields on blur
- **Visual Feedback**: Bootstrap validation styling with error messages
- **Custom Validators**: Modular validation functions for each field type
- **Type Safety**: TypeScript interfaces for form data and errors
- **Accessibility**: Proper ARIA labels and error associations

### Validation Rules
- **Name**: Required, min 2 characters, letters and spaces only
- **Email**: Required, valid email format
- **Subject**: Required, min 5 characters
- **Phone**: Optional, international format when provided
- **Message**: Required, min 10 characters

## 🎯 Development with GitHub Copilot

This project showcases AI-assisted development using GitHub Copilot:

### Copilot-Generated Features
- **Component Structure**: React component templates and layouts
- **Validation Logic**: Complex form validation with regex patterns
- **Test Cases**: Comprehensive test suites with various scenarios
- **TypeScript Types**: Interface definitions and type safety
- **Bootstrap Integration**: Responsive layouts and styling classes
- **JSDoc Documentation**: Comprehensive function documentation

### Development Workflow
1. **Iterative Development**: Incremental feature building with AI assistance
2. **Code Refactoring**: AI-guided code organization and optimization
3. **Testing Strategy**: AI-generated test cases and scenarios
4. **Documentation**: AI-assisted JSDoc and README generation
5. **Troubleshooting**: AI-powered debugging and issue resolution

## 📋 Configuration Files

- **`vite.config.ts`**: Vite configuration with Vitest setup
- **`tsconfig.json`**: TypeScript configuration with strict mode
- **`eslint.config.js`**: ESLint configuration for React + TypeScript
- **`package.json`**: Dependencies and scripts configuration

## 🔒 ESLint Configuration

The project uses modern ESLint configuration with TypeScript support:

```js
// Current configuration supports:
// - TypeScript strict rules
// - React hooks rules
// - React refresh for Vite
// - Modern ES2020 features
```

### Expanding ESLint (Production Recommendations)

For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // For stricter rules:
      // ...tseslint.configs.strictTypeChecked,
      // For stylistic rules:
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 📊 Project Statistics

- **Components**: 3 main pages + App component
- **Validation Functions**: 6 modular validation utilities
- **Test Files**: 4 comprehensive test suites
- **Dependencies**: Modern, lightweight stack
- **TypeScript Coverage**: 100% type-safe codebase

## 🤖 AI Development Notes

This project demonstrates effective human-AI collaboration in software development:

### What GitHub Copilot Excelled At:
- ✅ Generating boilerplate code and component structures
- ✅ Creating comprehensive validation logic with regex patterns
- ✅ Writing test cases with various edge cases
- ✅ Producing detailed JSDoc documentation
- ✅ Implementing Bootstrap layouts and styling
- ✅ Troubleshooting configuration issues

### Human Oversight Required:
- 🔍 Architecture decisions and project structure
- 🔍 Business logic and user experience design
- 🔍 Code review and quality assurance
- 🔍 Integration testing and deployment decisions

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📝 License

This project is for educational and portfolio purposes. Feel free to use as a template for your own projects.

---

**Developed with ❤️ using GitHub Copilot AI assistance**
