import React from "react";
import { render,screen } from "@testing-library/react";
import Home from "./page";

test('render link ', () => {
  render(<Home/>);
  const link = screen.getByText('link',{name:/Explore books/i});
  expect(link).toBeInTheDocument();
});
