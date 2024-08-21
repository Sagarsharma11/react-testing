// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import { act } from 'react';

// test("other first react app", ()=>{
//   act(() => {
//     render(<App />);
//   });
//   const text = screen.getByText(/First React Test Case/i);
//   const title = screen.getByTitle(/AI generated image/i);
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// })

// test("other input box",()=>{
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

// describe("UI testing, test group 1", ()=>{
//   test("test case 1",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
//   test("test case 2",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
//   test("test case 3",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
// })

// describe("API testing, test group 1", ()=>{
//   test("test case 1",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
//   test("test case 2",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
//   test("test case 3",()=>{
//     act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceHolder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   describe("Inner test group",()=>{
//         act(() => {
//       render(<App />);
//     });
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")
//     expect(checkInput).toBeInTheDocument();
//   })

// })