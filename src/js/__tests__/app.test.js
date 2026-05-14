import {  } from "../app.js";

test("существующая ошибка", () => {
  const repo = new ErrorRepository();
  const result = repo.translate(404);
  expect(result).toBe("Not found");
});