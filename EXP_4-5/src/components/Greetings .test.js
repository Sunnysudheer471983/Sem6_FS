import { render  } from "@testing-library/react";
import Greetings from "./Greetings";

test("Matches Snapshot", () => {
    const { container } = render(<Greetings name ="John"/>);
    expect(container).toMatchSnapshot();
})