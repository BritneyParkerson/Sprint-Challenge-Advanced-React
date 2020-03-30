import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('darkmode renders without crashing', () => {
  rt1.render(<App />);
});

test("renders nav", async () => {
  const { getByText } = render(<NavBar />);
  const darkMode = getByText(/Women's World Cup Athletes/i);
  expect(darkMode).toBeInTheDocument();
});