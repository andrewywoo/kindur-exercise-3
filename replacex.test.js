const replacex = require("./replacex");

test("Run replacex with no argument", () => {
  expect(replacex()).toBe("Invalid Argument");
});

test('Run replacex with argument "10XC01"', () => {
  expect(replacex("10XC01")).toBe("Invalid Argument");
});

test('Runs replacex with argument "X"', () => {
  expect(replacex("X")).toEqual(expect.arrayContaining(["0", "1"]));
});

test('Runs replacex with argument "10X10X0"', () => {
  expect(replacex("10X10X0")).toEqual(
    expect.arrayContaining(["1001000", "1001010", "1011000", "1011010"])
  );
});

test('Runs replacex with large argument "1X0X1X0X1X0X0X1X010X01X01X01X01X01X0X"', () => {
  expect(replacex("1X0X1X0X1X0X0X1X010X01X01X01X01X01X0X")).toHaveLength(32768);
});
