# Contributing to Heecshi Discord Bot Website

Thank you for your interest in contributing to the Heecshi Discord Bot Website! We welcome contributions from everyone who wishes to improve this project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Exercise consideration and empathy
- Focus on what is best for the community
- Use welcoming and inclusive language
- Be collaborative and constructive

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/heecshi-website.git
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/Hoocs151/heecshi-website.git
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file from `.env.example`
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Make your changes
5. Test your changes:
   ```bash
   npm run test
   npm run lint
   ```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure your code follows our style guidelines
3. Run all tests and ensure they pass
4. Update the documentation if necessary
5. Submit a pull request with a clear description of the changes

### PR Title Format
- feat: Add new feature
- fix: Fix a bug
- docs: Update documentation
- style: Format code
- refactor: Refactor code
- test: Add tests
- chore: Update build tasks, etc.

## Style Guidelines

### JavaScript/TypeScript
- Use ES6+ features
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### CSS/Tailwind
- Follow the BEM naming convention for custom CSS
- Prefer Tailwind utility classes when possible
- Keep styles modular and reusable

### Components
- Keep components small and focused
- Use TypeScript for type safety
- Follow React best practices
- Document props with JSDoc comments

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests in the commit body

Example:
```
feat: Add custom cursor animation

- Implement smooth cursor following
- Add hover effects for interactive elements
- Optimize performance with RAF

Fixes #123
```

## Issue Reporting

When creating an issue, please include:
- A clear and descriptive title
- Detailed steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information
- Any relevant code snippets

### Issue Templates
- Bug Report
- Feature Request
- Documentation Update
- Performance Issue

## Questions?

If you have any questions, feel free to:
- Open an issue
- Contact the maintainers
- Join our community discussions

Thank you for contributing to make Heecshi Discord Bot Website better! 🚀 