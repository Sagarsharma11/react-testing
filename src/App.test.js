import { render, screen, fireEvent } from '@testing-library/react';
import React,{act} from 'react';
import App from './App';


// beforeAll(()=>{
//   console.log("before all hook")
// })


beforeEach(()=>{
  console.log("before each hook")
})

test.only("onClick event testing 1",()=>{
  console.log(1)
  render(<App/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Name Sagar")).toBeInTheDocument()
})

test.only("onClick event testing 2",()=>{
  console.log(2)
  render(<App/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Name Sagar")).toBeInTheDocument()
})
test.only("onClick event testing 3",()=>{
  console.log(3)
  render(<App/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Name Sagar")).toBeInTheDocument()
})

// afterAll(()=>{
//   console.log("after all hook")
// })

afterEach(()=>{
  console.log("after each hook")
})

// test.only("Change event testing", () => {
//   act(() => {
//     render(<App />);
//   });
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: "a" } });
//   expect(input.value).toBe("a");
// });



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
