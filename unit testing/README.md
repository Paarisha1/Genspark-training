# React Vite + TypeScript App 🚀  

This repository features a modern React application, leveraging Vite for its fast build times and TypeScript for type safety. It is crafted with a focus on robust testing practices, including the AAA (Arrange-Act-Assert) model, Test-Driven Development (TDD), and optimized test file organization for scalability and maintainability.  

## Features ✨  
- **React + Vite**: High-performance development experience with instant hot reloading.  
- **TypeScript**: Strongly-typed codebase for enhanced reliability and reduced runtime errors.  
- **Testing Excellence**:  
  - **Vitest**: A lightweight, Vite-native testing framework for blazing-fast tests.  
  - **Vitest UI**: Interactive test runner for debugging and analysis.  
  - **Jest**: Trusted and feature-rich testing framework for additional coverage needs.  
  - **AAA Model**: Tests written using the Arrange-Act-Assert methodology for clarity and consistency.  
  - **Test-Driven Development (TDD)**: Development driven by well-structured, pre-written tests.  
  - **Optimized Test Files**: Scalable file structure with clear naming conventions and module isolation.  
- **Best Practices**: Linting, Prettier, and commit hooks for consistent code quality.  

## Getting Started 🛠️  

### Prerequisites  
Ensure you have the following installed:  
- **Node.js**: Version 16 or higher  
- **Package Manager**: npm or yarn  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/arin-paliwal/React-Typescript-Unit-Testing.git  
   cd React-Typescript-Unit-Testing  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   # or  
   yarn install  
   ```  

3. Start the development server:  
   ```bash  
   npm run dev  
   # or  
   yarn dev  
   ```  

4. Run the test suite:  
   ```bash  
   npm run test  
   # or  
   yarn test  
   ```  

## Testing Workflow 🔍  

### Writing Tests  
- Follow the **AAA Model**:  
  - **Arrange**: Set up test data, mocks, or initial states.  
  - **Act**: Perform the action or invoke the function being tested.  
  - **Assert**: Verify the results against expectations.  

### Running Tests  
- **Vitest**: For fast, Vite-optimized tests.  
  ```bash  
  npm run test  
  ```  
- **Vitest UI**: To visualize and debug tests interactively.  
  ```bash  
  npm run test:ui  
  ```  
- **Jest**: For scenarios needing more extensive capabilities.  
  ```bash  
  npm run test:jest  
  ``` 

## Development Approach 🚀  

### Test-Driven Development (TDD)  
1. Write tests first, describing desired functionality.  
2. Implement the code to pass the tests.  
3. Refactor code while ensuring tests remain green.  

### Performance Optimizations ⚡  
- Minimal dependencies for fast builds.  
- Efficient testing configurations for parallel execution.  

## Contributing 🤝  
Contributions are welcome! Feel free to open an issue or submit a pull request for enhancements or bug fixes.  

## License 📜  
This project is licensed under the MIT License.  