# Cypress E2E Testing Course Projects

This repository contains my learning projects and implementations from the Udemy Cypress course. It serves as a practical demonstration of end-to-end testing using Cypress, including various testing patterns and integrations.

## 🎯 Course Overview

This project is part of my learning journey through the Udemy Cypress course, which covers:

- Web automation and element interaction
- REST API testing
- Docker integration
- Page Objects & App Actions patterns
- Behavior Driven Development (BDD) with Cucumber
- Visual regression testing with Percy
- CI/CD with Jenkins
- Cloud testing with BrowserStack
- XPath implementation

## 🛠️ Prerequisites

- Node.js installed
- Basic programming knowledge
- JavaScript knowledge (advantageous)
- VS Code (recommended)
- zsh (recommended)

## 🚀 Getting Started

1. Clone the repository:
```zsh
git clone https://github.com/yourusername/udemy-cypress.git
```

2. Install dependencies:
```zsh
npm install
```

## 📁 Project Structure

```
udemy-cypress/
├── cypress/           # Cypress test files
├── node_modules/      # Project dependencies
├── .prettierrc       # Code formatting configuration
├── package.json      # Project configuration
└── README.md         # This file
```

## 🧪 Running Tests

### MRCOOL Website Tests

Test the MRCOOL website in different environments:

```zsh
npm run test:dev    # Tests dev.mrcool.work
npm run test:prod   # Tests mrcool.work
```

The test suite (`cypress/e2e/mrcool-landing.cy.js`) verifies:
- Page loading and URL validation
- Title verification
- Navigation elements
- Meta tags
- Required assets (scripts and stylesheets)

### Example Tests

Run the example tests from the Cypress course:

```zsh
npm run test:example    # Tests example.com
```

The example tests (`cypress/e2e/example.cy.js`) demonstrate basic Cypress functionality.

## 📚 Learning Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress API Reference](https://docs.cypress.io/api/table-of-contents)

## 🤝 Contributing

This is a learning repository, but suggestions and improvements are welcome! Please feel free to submit issues and pull requests.

## 👤 Author

Jason Hargrove

---
Made with ☢️ as part of my Cypress learning journey 