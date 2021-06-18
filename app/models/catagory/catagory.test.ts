import { CatagoryModel } from "./catagory"

test("can be created", () => {
  const instance = CatagoryModel.create({})

  expect(instance).toBeTruthy()
})
