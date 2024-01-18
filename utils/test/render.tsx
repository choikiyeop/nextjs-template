import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";

export default async function getUserEventFromComponent(
  component: ReactElement
) {
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
}