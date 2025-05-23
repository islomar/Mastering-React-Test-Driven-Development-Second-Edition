# Mastering React Test-Driven Development, Second Edition (islomar's notes)

- https://github.com/islomar/Mastering-React-Test-Driven-Development-Second-Edition
- 4 parts, 19 chapters

## Part 1 - Exploring the TDD Workflow

### Chapter 1: First Steps with Test-Driven Development

```
mkdir appointments
cd appointments
npm init
npm install --save-dev jest
git commit -m "Blank project with Jest dependency"

npm install --save react react-dom
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

- **Babel**
    - we need Babel, which transpiles a few different things for us: React’s JavaScript Syntax Extension (JSX)
      templating syntax, module mocks (which we’ll meet in Chapter 7, Testing useEffect and Mocking Components), and
      various draft ECMAScript constructs that we’ll use.
    - A Babel preset is a set of plugins. Each plugin enables a specific feature of the ECMAScript standards or a
      preprocessor such as JSX.
- **jsdom**
    - `npm install --save-dev jest-environment-jsdom`
    - we need to specify a test environment of jsdom.
    - A test environment is a piece of code that runs before and after your test suite to perform setup and teardown.
      For the jsdom test environment, it instantiates a new JSDOM object and sets global and document objects, turning
      Node.js into a browser-like environment.
    - `jsdom` is a package that contains a headless implementation of the Document Object Model (DOM) that runs on
      Node.js. In effect, it turns Node.js into a browser-like environment that responds to the usual DOM APIs, such as
      the document API we’re trying to access in this test.
- We tend to avoid using default exports as doing so keeps the name of our component and its usage in sync.
- React’s `act` function was introduced in React 17 and has seen updates in React 18.
- The `act` function has changed between the React 18 of the course and 19:
    - https://react.dev/warnings/react-dom-test-utils
- Although we’re using it here, the `act` function is not required for testing React
    - https://reacttdd.com/understanding-act
- https://babeljs.io/docs/babel-preset-env
- https://reacttdd.com/use-of-let

### Chapter 2: Rendering Lists and Detail Views

- Hooks are a feature of React that manages various non-rendering related operations.
- The `useState` hook stores data across multiple renders of your function.
- Jest uses Babel to transpile all our code when it’s run in the test environment. But what about when we’re serving our
  code via our website? Jest won’t be able to help us there.
    - That’s where **webpack** comes in
    - `npm install --save-dev webpack webpack-cli babel-loader`
- `npm run build`

### Chapter 3: Refactoring the Test Suite
- Jest matchers:
  - The following GitHub repository contains useful matchers for testing React components: https://github.com/jest-community/jest-extended
  - The following link provides the source of Jest’s matcher utilities, which I find useful for figuring out how to write simple matchers: https://github.com/facebook/jest/tree/main/packages/jest-matcher-utils

### Chapter 4: Test-Driving Data Input
- https://github.com/PacktPublishing/Mastering-React-Test-Driven-Development-Second-Edition/tree/main/Chapter04
- Always consider React warnings to be a test failure. Don’t proceed without first fixing any warnings.
- React does some pretty clever stuff on top of the DOM’s usual event system.

### Chapter 5: Adding Complex Form Interactions
- defaultProps is a nifty mechanism that React offers for setting default prop values that will be used when required props are not explicitly provided.

### Chapter 6: Exploring Test Doubles
- TBD

### Chapter 7: Testing useEffect and Mocking Components
- TBD

### Chapter 8: Building an Application Component
- TBD

## Part 2 – Building Application Features

### TBD

- TBD

## Part 3 – Interactivity

### TBD

- TBD

## Part 4 – Behavior-Driven Development with Cucumber

### TBD

- TBD

## Bookmark

https://learning.oreilly.com/library/view/mastering-react-test-driven/9781803247120/B18423_04.xhtml#_idParaDest-74
Duplicating tests for multiple form fields