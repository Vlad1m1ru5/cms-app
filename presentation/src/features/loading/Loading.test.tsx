import { render } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";

test("renders learn react link", () => {
  const { getByText } = render(<Loading />);

  expect(getByText(/loading/i)).toBeInTheDocument();
});
