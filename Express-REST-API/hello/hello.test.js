import { test, expect } from "vitest";
import hello from "./hello";

// test("hello", () => {
//   // Given
//   const param = "World";
//   // When
//   const result = hello(param);
//   // Then
//   expect(result).toBe("Hello, World!");
// });

test("hello", () => {
  expect(hello("World")).toBe("Hello, World!");
});
