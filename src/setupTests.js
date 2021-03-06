// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

enzyme.configure({ adapter: new Adapter() });
