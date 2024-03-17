import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
});

// test(description,actual test/function)
