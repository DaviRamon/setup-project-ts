import Person from "@/index";

it("should say my name", () => {
  const person = new Person();
  expect(person.saymyName()).toBe("Heisemberg!!");
});
