import { add } from "./math";

test("add numbers", () => {
  expect(add(2, 3)).toBe(5);
});
test("return username",() => {
  expect(getUserName({name:"John"})).toBe("John");
  expert(getUserName(null)).toBe("Guest");
});