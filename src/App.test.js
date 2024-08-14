import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from 'react';

test("test first react app", ()=>{
  act(() => {
    render(<App />);
  });
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle(/AI generated image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("Testing input box",()=>{
  act(() => {
    render(<App />);
  });
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
})