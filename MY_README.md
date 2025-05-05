# Mastering React Test-Driven Development, Second Edition (islomar's notes)
- https://github.com/islomar/Mastering-React-Test-Driven-Development-Second-Edition

## Part 1 - Exploring the TDD Workflow
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
  - we need Babel, which transpiles a few different things for us: React’s JavaScript Syntax Extension (JSX) templating syntax, module mocks (which we’ll meet in Chapter 7, Testing useEffect and Mocking Components), and various draft ECMAScript constructs that we’ll use.
  - A Babel preset is a set of plugins. Each plugin enables a specific feature of the ECMAScript standards or a preprocessor such as JSX.
- **jsdom**
  - `npm install --save-dev jest-environment-jsdom`
  - we need to specify a test environment of jsdom.
  - A test environment is a piece of code that runs before and after your test suite to perform setup and teardown. For the jsdom test environment, it instantiates a new JSDOM object and sets global and document objects, turning Node.js into a browser-like environment.
  - `jsdom` is a package that contains a headless implementation of the Document Object Model (DOM) that runs on Node.js. In effect, it turns Node.js into a browser-like environment that responds to the usual DOM APIs, such as the document API we’re trying to access in this test.
- We tend to avoid using default exports as doing so keeps the name of our component and its usage in sync.
- The `act` function has changed between the React 18 of the course and 19:
  - https://react.dev/warnings/react-dom-test-utils
- Although we’re using it here, the `act` function is not required for testing React
  - https://reacttdd.com/understanding-act

## Bookmark
https://learning.oreilly.com/library/view/mastering-react-test-driven/9781803247120/B18423_01.xhtml#_idParaDest-24