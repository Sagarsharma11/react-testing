import sum from "./sum";

test("testing fro sum function", () => {
  let a = 10;
  let b = 20;
  let c = 30;
  expect(sum(a,b)).toBe(c);
});


test("testing fro sum function 2", () => {
    let a = 100;
    let b = 200;
    let c = 300;
    expect(sum(a,b)).toBe(c);
  });
  