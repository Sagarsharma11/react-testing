import { render, screen } from "@testing-library/react";
import App from "./App";

test("test first react app", ()=>{
  render(<App/>);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle(/AI generated image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})