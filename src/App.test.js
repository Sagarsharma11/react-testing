import { render, screen, fireEvent } from '@testing-library/react';
import React,{act} from 'react';
import App from './App';

test.only("Change event testing", () => {
  act(() => {
    render(<App />);
  });
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});



// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import { act } from 'react';

// test("test first react app", ()=>{
//   act(() => {
//     render(<App />);
//   });
//   const text = screen.getByText(/First React Test Case/i);
//   const title = screen.getByTitle(/AI generated image/i);
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// })

// test("Testing input box",()=>{
//   act(() => {
//     render(<App />);
//   });
//   let checkInput = screen.getByRole("textbox");
//   let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceHolder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name", "username");
//   expect(checkInput).toHaveAttribute("id", "userId")
//   expect(checkInput).toHaveAttribute("type", "text")
//   expect(checkInput).toHaveAttribute("value", "sagar")
// })
