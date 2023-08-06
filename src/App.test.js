import { render } from '@testing-library/react';
import App from './App';
import React from "react";

test('renderiza un h1 de prueba', () => {
  const {getByText} = render (<App/>);
  const h1 = getByText(/Hola React Testing Library/);
  expect(h1).toHaveTextContent(
    "Hola React Testing Library"
  );

});
