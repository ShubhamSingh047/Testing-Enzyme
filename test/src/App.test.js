import { render, screen, logRoles } from "@testing-library/react";
import App from "./App";

test("first react test", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i); //"i" for case insenctivity
  const title = screen.getByTitle(/ai generated img/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("for react input", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
});

// test("testing btn", () => {
//   render(<App />);
//   const btnTest = screen.getByRole("button", {
//     name: "test done",
//     exact: false,
//   });
//   expect(btnTest).toBeInTheDocument();
// });
