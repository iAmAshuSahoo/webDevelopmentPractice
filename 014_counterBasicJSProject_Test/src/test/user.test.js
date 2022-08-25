import axios from "axios";
import User from "./user";

jest.mock("axios");

test("should fetch user", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});

const myMockFn = jest
  .fn(() => "default")
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
