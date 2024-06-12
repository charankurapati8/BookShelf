import React from "react";
import "@testing-library/jest-dom/"
import {render,screen } from "@testing-library/react";
import Home from "./page";

test('render link', () => {
  render(<Home/>);
  const link = screen.getByText(/Explore books/i);
  expect(link).toBeInTheDocument();
});

test('render community', () => {
  render(<Home/>);
  const link = screen.getByText(/Join the Community/i );
  expect(link).toBeInTheDocument(); 
});

test('h1 tag', () => {
  render(<Home/>);
  const link = screen.getByText(/Book store/i);
  expect(link).toBeInTheDocument()
});

test('imageslideshow', () => {
  render(<Home/>);
  const java = screen.getByAltText("topics in java");
  const py = screen.getByAltText( "basic of python");
  const re  = screen.getByAltText( "book on next");
  const ns = screen.getByAltText( "comonents of react");
  expect(java).toBeInTheDocument()
  expect(py).toBeInTheDocument()
  expect(re).toBeInTheDocument()
  expect(ns).toBeInTheDocument()
});